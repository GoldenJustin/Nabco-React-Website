import React from 'react';
import { Link } from 'react-router-dom';
import careerImg from '../assets/career-flyer.jpeg';



const Careers = () => {

  return (
    <div className="cr-page-wrapper">
      <div className="master-container">
        <div className="header-spacing">
          <h1>Careers</h1>
          <p className="cr-subtitle">
            Join our multidisciplinary team of consultants. We are always looking for people 
            passionate about data, performance, and operational excellence.
          </p>
        </div>

        <div className="cr-content-grid">
          {/* FLYER DISPLAY */}
          <div className="cr-flyer-container">
            <img className='.cr-flyer-img' src={careerImg} alt="careerImg" />
          </div>

          {/* APPLICATION INFO */}
          {/* <div className="cr-info-card card-art">
            <h3>How to Apply</h3>
            <p>We are looking for analytical thinkers who thrive in complex environments.</p>
            
            <div className="cr-steps">
              <div className="cr-step">
                <span className="cr-step-num">01</span>
                <p>Review the requirements in the flyer.</p>
              </div>
              <div className="cr-step">
                <span className="cr-step-num">02</span>
                <p>Send your CV and Cover Letter to <strong>info@nabco.co.tz</strong></p>
              </div>
              <div className="cr-step">
                <span className="cr-step-num">03</span>
                <p>Include the position title in the email subject line.</p>
              </div>
            </div>

            <a href="mailto:info@nabco.co.tz" className="nb-btn-contact" style={{display: 'inline-block', textAlign: 'center', marginTop: '20px', textDecoration: 'none'}}>
              Email Your Application
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Careers;