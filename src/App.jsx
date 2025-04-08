import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WebService from './pages/services/Web';
import MobileService from './pages/services/Mobile';
import UIUXService from './pages/services/UIUX';
import BackendService from './pages/services/Backend';

function App() {
  const [user, setUser] = useState(null);

  // Lấy user từ localStorage khi load lần đầu
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSetUser = (u) => {
    setUser(u);
    localStorage.setItem("currentUser", JSON.stringify(u));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={handleSetUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
          <Route path="/service/web" element={<WebService />} />
          <Route path="/service/mobile" element={<MobileService />} />
          <Route path="/service/uiux" element={<UIUXService />} />
          <Route path="/service/backend" element={<BackendService />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
