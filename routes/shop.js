const express = require('express');

const router = express.Router();

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from express!</h1>');
});

router.module.exports = router;
