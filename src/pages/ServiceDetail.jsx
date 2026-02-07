import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const ServiceDetail = () => {
  const { slug } = useParams();
  const servicesData = {
    "business-performance": { title: "Business Performance & Operational Improvement", p: "Many organisations struggle with inconsistent performance due to unclear metrics, limited performance visibility, or operational processes that do not consistently deliver expected results.", help: "We work with organisations to understand how work is carried out in practice, identify inefficiencies, and strengthen how performance is measured and managed. Our focus is on practical improvements that teams can realistically implement and sustain", situations: ["Things take too long to get done", "Customers keep complaining about delays or errors", "We don’t really track performance properly", "Teams are busy, but results are inconsistent"] },
    "business-analytics": { title: "Business Analytics & Strategic Advisory", p: "Organisation leaders often have data but still struggle to turn it into insight. Reports exist, but they don’t always answer the questions that matter most.", help: "We help organisations turn information into insight that supports planning, prioritisation, and strategic decision-making. We help you ask the right questions and build models that provide clarity around risk, opportunity, and future scenarios.", situations: ["We have data, but it doesn’t really guide decisions", "We want to grow, but aren’t sure where to focus", "Decisions feel risky or uncertain", "We need better insight for leadership discussions"] },
    "risk-management": { title: "Risk Management & Internal Controls", p: "Risks that are not clearly understood or managed often lead to repeated issues, compliance concerns, or unexpected disruptions. Organisations often feel reactive instead of proactive about risk. Controls may be weak or inconsistent, and audit findings may persist without clear remediation plans.", help: "We support organisations in identifying key risks, strengthening internal processes, and improving oversight so issues are anticipated rather than reactive.", situations: ["The same problems keep coming back", "Audit or compliance issues worry us", "We don’t clearly understand our risk exposure", "Controls exist, but they don’t always work"] },
    "project-management": { title: "Project Management & Implementation Support", p: "Initiatives often fail not because the idea is wrong, but because delivery is weak. Projects are too complex, governance is weak, or stakeholder alignment breaks down. Teams struggle with competing priorities or lack the structure to stay on track.", help: "We bring structure, coordination, and discipline to project delivery, helping teams stay aligned and focused from planning through to implementation.", situations: ["Projects keep getting delayed", "Change doesn’t stick after go-live", "There’s no clear ownership or accountability", "Teams are stretched and juggling too much"] },
    "advanced-capabilities": { 
        title: "Advanced Capabilities", 
        p: "We apply these capabilities selectively in complex situations where challenges are cross-functional, recurring, or require deeper analytical insight. They are used to strengthen and support our core services as standalone offerings.",
        isAdvanced: true,
        parts: [
            { t: "Systems Thinking - Led Organisational Analysis", d: "Used when problems persist across teams or return despite previous fixes. This helps Organizations to understand how different parts of the organisation interact, identify the underlying drivers of recurring issues as well as design improvements that are practical and sustainable ", s: ["Fixed before, but returns", "Involves several departments"] },
            { t: "AI-Enabled Decision Support", d: "Used when data is complex and timely insight is critical. This helps Organizations to extract insight more quickly from complex data, improve planning through forward-looking analysis, and support confident decision-making with human oversight", s: ["We have a lot of data, but insight comes too slowly", "Decisions feel risky because the future isn’t clear"] }
        ]
    }
  };
  const s = servicesData[slug];
  if (!s) return <div style={{padding:'200px', textAlign:'center', color:'white'}}>Service not found.</div>;
  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', paddingBottom: '120px' }}>
      <div className="master-container">
        
        <div className="header-spacing"><Link to="/services" className="nb-back-link">← Back to Services</Link><h1 style={{color:'var(--gold)'}}>{s.title}</h1><p style={{fontSize:'1.4rem', marginTop:'30px', maxWidth:'1000px'}}>{s.p}</p></div>
        {!s.isAdvanced ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'start' }}>
            
            <div><h2 style={{ textAlign: 'left', color: 'var(--gold)', fontSize: '1.8rem', marginBottom:'30px' }}>How we help</h2><p style={{fontSize:'1.2rem', color:'#ccc'}}>{s.help}</p></div>
            <div className="card-art" style={{background:'#0a0a0a'}}><h3>Typical situations:</h3><ul style={{listStyle:'none'}}>{s.situations.map((item, i) => (<li key={i} style={{color:'#aaa', marginBottom:'15px'}}>• {item}</li>))}</ul></div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {s.parts.map((p, i) => (
              <div key={i} className="card-art">
                <h3>{p.t}</h3><p style={{color:'#ccc', marginBottom:'25px'}}>{p.d}</p>
                <h4 style={{color:'white', marginBottom:'10px'}}>Typical situations:</h4>
                <ul style={{listStyle:'none'}}>{p.s.map((sit, j) => (<li key={j} style={{color:'#aaa', fontSize:'0.95rem'}}>• {sit}</li>))}</ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default ServiceDetail;