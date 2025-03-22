import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import g1 from './assets/g-1.webp';
import g2 from './assets/g-2.jpg';
import g3 from './assets/g-3.webp';
import g4 from './assets/g-4.jpg';
import g5 from './assets/g-5.jpg';
import g6 from './assets/g-6.jpg';
import './index.css'; // Updated to match component name
import { EffectCoverflow, Autoplay } from 'swiper/modules';

function Spotlight() {
  return (
    <section className="spotlight-section" id= "spotlight-section">
      <div> 
        <h1 className="heading">
            event <span>spotlights</span>
        </h1>
      </div>
      <div className="swiper-home-slider">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 10, // Increased to pull slides closer
            depth: 300,   // Decreased for less separation
            modifier: 1,  // Lowered for a tighter effect
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
        >
          <SwiperSlide>
            <img src={g1} alt="slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g2} alt="slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g3} alt="slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g4} alt="slide 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g5} alt="slide 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g6} alt="slide 6" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Spotlight;