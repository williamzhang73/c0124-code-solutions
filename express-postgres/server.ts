import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';
const db = new pg.Pool({
  connectionString: 'postgress://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});
const app = express();
app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `select "filmId", "title" from "films" order by "replacementCost" desc`;
    const result = await db.query(sql);
    const rows = result.rows;
    res.send(rows);
  } catch (error) {
    next(error);
  }
});
app.get('/api/film', async (req, res, next) => {
  try {
    /*     console.log('aaaaaaaaaaaaaaa'); */
    const { filmId } = req.query;
    if (filmId === undefined) throw new ClientError(400, 'filmId not exist');
    const params = [filmId];
    const sql = `select * from "films" where "filmId"=$1;`;
    const result = await db.query(sql, params);
    const row = result.rows[0];
    res.json(row);
  } catch (error) {
    next(error);
  }
});
app.put('/api/film', async (req, rep, next) => {
  try {
    const { filmId, title } = req.query;
    if (filmId === undefined) throw new ClientError(400, 'filmId not exist');
    if (title === undefined) throw new ClientError(400, 'title not exist');
    const params = [filmId, title];
    const sql = `update "films" set "title"=$2 where "filmId"=$1 returning *;`;
    const result = await db.query(sql, params);
    const rows = result.rows;
    rep.json(rows);
  } catch (error) {
    next(error);
  }
});
app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
