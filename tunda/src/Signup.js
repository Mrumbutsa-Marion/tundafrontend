import React, { useState } from 'react';
import './index.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateTelephone = (telephone) => {
    // Basic telephone number validation regex (10 digits)
    return /^\d{10}$/.test(telephone);
  };

  const validatePassword = (password) => {
    // Password should be at least 6 characters long
    return password.length >= 6;
  };

  const handleSignup = () => {
    if (validateEmail(email) && validateTelephone(telephone) && validatePassword(password)) {
      alert('You have successfully subscribed!');
      // Redirect to the homepage (assuming it's at '/')
      window.location.href = '/';
    } else {
      alert('Please fill out the form correctly.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Join Us</h2>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div>
        <label>Telephone:</label>
        <input 
          type="tel" 
          value={telephone} 
          onChange={(e) => setTelephone(e.target.value)} 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button onClick={handleSignup}>Subscribe</button>
    </div>
  );
}

export default Signup;
