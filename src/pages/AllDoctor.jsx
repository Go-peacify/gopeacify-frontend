import React from "react";
import TestimonialSwiper from "../components/Swipers/TestimonialSwiper";
import DoctorCard from "../components/card/doctorCard";
import { testimonial } from "../assets";

export default function AllDoctor() {
  return (
    <div>
      <h6 className="text-5xl font-semibold text-center mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#45BDBF] to-[#005C7B]">
        Meet Our Specialists
      </h6>
      <div className="w-full">
        <div className="">
          <div className="  rounded-lg md:px-[150px] bg-[#F0FCFB] ">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-6  xl:gap-y-20 xl:gap-x-20 p-4 mx-auto  sm:grid-cols-3 xl:grid-cols-4  sm:p-8">
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
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </dl>
            <div className="flex flex-wrap justify-center w-full ">
              <button className="text-white rounded-3xl mb-4 bg-gradient-to-r from-[#70ECEC] to-[#5C8A99]">
                View all Doctor
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* What Our Patients Say About Us */}
        <h6 className="text-4xl font-semibold text-center mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#45BDBF] to-[#005C7B]">
          {" "}
          What Our Patients Say About Us
        </h6>
        <div className="flex flex-wrap justify-center w-full">
          <p className="w-2/3  text-center mt-2 text-[#3B6377] ">
            {" "}
            Our mental health company provides a safe and supportive space for
            individuals to explore their mental health and work towards healing.
            Our team is passionate about helping individuals build the skills
            and resilience needed to navigate life's challenges. We are
            committed to empowering individuals to prioritize their mental
            health.
          </p>
        </div>
        <div className=" p-4 rounded-lg md:p-8 ">
          <dl className="grid max-w-screen-xl h-auto md:h-[400px] grid-cols-1 gap-10 xl:gap-x-20 p-4 mx-auto  sm:grid-cols-2 xl:grid-cols-2  sm:p-8">
            <img src={testimonial} alt="testimonial" className="md:ml-10 h-3/4" />
            <TestimonialSwiper />
          </dl>
        </div>
      </div>
    </div>
  );
}
