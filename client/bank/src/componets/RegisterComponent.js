import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:8000/register', {
        email,
        password,
        userType: 'customer', // or 'banker' based on your logic
        role: 'customer', // or 'banker' based on your logic
      });
      console.log('User registered successfully');
      navigate('/');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <div className="input-field">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="submit-button">
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default RegisterComponent;
