// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Model from '../components/Model';
import CardCarousel from '../components/CardCarousel';
import Features from '../components/Features';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Highlights />
      <Model />
      <CardCarousel />
      <Features />
    </div>
  );
};

export default HomePage;
