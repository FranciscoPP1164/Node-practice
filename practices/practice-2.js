const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('users route');
  return res.send('Hi from users!');
});

app.use('/', (req, res, next) => {
  console.log('base route');
  return res.send('Hi from base!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`app listen on port: ${port}`);
});
