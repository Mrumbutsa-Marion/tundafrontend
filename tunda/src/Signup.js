import React, { useState } from 'react';
import './index.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateName = (name) => {
    return /^[a-zA-Z\s]+$/.test(name);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSignup = () => {
    if (validateName(name) && validateEmail(email) && validatePassword(password)) {
      alert('You have successfully subscribed!');
      window.location.href = '/';
    } else {
      let errorMessage = '';

      if (!validateName(name)) {
        errorMessage += 'Please enter a valid name.\n';
      }

      if (!validateEmail(email)) {
        errorMessage += 'Please enter a valid email address.\n';
      }

      if (!validatePassword(password)) {
        errorMessage += 'Password should be at least 6 characters long.\n';
      }

      alert(errorMessage.trim());
    }
  };

  return (
    <div className="signup-container">
      <h2>Join Us</h2>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
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

      {/* Back Button */}
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
}

export default Signup;
