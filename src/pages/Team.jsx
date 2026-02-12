import React from 'react';
import founderImg from '../assets/founder.jpeg';

const Team = () => {
  return (
    <div className="tm-page-wrapper">
      <div className="master-container">
        <div className="header-spacing">
          <h1>Our Team</h1>
        </div>

        <div className="tm-grid">
          {/* LEFT: IMAGE */}
          <div className="tm-frame">
            <img src={founderImg} alt="Founder" />
          </div>

          {/* RIGHT: INTRO TEXT */}
          <div className="tm-content-intro">
            <p className="tm-text-highlight">
              NAB & Co. Consulting was founded by Nyaeri Bwana, a performance and analytics-focused consultant with over five years of experience across actuarial analysis, data analytics, risk management, and operational improvement.
            </p>
            <p>
              Her background includes work across financial services, Insurance, Consulting, NGOs, and other regulated operating environments, with hands-on experience in performance measurement, process improvement, compliance, and decision support.
            </p>
            <p>
              At NAB & Co. Consulting, our work is delivered by a multidisciplinary team of experienced consultants with expertise across strategy, operations improvement, performance measurement analytics, and risk. Our team has experience across multiple industries, including financial services, logistics, mining, consumer goods, NGOs, and regulated sectors, among others.
            </p>
          </div>
        </div>

        {/* BOTTOM FULL-WIDTH SECTION */}
        <div className="tm-bottom-section">
          <p>
            Consultant expertise includes business engineering, supply chain and project management, actuarial analysis, business analytics, data governance, tax and audit, private equity, procurement, customer service operations, and applied AI-enabled decision support. This range of expertise allows us to tailor each engagement with the right expertise and industry insight.
          </p>
          <p className="tm-text-secondary">
            We work with both local and international consultants, which allows us to combine contextual understanding of local operating environments with wider technical expertise and global best practice. Each engagement is structured with clear roles, defined standards, and consistent review checkpoints to ensure outputs remain practical, consistent, and aligned to NAB & Co.’s delivery expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;