import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RegisterComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setrole] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('https://bankserver11.onrender.com/register', {
        email,
        password,
        userType:"customer", // or 'banker' based on your logic
        role  // or 'banker' based on your logic
      });
      Swal.fire('Success', 'User registered successfully', 'success');
      navigate('/');
    } catch (error) {
      console.error('Error registering user:', error);
      Swal.fire('Error', 'Failed to register user', 'error');
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
      <div className="input-field">
        <input
          type="text"
          placeholder="role"
          value={role}
          onChange={(e) => setrole(e.target.value)}
        />
      </div>
      <div className="submit-button">
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default RegisterComponent;
