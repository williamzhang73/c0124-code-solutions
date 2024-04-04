import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `select * from "films" 
        order by "replacementCost" desc 
        limit 2;`;
    const result = await db.query(sql);
    const rows = result.rows;
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (filmId === undefined) throw new ClientError(400, 'filmId is required.');
    if (!Number.isInteger(filmId))
      throw new ClientError(400, 'filmId should be Integer.');
    const sql = `select * from "films" where "filmId"=$1`;
    const result = await db.query(sql, [filmId]);
    const [row] = result.rows;
    if (!row) throw new ClientError(400, 'filmId not exist.');
    res.json(row);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
