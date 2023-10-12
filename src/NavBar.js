import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Updated import statement for index.css

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="navbar-item">
          <Link to="/donate">Donate</Link>
        </li>
        <li className="navbar-item">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
      );
}
  /* background-color: #28a745; */

export default Navbar;