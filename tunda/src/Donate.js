import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './index.css';

// Import your donate image
import donateImage from './melon.jpg'; // Replace with your actual image file

function Donate() {
  const { fruitId } = useParams();
  const [donatedItems, setDonatedItems] = useState([]);

  useEffect(() => {
    // Fetch product data using fruitId and add it to the 'donatedItems' state
    // Example fetch code:
    fetch(`https://tundatropical-flask.onrender.com/fruits/${fruitId}`)
      .then(response => response.json())
      .then(data => {
        // Add the fetched product to the list of donated items
        setDonatedItems(prevDonatedItems => [...prevDonatedItems, data]);
      })
      .catch(error => console.error('Error fetching product data:', error));
  }, [fruitId]);

  return (
    <div className="don">
      <h2>Donate</h2>
      <img src={donateImage} alt="Donate Now" className="donate-image" />
      <p className="tagline">Harvesting Hope, One Fruit at a Time</p>
      <div className="buttons">
        <Link to="/shop" className="donateButton">
          Donate Fruits
        </Link>
        <Link to="/donation-page" className="donateButton">
          Donate Money
        </Link>
      </div>
      <div className="donated-items">
        {donatedItems.map((product, index) => (
          <div className="product-details" key={index}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            {/* Add more product details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Donate;
