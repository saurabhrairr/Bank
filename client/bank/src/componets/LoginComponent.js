import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./login.css"

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer'); 
  
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      let loginEndpoint;
      if (userType === 'customer') {
        loginEndpoint = 'http://localhost:8000/login/customer';
      } else if (userType === 'banker') {
        loginEndpoint = 'http://localhost:8000/login/banker';
      }
      const response = await axios.post(loginEndpoint, {
        email,
        password,
      });
      console.log('Login successful');
      console.log('Access Token:', response.data.accessToken);
      navigate("/WithdrawComponent")
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            value="customer"
            checked={userType === 'customer'}
            onChange={() => setUserType('customer')}
          />
          Customer
        </label>
        <label>
          <input
            type="radio"
            value="banker"
            checked={userType === 'banker'}
            onChange={() => setUserType('banker')}
          />
          Banker
        </label>
      </div>
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
      <div className="input-field">
        <input
          type="text"
          placeholder="text"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        />
      </div>
      <div className="submit-button">
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginComponent;
