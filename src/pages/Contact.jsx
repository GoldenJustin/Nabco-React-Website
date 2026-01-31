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
        <div style={{ padding: '60px', background: '#050505', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ color: 'white', marginBottom: '30px', fontSize: '1.8rem' }}>Office Information</h3>
          
          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: 'var(--gold)', marginBottom: '5px' }}>Location</h4>
            <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Dar es Salaam, Tanzania</p>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: 'var(--gold)', marginBottom: '5px' }}>Email Address</h4>
            <p style={{ color: '#ccc', fontSize: '1.1rem' }}>info@nabco.co.tz</p>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: 'var(--gold)', marginBottom: '5px' }}>Phone Line</h4>
            <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>+255 798 310 776</p>
          </div>

          <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #222' }}>
            <h4 style={{ color: 'var(--gold)', marginBottom: '5px' }}>Business Hours</h4>
            <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Monday - Friday: 8:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Contact;
