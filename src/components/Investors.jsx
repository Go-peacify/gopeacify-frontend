import React from "react";
import { s1, s2, s3, s4, s5 } from "../assets";
export const Investors = () => {
  return (
    <div className="my-20 items-center">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 p-5 justify-center">
        <img src={s1} className="h-[40px] px-16 my-5 self-center" alt="dummy"></img>
        <img src={s2} className="h-[40px] px-16 my-5" alt="dummy"></img>
        <img src={s3} className="h-[40px] px-16 my-5 " alt="dummy"></img>
        <img src={s4} className="h-[40px] px-16 my-5" alt="dummy"></img>
        <img src={s5} className="h-[40px] px-16 my-5" alt="dummy"></img>
      </div>
    </div>
  );
};
