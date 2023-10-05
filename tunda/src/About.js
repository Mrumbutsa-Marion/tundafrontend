import React from 'react';
import './index.css'; // Import the CSS file

function About() {
  return (
    <div className="container">
      <div className="about-section">
        <h2>OUR STORY</h2>
        <p>Welcome to Tropical Tunda - Delivering Freshness, Sharing Kindness</p>
      </div>
      <div className="about-section">
        <h3>Our Mission</h3>
        <p>
          We are on a mission to spread health, happiness, and hope through the
          goodness of fresh fruits. Our goal is to make it easy for you to enjoy
          nature's bounty while also giving back to the community.
        </p>
      </div>
      <div className="about-section">
        <h3>Why Choose Tropical Tunda?</h3>
        <ul>
          <li>
            <strong>Freshness Guaranteed:</strong> We source the finest fruits
            from local growers to ensure that every bite is bursting with flavor
            and nutrition.
          </li>
          {/* Add other list items here */}
        </ul>
      </div>
      <div className="about-section">
        <h3>Our Commitment to Sustainability</h3>
        <p>
          We're not just about delivering fruits; we're also passionate about
          preserving the planet. We strive to minimize our environmental footprint
          through sustainable practices, from eco-friendly packaging to supporting
          local, responsible farming.
        </p>
      </div>
    </div>
  );
}

export default About;
