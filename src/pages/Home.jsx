import React from 'react';
import { Link } from 'react-router-dom';

// Logo Imports
import marilogLogo from '../assets/marilog.png';
import zmLogo from '../assets/zm.png';
import saharaLogo from '../assets/sahara.png';
import okalaLogo from '../assets/okala.svg'; // Handled as SVG

const Home = () => {
  const partners = [
    {
      name: "Marilog Africa",
      url: "https://a.marilogafrica.com/",
      logo: marilogLogo,
      desc: "Strategic logistics and supply chain solutions partner"
    },
    {
      name: "ZM Procurement Solutions",
      url: "https://zmprocurementsolutions.com/",
      logo: zmLogo,
      desc: "Procurement and supply management expertise"
    },
    {
      name: "Sahara Consult",
      url: "https://consult.saharaventures.com/partner-and-client",
      logo: saharaLogo,
      desc: "A Management Consulting Firm"
    },
    {
      name: "Okala",
      url: "https://www.okala.io/",
      logo: okalaLogo,
      desc: "A Global Partner for Science-Driven Nature Insights"
    }
  ];

  return (
    <div>
      <section className="hp-hero">
        <div className="master-container" style={{ maxWidth: '1100px' }}>
          <h1>Empowering Organisations Through <span className="hp-gold">Systems Intelligence</span></h1>
          <p>We help organisations make better decisions and deliver practical, evidence-based improvements across operations, risk, and performance</p>
          <div className="hp-btn-wrap">
            <Link to="/services" className="btn-gold">Explore Our Services →</Link>
            <Link to="/contact" className="btn-outline">Get In Touch</Link>
          </div>
        </div>
      </section>
      {/* STRATEGIC PARTNERS SECTION */}
      {/* <section className="hp-pt-section">
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
    </section> */}
      <section className="hp-pt-section">
        <div className="master-container">
        <div className="nb-container">
          <h2 className="hp-pt-title">Our Strategic Partners</h2>

          <div className="hp-pt-grid">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-art"
                style={{ textAlign: 'left' }}
              >
                {/* Logo Zone */}
                <div className="hp-pt-logo-container">
                  <img src={partner.logo} alt={`${partner.name} logo`} />
                </div>

                {/* Title & Arrow */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>{partner.name}</h3>
                  <span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>↗</span>
                </div>

                {/* Verbatim Description */}
                <p style={{ color: '#aaa', fontSize: '1rem', margin: 0, lineHeight: '1.5' }}>
                  {partner.desc}
                </p>
              </a>
            ))}
          </div>
        </div></div>
      </section>
    </div>
  );
};
export default Home;
