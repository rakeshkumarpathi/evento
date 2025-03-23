import React, { useState } from 'react';

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  React.useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMenuActive(false);
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
      </nav>
      <button 
        id="menu-bars" 
        className={`fas ${isMenuActive ? 'fa-times' : 'fa-bars'}`}
        onClick={toggleMenu}
        aria-label={isMenuActive ? 'Close menu' : 'Open menu'}
        type="button"
      />
    </header>
  );
}
