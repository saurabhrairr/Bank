import React, { useState } from 'react';
import axios from 'axios';

const DepositComponent = () => {
  const [amount, setAmount] = useState('');

  const handleDeposit = async () => {
    try {
      await axios.post('http://localhost:8000/deposit', { amount });
      console.log('Deposit successful');
    } catch (error) {
      console.error('Error depositing:', error);
    }
  };

  return (
    <div>
      <h2>Deposit</h2>
      <div className="input-field">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="submit-button">
        <button onClick={handleDeposit}>Deposit</button>
      </div>
    </div>
  );
};

export default DepositComponent;
