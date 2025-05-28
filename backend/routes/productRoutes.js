const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
      .populate('category')
      .populate('brand')
      .lean();
    
    // Transform data before sending
    const transformedProducts = products.map(product => ({
      ...product,
      price: Number(product.price)
    }));
    
    res.json(transformedProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm' });
  }
});

// Get single product by ID
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log('Fetching product with ID:', id);
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log('Invalid ObjectId format');
      return res.status(400).json({ message: 'ID sản phẩm không hợp lệ' });
    }
    
    const product = await Product.findById(id)
      .populate('category')
      .populate('brand')
      .lean();
    
    if (product) {
      // Transform data before sending
      const transformedProduct = {
        ...product,
        price: Number(product.price)
      };
      
      console.log('Found product:', transformedProduct);
      res.json(transformedProduct);
    } else {
      console.log('Product not found');
      res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Lỗi khi lấy thông tin sản phẩm' });
  }
});

module.exports = router; 