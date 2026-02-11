import React from 'react';
import founderImg from '../assets/founder.jpeg';

const Team = () => {
  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', paddingBottom: '100px', minHeight: '100vh' }}>
      <div className="master-container">

        <div className="header-spacing"><h1>Our Team</h1></div>


        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }}>
          <div className="tm-frame">
            <img src={founderImg} alt="Founder" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'justify' }}>
            <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8' }}>
              NAB & Co. Consulting was founded by Nyaeri Bwana, a performance and analytics-focused consultant with over five years of experience across actuarial analysis, data analytics, risk management, and operational improvement.</p>
            <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Her background includes work across financial services, Insurance, Consulting, NGOs, and other regulated operating environments, with hands-on experience in performance measurement, process improvement, compliance, and decision support.</p>
            <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8' }}>
              At NAB & Co. Consulting, our work is delivered by a multidisciplinary team of experienced consultants with expertise across strategy, operations improvement, performance measurement analytics, and risk. Our team has experience across multiple industries, including financial services, logistics, mining, consumer goods, NGOs, and regulated sectors, among others.</p>
            {/* <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8' }}>
              NAB & Co. Consulting was founded by Nyaeri Bwana, a performance and analytics-focused consultant with over five years of experience </p>
             */}
          </div>
        </div><br /><br />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', borderTop: '1px solid #222', paddingTop: '60px', textAlign: 'justify' }}>

          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Consultant expertise includes business engineering, supply chain and project management, actuarial analysis, business analytics, data governance, tax and audit, private equity, procurement, customer service operations, and applied AI-enabled decision support. This range of expertise allows us to tailor each engagement with the right expertise and industry insight.
          </p>
          <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', }}>
            We work with both local and international consultants, which allows us to combine contextual understanding of local operating environments with wider technical expertise and global best practice. Each engagement is structured with clear roles, defined standards, and consistent review checkpoints to ensure outputs remain practical, consistent, and aligned to NAB & Co.’s delivery expectations.          </p>
        </div>

      </div>
    </div>
  );
};

export default Team;