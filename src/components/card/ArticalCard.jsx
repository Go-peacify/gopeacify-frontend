import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const ArticalCard = () => {
  const arr = [
    {
      image:
        "https://images.unsplash.com/photo-1644083292462-f825819a4c62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      content:
        "What do you feel passionate about? Do you have a special talent that you'd like to practice more often or share with others.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600965962102-9d260a71890d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      content:
        "What do you feel passionate about? Do you have a special talent that you'd like to practice more often or share with others.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
      content:
        "What do you feel passionate about? Do you have a special talent that you'd like to practice more often or share with others.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      content:
        "What do you feel passionate about? Do you have a special talent that you'd like to practice more often or share with others.",
    },
  ];
  return (
    <div
      className="flex justify-between mt-8
    "
    >
      {arr.map((db) => (
        <div className="w-[20%] flex flex-col gap-4">
          <div
            className="w-full overflow-hidden"
            style={{ borderBottomRightRadius: "5em" }}
          >
            <img className="w-full h-48" src={db?.image} />
          </div>
          <div className="flex justify-between">
            <p>11 jan 2022</p>
            <p className="text-black">22x views</p>
          </div>
          <p className="text-sm">{db?.content} </p>
        </div>
      ))}
    </div>
  );
};

export default ArticalCard;
