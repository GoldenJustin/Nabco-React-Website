// import React, { useState } from 'react';

// const Contact = () => {
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");
    
//     const formData = new FormData(e.target);
    
//     // We use FormSubmit.co (a free service) to send the email
//     try {
//       const response = await fetch("https://formsubmit.co/ajax/info@nabco.co.tz", {
//         method: "POST",
//         body: formData
//       });
      
//       if (response.ok) {
//         setStatus("success");
//         e.target.reset();
//       } else {
//         setStatus("error");
//       }
//     } catch (error) {
//       setStatus("error");
//     }
//   };

//   return (
//   <div style={{ background: 'var(--black)', minHeight: '100vh', paddingBottom: '100px' }}>
//     <div className="master-container">
//       <div className="header-spacing"><h1>Contact Us</h1></div>
//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid #222', borderRadius: '15px', overflow: 'hidden' }}>
//         <div style={{ padding: '60px', background: '#0a0a0a' }}>
//           {status === "success" ? (
//                 <div style={{ textAlign: 'center', padding: '40px' }}>
//                   <h3 style={{ color: 'var(--gold)', marginBottom: '15px' }}>Message Received!</h3>
//                   <p style={{ color: 'white' }}>Thank you for reaching out. We will get back to you shortly.</p>
//                   <button onClick={() => setStatus("")} className="nb-btn-contact" style={{ marginTop: '20px', width: 'auto' }}>Send Another Message</button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  
//                   {/* Hidden field for FormSubmit configuration */}
//                   <input type="hidden" name="_subject" value="New Contact from NABCO Website" />
                  
//                   <div>
//                     <label style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px', fontWeight: '600' }}>Name</label>
//                     <input type="text" name="name" required style={{ width: '100%', padding: '15px', background: 'black', border: '1px solid #333', color: 'white', borderRadius: '4px' }} />
//                   </div>
//                   <div>
//                     <label style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email</label>
//                     <input type="email" name="email" required style={{ width: '100%', padding: '15px', background: 'black', border: '1px solid #333', color: 'white', borderRadius: '4px' }} />
//                   </div>
//                   <div>
//                     <label style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px', fontWeight: '600' }}>Message</label>
//                     <textarea name="message" required rows="6" style={{ width: '100%', padding: '15px', background: 'black', border: '1px solid #333', color: 'white', borderRadius: '4px' }}></textarea>
//                   </div>
                  
//                   <button type="submit" className="nb-btn-contact" disabled={status === "sending"}>
//                     {status === "sending" ? "Sending..." : "Send Message"}
//                   </button>

//                   {status === "error" && <p style={{ color: 'red', marginTop: '10px' }}>Something went wrong. Please try again.</p>}
//                 </form>
//               )}
//         </div>
//         <div style={{ padding: '60px', background: '#050505', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//           <h3 style={{ color: 'white', marginBottom: '30px', fontSize: '1.8rem' }}>Office Information</h3>
          
//           <div style={{ marginBottom: '25px' }}>
//             <h4 style={{ color: 'var(--gold)', marginBottom: '5px' }}>Location</h4>
//             <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Dar es Salaam, Tanzania</p>
//           </div>

//           <div style={{ marginBottom: '25px' }}>
//             <h4 style={{ color: 'var(--gold)', marginBottom: '5px' }}>Email Address</h4>
//             <p style={{ color: '#ccc', fontSize: '1.1rem' }}>info@nabco.co.tz</p>
//           </div>

//           <div style={{ marginBottom: '25px' }}>
//             <h4 style={{ color: 'var(--gold)', marginBottom: '5px' }}>Phone Line</h4>
//             <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>+255 798 310 776</p>
//           </div>

//           <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #222' }}>
//             <h4 style={{ color: 'var(--gold)', marginBottom: '5px' }}>Business Hours</h4>
//             <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Monday - Friday: 8:00 AM - 5:00 PM</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// };
// export default Contact;

import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@nabco.co.tz", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="ct-page-wrapper">
      <div className="master-container">
        <div className="header-spacing">
          <h1>Contact Us</h1>
        </div>
        
        <div className="ct-grid-container">
          {/* LEFT COLUMN: FORM */}
          <div className="ct-form-section">
            {status === "success" ? (
              <div className="ct-success-message">
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
                <button onClick={() => setStatus("")} className="nb-btn-contact ct-btn-auto">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="ct-form">
                <input type="hidden" name="_subject" value="New Contact from NABCO Website" />
                
                <div className="ct-field-group">
                  <label>Name</label>
                  <input type="text" name="name" required className="ct-input" />
                </div>

                <div className="ct-field-group">
                  <label>Email</label>
                  <input type="email" name="email" required className="ct-input" />
                </div>

                <div className="ct-field-group">
                  <label>Message</label>
                  <textarea name="message" required rows="6" className="ct-textarea"></textarea>
                </div>
                
                <button type="submit" className="nb-btn-contact" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "error" && <p className="ct-error-text">Something went wrong. Please try again.</p>}
              </form>
            )}
          </div>

          {/* RIGHT COLUMN: INFO */}
          <div className="ct-info-section">
            <h3 className="ct-info-title">Office Information</h3>
            
            <div className="ct-info-block">
              <h4>Location</h4>
              <p>Dar es Salaam, Tanzania</p>
            </div>

            <div className="ct-info-block">
              <h4>Email Address</h4>
              <p>info@nabco.co.tz</p>
            </div>

            <div className="ct-info-block">
              <h4>Phone Line</h4>
              <p className="ct-phone">+255 798 310 776</p>
            </div>

            <div className="ct-hours-block">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;