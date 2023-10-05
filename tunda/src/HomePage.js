import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function HomePage() {
  return (
    <div>
      <div className="header">
        <h2 className="page-name">TROPICAL TUNDA</h2>
        <div className="button-container">
          <Link to="/shop" className="button">
            <span className="button-text">Shop Now</span>
          </Link>
        </div>
      </div>
      <div className="text-container">
        <p>Sign Up with email to receive updates</p>
        <Link to="/signup" className="subscribe-button">
          <span className="subscribe-text">Subscribe</span>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
