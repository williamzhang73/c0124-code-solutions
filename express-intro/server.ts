import express from 'express';
const app = express();
const PORT = 8080;
app.use((req, res, next) => {
  console.log('Hello, World!');
  console.log('This Date is ', new Date());
  next();
});
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
