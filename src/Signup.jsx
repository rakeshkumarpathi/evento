import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import 'boxicons/css/boxicons.min.css';

const Signup = ({ onSwitchToLogin, toggleSignup }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      setMessage(response.data.message);
      setFormData({ username: '', email: '', password: '' });
      if (response.data.message === 'Signup successful') {
        setTimeout(() => {
          toggleSignup();
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMessage(error.response.data.message);
        setTimeout(() => onSwitchToLogin(), 2000);
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {message && <p className="message">{message}</p>}
        <div className="input-box">
          <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
          <i className="bx bxs-envelope"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <button type="submit" className="btn">Sign Up</button>
        <div className="register-link">
          <p>Already have an account? <button onClick={onSwitchToLogin} className="switch-btn">Login</button></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;