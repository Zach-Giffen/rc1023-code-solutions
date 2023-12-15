import express from 'express';
// import { appendFile } from 'fs'

const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('Hello, World');
});

app.listen(8010, () => {
  console.log('server running on port 8010');
});
