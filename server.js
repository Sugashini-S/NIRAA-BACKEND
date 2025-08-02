console.log("✅ server.js file is working...");

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const productRoutes = require('./routes/productRoutes'); // suga remember to move this up before app.listen
app.use('/api/products', productRoutes);


app.get('/', (req, res) => {
  res.send('Niraa backend is running 🌸');
});


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected ✅'))
.catch((err) => console.error('MongoDB error ❌', err));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
