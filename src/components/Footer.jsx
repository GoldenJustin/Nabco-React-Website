import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--black)', color: 'white', padding: '60px 8% 20px', borderTop: '1px solid var(--gold)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.5fr', gap: '40px', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', fontWeight: 'bold', color: 'var(--gold)' }}>NAB & Co.</h2>
          <p style={{ color: '#ccc', marginBottom: '25px', fontSize: '0.9rem', maxWidth: '300px' }}>
            Empowering organisations through systems intelligence and evidence-based consulting solutions.
          </p>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#" style={{ color: 'var(--gold)' }} aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" style={{ color: 'var(--gold)' }} aria-label="X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
            <a href="#" style={{ color: 'var(--gold)' }} aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--gold)' }}>Quick links</h4>
          <ul style={{ listStyle: 'none', lineHeight: '2', fontSize: '0.95rem' }}>
            <li><Link to="/about" style={{ color: '#ccc', textDecoration: 'none' }}>About</Link></li>
            <li><Link to="/services" style={{ color: '#ccc', textDecoration: 'none' }}>Services</Link></li>
            <li><Link to="/team" style={{ color: '#ccc', textDecoration: 'none' }}>Team</Link></li>
            <li><Link to="/contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--gold)' }}>Get in touch</h4>
          <p style={{ color: '#ccc', marginBottom: '10px', fontSize: '0.95rem' }}>Dar es Salaam, Tanzania</p>
          <p style={{ color: 'var(--gold)', fontSize: '0.95rem' }}>info@nabco.co.tz</p>
          <p style={{ marginTop: '10px', fontWeight: 'bold', color: 'white' }}>+255 123 456 789</p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--darker-gray)', paddingTop: '20px', fontSize: '0.8rem', color: '#666', textAlign: 'center' }}>
        <p>© 2025 NAB & Co. Consulting • All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
