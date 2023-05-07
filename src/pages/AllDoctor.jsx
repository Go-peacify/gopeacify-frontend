import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import TestimonialSwiper from '../components/TestimonialSwiper';
import { TestimonialData} from "../constants";
import DoctorCard from '../components/card/doctorCard'
import DoctorSwiper from '../components/doctorSwiper';
import { person1, person2, person3, person4, person5, person6, testimonial } from '../assets'

export default function AllDoctor() {
  return (
    <div>
     
      <div>
        {/* OUr speacialist doctor team */}
          

            <div className='w-full '>
            
              <h1 className='md:text-center my-8 font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-[#45BDBF] to-[#005C7B]'>Meet   Our Specialists</h1>
              
              <div className='ml-10 flex flex-wrap justify-center'>
              <div className=" w-full grid grid-cols-2 xs:gap-2 sm:grid-cols-3 md:grid-cols-5">
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
      
              </div>
              </div>


              
              
              <div className=" w-[40%] md:w-full flex flex-col items-center justify-center">
              <button type="button" className=" text-md text-white  hover:outline-btn  bg-[#008080] hover:text-black justify-center hover:bg-btn outline-btn rounded-full  ">
                Get Started
              </button>
            </div>
             
            </div>
           

        {/* What Our Patients Say About Us */}
        <div className='w-full flex ml-0 sm:justify-center'>
        <div className='lg:w-[85%] md:w-[80%] lg:p-16 md:p-6 w-[40%] mx-auto md:mx-0 my-24 md:my-0 gap-8 md:gap-0 ml-0 sm:flex flex-col justify-around'>
          <h2 className='text-3xl text-[#3B6377] sm:text-center my-8 font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-[#45BDBF] to-[#005C7B] '>
          What Our Patients Say About Us</h2>
          <p className='my-5'>Our mental health company provides a safe and supportive space for individuals to explore their 
              mental health and work towards healing. Our team is passionate about helping individuals build the skills and resilience needed to navigate life's challenges. 
              We are committed to empowering individuals to prioritize their mental health.
          </p>
          
        </div>
        </div>
        
          

        <div className=" w-[50%] md:w-full grid grid-cols-1 gap-20 md:gap-0 sm:grid-cols-1 md:grid-cols-2">
          <div className="relative mx-10" style={{width: 461, height: 494,}}>
            <img src={testimonial} alt='testimonial'/>          
          </div> 
          {TestimonialData.map((card) => <TestimonialSwiper key={card.id} {...card} />)}
          
          
        </div> 



               <div className='justify-center items-center flex flex-row h-0'>
                  <div className='mx-20 w-full flex flex-col'>
                  <div className="relative mx-5 bg-white bg-opacity-0" style={{width: 461, height: 0,}}>
                    {/* <img src={testimonial} alt='testimonial'/>           */}
                  </div>          
                  </div>
                  <div className='w-full flex flex-col mb-32 mr-28'>
                    {/* code for testimonial swipe */}
                    <div className='w-[651px] h-[] p-5  '>
                   
                    
                      
                    </div>
                        
                  </div>
              </div>
       
        </div>
     
    </div>
  )
}
