import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const coreServices = [
    { title: "Business Performance & Operational Improvement", slug: "business-performance" },
    { title: "Business Analytics & Strategic Advisory", slug: "business-analytics" },
    { title: "Risk Management & Internal Controls", slug: "risk-management" },
    { title: "Project Management & Implementation Support", slug: "project-management" }
  ];

  const advancedService = { title: "Advanced Capabilities", slug: "advanced-capabilities" };

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', paddingBottom: '120px' }}>
      <div className="master-container">
        <div className="header-spacing">
          <h1>Services</h1>
          <p style={{ maxWidth: '900px', fontSize: '1.25rem', marginTop: '20px', color: '#ccc' }}>
            We work with organisations across a wide range of industries and business sizes. Our services help clients measure and manage performance by understanding how people, processes, data, and structures work together, enabling clearer decisions and improvements that work in practice
          </p>
        </div>

        <div className="sv-list-grid">
          {/* First 4 items in a 2x2 grid */}
          {coreServices.map((s, i) => (
            <Link key={i} to={`/services/${s.slug}`} className="sv-item">
              <h3>{s.title}</h3>
            </Link>
          ))}

          {/* 5th item centered in its own row */}
          <div className="sv-item-centered-wrapper">
            <Link to={`/services/${advancedService.slug}`} className="sv-item">
              <h3>{advancedService.title}</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;