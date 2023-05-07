import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import DoctorCard from './card/doctorCard';

const DoctorSwiper = () => {
  return (
      <div className='w-full h-full m-auto'>
          <Swiper
              spaceBetween={30}
              centeredSlides={false}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
              }}
              pagination={{
                  clickable: false,
              }}
              navigation={false}
              modules={[Autoplay, Pagination]}>
              <SwiperSlide>
                  <div className='flex gap-4'>
                     <DoctorCard/> 
                     <DoctorCard/> 
                     <DoctorCard/> 
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='flex gap-4'>
                     <DoctorCard/> 
                     <DoctorCard/> 
                     <DoctorCard/> 
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='flex gap-4'>
                     <DoctorCard/> 
                     <DoctorCard/> 
                     <DoctorCard/> 
                  </div>
              </SwiperSlide>
            
          </Swiper>
    </div>
  )
}

export default DoctorSwiper