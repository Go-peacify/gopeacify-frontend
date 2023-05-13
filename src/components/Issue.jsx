import React from "react";
import Card from "./Card";
import {
  Anxiety,
  Depression,
  Confusion,
  Confusion1,
  OCD,
  Stress,
  Facing,
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
      <div className="md:flex md:flex-col  md:justify-between w-[70%] md:w-[80%] m-5 md:my-8 md:m-auto">
        <div className="relative md:flex md:justify-left items-center ">
          <p className="w-[390px] md:w-full text-[#85CDB2] text-[4rem] font-bold text-transparent inline-block bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text">
            Facing any issue ?
          </p>
        </div>
        <p className="text-black  w-[390px] md:w-full ">
          Discover engaging mental health resources, including articles, videos,
          self-assessments, and interactive tools, to support your journey
          towards better mental health.
        </p>
      </div>
      <div className="issues-gradient-bg p-5 h-auto sm:py-1 sm:px-32  sm:w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-14">
          {data?.map((db) => (
            <div className=" w-60  cursor-pointer">
              <Card image={db?.name} text={db?.text} />
            </div>
          ))}
        </div>
        <div className=" text-center ">
          <div className="p-4 rounded-full flex items-center md:justify-center">
            <button className="font-bold py-3 px-8 tracking-widest text-sm capitalize text-[#fff] bg-[#2FC4B1] border-none rounded-[12px] shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-lightcyan hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Issue;
