import { patient } from "../../assets/index";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  const data = [
    {
      image: { patient },
      name: "John kennady",
      occupation: "Full stack developer",
      tag: "developer",
      content:
        "I've been to a few different places before, nothing compares to this. this is a best place for lifecare hospital",
    },
    {
      image: { patient },
      name: "John kennady",
      occupation: "Full stack",
      tag: "developer",
      content:
        "I've been to a few different places before, nothing compares to this. this is a best place for lifecare hospital",
    },
    {
      image: { patient },
      name: "John kennady",
      occupation: "Full stack developer",
      tag: "developer",
      content:
        "I've been to a few different places before, nothing compares to this. this is a best place for lifecare hospital",
    },
  ];
  return (
    <section className="relative py-10 lg:py-20 overflow-hidden ">
      <div className="relative container px-4 mx-auto ">
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            style: { marginTop: "40px" },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((db) => (
            <SwiperSlide>
              <div className="max-w-lg lg:max-w-7xl mx-auto">
                <div className="flex flex-row  -mx-4 items-center bg-[#F8F8F8]">
                  <div className="lg:max-w-md xl:max-w-lg">
                    <img className="ml-10 my-4 " src={patient} alt="" />
                  </div>
                  <div className=" text-[#525252] mx-4  flex flex-col ">
                    <h2 className="text-3xl font-semibold">{db?.name}</h2>
                    <h2 className="text-xl">{db?.occupation}</h2>
                    <h2 className="text-xl">{db?.tag}</h2>
                  </div>
                  <div className="w-full ml-56 lg:w-1/2 px-4">
                    <div className="max-w-lg w-[747px] h-[141px]">
                      <p className="text-4xl font-semibold text-gray-900 mb-5">
                        &ldquo;{db?.content} &rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
