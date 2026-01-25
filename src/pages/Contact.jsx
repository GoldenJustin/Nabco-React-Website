import React from 'react';

const Contact = () => {
  return (
    <div style={{ background: 'var(--black)', color: 'white', minHeight: '100vh' }}>
      <div className="page-header-spacing">
        <h1>Contact Us</h1>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 8% 60px' }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '60px',
          marginBottom: '80px'
        }}>
          {/* Form */}
          <div style={{ border: '1px solid var(--gold)', padding: '40px', background: 'var(--darker-gray)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', color: 'var(--gold)', marginBottom: '8px', fontSize: '0.9rem' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '12px', background: 'var(--black)', border: '1px solid #333', color: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--gold)', marginBottom: '8px', fontSize: '0.9rem' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '12px', background: 'var(--black)', border: '1px solid #333', color: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--gold)', marginBottom: '8px', fontSize: '0.9rem' }}>Message</label>
                <textarea rows="4" style={{ width: '100%', padding: '12px', background: 'var(--black)', border: '1px solid #333', color: 'white', resize: 'none' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div>
              <h3 style={{ marginBottom: '25px', color: 'white' }}>Contact Information</h3>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '5px' }}>Office Location</h4>
                <p style={{ color: '#ccc' }}>Dar es Salaam, Tanzania</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '5px' }}>Email</h4>
                <p style={{ color: '#ccc' }}>info@nabco.co.tz</p>
              </div>
              
              {/* Social Media Links */}
              <div style={{ marginTop: '30px' }}>
                <h4 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '15px' }}>Connect With Us</h4>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <a href="#" style={{ color: 'var(--gold)' }} aria-label="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" style={{ color: 'var(--gold)' }} aria-label="X">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                  </a>
                  <a href="#" style={{ color: 'var(--gold)' }} aria-label="WhatsApp">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid #333', paddingTop: '30px' }}>
              <h4 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '10px' }}>Business Hours</h4>
              <p style={{ color: '#ccc', fontSize: '0.95rem' }}>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p style={{ color: '#ccc', fontSize: '0.95rem' }}>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div style={{ width: '100%', height: '450px', border: '1px solid var(--gold)' }}>
          <iframe 
            title="NABCO Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126839.04369792446!2d39.18536961453479!3d-6.815270505291264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bae16974627%3A0x2f6406c1341a99a8!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
