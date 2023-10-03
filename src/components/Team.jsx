import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow,Navigation,Autoplay } from 'swiper/modules';


function Team() {
  return (
    <div className='relative'>
  <img src="images/cloud4.png" alt="" className=" absolute top-[-100px] left-[-30px] h-[250px] z-10 floating" />
    <img src="images/cloud3.png" alt="" className=" absolute top-[-200x] right-[-30px] h-[700px] -z-10" />
   <section>
    <div className='container-wrapper'>
    <div className="relative">
          <img
            src="images/head.png"
            alt=""
            className=" h-24 flex justify-center mx-auto  "
            />
          <div className=" absolute top-[28%] left-[20%] sm:left-[40.5%] ">
            <h1 className=" text-2xl sm:text-3xl font-car text-white uppercase">Noodlefi lovers</h1>
          </div>
        </div>

    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        slidesPerView={'3'}
        initialSlide={2}
        Autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      
        modules={[EffectCoverflow, Navigation,Autoplay]}
        loop={true} // Enable infinite loop
        speed={1000} // Set the transition speed in milliseconds (e.g., 1000ms = 1 second)
        autoplay={{
          delay: 5000, // Delay between slides in milliseconds (e.g., 5000ms = 5 seconds)
          disableOnInteraction: false, // Keep autoplay after user interactions (e.g., manual slide change)
        }}
        className="mySwiper pb-24"
        >
        <SwiperSlide>
          <img src="images/ELON.png" alt="Slide 1" className='h-[420px] w-auto' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/team/img1.JPG" alt="Slide 2" className='h-[420px] w-auto' />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="images/team/img2.PNG" alt="Slide 3"  className='h-[420px] w-auto'/>
        </SwiperSlide>
        <SwiperSlide>
          <img  src="images/team/img3.PNG" alt="Slide 3"  className='h-[420px] w-auto'/>
        </SwiperSlide>
        <SwiperSlide>
          <img  src="images/team/img4.PNG" alt="Slide 3"  className='h-[420px] w-auto'/>
        </SwiperSlide>
        <SwiperSlide>
          <img  src="images/team/img5.PNG" alt="Slide 3"  className='h-[420px] w-auto'/>
        </SwiperSlide>
        <SwiperSlide>
          <img  src="images/team/img6.PNG" alt="Slide 3"  className='h-[420px] w-auto'/>
        </SwiperSlide>
        <SwiperSlide>
          <img  src="images/team/img7.PNG" alt="Slide 3"  className='h-[420px] w-auto'/>
        </SwiperSlide>
        <SwiperSlide>
          <img  src="images/team/img8.PNG" alt="Slide 3"  className='h-[420px] w-auto'/>
        </SwiperSlide>
        <SwiperSlide>
          <img  src="images/team/img9.PNG" alt="Slide 3"  className='h-[420px] w-auto'/>
        </SwiperSlide>
        <SwiperSlide>
          <img  src="images/team/img10.PNG" alt="Slide 3" className='h-[420px] w-auto' />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="images/team/img11.PNG" alt="Slide 3"  className='h-[420px] w-auto'/>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
   </section>
   <img src="images/cloud5.png" alt="" className=" absolute bottom-[-300px] left-[-30px] h-[550px] -z-10 floating" />
        </div>
  )
}

export default Team