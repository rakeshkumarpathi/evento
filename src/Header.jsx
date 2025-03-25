import React, { useState, useEffect } from 'react';
import Login from './Login.jsx'; // Import the Login component
import './index.css'; // Ensure styles are applied (adjust path if needed)

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for login box visibility

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    if (isLoginOpen) setIsLoginOpen(false); // Close login if menu toggles
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    if (isMenuActive) setIsMenuActive(false); // Close menu if login toggles
  };

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMenuActive(false);
        setIsLoginOpen(false); // Close login on scroll too
      }, 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo">
        <span>E</span>vento
      </a>
      <nav className={`navbar ${isMenuActive ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#spotlight-section">Spotlight</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#price">Price</a>
        <a href="#contact">Contact</a>
        <button
          onClick={toggleLogin}
          className="login-btn"
          type="button"
        >
          Login
        </button>
      </nav>
      <button 
        id="menu-bars" 
        className={`fas ${isMenuActive ? 'fa-times' : 'fa-bars'}`}
        onClick={toggleMenu}
        aria-label={isMenuActive ? 'Close menu' : 'Open menu'}
        type="button"
      />
      {/* Login box overlay */}
      {isLoginOpen && (
        <div className="login-overlay">
          <Login />
          <button
            onClick={toggleLogin}
            className="close-login-btn"
            aria-label="Close login"
            type="button"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
    </header>
  );
}