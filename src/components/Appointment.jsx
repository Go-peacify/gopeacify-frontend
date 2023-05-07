import React from "react";

const Appointment = () => {
  return (
    <div className="ml-28 mb-20 rounded-xl text-[#343434] flex justify-center items-center bg-teal-200 bg-opacity-60 w-[1270px] h-[438px]">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-2">Just make an Appointment</h1>
        <p className="text-5xl font-bold mb-8">and motivated</p>
        <button className="mt-8 font-bold py-3 px-8 tracking-widest text-sm capitalize text-[#fff] bg-[#008080] border-none rounded-[30px] shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-lightcyan hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Appointment;
