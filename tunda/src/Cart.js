import React, { useState, useEffect } from 'react';

function Cart({ cartItems, removeFromCart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: '',
  });
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalPrice(newTotalPrice);
    setIsCartEmpty(cartItems.length === 0);
  }, [cartItems]);

  const handleOpenPaymentModal = () => {
    setShowPaymentModal(true);
  };

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleConfirmPayment = () => {
    if (formData.name && formData.address && formData.paymentMethod) {
      alert('Payment confirmed!');
      setShowPaymentModal(false);
      removeFromCart();
      setIsCartEmpty(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {isCartEmpty ? (
        <p>Cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      <div className="total-price">
        <p>Total Price: ${totalPrice}</p>
        <button onClick={handleOpenPaymentModal}>Checkout</button>
      </div>

      {showPaymentModal && (
        <div className="payment-modal">
          <div className="modal-content">
            <span className="close" onClick={handleClosePaymentModal}>
              &times;
            </span>
            <h3>Payment Details</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <label>
              Preferred Payment Method:
              <input
                type="checkbox"
                name="paymentMethod"
                value="cash"
                onChange={handleInputChange}
              />
              Cash
              <input
                type="checkbox"
                name="paymentMethod"
                value="mobileMoney"
                onChange={handleInputChange}
              />
              Mobile Money
            </label>
            <button onClick={handleConfirmPayment}>Confirm Payment</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
