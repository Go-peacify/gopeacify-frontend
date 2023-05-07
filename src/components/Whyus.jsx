import React from "react";
import {
  Leaf5,
  Leaf1,
  whyimg1,
  whyimg2,
  whyimg3,
  whyimg4,
  Leaf4,
  Leaf3,
  Leaf2,
  Leaf6,
  Experience,
  Commitment,
  // Facilities
} from "../assets";
import Whyuscard from "./card/Whyuscard";
import Facilities from "../assets/WhyUs/facilities.svg";
const Whyus = () => {
  return (
    <>
      <div className="grid grid-cols-2 my-16">
        <div className="relative grid grid-cols-2 gap-4 my-32">
        <img className="absolute left-[60px] top-[-150px]" src={Leaf5} alt="" />
        <img className="absolute top-[220px] right-[-60px]" src={Leaf6} alt="" />
        <div className="col-start-1 grid-rows-3 absolute left-[170px]">
              <img className="row-span-2" src={whyimg1} alt="" />
              <img className="mt-3" src={whyimg2} alt="" />
          </div>
          <div className="col-start-2 grid-rows-3 absolute xs:right-[120px] sm:right-[120px] md:right-[130px] lg:right-[170px]">
              <img className="mb-3" src={whyimg3} alt="" />
              <img className="row-span-2" src={whyimg4} alt="" />
          </div>
        </div>

        <div className=" my-5 flex-col justify-end p-8">
          <div className="flex justify-center flex-row gap-2">
            <h2 className="text-6xl leading-[90px] font-bold  text-transparent inline-block bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text">Why Choose us? </h2>
          </div>
          <p className="ml-[-50px] text-center text-[#818181] text-[1.1rem] leading-[21px] font-normal mb-10">
            Our platform is built by psychiatrists, psychologists and mental health experts with immense global experience.
          </p>
          <div className="cards px-6">
            <Whyuscard
              style={{marginRight : "18px"}}
              image={Experience}
              title="Experience"
              description="Help you expand your skills and knowledge in mental health care by providing internship programs and working alongside experienced professionals committed to providing the highest level of care."
            />
            <Whyuscard
              image={Commitment}
              title="Commitment"
              description="We are committed to providing personalized care tailored to meet your unique needs, and we're dedicated to supporting you every step of your mental health journey."
            />
            <Whyuscard
              image={Facilities}
              title="Facilities"
              description="Experience the convenience and comfort of our state-of-the-art facilities, designed to provide a comfortable and welcoming environment to support your mental health journey."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyus;



{/* <div className="flex flex-col ml-[150px]">
<div className="flex flex-row gap-4 w-[80%] justify-between pb-3 ">
   <img
    src={Leaf3}
    className="absolute inset-0 w-40 h-40 object-cover pt-[900px]"
  /> 
  <img src={whyimg1} className="object-cover w-[70%] rounded-3xl" />
  <img src={whyimg2} className="object-cover w-[70%] h-[70%] " />
</div>
<div className="flex flex-row gap-4 w-[80%] justify-between">
  <img
    src={whyimg3}
    className="object-cover w-[189px]
        h-[196px] rounded-3xl"
  />
  <div className="relative">
     <img
      src={Leaf1}
      className="absolute inset-0  object-cove ml-[140px] 
        "
    /> 
    <img
      src={whyimg4}
      className="object-cover relative z-10 w-[600px] h-[260px] rounded-3xl"
    />
  </div>
</div>
</div> */}