import React from 'react';
import { Link } from 'react-router-dom'
const WhatWeDo = () => (
  <div style={{ background: 'var(--black)', color: 'white', minHeight: '100vh' }}>
    <section className="hp-hero" style={{ height: '60vh' }}>
      <div className="master-container">
        <h1>What we do</h1><p style={{ marginTop: '20px', color: '#eee', fontSize: '1.3rem' }}>We help organisations understand performance challenges, make better decisions, and implement improvements that can be sustained.</p></div>
    </section>
    <div className="master-container" style={{ padding: '100px 0' }}>
      <Link to="/about" className="nb-back-link">← Back to About</Link>

      <div className="wwd-grid">
        {/* Item 01 */}
        <div className="wwd-item">
          <div className="wwd-header">
            <span className="wwd-number">01</span>
            <div className="wwd-line"></div>
            <h3 className="wwd-title">Identify and address performance challenges
</h3>
          </div>
          <p className="wwd-desc">
We build a clear picture of how work happens in practice; how decisions are made, how information flows. We also identify causes of delays, inefficiencies, and risk so we can address root causes, not symptoms.          </p>
        </div>

        {/* Item 02 */}
        <div className="wwd-item">
          <div className="wwd-header">
            <span className="wwd-number">02</span>
            <div className="wwd-line"></div>
            <h3 className="wwd-title">Understanding how the organisation really works
</h3>
          </div>
          <p className="wwd-desc">
We take time to understand how work is done before proposing solutions, which includes how decisions are made and how information flows across the organisation
          </p>
        </div>

        {/* Item 03 */}
        <div className="wwd-item">
          <div className="wwd-header">
            <span className="wwd-number">03</span>
            <div className="wwd-line"></div>
            <h3 className="wwd-title">Support better decision-making
</h3>
          </div>
          <p className="wwd-desc">
We help leaders gain insight to make data-informed decisions by providing clear analysis, meaningful performance insight, and perspectives aligned with organisational goals and priorities.
          </p>
        </div>

        {/* Item 04 */}
        <div className="wwd-item">
          <div className="wwd-header">
            <span className="wwd-number">04</span>
            <div className="wwd-line"></div>
            <h3 className="wwd-title">Addressing complexity across systems
</h3>
          </div>
          <p className="wwd-desc">
Where challenges cut across (departments) or persist over time, we apply systems thinking and selectively use advanced analytical and AI-enabled tools to gain deeper insight and support more sustainable outcomes.
          </p>
        </div>

      </div>
    </div>
  </div>
);
export default WhatWeDo;
