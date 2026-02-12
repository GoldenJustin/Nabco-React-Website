import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const loc = useLocation();
  
  const activeStyle = (path) => ({ 
    color: loc.pathname === path ? 'var(--gold)' : 'white'
  });

  return (
    <nav className="nav-master">
      <div className="nav-container">
        
        <Link to="/" onClick={() => setIsOpen(false)} style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.5rem', zIndex: 1001 }}>
          NAB & Co.
        </Link>

        {/* Hamburger Button - Only visible on Mobile */}
        <button className="nb-hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? 'top' : ''}`}></div>
          <div className={`bar ${isOpen ? 'mid' : ''}`}></div>
          <div className={`bar ${isOpen ? 'bot' : ''}`}></div>
        </button>

        {/* Links - Horizontal on Desktop, Vertical Slide-in on Mobile */}
        <ul className={`nav-links-container ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)} style={activeStyle('/')} className="nav-item">Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)} style={activeStyle('/about')} className="nav-item">About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)} style={activeStyle('/services')} className="nav-item">Services</Link></li>
          <li><Link to="/team" onClick={() => setIsOpen(false)} style={activeStyle('/team')} className="nav-item">Team</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)} style={activeStyle('/contact')} className="nav-item">Contact Us</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;