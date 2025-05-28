import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import NewArrivals from './pages/NewArrivals';
import Deals from './pages/Deals';
import Brands from './pages/Brands';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 