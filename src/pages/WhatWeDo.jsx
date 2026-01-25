import React from 'react';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
  return (
    <div style={{ background: 'var(--black)', color: 'white', minHeight: '100vh' }}>
      <section style={{ 
        height: '60vh', position: 'relative', display: 'flex', 
        alignItems: 'center', justifyContent: 'center',
        background: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80") center/cover'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1 }}></div>
        <div style={{ zIndex: 2, textAlign: 'center', maxWidth: '900px', padding: '0 20px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 'bold', marginBottom: '20px', color: 'var(--gold)' }}>What we do</h1>
          <p style={{ fontSize: '1.5rem', color: '#eee' }}>We help organisations understand performance challenges, make better decisions, and implement improvements that can be sustained.</p>
        </div>
      </section>

      <div style={{ padding: '80px 10%', maxWidth: '1200px', margin: '0 auto', background: 'var(--black)' }}>
        <Link to="/about" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 'bold' }}>← BACK TO ABOUT</Link>
        
        <h2 style={{ fontSize: '2.5rem', margin: '2rem 0', color: 'var(--gold)', lineHeight: '1.2' }}>Help organisations navigate performance challenges</h2>
        
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--light-gray)' }}>
          Often, organisations experience performance issues that are difficult to pinpoint, arising from delays, inefficiencies, unclear accountability, or inconsistent results. We support organisations in understanding and addressing challenges in a structured and practical way.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { t: "Understanding how the organisation really works", d: "We take time to understand how work is done before proposing solutions, which includes how decisions are made and how information flows across the organisation. This helps us identify underlying issues rather than symptoms." },
            { t: "Supporting clearer, more confident decision-making", d: "We help organisation leaders gain insight to make data-informed decisions by providing clear analysis, meaningful performance insight, and perspectives aligned with organisational goals and priorities." },
            { t: "Addressing complexity across systems", d: "Where challenges cut across functions (departments) or persist over time, we apply systems thinking and selectively use advanced analytical and AI-enabled tools to gain deeper insight and support more sustainable outcomes." },
            { t: "Gaining clarity on how organisations operate", d: "Our work begins with diagnosis. We work closely with organisation leaders and operational teams to understand how the organisation functions in practice; how work flows, how decisions are made, and where risks and constraints emerge." }
          ].map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--darker-gray)', paddingBottom: '20px' }}>
              <h4 style={{ marginBottom: '15px', color: 'var(--gold)', fontSize: '1.2rem' }}>{item.t}</h4>
              <p style={{ color: 'var(--light-gray)', lineHeight: '1.6' }}>{item.d}</p>
            </div>
          ))}
        </div>
        
        <p style={{ marginTop: '50px', fontStyle: 'italic', color: 'var(--gold)', fontSize: '1.1rem' }}>
          By examining people, processes, data, and structures together, we identify root causes and patterns that explain why challenges persist.
        </p>
      </div>
    </div>
  );
};
export default WhatWeDo;
