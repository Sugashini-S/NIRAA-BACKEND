const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// here you get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// suga this is for add new product
router.post('/', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).json(newProduct);
});

module.exports = router;
