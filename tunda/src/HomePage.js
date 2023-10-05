// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function HomePage() {
  return (
    <div>
      <div className="container">
        <h2 className="page-name">TROPICAL TUNDA</h2>
        <div className="button-container">
          <Link to="/shop" className="button">
            <span className="button-text">Shop Now</span>
          </Link>
          <Link to="/donate" className="button">
            <span className="button-text">Donate</span>
          </Link>
        </div>
      </div>
      <div className="text-container">
        <p>Random Text</p>
        <Link to="/signup" className="subscribe-button">
          <span className="subscribe-text">Subscribe</span>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
