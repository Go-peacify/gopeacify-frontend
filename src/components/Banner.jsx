import React from "react";
import { trusted, insured, hundred } from "../assets";
export const Banner = () => {
  return (
    <div className="bg-banner  items-center">
      <div className="flex p-2 justify-center">
        <img src={trusted} className="px-32 " alt="dummy"></img>
        <img src={hundred} className="px-28" alt="dummy"></img>
        <img src={insured} className="px-28" alt="dummy"></img>
      </div>
    </div>
  );
};
