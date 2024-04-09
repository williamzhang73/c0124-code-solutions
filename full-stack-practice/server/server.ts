import express from 'express';
import pg from 'pg';
import 'dotenv/config';
import { errorMiddleware } from './lib/index.js';
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
console.log('process.env: ', process.env);
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

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
