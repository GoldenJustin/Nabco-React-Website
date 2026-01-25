import React from 'react';

const Team = () => {
  return (
    <div style={{ background: 'var(--black)', color: 'white', minHeight: '100vh' }}>
      <div className="page-header-spacing">
        <h1>Team</h1>
      </div>
      
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 8% 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }}>
          <div style={{ border: '1px solid var(--gold)', padding: '5px' }}>
             <img src="https://via.placeholder.com/400x500" alt="Nyaeri Bwana" style={{ width: '100%', filter: 'grayscale(100%)' }} />
          </div>
          <div>
            <h2 style={{ color: 'var(--gold)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Nyaeri Bwana</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem', color: '#ccc' }}>
              NAB & Co. Consulting was founded by Nyaeri Bwana, a performance and analytics-focused consultant with over five years of experience across actuarial analysis, data analytics, risk management, and operational improvement.
            </p>
            <p style={{ color: 'var(--light-gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Her professional background spans financial services, insurance, consulting, NGOs, and other regulated operating environments, with hands-on experience in performance measurement, process improvement, compliance, and decision support.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '80px', borderTop: '1px solid #333', paddingTop: '60px' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc' }}>
            We work with a network of consultants with experience across multiple industries, including financial services, logistics, mining, consumer goods, NGOs, and regulated sectors, among others. Consultant expertise spans operations and risk management, process improvement, business engineering, supply chain and project management, actuarial analysis, private equity, tax and audit, procurement, customer service, data analytics, and applied AI-enabled decision support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
