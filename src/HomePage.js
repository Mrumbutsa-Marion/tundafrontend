import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function HomePage() {
  return (
    <div>
      <header>
        <div class="header-content">
          <h1>TROPICAL TUNDA</h1>
        </div>
      </header>
      <div className="header">
        <h2 className="page-name">FRESH, JUICY & TASTY TUNDA</h2>
        <div className="button-container">
          <button>
            <Link to="/shop" className="button">
              <span className="button-text">Shop Now</span>
            </Link>
          </button>
        </div>
      </div>
      <div className="text-container">
        <p>Sign Up with email to receive updates</p>
        <button>
          <Link to="/signup" >
            <span className="subscribe-text">Subscribe</span>
          </Link>
        </button>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 Tropical Tunda</p>
          <p>Contact: info@tropicaltunda.com</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
