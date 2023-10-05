import React from 'react';
import './index.css'; // Add this line to import the CSS file

function Donate() {
  return (
    <div className="don">
      <h2>Donate</h2>
      <p className="tagline">Harvesting Hope, One Fruit at a Time</p>
      <div className="buttons">
        <button className="donateButton">Donate Fruits</button>
        <button className="donateButton">Donate Money</button>
      </div>
    </div>
  );
}

export default Donate;
