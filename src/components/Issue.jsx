import React from "react";

{
  /*import { cloud } from "../assets";
import { issues } from "../constants";
import IssueCard from "../components/IssueCard";


const Issue = () => {
  return <div className=" mt-8 ">
    
    <img src={cloud} alt="cloud" className=" items-end -mt-12 absolute pb-12 right-24 "></img>
  
    <div className="bgissue w-[1181px] h-[237px] "><h1 className=" text-[#232323] font-medium text-[76px] pt-20 pl-56"  >Facing any issue?</h1></div>
      <div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container px-40 relative z-[1]">
    {issues.map((card) => <IssueCard key={card.id} {...card} />)}
  </div>
  </div>
  <div className=" flex flex-col items-center justify-center mt-5">
  <button type="button" className="w-[240px] h-[65px] border-black justify-center outline-primary rounded-full font-semibold ">
    Explore All
  </button>
  </div>

 
  </div>;*/
}

import Card from "./Card";
import {
  Anxiety,
  Depression,
  Confusion,
  Confusion1,
  OCD,
  Stress,
  Facing,
  EasyAccess, 
  Effective, 
  Safe,
  Secure, 
  Community,
} from "../assets";
const Issue = () => {
  const data = [
    { name: Anxiety, text: "Anxiety" },
    { name: Depression, text: "Depression" },
    { name: Confusion, text: "Confusion" },
    { name: Confusion1, text: "Confusion" },
    { name: OCD, text: "OCD" },
    { name: Stress, text: "Stress" },
  ];
  return (
    <>
    <div className="flex flex-col  justify-between w-[80%] my-8 m-auto">
      <div className="relative flex justify-left items-center ">
        <p className="text-[#85CDB2] text-[4rem] font-bold text-transparent inline-block bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text">Facing any issue ?</p>
      </div>
      <p className="text-black">
       Discover engaging mental health resources, including articles, videos, self-assessments, and interactive tools, to support your journey towards better mental health.
      </p>
    </div>
    <div className="issues-gradient-bg py-1 px-32">
        <div className="grid grid-cols-3 gap-6 my-14">
          {data?.map((db) => (
            <div className="  cursor-pointer">
              <Card image={db?.name} text={db?.text} />
            </div>
          ))}
        </div>
          <div className=" text-center ">
          <div className="p-4 rounded-full flex items-center justify-center">
            <button className="font-bold py-3 px-8 tracking-widest text-sm capitalize text-[#fff] bg-[#2FC4B1] border-none rounded-[12px] shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-lightcyan hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <section id="issues" className="p-12 flex justify-center flex-col items-center">
        <p className="text-center font-bold text-[4rem] w-[80%]"><span className="text-[#2FC4B1]">Peacify</span> mental health experts specialise in <span className="text-[#2FC4B1]">treating a variety</span> of conditions</p>
        <div className="flex justify-center flex-wrap gap-4 mt-10 px-12">
          <div className="text-lg flex justify-center font-medium rounded-full bg-[#B3F0E8] px-12 py-4">
              Anxiety
          </div>    
          <div className="text-lg flex justify-center font-medium rounded-full bg-[#B3F0E8] px-12 py-4">
          Personality disorders
          </div>    
          <div className="text-lg flex justify-center font-medium rounded-full bg-[#B3F0E8] px-12 py-4">
          Depression
          </div>    
          <div className="text-lg flex justify-center font-medium rounded-full bg-[#B3F0E8] px-12 py-4">
          Eating disorders
          </div>    
          <div className="text-lg flex justify-center font-medium rounded-full bg-[#B3F0E8] px-12 py-4">
          POCD
          </div>    
          <div className="text-lg flex justify-center font-medium rounded-full bg-[#B3F0E8] px-12 py-4">
          Trauma
          </div>    
          <div className="text-lg flex justify-center font-medium rounded-full bg-[#B3F0E8] px-12 py-4">
          OCD
          </div>    
          <div className="text-lg flex justify-center font-medium rounded-full bg-[#B3F0E8] px-12 py-4">
          ADHD
          </div>    
          <div className="text-lg flex justify-center font-medium rounded-full bg-[#B3F0E8] px-12 py-4">
          Stress
          </div>    
        </div>

        
      </section>
      <div className="w-full bg-[#F0FCFB] flex gap-20 justify-center py-4">
            <img className="h-[100px] object-cover"  src={Safe} alt="" />
            <img className="h-[100px] object-cover"  src={Secure} alt="" />
            <img className="h-[100px] object-cover" src={Effective} alt="" />
            <img className="h-[100px] object-cover"  src={EasyAccess} alt="" />
            <img className="h-[100px] object-cover"  src={Community} alt="" />
      </div>
      </>
  );
};

export default Issue;
