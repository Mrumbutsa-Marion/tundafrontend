import React, { useState } from 'react';
import './index.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic here (e.g., send data to backend)
    alert('You have successfully subscribed!');
    // Redirect to the homepage (assuming it's at '/')
    window.location.href = '/';
  };

  return (
    <div className="signup-container"> {/* Apply the signup-container class */}
      <h2>Join Us </h2>
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
