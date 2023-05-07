import React from "react";
import { test1, test2, test3, test4, test5, linkimg, plant } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const Testinomialimg = () => {
  return (
    <div className="testimonial-bg p-8">
      <div className="flex w-full">
        <div className="w-1/2">
          <div className="relative">
            <img className=" pl-[400px] pt-28" src={test1}></img>
            <img className="pl-48" src={test2}></img>
          </div>
          <div className="flex flex-row ">
            <img className="pl-40 pt-10 object-contain" src={test3}></img>
            <img className="pl-20 object-contain" src={linkimg}></img>
            <img className="pl-[109px] object-contain" src={test4}></img>
            {/* <img className="pl-[650px] object-contain  z-20" src={plant}></img> */}
          </div>
          <div
            className="flex flex-row
          "
          >
            <img className="pl-[400px] mb-10" src={test5}></img>
          </div>
        </div>
        <div className="w-1/2">
          {/*testinomial card*/}
          <div className="flex flex-col">
            <div className="flex mt-36 justify-center">
              <h1 className="text-black font-bold">Our </h1>
              <h1 className="text-[#52D0C2] font-bold">Testimonials</h1>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mr-10 mt-10 br-0 h-72  w-11/12">
              <div className="flex items-center">
                <div className="w-1/3">
                  <img
                    className="ml-12 mt-3 rounded-l-full w-28 h-28"
                    src={test1}
                    alt="alt"
                  />
                </div>
                <div className="mt-3 w-2/3 py-4">
                  <p className="text-gray-800 font-bold text-xl mb-2">
                    Jane Doe
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                    Full stack developer
                  </p>
                  <p className="text-gray-400 text-base  w-64">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className=" pl-40 text-2xl  ml-20  text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-2xl text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-2xl text-blue-500 hover:text-blue-700"
                  />
                </a>
                <a href="#" className="text-white ">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-2xl  text-blue-500 hover:text-blue-700"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testinomialimg;
