const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected ✅"))
.catch((err) => console.error("MongoDB error ❌", err));

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('💅 NIRAA Backend is Live!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});
