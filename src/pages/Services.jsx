import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceLinks = [
    { title: "Business Performance & Operational Improvement", slug: "business-performance" },
    { title: "Business Analytics & Strategic Advisory", slug: "business-analytics" },
    { title: "Risk Management & Internal Controls", slug: "risk-management" },
    { title: "Project Management & Implementation Support", slug: "project-management" },
    { title: "Systems Thinking Organisational Analysis", slug: "systems-thinking" },
    { title: "AI-Enabled Decision Support", slug: "ai-decision-support" }
  ];

  return (
    <div style={{ background: 'var(--black)', color: 'white', minHeight: '100vh' }}>
      <div className="page-header-spacing" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '60px', alignItems: 'start' }}>
        <h1>Services</h1>
        <div>
          <p style={{ fontSize: '1.25rem', color: '#ccc', lineHeight: '1.8' }}>
            We work with organisations across a wide range of industries and business sizes. Our services help clients measure and manage performance by understanding how people, processes, data, and structures work together, enabling clearer decisions and improvements that work in practice
          </p>
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '80px 50px', 
        padding: '0 8% 120px' 
      }}>
        {serviceLinks.map((s, i) => (
          <Link key={i} to={`/services/${s.slug}`} className="argon-link">
            <h3>{s.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
