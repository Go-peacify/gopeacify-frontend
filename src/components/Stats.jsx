import React from "react";
import { trusted, insured, hundred } from "../assets";
import Counter from "../Utils/Counter";
export const Stats = () => {
  return (
    <div className="items-center">
      <div className="flex p-10 justify-center">
        <div className="flex flex-row ">
          <div className="bg-[#52D0C2] h-[187px] w-[270px] mx-5 rounded-3xl  mb-2">
            <p className=" flex flex-col py-8 ">
              <span className="font-semibold text-center text-[#464646] text-[60px]">
                24/7
              </span>
              <h3 className="text-[#464646] text-center">Online Support</h3>
            </p>
          </div>
          <div className="bg-[#B4F0E933] h-[187px] w-[270px] mx-5 rounded-3xl">
            <p className=" flex flex-col py-8 ">
              <span className="font-semibold text-center text-[#464646] text-[60px]">
                {/* <Counter /> */}
                100+
              </span>
              <h3 className="text-[#464646] text-center">Doctors</h3>
            </p>
          </div>
          <div className="bg-[#52D0C2] h-[187px] w-[270px] mx-5 rounded-3xl ">
            <p className=" flex flex-col py-8 ">
              <span className="font-semibold text-center text-[#464646] text-[60px]">
                1M+
              </span>
              <h3 className="text-[#464646] text-center">Active Patients</h3>
            </p>
          </div>
          <div className="bg-[#B4F0E933] h-[187px] w-[270px] mx-5 rounded-3xl">
            <p className=" flex flex-col py-8 ">
              <span className="font-semibold text-center text-[#464646] text-[60px]">
                5M+
              </span>
              <h3 className="text-[#464646] text-center">Interested</h3>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
