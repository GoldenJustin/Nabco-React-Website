import React from 'react';
const WhatWeDo = () => (
  <div style={{ background: 'var(--black)', color: 'white', minHeight: '100vh' }}>
    <section className="hp-hero" style={{ height: '60vh' }}>
      <div className="master-container"><h1>What we do</h1><p style={{ marginTop: '20px', color: '#eee', fontSize: '1.3rem' }}>We help organisations understand performance challenges, make better decisions, and implement improvements that can be sustained.</p></div>
    </section>
    <div className="master-container" style={{ padding: '100px 0' }}>
      <div className="wwd-grid">
        {/* Item 01 */}
        <div className="wwd-item">
          <div className="wwd-header">
            <span className="wwd-number">01</span>
            <div className="wwd-line"></div>
            <h3 className="wwd-title">Understanding how the organisation really works</h3>
          </div>
          <p className="wwd-desc">
            We take time to understand how work is done before proposing solutions, which includes how decisions are made and how information flows across the organisation. This helps us identify underlying issues rather than symptoms.
          </p>
        </div>

        {/* Item 02 */}
        <div className="wwd-item">
          <div className="wwd-header">
            <span className="wwd-number">02</span>
            <div className="wwd-line"></div>
            <h3 className="wwd-title">Supporting clearer, more confident decision-making</h3>
          </div>
          <p className="wwd-desc">
            We help organisation leaders gain insight to make data-informed decisions by providing clear analysis, meaningful performance insight, and perspectives aligned with organisational goals and priorities.
          </p>
        </div>

        {/* Item 03 */}
        <div className="wwd-item">
          <div className="wwd-header">
            <span className="wwd-number">03</span>
            <div className="wwd-line"></div>
            <h3 className="wwd-title">Addressing complexity across systems</h3>
          </div>
          <p className="wwd-desc">
            Where challenges cut across functions (departments) or persist over time, we apply systems thinking and selectively use advanced analytical and AI-enabled tools to gain deeper insight and support more sustainable outcomes.
          </p>
        </div>

        {/* Item 04 */}
        <div className="wwd-item">
          <div className="wwd-header">
            <span className="wwd-number">04</span>
            <div className="wwd-line"></div>
            <h3 className="wwd-title">Gaining clarity on how organisations operate</h3>
          </div>
          <p className="wwd-desc">
            Our work begins with diagnosis. We work closely with organisation leaders and operational teams to understand how the organisation functions in practice; how work flows, how decisions are made, and where risks and constraints emerge.
          </p>
        </div>

        {/* Item 05 */}
        <div className="wwd-item">
          <div className="wwd-header">
            <span className="wwd-number">05</span>
            <div className="wwd-line"></div>
            <h3 className="wwd-title">Help organisations navigate performance challenges</h3>
          </div>
          <p className="wwd-desc">
            Often, organisations experience performance issues that are difficult to pinpoint, arising from delays, inefficiencies, unclear accountability, or inconsistent results. We support organisations in understanding and addressing challenges in a structured and practical way.           </p>
        </div>
      </div>



      {/* Summary Footer Text - Verbatim */}
      <div style={{ marginTop: '80px', borderTop: '1px solid #222', paddingTop: '40px' }}>
        <p style={{ color: 'var(--gold)', fontStyle: 'italic', textAlign: 'center', fontSize: '1.1rem', maxWidth: '900px', margin: '0 auto' }}>
          By examining people, processes, data, and structures together, we identify root causes and patterns that explain why challenges persist.
        </p>
      </div>
    </div>
  </div>
);
export default WhatWeDo;
