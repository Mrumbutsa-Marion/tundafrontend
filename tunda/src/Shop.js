import React, { useState, useEffect } from 'react';

function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://tundatropical-flask.onrender.com/fruits') // Updated API URL
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

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
            <button onClick={() => addToCart(product)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
