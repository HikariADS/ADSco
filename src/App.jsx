import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import CategoryPage from './pages/CategoryPage';
import Checkout from './pages/Checkout';
import OrderHistory from './pages/OrderHistory';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  // Load user and cart from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    const storedCart = localStorage.getItem("cart");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleSetUser = (u) => {
    // Kiểm tra nếu là tài khoản admin
    if (u.email === 'admin@example.com' && u.password === '123') {
      u.role = 'admin';
    } else {
      u.role = 'user';
    }
    setUser(u);
    localStorage.setItem("currentUser", JSON.stringify(u));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: Math.max(0, quantity) };
      }
      return item;
    }).filter(item => item.quantity > 0);
    
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Router>
      <div>
        <Navbar user={user} onLogout={handleLogout} cartCount={cart.length} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/login" element={<Login setUser={handleSetUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/cart" element={
              <Cart 
                cart={cart} 
                onRemoveFromCart={handleRemoveFromCart}
                onUpdateQuantity={handleUpdateQuantity}
              />
            } />
            <Route path="/wishlist" element={user ? <Wishlist user={user} /> : <Navigate to="/login" />} />
            <Route path="/checkout" element={user ? <Checkout cart={cart} /> : <Navigate to="/login" />} />
            <Route path="/orders" element={user ? <OrderHistory user={user} /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
