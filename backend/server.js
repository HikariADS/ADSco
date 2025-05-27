// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api/products', productRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Có lỗi xảy ra từ phía server!' });
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI.toLowerCase())
  .then(() => {
    console.log('✅ MongoDB connected');
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
