import React from "react";
import { demodoc } from "../../assets";

const DoctorCard = () => {
  return (
    <div className="w-60 h-96 border-[1px]  rounded-extraLarge  rounded-br-[100px]  p-2 border-gray-400 flex flex-col justify-between">
      <div>
        <div className="mx-2 rounded-lg overflow-hidden relative">
          <img src={demodoc} />
          <div className="absolute bottom-0 p-2 font-medium bg-white">
            <p>Therapist</p>
          </div>
        </div>
        <h2 className="font-semibold mt-4 ml-2 ">Dr. A. Singh</h2>
        <div className="flex flex-col">
          <span className="px-2 text-[12px] w-60 text-gray-500">
            6+ yrs of experience
          </span>
          <span className="px-2 text-[12px] w-60 text-gray-500">
            Expertise : Yoga, Work-life{" "}
          </span>
          <span className="px-2 text-[12px] w-60 text-gray-500">
            Speaks : German, English
          </span>
        </div>
      </div>
      <div className="items-end">
        <button className="text-white rounded-[20px] bg-[#008080] hover:bg-lightcyan outline-btn w-28 h-9 px-2 text-sm py-1  ">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
