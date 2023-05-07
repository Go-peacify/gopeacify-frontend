import React from "react";
import { pharma, time } from "../assets";
const AboutUs = () => {
  return (
    <div>
      <div className="bgaboutus">
        <div className="float-right py-10 px-5 md:py-16 md:px-10 m-5 md:m-16 bg-white h-auto md:h-[450px] w-full md:w-[500px]">
          <div className="text-center md:text-left">
            <span className="text-black drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) border border-gray-200 tracking-wider px-2 text-sm md:text-base">
              ABOUT US
            </span>
            <h2 className="text-xl font-semibold text-gray-900 mt-3 md:mt-5 mb-3 md:mb-5 text-[30px] md:text-[36px]">
              The Heart And Science Of Medicate Test
            </h2>
            <p className="text-sm md:text-base text-black">
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with
              information highway will close.
            </p>
          </div>
          <div className="w-full text-black">
            <div className="flex flex-col md:flex-row w-full my-3 md:my-5">
              <div className="flex flex-row mb-3 md:mb-0 md:mr-5">
                <img
                  className="h-8 md:h-[59px] mr-2 md:mr-3"
                  src={pharma}
                  alt="pharma"
                />
                <p className="text-xs md:text-sm font-semibold">
                  Multi Speciality <br className="hidden md:block" />
                  Pharma Treatment
                </p>
              </div>
              <div className="flex flex-row md:w-[194px] mb-3 md:mb-0">
                <img
                  className="h-8 md:h-[59px] mr-2 md:mr-3"
                  src={time}
                  alt="time"
                />
                <p className="text-xs md:text-sm font-semibold">
                  24 Hours Medical Service
                </p>
              </div>
            </div>
            <button
              type="button"
              className="bg-btn text-white mt-5 font-bold py-2 px-8 md:py-4 md:px-14 rounded focus:outline-none focus:shadow-outline"
            >
              More About Us
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bgaboutus ">
        <div className="float-right py-16 px-10 m-16 bg-white  h-[450px] w-[500px]">
          <div className="">
            <span className="text-black drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) border border-gray-200 tracking-wider px-2  ">
              ABOUT US
            </span>
            <h2 className="text-xl font-semibold text-gray-900 mt-5 mb-5 text-[30px]">
              The Heart And Science Of Medicate Test
            </h2>
            <p className="text-sm text-black ">
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with
              information highway will close.
            </p>
          </div>
          <div className="w-full text-black">
            <div className="flex flex-row w-full my-5">
              <div className="flex flex-row   h-[59px] ">
                <img className="" src={pharma} alt="pharma" />
                <p className="text-sm font-semibold ml-2 mt-2 ">
                  Multi Speciality <br></br>Pharma Treatment
                </p>
              </div>
              <div className="flex flex-row ml-5  w-[194px] h-[59px]">
                <img className="" src={time} alt="time" />
                <p className="text-sm font-semibold ml-2 mt-2">
                  24 Hours Medical Service
                </p>
              </div>
            </div>
            <button
              type="button"
              className="bg-btn  text-white mt-5 font-bold py-4 px-14 rounded focus:outline-none focus:shadow-outline"
            >
              More About Us
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
