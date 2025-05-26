import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Topbar */}
      <div className="topbar-sweelee py-1 px-2 d-flex justify-content-between align-items-center">
        <div className="topbar-left d-flex gap-3">
          <span className="topbar-hotline">Nhận Đôi Điểm Rewards Toàn Hệ Thống | Roland & Boss Đã Xuất Hiện</span>
        </div>
        <div className="topbar-right d-flex gap-3">
          <Link to="/contact" className="topbar-link">Liên Hệ</Link>
          <Link to="/store-locator" className="topbar-link">Tìm Cửa Hàng</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar-sweelee navbar-expand-lg px-2">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Menu button mobile */}
          <button className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Logo center */}
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} alt="Swee Lee" height="40" />
          </Link>

          {/* Search bar */}
          <form className="navbar-search mx-3 flex-grow-1 d-none d-lg-block">
            <input className="form-control" type="search" placeholder="Tìm kiếm sản phẩm..." />
          </form>

          {/* Icon */}
          <div className="navbar-icons d-flex gap-3 align-items-center">
            <Link to="/wishlist" className="icon-link"><i className="bi bi-heart"></i></Link>
            <Link to="/cart" className="icon-link"><i className="bi bi-cart"></i></Link>
            <Link to="/login" className="btn btn-outline-dark btn-sm">Đăng nhập</Link>
          </div>
        </div>

        {/* Menu dưới logo (menu đa cấp) */}
        <div className="navbar-menu-bar d-none d-lg-flex justify-content-center gap-4 py-2">
          <Link to="/new-arrivals" className="navbar-menu-link">Có Gì Mới</Link>
          <Link to="/deals" className="navbar-menu-link">Deals</Link>
          <Link to="/brands" className="navbar-menu-link">Thương Hiệu</Link>
          <Link to="/products" className="navbar-menu-link">Sản Phẩm</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
