import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import "./login.css";

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer'); 
  
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      let loginEndpoint;
      if (userType === 'customer') {
        loginEndpoint = 'https://bankserver11.onrender.com/login/customer';
      } else if (userType === 'banker') {
        loginEndpoint = 'https://bankserver11.onrender.com/login/banker';
      }
      const response = await axios.post(loginEndpoint, {
        email,
        password,
      });
      console.log('Login successful');
      console.log('Access Token:', response.data.accessToken);
      Swal.fire('Success', 'Login successful', 'success');
      navigate("/WithdrawComponent");
    } catch (error) {
      console.error('Login failed:', error);
      Swal.fire('Error', 'Login failed', 'error');
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
      <div className="submit-button">
        <button onClick={handleLogin}>Login</button>
      </div>
      <div className="register-link">
        <p>Don't have an account? <Link to="/RegisterComponent">Register here</Link></p>
      </div>
    </div>
  );
};

export default LoginComponent;
