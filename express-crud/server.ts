import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index';
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});
app.use(express.json());
type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number;
};
function validateGradeId(gradeId: string): void {
  if (!Number.isInteger(+gradeId)) {
    throw new ClientError(400, 'gradeId must be interger.');
  }
}
function validateGrade({ name, course, score }: Grade): void {
  if (!name) throw new ClientError(400, 'name is required');
  if (!course) throw new ClientError(400, 'course is required');
  if (!score || !Number.isInteger(+score) || !(score >= 0 && score <= 100))
    throw new ClientError(400, 'score needs to be fixed');
}

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `select * from "grades";`;
    const result = await db.query(sql);
    const data = result.rows;
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const sql = `select * from "grades" 
                 where "gradeId"=$1;`;
    const result = await db.query(sql, [gradeId]);
    const [data] = result.rows;
    if (!data) throw new ClientError(404, 'gradeId not found.');
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    validateGrade({ name, course, score });
    const sql = `insert into "grades" ("name", "course", "score") 
                 values($1, $2, $3) 
                 returning *;`;
    const result = await db.query(sql, [name, course, score]);
    const [data] = result.rows;
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const { name, course, score } = req.body;
    validateGrade({ name, course, score });
    const sql = `update "grades" 
                 set "name"=$1, "course"=$2, "score"=$3
                 where "gradeId"=$4
                 returning *;`;
    const result = await db.query(sql, [name, course, score, gradeId]);
    const [data] = result.rows;
    if (!data) throw new ClientError(404, 'gradeId not found');
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const sql = `delete from "grades" where "gradeId"=$1 returning *`;
    const result = await db.query(sql, [gradeId]);
    const [data] = result.rows;
    if (!data) throw new ClientError(404, 'gradeId not found');
    res.status(204).json();
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);
app.listen(8080, () => {
  console.log('The express server is listening to port 8080');
});
