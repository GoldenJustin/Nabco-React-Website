import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ background: 'var(--black)', color: 'white' }}>
      <div className="page-header-spacing">
         <h1>About</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridTemplateRows: '250px 250px', gap: '20px', padding: '0 8%', marginBottom: '80px' }}>
        <Link to="/about/what-we-do" className="image-container" style={{ gridRow: 'span 2' }}>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" />
          <div className="image-overlay-text">What we do</div>
        </Link>
        <Link to="/about/mission-vision" className="image-container">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" />
          <div className="image-overlay-text">Mission, Vision & Values</div>
        </Link>
        <Link to="/about/approach" className="image-container">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" />
          <div className="image-overlay-text">Our Approach</div>
        </Link>
      </div>

      <div style={{ padding: '0 8% 100px', maxWidth: '1200px' }}>
        <p style={{ fontSize: '1.4rem', color: 'white', marginBottom: '30px', lineHeight: '1.6' }}>
          NAB & Co. Consulting is a performance-driven management consulting firm based in Dar es Salaam, Tanzania.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--light-gray)' }}>
          We support organisations in improving operational effectiveness, strengthening internal systems, enhancing customer experience, and making better decisions through data-led analysis and practical delivery.
        </p>
      </div>
    </div>
  );
};
export default About;
