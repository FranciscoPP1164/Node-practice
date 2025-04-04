const express = require('express');
const path = require('path');

const rootDir = require('./../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect('/admin/add-product');
});

exports.routes = router;
exports.products = products;
