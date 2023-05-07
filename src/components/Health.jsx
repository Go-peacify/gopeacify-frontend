import React from "react";
import { bghealth, tsimg, circle } from "../assets";
const Health = () => {
  return (
    <div className="relative bg-[#B4F0E924] w-[1540px] h-[995px]">
      <img
        className="absolute top-0 left-0  z-10 w-[1229px] h-[795px]"
        src={bghealth}
      ></img>
      <img
        className="relative z-20  w-[766px] h-[757px] ml-[543px] top-[240px]"
        src={tsimg}
      ></img>
      <div className="absolute z-30 top-[329px] ml-[607px] text-white  font-semibold">
        <h1
          className="abesolute"
          style={{
            width: "583px",
            height: "185px",
            left: "607px",
            top: "3529px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "64px",
            lineHeight: "77px",
            letterSpacing: "0.02em",
          }}
        >
          Available Health Care Services
        </h1>
        <div className="flex gap-[72px] pt-4">
          <img src={circle}></img>
          <img src={circle}></img>
          <img src={circle}></img>
        </div>
        <button className="mt-20 justify-center ml-[100px] abesolute text-[48px] h-[100px] w-[415px] bg-[rgba(180,240,233,0.2)]">
          See more
        </button>
      </div>
    </div>
  );
};

export default Health;
