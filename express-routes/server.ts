import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), ' ', req.method, ' ', req.path);
  next();
});

app.get('/', (req, res) => {
  res.send(`path: ${req.path}, 200 OK`);
});
app.get('/notes', (req, res) => {
  res.send(`path: ${req.path}, 200 OK`);
});
app.post('/notes/123', (req, res) => {
  res.send(`path: ${req.path}, 200 OK`);
});
app.get('*', (req, res) => {
  res.send(`match all request`);
});
app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
