import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Med,
  Line,
  Male,
  Female,
  Health,
  Profit,
  Quality,
  DoctorName,
  DoctorNameBg,
  Doctor,
  Rectangle,
} from "../../assets";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="flex w-[90%] m-auto my-20">
      <div className="w-45% m-auto">
        <div className="flex flex-col gap-4">
          <h6 className="text-lg font-semibold">Our Doctors</h6>
          <h6 className="text-5xl font-semibold  inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#45BDBF] to-[#005C7B]">
            Qualified Doctors
          </h6>
          <h6 className="w-[60%] font-medium">
            Handled directly by general doctors and professional and experienced
            specialists doctors.
          </h6>
        </div>
        <div className="w-full">
          <div className="relative flex w-[70%]">
            <img
              src={images[currentImageIndex].image}
              className=""
              alt="Doctor"
            />
            {/* <img src={DoctorNameBg} className='absolute z-20 w-[92.4%] top-5 left-5' /> */}
            <div className="absolute z-40 text-white top-12 left-12 flex flex-col flex-wrap gap-2">
              <h6>Orthpedy</h6>
              <h6 className="text-4xl font-semibold">Dr.James</h6>
              <h6 className="text-4xl font-semibold">Wellington</h6>
              <h6>Read More</h6>
            </div>
          </div>
          <div className="flex w-[50%] justify-center">
            <Link to="/alldoctor">
              <button className="text-white rounded-3xl bg-gradient-to-r from-[#70ECEC] to-[#5C8A99]">
                View all Doctor
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[40%] m-auto ">
        <div className="w-[92%] m-auto">
          <img
            src={images[currentImageIndex].image}
            className="w-full"
            alt="Doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
