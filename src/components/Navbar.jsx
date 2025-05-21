import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">ADS DEV</Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {!user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={() => setIsOpen(false)}>Đăng nhập</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register" onClick={() => setIsOpen(false)}>Đăng ký</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light ms-2" onClick={() => { setIsOpen(false); onLogout(); }}>Đăng xuất</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
