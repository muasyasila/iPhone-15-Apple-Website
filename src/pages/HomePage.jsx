// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import CardCarousel from '../components/CardCarousel';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Highlights />
      <CardCarousel />
    </div>
  );
};

export default HomePage;
