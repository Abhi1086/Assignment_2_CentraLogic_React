// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addTransaction = () => {
    if (description.trim() !== '' && amount !== 0) {
      const newTransaction = {
        id: Math.random().toString(36).substr(2, 9),
        description,
        amount: +amount
      };
      setTransactions([...transactions, newTransaction]);
      setDescription('');
      setAmount('');
    }
  };

  const getTotalBalance = () => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0).toFixed(2);
  };

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <div className="balance">Balance: ₹{getTotalBalance()}</div>
      <div className="transaction-form">
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addTransaction}>Add Transaction</button>
      </div>
      <div className="transaction-list">
        <h3>Transactions</h3>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id} className={transaction.amount < 0 ? 'expense' : 'income'}>
              {transaction.description} <span>₹{Math.abs(transaction.amount)}</span>
            </li>

            
          ))}
        </ul>
      </div>
      <br></br>
      <h3>--Abhishek Singh Rajput</h3>
    </div>
  );
}

export default App;
