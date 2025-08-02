import Product from '../models/productModel.js';

// @desc    Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // fetch from DB
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Add a new product
export const addProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;

    const product = new Product({ name, price, category });
    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: 'Add product failed', error });
  }
};
