import React from 'react';
import './index.css'; // Import the CSS file

function About() {
  return (
    <div className="container">
      <div className="about-section">
        <h2 className="about-title">OUR STORY</h2>
        <p className="about-text">
          Welcome to Tropical Tunda - Delivering Freshness, Sharing Kindness
        </p>
      </div>
      <div className="about-section">
        <h3 className="about-subtitle">Our Mission</h3>
        <p className="about-text">
          We are on a mission to spread health, happiness, and hope through the
          goodness of fresh fruits. Our goal is to make it easy for you to enjoy
          nature's bounty while also giving back to the community.
        </p>
      </div>
      <div className="about-section">
        <h3 className="about-subtitle">Why Choose Tropical Tunda?</h3>
        <ul className="about-list">
          <li className="about-list-item">
            <span>Freshness Guaranteed:</span> We source the finest fruits
            from local growers to ensure that every bite is bursting with flavor
            and nutrition.
          </li>
          <li className="about-list-item">
            <span>Variety of Options:</span> Our extensive range of fruits
            caters to all tastes and preferences, from exotic fruits to local favorites.
          </li>
          <li className="about-list-item">
            <span>Community Support:</span> By choosing Tropical Tunda, you
            are contributing to community development projects and helping local
            farmers thrive.
          </li>
          <li className="about-list-item">
            <span>Experience the Freshness:</span> Taste the difference with
            our hand-picked, farm-fresh fruits delivered right to your doorstep.
          </li>
          <li className="about-list-item">
            <span>Join the Tropical Tunda Family:</span> Become a part of our
            growing community of fruit enthusiasts who believe in a healthier and
            happier lifestyle.
          </li>
        </ul>
      </div>
      <div className="about-section">
        <h3 className="about-subtitle">Our Commitment to Sustainability</h3>
        <p className="about-text">
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
