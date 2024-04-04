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
app.use(express.json());

// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});
app.post('/api/actors', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;
    if (firstName === undefined)
      throw new ClientError(400, 'firstName is required');
    if (lastName === undefined)
      throw new ClientError(400, 'lastName is required');
    const params = [firstName as string, lastName as string];
    const sql = `insert into "actors" ("firstName", "lastName") 
    values($1, $2) returning *; `;
    const result = await db.query(sql, params);
    const [rows] = result.rows;
    res.send(201).json(rows);
  } catch (error) {
    next(error);
  }
});

app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    const { firstName, lastName } = req.body;
    if (firstName === undefined)
      throw new ClientError(400, 'firstName is required');
    if (lastName === undefined)
      throw new ClientError(400, 'lastName is required');
    if (actorId === undefined)
      throw new ClientError(400, 'actorId is required');
    const params = [firstName as string, lastName as string, actorId];
    const sql = `update "actors" 
       set "firstName"=$1, "lastName"=$2 
       where "actorId"=$3 
       returning *`;
    const result = await db.query(sql, params);
    const [updatedObject] = result.rows;
    if (!updatedObject) throw new ClientError(404, 'actorId does not exist.');
    res.status(200).json(updatedObject);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    console.log('actorID: ', actorId);
    if (actorId === undefined)
      throw new ClientError(400, 'actorId is required');
    const sql = `delete from "actors" 
    where "actorId"=$1 
    returning *`;
    const result = await db.query(sql, [actorId]);
    const [deleted] = result.rows;
    if (!deleted) throw new ClientError(404, 'actorId not exist.');
    res.status(204).json(deleted);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
