import React from 'react';
import founderImg from '../assets/founder.jpeg';

const Team = () => {
  return (
    <div style={{ background: 'var(--black)', color: 'white', minHeight: '100vh' }}>
      
      {/* 1. Small change: Div on top to pull the starting position below the menu bar */}
      <div style={{ height: '180px' }}></div>
      
      {/* 2. Small change: Heading moved inside this container so it aligns with the grid */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 0% 50px' }}>
        
        <h1 style={{ color: 'var(--gold)', marginBottom: '60px', fontWeight: '700' }}>Team</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }}>
          <div className="tm-frame">
             <img src={founderImg} alt="Founder" />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              NAB & Co. Consulting was founded by Nyaeri Bwana, a performance and analytics-focused consultant with over five years of experience across actuarial analysis, data analytics, risk management, and operational improvement.
            </p>
            <p style={{ color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Her professional background spans financial services, insurance, consulting, NGOs, and other regulated operating environments, with hands-on experience in performance measurement, process improvement, compliance, and decision support.
            </p>
            {/* Network paragraph placed directly below the bio as requested */}
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
              At NAB & Co. we work with a network of consultants with experience across multiple industries, including financial services, logistics, mining, consumer goods, NGOs, and regulated sectors, among others. Consultant expertise spans operations and risk management, process improvement, business engineering, supply chain and project management, actuarial analysis, private equity, tax and audit, procurement, customer service, data analytics, and applied AI-enabled decision support.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;