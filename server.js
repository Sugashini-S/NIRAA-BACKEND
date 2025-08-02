import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DB connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected ✅"))
.catch((err) => console.error("MongoDB error ❌", err));

// API routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('💅 NIRAA Backend is Live!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});
