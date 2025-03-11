const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware');
  next();
});

app.use((req, res, next) => {
  console.log('In another middleware!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`app listen on port: ${port}`);
});
