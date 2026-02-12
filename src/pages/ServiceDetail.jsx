import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { slug } = useParams();

  const servicesData = {
    "business-performance": { 
      title: "Business Performance & Operational Improvement", 
      p: "Many organisations struggle with inconsistent performance due to unclear metrics, limited performance visibility, or operational processes that do not consistently deliver expected results.", 
      help: "We work with organisations to understand how work is carried out in practice, identify inefficiencies, and strengthen how performance is measured and managed. Our focus is on practical improvements that teams can realistically implement and sustain", 
      situations: ["Things take too long to get done", "Customers keep complaining about delays or errors", "We don’t really track performance properly", "Teams are busy, but results are inconsistent"] 
    },
    "business-analytics": { 
      title: "Business Analytics & Strategic Advisory", 
      p: "Organisation leaders often have data but still struggle to turn it into insight. Reports exist, but they don’t always answer the questions that matter most.", 
      help: "We help organisations turn information into insight that supports planning, prioritisation, and strategic decision-making. We help you ask the right questions and build models that provide clarity around risk, opportunity, and future scenarios.", 
      situations: ["We have data, but it doesn’t really guide decisions", "We want to grow, but aren’t sure where to focus", "Decisions feel risky or uncertain", "We need better insight for leadership discussions"] 
    },
    "risk-management": { 
      title: "Risk Management & Internal Controls", 
      p: "Risks that are not clearly understood or managed often lead to repeated issues, compliance concerns, or unexpected disruptions. Organisations often feel reactive instead of proactive about risk. Controls may be weak or inconsistent, and audit findings may persist without clear remediation plans.", 
      help: "We support organisations in identifying key risks, strengthening internal processes, and improving oversight so issues are anticipated rather than reactive.", 
      situations: ["The same problems keep coming back", "Audit or compliance issues worry us", "We don’t clearly understand our risk exposure", "Controls exist, but they don’t always work"] 
    },
    "project-management": { 
      title: "Project Management & Implementation Support", 
      p: "Initiatives often fail not because the idea is wrong, but because delivery is weak. Projects are too complex, governance is weak, or stakeholder alignment breaks down. Teams struggle with competing priorities or lack the structure to stay on track.", 
      help: "We bring structure, coordination, and discipline to project delivery, helping teams stay aligned and focused from planning through to implementation.", 
      situations: ["Projects keep getting delayed", "Change doesn’t stick after go-live", "There’s no clear ownership or accountability", "Teams are stretched and juggling too much"] 
    },
    "advanced-capabilities": { 
        title: "Advanced Capabilities", 
        p: "We use these selectively when challenges cut across teams, repeat over time, or need deeper analysis. They can support our core services or be delivered as standalone work.",
        isAdvanced: true,
        parts: [
            { 
              t: "Systems Thinking Analysis", 
              d: "We use systems thinking to understand how different parts of the organisation interact and why issues keep coming back.", 
              bestFor: "Best for: recurring problems across multiple teams.",
              s: ["We’ve fixed it before, but it keeps returning.", "Several departments are involved."] 
            },
            { 
              t: "AI-Enabled Decision Support", 
              d: "We use AI-enabled analysis to get insight faster, test scenarios, and support planning—always with human oversight.", 
              bestFor: "Best for: complex data and time-critical decisions.",
              s: ["We have lots of data, but insight comes too slowly.", "Decisions feel risky because the future isn’t clear."] 
            }
        ]
    }
  };

  const s = servicesData[slug];
  if (!s) return <div style={{padding:'200px', textAlign:'center', color:'white'}}>Service not found.</div>;

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', paddingBottom: '120px' }}>
      <div className="master-container">
        
        <div className="header-spacing">
          <Link to="/services" className="nb-back-link">← Back to Services</Link>
          <h1 style={{color:'var(--gold)', marginTop: '20px'}}>{s.title}</h1>
          <p style={{fontSize:'1.4rem', marginTop:'30px', maxWidth:'1000px'}}>{s.p}</p>
        </div>

        {!s.isAdvanced ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <h2 style={{ textAlign: 'left', color: 'var(--gold)', fontSize: '1.8rem', marginBottom:'30px' }}>How we help</h2>
              <p style={{fontSize:'1.2rem', color:'#ccc'}}>{s.help}</p>
            </div>
            <div className="card-art" style={{background:'#0a0a0a'}}>
              <h3>Typical situations:</h3>
              <ul style={{listStyle:'none'}}>
                {s.situations.map((item, i) => (
                  <li key={i} style={{color:'#aaa', marginBottom:'15px'}}>"{item}"</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {s.parts.map((p, i) => (
              <div key={i} className="card-art">
                <h3>{p.t}</h3>
                <p style={{color:'white', marginBottom:'15px', fontSize: '1.1rem'}}>{p.d}</p>
                
                {/* RESTORED: Best for lines */}
                <p style={{color:'var(--gold)', fontWeight:'600', marginBottom:'25px', fontStyle: 'italic'}}>
                  {p.bestFor}
                </p>

                <h4 style={{color:'white', marginBottom:'15px', fontSize: '1.1rem'}}>Typical situations:</h4>
                <ul style={{listStyle:'none'}}>
                  {p.s.map((sit, j) => (
                    <li key={j} style={{color:'#aaa', fontSize:'1rem', marginBottom: '10px'}}>"{sit}"</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;