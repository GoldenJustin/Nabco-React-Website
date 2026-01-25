import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  // Helper to check if a path is active
  const isActive = (path) => location.pathname === path;

  const navItemStyle = (path) => ({
    color: isActive(path) ? 'var(--gold)' : 'white',
    textDecoration: 'none',
    fontWeight: isActive(path) ? 'bold' : 'normal',
    transition: '0.3s'
  });

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.95)', borderBottom: '1px solid var(--gold)', zIndex: 1000
    }}>
      <div style={{ 
        maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem', 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
      }}>
        <Link to="/" style={{ color: 'var(--gold)', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.5rem' }}>
          NAB & Co.
        </Link>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          <li><Link to="/" style={navItemStyle('/')}>Home</Link></li>
          <li><Link to="/about" style={navItemStyle('/about')}>About</Link></li>
          <li><Link to="/services" style={navItemStyle('/services')}>Services</Link></li>
          <li><Link to="/team" style={navItemStyle('/team')}>Team</Link></li>
          <li><Link to="/contact" style={navItemStyle('/contact')}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
