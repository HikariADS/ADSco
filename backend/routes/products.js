const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Get Products Error:', error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm' });
  }
});

// Create new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error('Create Product Error:', error);
    res.status(500).json({ message: 'Lỗi khi tạo sản phẩm mới' });
  }
});

// Update product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }
    res.json(product);
  } catch (error) {
    console.error('Update Product Error:', error);
    res.status(500).json({ message: 'Lỗi khi cập nhật sản phẩm' });
  }
});

// Delete product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Delete Product Error:', error);
    res.status(500).json({ message: 'Lỗi khi xóa sản phẩm' });
  }
});

module.exports = router; 