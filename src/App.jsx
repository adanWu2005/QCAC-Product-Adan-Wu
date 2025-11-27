import React from 'react';
import ProductOverview from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Reviews from './components/Reviews.jsx';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <ProductOverview />
      <Features />
      <Reviews />
    </div>
  );
}
