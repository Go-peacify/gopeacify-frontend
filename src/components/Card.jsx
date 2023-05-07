import React from "react";

const Card = ({ image, text }) => {
  return (
    <div
      className="
    border-[3px]
    cursor-pointer
    border-solid   
    rounded-xl
    flex 
    flex-col
    w-full
    py-4
    h-full
    justify-center
    hover:bg-lightcyan
    hover:shadow-xl"
    >
      <div className="flex flex-row justify-center w-[200px] h-[100%] m-auto">
        <img src={image} className="w-full h-full" />
      </div>
      <p className="text-center text-black font-semibold">{text} </p>
    </div>
  );
};
export default Card;
