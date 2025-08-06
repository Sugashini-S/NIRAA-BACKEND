const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Product = require('./models/product'); // ✅ Import model

dotenv.config(); // Load .env file

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('DB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Sample home route
app.get('/', (req, res) => {
  res.send('Niraa backend is running');
});

// ✅ Test route to create a product
app.get('/testproduct', async (req, res) => {
  try {
    const newProduct = new Product({
      name: 'Bullet Kajal',
      price: 199,
      brand: 'Niraa',
    });

    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving product');
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
