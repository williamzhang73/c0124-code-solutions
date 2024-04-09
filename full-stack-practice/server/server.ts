import express from 'express';
import pg from 'pg';
import { errorMiddleware } from './lib/index.js';
const db = new pg.Pool({
  connectionString: 'postgress://dev:dev@localhost/catalogs',
  ssl: {
    rejectUnauthorized: false,
  },
});
const app = express();
app.get('/api/catalogs', async (req, res, next) => {
  try {
    const sql = `select * from "products"`;
    const result = await db.query(sql);
    const rows = result.rows;
    res.status(200).json(rows);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
