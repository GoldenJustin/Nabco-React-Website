import React from 'react';
import { useParams } from 'react-router-dom';

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
    "systems-thinking": {
      title: "Systems Thinking - Led Organisational Analysis",
      p: "Used when problems persist across teams or return despite previous fixes. across teams or return despite previous fixes.",
      help: "This helps organisations understand how different parts of the organisation interact, identify the underlying drivers of recurring issues, and design improvements that are practical and sustainable.",
      situations: ["We’ve fixed this before, but it keeps coming back", "The issue involves several departments"]
    },
    "ai-decision-support": {
      title: "AI-Enabled Decision Support & Performance Enhancement",
      p: "Used when data is complex and timely insight is critical. and timely insight is critical.",
      help: "This helps organisations extract insight more quickly from complex data, improve planning through forward-looking analysis, and support confident decision-making with human oversight.",
      situations: ["We have a lot of data, but insight comes too slowly", "Decisions feel risky because the future isn’t clear"]
    }
  };

  const s = servicesData[slug];
  if (!s) return <div style={{padding: '200px', color: 'white'}}>Service not found.</div>;

  return (
    <div style={{ background: 'var(--black)', color: 'white', minHeight: '100vh', paddingTop: '140px', paddingBottom: '100px' }}>
      <div style={{ padding: '0 10%', maxWidth: '1200px' }}>
        <h1 style={{ fontSize: '4rem', color: 'var(--gold)', marginBottom: '2rem' }}>{s.title}</h1>
        <p style={{ fontSize: '1.4rem', lineHeight: '1.6', marginBottom: '3rem', color: '#ccc' }}>{s.p}</p>
        
        <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '40px', marginBottom: '40px' }}>
           <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>How we help</h3>
           <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{s.help}</p>
        </div>

        <div style={{ background: 'var(--darker-gray)', padding: '40px', border: '1px solid #333' }}>
           <h4 style={{ color: 'var(--gold)', marginBottom: '1.5rem' }}>Typical situations include:</h4>
           <ul style={{ listStyle: 'none' }}>
              {s.situations.map((item, i) => (
                <li key={i} style={{ marginBottom: '10px', fontSize: '1.1rem', color: '#bbb' }}>• {item}</li>
              ))}
           </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
