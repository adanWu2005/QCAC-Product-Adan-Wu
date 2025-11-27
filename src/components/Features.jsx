import React from 'react';

export default function Features() {
  const features = [
    {
      title: 'Wireless & Wired Connectivity',
      description: 'Connect up to 3 devices wirelessly via Bluetooth 5.1 or use USB Type-C wired connection for low-latency gaming.'
    },
    {
      title: 'QMK/VIA Programmability',
      description: 'Customize key mappings, macros, and layers with open-source QMK firmware and the intuitive VIA web app.'
    },
    {
      title: 'Hot-Swappable Switches',
      description: 'Easily swap between 3-pin and 5-pin MX-style mechanical switches without soldering. Try different switch types anytime.'
    },
    {
      title: 'Enhanced Typing Experience',
      description: 'Features sound-absorbing foam, thick silicone dampening pad, and steel plate for responsive feedback and quieter typing.'
    },
    {
      title: 'Premium Build Quality',
      description: 'Robust aluminum frame construction with double-shot PBT keycaps for durability and long-lasting performance.'
    },
    {
      title: 'Multi-Platform Compatibility',
      description: 'Mac layout with full Windows and Linux compatibility. Switch between devices seamlessly.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
