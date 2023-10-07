import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './NavBar';
import Home from './HomePage';
import About from './About';
import Shop from './Shop';
import Donate from './Donate';
import Cart from './Cart'; 
import Signup from './Signup';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/shop" 
            element={<Shop addToCart={addToCart} />} 
          />
          <Route 
          
            path="/cart" 
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} 
          />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/:fruitId" element={<Donate />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;