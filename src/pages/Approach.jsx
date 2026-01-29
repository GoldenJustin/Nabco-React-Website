import React from 'react';
const Approach = () => (
  <div style={{ background: 'var(--black)', minHeight: '100vh', paddingBottom: '100px' }}>
    <div className="master-container">
      <div className="header-spacing"><h1>Our Approach</h1></div>
      <div style={{ maxWidth: '900px' }}>
        <p style={{ fontSize: '1.4rem', color: 'var(--gold)', marginBottom: '30px' }}>Our approach is diagnostic-led.</p>
        <p>Our approach is diagnostic-led. We focus on understanding how people, processes, data, and structures interact in real operating environments to identify root causes and design targeted, measurable, and sustainable improvements.</p>
        <p style={{ margin: '30px 0' }}>We work with organisations operating in complex and regulated sectors. Our work combines analytical rigour with a strong understanding of local context, ensuring that recommendations are not only insightful but also realistic to implement.</p>
        <p style={{ borderLeft: '4px solid var(--gold)', paddingLeft: '30px', fontStyle: 'italic', color: '#ccc' }}>Where complexity requires it, we apply systems thinking and selectively use AI-enabled analytical tools to support clearer insight and better decision-making, always guided by human judgement.</p>
      </div>
    </div>
  </div>
);
export default Approach;