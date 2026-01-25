import React from 'react';
import { Link } from 'react-router-dom';

const MissionVision = () => {
  return (
    <div style={{ background: 'var(--black)', color: 'white', paddingTop: '120px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <h1 style={{ color: 'var(--gold)', fontSize: '3rem', marginTop: '1rem', marginBottom: '3rem' }}>Mission, Vision & Values</h1>
        
        <div style={{ border: '1px solid var(--gold)', padding: '40px', marginBottom: '30px' }}>
          <h2 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Mission</h2>
          <p style={{ fontSize: '1.2rem' }}>To help organisations achieve measurable performance improvement by diagnosing root causes, strengthening systems, and supporting better decision-making through evidence-based consulting, systems thinking, and AI-supported analysis where appropriate.</p>
        </div>

        <div style={{ border: '1px solid var(--gold)', padding: '40px', marginBottom: '50px' }}>
          <h2 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Vision</h2>
          <p style={{ fontSize: '1.2rem' }}>To be a trusted management consulting firm in East Africa, recognised for delivering sustainable performance improvement and practical transformation.</p>
        </div>

        <h2 style={{ color: 'var(--gold)', fontSize: '2rem', marginBottom: '2rem' }}>Values</h2>
        <div style={{ display: 'grid', gap: '20px' }}>
          {[
            { t: "Performance with Purpose", d: "We focus on outcomes that materially improve how organisations operate and perform." },
            { t: "Informed Decision-Making", d: "We believe strong decisions come from combining data, analytical thinking, and modern tools such as AI with sound judgement" },
            { t: "Systems Awareness", d: "We recognise organisations as interconnected systems and address root causes rather than surface-level symptoms." },
            { t: "Diverse Perspectives", d: "We value diverse professional backgrounds, industry experience, and perspectives, believing that better solutions come from combining different ways of thinking and practical experience" },
            { t: "Customer-Centred Service", d: "We believe excellent customer care leads to better understanding, stronger relationships, and more effective solutions." },
            { t: "Integrity & Accountability", d: "We act with honesty, transparency, and responsibility, taking ownership of our work and its impact." }
          ].map((v, i) => (
            <div key={i} style={{ padding: '20px', borderLeft: '4px solid var(--gold)', background: 'var(--darker-gray)' }}>
              <h4 style={{ color: 'var(--gold)', marginBottom: '10px' }}>{v.t}</h4>
              <p>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MissionVision;
