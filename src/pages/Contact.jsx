import React from 'react';
const Contact = () => (
  <div style={{ background: 'var(--black)', minHeight: '100vh', paddingBottom: '100px' }}>
    <div className="master-container">
      <div className="header-spacing"><h1>Contact Us</h1></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid #222', borderRadius: '15px', overflow: 'hidden' }}>
        <div style={{ padding: '60px', background: '#0a0a0a' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div><label style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>Name</label><input type="text" style={{ width: '100%', padding: '12px', background: 'black', border: '1px solid #333', color: 'white' }} /></div>
            <div><label style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>Email</label><input type="email" style={{ width: '100%', padding: '12px', background: 'black', border: '1px solid #333', color: 'white' }} /></div>
            <div><label style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>Message</label><textarea rows="5" style={{ width: '100%', padding: '12px', background: 'black', border: '1px solid #333', color: 'white' }}></textarea></div>
            <button type="submit" className="btn-solid" style={{ width: '100%', border:'none' }}>Send Message</button>
          </form>
        </div>
        <div style={{ height: '100%', minHeight: '500px' }}>
          <iframe title="map" src="https://maps.google.com/maps?q=Dar%20es%20Salaam&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}></iframe>
        </div>
      </div>
    </div>
  </div>
);
export default Contact;
