import React from 'react';
import { Link } from 'react-router-dom';

const Approach = () => {
  return (
    <div style={{ background: 'var(--black)', color: 'white', paddingTop: '120px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
        <h1 style={{ color: 'var(--gold)', fontSize: '3rem', marginTop: '1rem', marginBottom: '3rem' }}>Our Approach</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '2rem' }}>Our approach is diagnostic-led. We focus on understanding how people, processes, data, and structures interact in real operating environments to identify root causes and design targeted, measurable, and sustainable improvements.</p>
          <p style={{ marginBottom: '2rem' }}>We work with organisations operating in complex and regulated sectors. Our work combines analytical rigour with a strong understanding of local context, ensuring that recommendations are not only insightful but also realistic to implement.</p>
          <p style={{ borderLeft: '4px solid var(--gold)', paddingLeft: '20px', fontStyle: 'italic' }}>Where complexity requires it, we apply systems thinking and selectively use AI-enabled analytical tools to support clearer insight and better decision-making, always guided by human judgement.</p>
        </div>
      </div>
    </div>
  );
};
export default Approach;
