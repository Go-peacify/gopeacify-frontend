import React from "react";
import {Landing, Heart} from "../assets";
import { useEffect, useState } from "react";
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <section id="hero" className= "grid grid-cols-2 bg-bghero dark:bg-bghero mx-12 rounded-3xl min-h-[700px] pt-20 relative"> 
        <div>
          <img className="absolute bottom-[-120px] h-[700px] scale-110" src={Landing} />
        </div>
        <div className="p-24">
          <p className="text-8xl font-bold leading-[122px] mb-3 text-transparent inline-block bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text">Peacify</p>
          <p className="flex text-5xl">Humans for human <span><img src={Heart} alt="Heart" /></span></p>
          <p className="text-[1.1rem] mt-6 text-justify">We fuse the powers of self-nurturing, expert guidance, and social connectivity to offer you a mental health care experience that is second to none. Tailoring our approach to your needs ensures you receive the finest care to enhance your well-being and elevate your life.</p>
          <div className="button rounded-xl mt-14 ">
            <button className="w-[300px] h-[62px] rounded-[32px] text-[1.1rem] bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">Schedule an appointment</button>
          </div>
        </div>
    </section>
  );
};

export default Hero;


{/*
<div className="bg-bghero dark:bg-bghero">
<div className="max-w-7xl mx-auto py-2 px-4 sm:py-24 sm:px-6 lg:px-8 flex  ">
  <div className="">
    <p className="mt-2 sm:text-4xl">
      <div className="flex flex-row">
        <h2 className="block text-[60px] text-black ">Trust</h2>
         <h2 className="text-lightcyan text-[80px] ml-5 text-3xl font-extrabold opacity-0 transform translate-y-10 transition duration-1000 ease-out">
          Peacify,
        </h2>
        <h2
          className={`text-3xl text-[80px] font-extrabold text-lightcyan ml-5  transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          Peacify
        </h2>
      </div>

      <span className="block text-black text-[60px] mt-8">you won't</span>
      <span className="block text-black text-[60px] mt-8">
        regret it!
      </span>
    </p>
    <p className="ml-0 mt-12 max-w-prose mx-auto text-xl text-gray-500 w-[590px] h-[120px] l-[135px] ">
      We bring together self-care, professional support, and community
      access to deliver the best quality mental healthcare for your needs.
    </p>
     <div className="mt-12">
      <a
        href="#"
        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-lightcyan hover:bg-lightcyan"
      >
        Book a meeting
      </a>
    </div> 
    <button className="inline-block px-4 py-2 font-bold text-white transition-all duration-200 rounded-md bg-lightcyan hover:bg-gradient-to-r hover:from-green-500 hover:via--500 hover:to-blue-400 transform hover:scale-110 hover:-translate-y-1">
      book a meeting
    </button>
  </div>
  <div>
    <img src={Landing} />
  </div>
</div>
</div>
*/}