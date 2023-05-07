import React from "react";
import { contact } from "../../assets";

const Contact = () => {
  return (
    <section className="py-4 pt-14 pb-14 text-white">
      <div className="grid max-w-6xl grid-cols-1  rounded-3xl mx-auto lg:px-8 md:grid-cols-2 md:divide-x bg-[#B3F0E8]">
        <div className="py-6 md:py-0 md:px-6">
          <h3 className="font-medium opacity-80 text-[#464646] mt-14">Need a doctor consulting?</h3>
          <h1 className="text-4xl font-bold text-[#464646] opacity-90">Request a call back Today Now</h1>
          <p className="pt-2 pb-4 text-[#464646] opacity-90">Talk to your mental health professional.</p>
          <div className="space-y-4 flex flex-row">
            <img className="h-[80%] " src={contact} alt="contact"></img>
            <p className="ml-2 text-[#464646] font-medium opacity-90 mt-[-1px]">
              {" "}
              Our Doctors are waiting<br></br>for your service.
            </p>
          </div>
        </div>
        <form className=" flex flex-col py-8 space-y-6 md:px-6 ng-untouched ng-pristine ng-valid">
          <label className="flex">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="text-black px-5 mt-10 block h-[50px] w-[521px] rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-white"
            />
          </label>
          <label className="flex">
            <input
              type="digit"
              placeholder="Your number "
              className="block h-[50px] w-[521px] px-5 rounded-md shadow-sm focus:ring focus:ring-opacity-75 text-black focus:ring-violet-400 dark:bg-white"
            />
          </label>
          <label className="flex">
            <input
              rows="3"
              type="date"
              placeholder="Date"
              className="block px-5 text-black h-[50px] w-[521px] rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-white"
            />
          </label>
          <button
            type="button"
            className="text-white w-56 px-1 py-2 -mt-5 mb-5 text-lg rounded-full focus:ring hover:ring focus:ring-opacity-75 bg-btn dark:text-gray-900 focus:ring-black hover:ring-black"
          >
            Get Start
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
