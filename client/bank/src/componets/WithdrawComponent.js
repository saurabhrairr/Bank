import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WithdrawComponent = () => {
  const [amount, setAmount] = useState('');
  const navigator = useNavigate();

  const handleWithdraw = async () => {
    try {
      await axios.post('http://localhost:8000/withdraw', { amount });
      console.log('Withdrawal successful');
      navigator("/DepositComponent");
    } catch (error) {
      console.error('Error withdrawing:', error);
    }
  };

  return (
    <div>
      <h2>Withdraw</h2>
      <div className="input-field">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="submit-button">
        <button onClick={handleWithdraw}>Withdraw</button>
      </div>
    </div>
  );
};

export default WithdrawComponent;
