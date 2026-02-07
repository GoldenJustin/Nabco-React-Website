import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const MissionVision = () => {
  const values = [
    { t: "Performance with Purpose", d: "We focus on outcomes that materially improve how organisations operate and perform." },
    { t: "Informed Decision-Making", d: "We believe strong decisions come from combining data, analytical thinking, and modern tools such as AI with sound judgement" },
    { t: "Systems Awareness", d: "We recognise organisations as interconnected systems and address root causes rather than surface-level symptoms." },
    { t: "Diverse Perspectives", d: "We value diverse professional backgrounds, industry experience, and perspectives, believing that better solutions come from combining different ways of thinking and practical experience" },
    { t: "Customer-Centred Service", d: "We believe excellent customer care leads to better understanding, stronger relationships, and more effective solutions." },
    { t: "Integrity & Accountability", d: "We act with honesty, transparency, and responsibility, taking ownership of our work and its impact." }
  ];
  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', paddingBottom: '120px' }}>
      <div className="master-container">
        <div className="header-spacing">
          <Link to="/about" className="nb-back-link">← Back to About</Link>
          <h1>Mission, Vision & Values</h1>
          <p style={{ maxWidth: '900px', fontSize: '1.25rem', marginTop: '20px', color: '#ccc' }}>NAB & Co. Consulting is a performance-driven management consulting firm. Our work is shaped by our founder, Nyaeri Bwana, whose passion for organisational performance and data-driven decision-making guides how we work with clients.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '100px' }}>
          <div className="card-art"><h3>Our Mission</h3><p>To help organisations achieve measurable performance improvement by diagnosing root causes, strengthening systems, and supporting better decision-making through evidence-based consulting, systems thinking, and AI-supported analysis where appropriate.</p></div>
          <div className="card-art"><h3>Our Vision</h3><p>To be a trusted management consulting firm in East Africa, recognised for delivering sustainable performance improvement and practical transformation.</p></div>
        </div>
        <h2>Our Core Values</h2>
        <Swiper modules={[Pagination, Autoplay]} spaceBetween={20} slidesPerView={1} slidesPerGroup={1} autoplay={{ delay: 3500 }} pagination={{ clickable: true }} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} style={{ paddingBottom: '60px' }}>
          {values.map((v, i) => (
            <SwiperSlide key={i}><div style={{ height: '100%', display: 'flex', padding: '10px' }}><div className="card-art" style={{ alignItems: 'center', textAlign: 'center' }}><div style={{ width: '35px', height: '35px', marginBottom: '20px', color: 'var(--gold)' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div><h3>{v.t}</h3><p style={{ fontSize: '1rem', color: '#aaa' }}>{v.d}</p></div></div></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default MissionVision;
