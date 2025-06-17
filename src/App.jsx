import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Service from './Service.jsx';
import Spotlight from './Spotlight.jsx'; 
import Gallery from './Gallery.jsx';
import Price from './Pricing.jsx';
import Login from './Login.jsx';
import './index.css';

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("/path/to/your/image.jpg")', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Header />
      <Home />
      <Spotlight />
      <Service />
      <Gallery />
      <Price />
    </div>
  );
}