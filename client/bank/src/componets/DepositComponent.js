import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const DepositComponent = () => {
  const [amount, setAmount] = useState('');

  const handleDeposit = async () => {
    try {
      await axios.post('https://bankserver11.onrender.com/deposit', { amount });
      console.log('Deposit successful');
      Swal.fire('Success', 'Deposit successful', 'success');
    } catch (error) {
      console.error('Error depositing:', error);
      Swal.fire('Error', 'Failed to deposit', 'error');
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
