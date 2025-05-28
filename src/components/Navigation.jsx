import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/">ADSco</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Sản phẩm</Link></li>
        <li><Link to="/new-arrivals">Hàng mới về</Link></li>
        <li><Link to="/deals">Khuyến mãi</Link></li>
        <li><Link to="/brands">Thương hiệu</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation; 