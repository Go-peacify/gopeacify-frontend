import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative 
 w-[2000px] h-[364px] mb-10 border-[5px] mx-auto max-w-md rounded-lg bg-white bg-opacity-50 px-6 py-4 shadow-lg"
      >
        <div className="mb-4 flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Person"
            className="mr-4 h-[70px] w-[72px] rounded-full"
          />
          <div>
            <h3 className="text-lg font-medium">John Doe</h3>
            <span className="text-gray-600">CEO, Company Inc.</span>
          </div>
        </div>
        <p className="mb-4 text-base leading-relaxed text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative 
    w-[2000px] h-[364px] mb-10 border-[5px] mx-auto max-w-md rounded-lg bg-white bg-opacity-50 px-6 py-4 shadow-lg"
      >
        <div className="mb-4 flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Person"
            className="mr-4 h-[70px] w-[72px] rounded-full"
          />
          <div>
            <h3 className="text-lg font-medium">John Doe</h3>
            <span className="text-gray-600">CEO, Company Inc.</span>
          </div>
        </div>
        <p className="mb-4 text-base leading-relaxed text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative 
 w-[2000px] h-[364px] mb-10 border-[5px] mx-auto max-w-md rounded-lg bg-white bg-opacity-50 px-6 py-4 shadow-lg"
      >
        <div className="mb-4 flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Person"
            className="mr-4 h-[70px] w-[72px] rounded-full"
          />
          <div>
            <h3 className="text-lg font-medium">John Doe</h3>
            <span className="text-gray-600">CEO, Company Inc.</span>
          </div>
        </div>
        <p className="mb-4 text-base leading-relaxed text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative 
 w-[2000px] h-[364px] mb-10 border-[5px] mx-auto max-w-md rounded-lg bg-white bg-opacity-50 px-6 py-4 shadow-lg"
      >
        <div className="mb-4 flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Person"
            className="mr-4 h-[70px] w-[72px] rounded-full"
          />
          <div>
            <h3 className="text-lg font-medium">John Doe</h3>
            <span className="text-gray-600">CEO, Company Inc.</span>
          </div>
        </div>
        <p className="mb-4 text-base leading-relaxed text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
