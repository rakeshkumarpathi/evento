import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Service from './Service.jsx';
import Spotlight from './Spotlight.jsx'; 
import Gallery from './Gallery.jsx';
import Price from './Pricing.jsx';

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Spotlight /> 
      <Service />
      <Gallery/>
      <Price/>
    </div>
  );
}