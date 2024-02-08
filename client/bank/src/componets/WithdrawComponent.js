import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const WithdrawComponent = () => {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleWithdraw = async () => {
    try {
      await axios.post('https://bankserver11.onrender.com/withdraw', { amount });
      console.log('Withdrawal successful');
      Swal.fire('Success', 'Withdrawal successful', 'success');
      navigate("/DepositComponent");
    } catch (error) {
      console.error('Error withdrawing:', error);
      Swal.fire('Error', 'Failed to withdraw', 'error');
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
