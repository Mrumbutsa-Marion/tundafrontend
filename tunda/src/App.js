import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './NavBar';
import Home from './HomePage';
import About from './About';
import Shop from './Shop';
import Donate from './Donate';
import Cart from './Cart'; 
import Signup from './Signup';


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
