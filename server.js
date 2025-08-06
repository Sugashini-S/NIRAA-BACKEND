import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ CONNECT TO DATABASE using MONGODB_URI from .env
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error", err));

// ✅ ROUTES
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// ✅ ROOT ROUTE
app.get('/', (req, res) => {
  res.send('💅 NIRAA Backend is Live!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
