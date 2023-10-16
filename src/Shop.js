import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://tundatropical-flask.onrender.com/fruits')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

const handleAddToCart = (product) => {
  const productWithImage = { ...product, image: product.image_url };
  addToCart(productWithImage);
  alert(`${product.name} added to cart!`);
};

  return (
    <div className="shop-container">
      <h2>Shop Page</h2>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>{product.description}</p>
            <p>Super Name: {product.super_name}</p>
            <button onClick={() => handleAddToCart(product)} className="buy-now-button">
              Buy Now
            </button>
            <Link to={`/donate/${product.id}`} className="donate-button">
              Donate
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
