import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../api/db';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError('Không thể tải danh sách sản phẩm');
      setLoading(false);
    }
  }

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-list">
      <h1>Sản phẩm</h1>
      <div className="products-grid">
        {products.map(product => (
          <Link to={`/products/${product._id}`} key={product._id} className="product-card">
            <div className="product-image">
              <img src={product.images[0]} alt={product.name} />
              {product.isBStock && <span className="b-stock-badge">B-Stock</span>}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price.toLocaleString()}đ</p>
              <p className="stock-status">
                {product.inStock ? 
                  `Còn hàng (${product.stockCount})` : 
                  'Hết hàng'
                }
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList; 