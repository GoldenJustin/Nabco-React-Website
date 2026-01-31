import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => (
  <div>
    <section className="hp-hero">
      <div className="master-container" style={{maxWidth:'1100px'}}>
        <h1>Empowering Organisations Through <span className="hp-gold">Systems Intelligence</span></h1>
        <p>We help organisations make better decisions and deliver practical, evidence-based improvements across operations, risk, and performance</p>
        <div className="hp-btn-wrap">
          <Link to="/services" className="btn-gold">Explore Our Services →</Link>
          <Link to="/contact" className="btn-outline">Get In Touch</Link>
        </div>
      </div>
    </section>
        {/* STRATEGIC PARTNERS SECTION */}
    <section className="hp-pt-section">
      <div className="master-container">
        <h2 className="hp-pt-title">Our Strategic Partners</h2>
        
        <div className="hp-pt-grid">
          
          <a href="https://a.marilogafrica.com/" target="_blank" rel="noopener noreferrer" className="card-art">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h3>Marilog Africa</h3>
              <span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>↗</span>
            </div>
            <p style={{ color: '#aaa', fontSize: '1rem', margin: 0 }}>
              Strategic logistics and supply chain solutions partner
            </p>
          </a>

          <a href="https://zmprocurementsolutions.com/" target="_blank" rel="noopener noreferrer" className="card-art">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h3>ZM Procurement Solutions</h3>
              <span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>↗</span>
            </div>
            <p style={{ color: '#aaa', fontSize: '1rem', margin: 0 }}>
              Procurement and supply management expertise
            </p>
          </a>

          <a href="https://consult.saharaventures.com/partner-and-client" target="_blank" rel="noopener noreferrer" className="card-art">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h3>Sahara Consult</h3>
              <span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>↗</span>
            </div>
            <p style={{ color: '#aaa', fontSize: '1rem', margin: 0 }}>
              A Management Consulting Firm
            </p>
          </a>

          <a href="https://www.okala.io/" target="_blank" rel="noopener noreferrer" className="card-art">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h3>Okala</h3>
              <span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>↗</span>
            </div>
            <p style={{ color: '#aaa', fontSize: '1rem', margin: 0 }}>
              A Global Partner for Science-Driven Nature Insights
            </p>
          </a>

        </div>
      </div>
    </section>
  </div>
);
export default Home;
