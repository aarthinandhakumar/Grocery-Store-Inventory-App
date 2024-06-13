import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import components for inventory list and product detail
import InventoryList from './components/InventoryList';
import ProductDetail from './components/ProductDetail';
import './Style.css';// Import external stylesheet
// App component responsible for routing and rendering different views
function App() {
  return (
    <Router>
      <div>
        <header>
          <img src="/grocery.png" alt="Store Logo" />
          <h1>Mainland Groceries</h1>
        </header>
        <main>
          <h1>Inventory</h1>
          <Routes>
            <Route path="/" element={<InventoryList />} />
            <Route path="/product/:sku" element={<ProductDetail />} />
          </Routes>
        </main>
        <footer>
          <p style={{ color: 'black' }}>
            &copy; 2024 Mainland Groceries |
            <a href="/about-us" style={{ color: 'black', marginLeft: '10px', marginRight: '5px' }}>About Us</a> |
            <a href="/contact-us" style={{ color: 'black', marginLeft: '10px' }}>Contact Us</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;