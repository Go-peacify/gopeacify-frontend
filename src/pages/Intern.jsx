import React from "react";

import { useState, useEffect } from "react";
import {
  Focus,
  Passion,
  Provision,
  Support,
  Vision,
  grubimg,
  image1,
  image2,
  image3,
  slider,
  Img6, Img8
} from "../assets";

const Intern = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      <div className="flex">
        <div className="flex flex-col justify-center items-center  w-[75%]">
          <span className="font-bold text-6xl  leading-20 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Looking for an Internship?
          </span>
          <p className="text-[#383838]  w-[766px]">
            Mental health internships can provide valuable insight into the
            industry. As an intern in a mental health company, you will learn
            from experienced professionals and work alongside them. In this way,
            you will be able to provide assistance to individuals who are
            experiencing mental health problems. You may be involved in a
            variety of tasks, such as conducting research, assisting with
            therapy sessions, organizing support groups, or managing social
            media accounts. In addition to gaining valuable experience.
          </p>
          <div className="flex justify-center items-center pt-10">
            <button className="px-10 py-4  text-black border-0 bg-lightcyan shadow-md tracking-widest uppercase text-sm transition-all duration-500 ease-in-out hover:bg-green-600 hover:text-white focus:outline-none active:bg-purple-600 active:shadow-none active:translate-y-2">
              left find yours
            </button>
          </div>
        </div>
        <div className="w-1/3 ml-[82px]">
          <img src={image3}></img>
        </div>
      </div>

      <div className="flex justify-center mb-16 ">
        <div className="mt-32 relative w-[35%]">
          <img className="ml-96 mt-52" src={image2} alt="" />
          <img className="absolute top-0 ml-36 z-10" src={image1} alt="" />
        </div>
        <div className="w-[65%] md:p-10 text-black items-center flex flex-col justify-between ">
          <h1
            style={{ fontFamily: "Raleway" }}
            className="font-bold text-7xl bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Why Peacify?
          </h1>
          <div className="flex items-center justify-center w-[78.21px] h-[75px] rounded-full border-2 border-[#818181]">
            <span className="font-bold text-black text-5xl ">1</span>
          </div>
          <div className="flex flex-col items-center justify-center mb-4 text-gray-500 h-[63px] w-[580px]">
            <p className="text-[#A4A4A4] mt-14 flex flex-col text-center">
              <span
                className="inline-block align-middle"
                style={{ width: "580px" }}
              >
                Peacify can help mental health providers offer treatment to
                people in
              </span>
              <span
                className="inline-block align-middle"
                style={{ paddingLeft: "2rem" }}
              >
                remote areas and to people
              </span>
              <span
                className="inline-block align-middle"
                style={{ paddingLeft: "2rem" }}
              >
                in times of sudden need.
              </span>
            </p>
          </div>
          <div class="mt-12 flex items-center justify-center w-[78.21px] h-[75px] rounded-full border-2 border-black">
            <span className="font-bold text-black text-5xl ">2</span>
          </div>
          <div className="flex flex-col items-center justify-center mb-4 text-gray-500 h-[63px] w-[580px]">
            <p className="text-[#A4A4A4] mt-14 flex flex-col text-center">
              <span
                className="inline-block align-middle"
                style={{ width: "580px" }}
              >
                Peacify gives users a user ID and a system-created avatar. Since
                the
              </span>
              <span
                className="inline-block align-middle"
                style={{ paddingLeft: "2rem" }}
              >
                meetings are encrypted, Peacify ensures the user's privacy.{" "}
              </span>
            </p>
          </div>
          <div class="mt-12 flex items-center  justify-center w-[78.21px] h-[75px] rounded-full border-2 border-black">
            <span className="font-bold text-black text-5xl ">3</span>
          </div>
          <div className="flex flex-col items-center justify-center  text-gray-500 h-[63px] w-[580px]">
            <p className="text-[#A4A4A4] mt-14 flex flex-col text-center">
              <span
                className="inline-block align-middle"
                style={{ width: "580px" }}
              >
                Since it is an online help platform, it is convenient to use.
                <span
                  className="inline-block align-middle"
                  style={{ paddingLeft: "2rem" }}
                >
                  The treatment can be done anytime and anywhere. It is also
                  very helpful for those who have difficulty getting
                  face-to-face appointments.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex  mx-auto w-11/12 md:w-full mb-44 ml-48">
        <h2
          className="absolute left-1/2 transform -translate-x-1/2 font-medium text-4xl md:text-6xl text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          style={{ fontFamily: "Raleway" }}
        >
          Want to know what it's like to work at{" "}
          <span className="font-bold">PEACIFY</span>
        </h2>
      </div>

      <div className="flex w-full m-auto  items-center my-48 gap-8">
        <div className="items-center flex flex-col">
          <img className="w-[100px] h-[100px]" src={Support} alt="element 1" />
          <h2 className="mt-12 text-center text-lg text-black font-medium">
            kill deadlines, not your appetite
          </h2>
          <p
            style={{ width: "209px", height: "39px" }}
            className="text-sm mt-8  text-gray-500 "
          >
            no work timings. because you can’t time a creative process
          </p>
        </div>
        <div className="items-center flex flex-col">
          <img className="w-[100px] h-[100px]" src={Focus} alt="element 1" />
          <h2 className="mt-12 text-center text-lg text-black font-medium">
            kill deadlines, not your appetite
          </h2>
          <p
            style={{ width: "209px", height: "39px" }}
            className="text-sm mt-8  text-gray-500 "
          >
            no work timings. because you can’t time a creative process
          </p>
        </div>
        <div className="items-center flex flex-col">
          <img
            className="w-[100px] h-[100px]"
            src={Provision}
            alt="element 1"
          />
          <h2 className="mt-12 text-center text-lg text-black font-medium">
            kill deadlines, not your appetite
          </h2>
          <p
            style={{ width: "209px", height: "39px" }}
            className="text-sm mt-8  text-gray-500 "
          >
            no work timings. because you can’t time a creative process
          </p>
        </div>
        <div className="items-center flex flex-col">
          <img className="w-[100px] h-[100px]" src={Passion} alt="element 1" />
          <h2 className="mt-12 text-center text-lg text-black font-medium">
            kill deadlines, not your appetite
          </h2>
          <p
            style={{ width: "209px", height: "39px" }}
            className="text-sm mt-8  text-gray-500 "
          >
            no work timings. because you can’t time a creative process
          </p>
        </div>
        <div className="items-center flex flex-col">
          <img className="w-[100px] h-[100px]" src={Vision} alt="element 1" />
          <h2 className="mt-12 text-center text-lg text-black font-medium">
            kill deadlines, not your appetite
          </h2>
          <p
            style={{ width: "209px", height: "39px" }}
            className="text-sm mt-8  text-gray-500 "
          >
            no work timings. because you can’t time a creative process
          </p>
        </div>
      </div>
      <div className="">
        <h1
          style={{ fontFamily: "Raleway" }}
          className="font-bold text-7xl bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent  w-[480px] ml-60 "
        >
          Listen to their stories.
        </h1>
        {/* <div className=" mt-[-60px]">
          <img
            src={slider}
            className="relative top-0 mr-[190px] mt-40 right-0 z-10"
          />
          <img src={grubimg} className="relative z-0 float-right" />
        </div> */}
        <img src={grubimg} className="absolute right-0 z-0 " />
          <div className='w-[80%] mx-auto bg-transparent relative rounded-[2em] ml-60  overflow-hidden my-20'>
            <img src={Img6} className=' w-[989px]' />
            <div className='w-[989px] h-full rounded-[2em] absolute top-0 z-20 bg-gradient-to-r  from-[#525C5A] to-[#2B2D2D] opacity-50'></div>
            
          </div>
        
      </div>
    </>
  );
};

export default Intern;
