import React from 'react';
import { Link } from 'react-router-dom';
const About = () => (
  <div style={{ background: 'var(--black)', minHeight: '100vh', paddingBottom: '100px', minHeight: '100vh'  }}>
    <div className="master-container">
      <div className="header-spacing"><h1>About</h1></div>
      <div className="ab-grid">
        <Link to="/about/what-we-do" className="img-box" style={{ gridRow: 'span 2' }}><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" /><div className="img-label" style={{color: 'var(--gold)'}}>What we do</div></Link>
        <Link to="/about/mission-vision" className="img-box"><img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" /><div className="img-label" style={{color: 'var(--gold)'}}>Mission, Vision & Values</div></Link>
        <Link to="/about/approach" className="img-box"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" /><div className="img-label" style={{color: 'var(--gold)'}}>Our Approach</div></Link>
      </div>
      <div style={{ maxWidth: '1000px' }}>
        <p style={{ color: 'var(--gold)', fontWeight: '600', fontSize: '1.4rem', marginBottom:'30px' }}>NAB & Co. Consulting is a performance-driven management consulting firm based in Dar es Salaam, Tanzania.</p>
        <p style={{ margin: '30px 0', color: '#eee' }}>We support organisations in improving operational effectiveness, strengthening internal systems, enhancing customer experience, and making better decisions through data-led analysis and practical delivery.</p>
        <p style={{ color: '#ccc' }}>Our work focuses on understanding how people, processes, data, and structures interact in real operating environments. By examining these elements holistically, we help organisations uncover the real causes of performance challenges and implement improvements that create measurable and suitable impact.</p>
      </div>
    </div>
  </div>
);
export default About;
