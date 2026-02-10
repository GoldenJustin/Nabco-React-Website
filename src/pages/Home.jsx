import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// Logo Imports
import marilogLogo from '../assets/marilog.png';
import zmLogo from '../assets/zm.png';
import saharaLogo from '../assets/sahara.png';
import okalaLogo from '../assets/okala.svg';
import pmzLogo from '../assets/pmzafrica.png';

const Home = () => {
  const partners = [
    {
      name: "Marilog Africa",
      url: "https://a.marilogafrica.com/",
      logo: marilogLogo
    },
    {
      name: "ZM Procurement Solutions",
      url: "https://zmprocurementsolutions.com/",
      logo: zmLogo
    },
    {
      name: "Sahara Consult",
      url: "https://consult.saharaventures.com/partner-and-client",
      logo: saharaLogo
    },
    {
      name: "Okala",
      url: "https://www.okala.io/",
      logo: okalaLogo
    },
    {
      name: "PMZ Africa",
      url: "https://pmzafrica.com/",
      logo: pmzLogo
    },
  ];

  return (
    <div>
      <section className="hp-hero">
        <div className="master-container" style={{ maxWidth: '1100px' }}>
          <h1>Empowering Organisations Through <span className="hp-gold">Systems Intelligence</span></h1>
          <p>We help organisations make better decisions and deliver practical, evidence-based improvements across operations, risk, and performance</p>
          <div className="hp-btn-wrap">
            <Link to="/services" className="btn-gold">Explore Our Services →</Link>
            <Link to="/contact" className="btn-outline">Get In Touch</Link>
          </div>
        </div>
      </section>

      <section className="hp-pts-section">
        <div className="master-container">
          <div className="nb-container">
            <h2 className="hp-pt-title">Our Strategic Partners</h2>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }
              }}
              className="hp-pts-swiper"
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={index}>
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className="hp-pts-logo-card">
                    <img src={partner.logo} alt={partner.name} title={partner.name} />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div></div>
      </section>
    </div>
  );
};
export default Home;
