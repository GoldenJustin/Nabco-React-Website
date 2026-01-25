import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="hero">
      <div style={{ maxWidth: '1000px', padding: '0 20px' }}>
        <h1>
          Empowering Organisations Through <br />
          <span className="highlight">Systems Intelligence</span>
        </h1>
        <p>
          We deliver innovative, evidence-based consulting solutions that help businesses improve operations, manage risks, and achieve measurable performance improvement.
        </p>
        <div className="cta-buttons">
          <Link to="/services" className="btn btn-primary">Explore Our Services →</Link>
          <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
