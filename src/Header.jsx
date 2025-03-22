import React from 'react'

export default function Header() {
  return (
    <div>
    <header className="header">
    <a href="#" className="logo">
      <span>E</span>vento
    </a>
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#spotlight-section">Spotlight</a>
      <a href="#gallery">Gallery</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
      <a href="#price">Price</a>
    </nav>
    <div id="menu-bars" className="fas fa-bars" />
    </header>
    </div>
  )
}
