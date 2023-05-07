import React from "react";
import {LeftBlob, RightBlob} from '../assets'

const Internship = () => {
  return (

    <section id="internship" className="my-16 py-48 h-[800px] relative z-10 overflow-hidden">
    <img className="absolute right-[-150px] top-[-10px]" src={RightBlob}></img>
    <img className="absolute left-[-150px]" src={LeftBlob}></img>
 
      <div className="flex justify-center items-center flex-col my-4">
        <p className="text-6xl leading-[85px] font-bold text-transparent inline-block bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text">Looking for an internship?</p>
        <p className="text-2xl px-4">Upload your CV
          and make a positive impact on peoples life by joining our  internship program!</p>
        <button className="mt-8 font-bold py-3 px-8 tracking-widest text-sm capitalize text-[#fff] bg-[#2FC4B1] border-none rounded-[12px] shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-lightcyan hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0">
          Get Started
        </button>
      </div>

    </section>

    // <div className="flex pt-[399px] mb-[699px] items-center justify-center h-screen">
    //   <div className="flex flex-col itens-center justify-center">
    //     <div className="rounded-full  flex items-center justify-center">

    //       <p>Looking for an internship?</p>
    //       <p>Upload your CV
    //         and make a positive impact on peoples life by joining our  internship program!</p>
    //       <button className="font-bold py-3 px-8 tracking-widest text-sm capitalize text-[#fff] bg-[#2FC4B1] border-none rounded-[12px] shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-lightcyan hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0">
    //         Get Started
    //       </button>
    //     </div>
    //     <div className="items-center items=center justify-center ml-[250px] pt-3">
    //       <span className="text-3xl p-3 text-black">Upload Your</span>
    //       <span className="text-3xl text-[#289C90]">CV</span>
    //     </div>
    //     <div className="items-center justify-center ml-[130px] pt-3">
    //       <span className="text-3xl p-3 text-black">
    //         and have a chance to get
    //       </span>
    //       <span className="text-3xl text-[#289C90]">hired!</span>
    //     </div>
    //     <div className="p-4 rounded-full text-[20px] flex items-center justify-center">
    //       <button className="inline-block  relative h-[55px] w-[173px] px-6 py-2 bg-[#B4F0E933] text-black font-sans text-base text-center text-indent-15 border-none  font-bold transition-colors duration-300 ease-in-out hover:bg-[#289C90] hover:text-white">
    //         Upload
    //       </button>
    //     </div>
    //     z
    //   </div>
    // </div>
  );
};

export default Internship;
