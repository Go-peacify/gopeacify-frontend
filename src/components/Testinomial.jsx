import React from "react";
// import Slider from "./Slider";
import Swipers from "./testimonialSwipers";
import { person1, TestimonialLeftBlob, TestimonialRightBlob, Star } from "../assets";

const Testinomial = () => {
  return (
    <>
      <div className="item-center justify-center p-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="pb-4 text-[4rem] leading-[100px] font-bold text-transparent inline-block bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text">
            What Our Client's Say
          </h1>
          <p className="text-center text-2xl text-[#383838] opacity-80 w-[800px]">Hear from those who have used our mental health resources and support by exploring this section.</p>
        </div>
      </div>

       {/* swipper */}
       <div className="w-full flex justify-center mb-6 relative overflow-x-hidden h-[400px]">
       {/* bg */}
       <img src={TestimonialLeftBlob} alt="" className="absolute left-[-60px]" style={{zIndex : 0}} />
       <img src={TestimonialRightBlob} alt="" className="absolute right-[-40px] z-10" />
            {/* card */}
                <div className="card relative rounded-lg shadow-md h-[300px] min-w-[300px] lg:w-[800px] p-6" style={{zIndex : 10000}}>
                {/* top row */}
                    <div className="flex justify-between">
                      {/* left side */}
                      <div className="flex"> 
                          <img className="object-cover w-[80px] h-[80px] rounded-[50%]" src={person1} alt="img" />
                          <div className="ml-4 mt-2">
                            <p className="font-medium text-lg">name</p>
                            <p>Date</p>
                          </div>
                      </div>
                      {/* Right side */}
                      <div className="flex gap-2">
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                      </div>
                    </div>
                    {/* bottom row */}
                    <div className="pt-8">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam quo ducimus atque harum tempora rerum inventore cum, cumque voluptas, adipisci at, amet pariatur corporis aut ipsa fugiat recusandae placeat.</p>
                    </div>
                </div>
            </div>
      {/* <Swipers /> */}
    </>
  );
};

export default Testinomial;
