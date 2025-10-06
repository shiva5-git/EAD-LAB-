#App.jsx
// App.jsx
import React from 'react';
import PasswordChecker from './PasswordChecker';
import './App.css'
function App() {
  return (
    <div className='body'>
      <h1 style={{ textAlign: 'center' }}>Welcome to Password Validator</h1>
      <PasswordChecker />
    </div>
  );
}

export default App;

#index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
#main.jsx
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
#passwordchecker.jsx
import React, { useState } from 'react';

function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  const checkPassword = (pwd) => {
    setValidations({
      length: pwd.length >= 8,
      uppercase: /[A-Z]/.test(pwd),
      number: /\d/.test(pwd),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    });
  };

  const handleChange = (e) => {
    const newPwd = e.target.value;
    setPassword(newPwd);
    checkPassword(newPwd);
  };

  return (
    <div className="password-checker-container">
      <style>
        {`
          .password-checker-container {
            max-width: 400px;
            margin: 40px auto;
            padding: 32px 28px 24px 28px;
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.10), 0 1.5px 4px rgba(0,0,0,0.06);
            font-family: 'Segoe UI', Arial, sans-serif;
          }
          .password-checker-container h2 {
            text-align: center;
            margin-bottom: 24px;
            color: #2d3748;
            letter-spacing: 1px;
          }
          .password-input {
            width: 100%;
            padding: 12px 14px;
            font-size: 17px;
            border: 1.5px solid #cbd5e1;
            border-radius: 8px;
            margin-bottom: 22px;
            outline: none;
            transition: border 0.2s;
            background: #f8fafc;
          }
          .password-input:focus {
            border-color: #6366f1;
            background: #fff;
          }
          .validation-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .validation-item {
            display: flex;
            align-items: center;
            font-size: 15.5px;
            margin-bottom: 10px;
            padding: 7px 0 7px 0;
            border-radius: 6px;
            transition: background 0.2s;
          }
          .validation-item.valid {
            color: #22c55e;
            background: #f0fdf4;
          }
          .validation-item.invalid {
            color: #ef4444;
            background: #fef2f2;
          }
          .validation-icon {
            margin-right: 10px;
            font-size: 18px;
          }
        `}
      </style>
      <h2>Password Checker</h2>
      <input
        className="password-input"
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
        autoFocus
      />

      <ul className="validation-list">
        <ValidationItem isValid={validations.uppercase} text="Contains an uppercase letter" />
        <ValidationItem isValid={validations.number} text="Contains a number" />
        <ValidationItem isValid={validations.length} text="Contains atleast 8 characters"/>
        <ValidationItem isValid={validations.specialChar} text="Contains a special character" />
      </ul>
    </div>
  );
}

const ValidationItem = ({ isValid, text }) => (
  <li className={`validation-item ${isValid ? 'valid' : 'invalid'}`}>
    <span className="validation-icon">{isValid ? '✔️' : '❌'}</span>
    {text}
  </li>
);

export default PasswordChecker;
