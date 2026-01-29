import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const loc = useLocation();
  const active = (path) => ({ color: loc.pathname === path ? 'var(--gold)' : 'white' });
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', left: 0, backgroundColor: 'rgba(0,0,0,0.98)', borderBottom: '1px solid #222', zIndex: 1000 }}>
      <div className="master-container" style={{ padding: '1.2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.5rem', marginLeft: '0' }}>NAB & Co.</Link>
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
          <li><Link to="/" style={active('/')}>Home</Link></li>
          <li><Link to="/about" style={active('/about')}>About</Link></li>
          <li><Link to="/services" style={active('/services')}>Services</Link></li>
          <li><Link to="/team" style={active('/team')}>Team</Link></li>
          <li><Link to="/contact" style={active('/contact')}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
