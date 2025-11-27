import React from 'react';
import keyboardImage from '../images/Keyboard.webp';

export default function ProductOverview() {
  return (
    <section className="product-overview">
      <div className="container">
        <div className="product-content">
          <div className="product-image">
            <img 
              src={keyboardImage} 
              alt="Keychron K6 Pro QMK/VIA Wireless Mechanical Keyboard"
            />
          </div>
          <div className="product-info">
            <h1>Keychron K6 Pro QMK/VIA Wireless Mechanical Keyboard</h1>
            <p className="product-description">
              A premium 65% wireless mechanical keyboard featuring hot-swappable switches, 
              QMK/VIA programmability, and a robust aluminum frame. Experience the perfect 
              blend of functionality, customization, and portability for both work and play.
            </p>
            <div className="product-highlights">
              <div className="highlight">
                <span className="highlight-label">Layout:</span>
                <span className="highlight-value">65% (68 keys)</span>
              </div>
              <div className="highlight">
                <span className="highlight-label">Connectivity:</span>
                <span className="highlight-value">Bluetooth 5.1 + USB-C</span>
              </div>
              <div className="highlight">
                <span className="highlight-label">Switches:</span>
                <span className="highlight-value">Hot-swappable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
