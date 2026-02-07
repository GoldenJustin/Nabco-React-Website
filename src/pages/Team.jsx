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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8' }}>
              NAB & Co. Consulting was founded by Nyaeri Bwana, a performance and analytics-focused consultant with over five years of experience across actuarial analysis, data analytics, risk management, and operational improvement.            </p>
            <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Her background includes work across financial services, insurance, consulting, NGOs, and other regulated operating environments, with hands-on experience in performance measurement, process improvement, compliance, and decision support.            </p>
            {/* Network paragraph placed directly below the bio as requested */}
            <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8' }}>
              At NAB & Co. Consulting, our work is delivered by a multidisciplinary team of experienced consultants with expertise across strategy, operations, analytics, and risk. Our team has experience across multiple industries, including financial services, logistics, mining, consumer goods, NGOs, and regulated sectors, among others.</p>
            <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8' }}>Consultant expertise includes operations and risk management, process improvement, business engineering, supply chain and project management, actuarial analysis, private equity, tax and audit, procurement, customer service, data analytics, and applied AI-enabled decision support.
            </p>
            <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8' }}>This depth of capabilities allows us to assemble the right expertise for each client, while maintaining a consistent, structured delivery approach aligned to NAB & Co.’s standards.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;