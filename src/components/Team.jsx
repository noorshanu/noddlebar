import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination,Navigation } from 'swiper/modules';


function Team() {
  return (
   <section>
    <div className='container-wrapper'>

    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        slidesPerView={'3'}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} bg-white"></span>`;
          },
        }}
        modules={[EffectCoverflow, Pagination,Navigation]}
        loop={true} // Enable infinite loop
        speed={1000} // Set the transition speed in milliseconds (e.g., 1000ms = 1 second)
        autoplay={{
          delay: 5000, // Delay between slides in milliseconds (e.g., 5000ms = 5 seconds)
          disableOnInteraction: false, // Keep autoplay after user interactions (e.g., manual slide change)
        }}
        className="mySwiper pb-24"
      >
        <SwiperSlide>
          <img src="images/ELON.png" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/ELON.png" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/ELON.png" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/ELON.png" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/ELON.png" alt="Slide 3" />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
   </section>
  )
}

export default Team