import React from "react";
import { img1, img2, img3, img4, lowerimg } from "../assets";

const Aboutus = () => {
  return (
    <section>
      <div className="flex flex-col gap-10">
        {/*para*/}
        <div className="flex justify-center">
          <p className="text-center w-full md:w-[630px] text-4xl md:text-6xl font-bold text-transparent inline-block bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text">
            Breaking Barriers to Mental Health Care: The Peacify Revolution
          </p>
        </div>

        {/*images*/}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <img src={img1} className="max-w-xs" />
          <div className="flex flex-col gap-4">
            <img src={img2} className="max-w-xs" />
            <img src={img3} className="max-w-xs" />
          </div>
          <img src={img4} className="max-w-xs" />
        </div>

        {/* */}
        <div className="flex justify-center items-center">
          <div className="bg-[#E9FBF8] flex flex-col justify-center w-full lg:w-[60%] items-center">
            <div className="mt-10 lg:mt-20">
              <h1 className="text-4xl lg:text-6xl font-bold text-transparent inline-block bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text text-center">
                Our Story
              </h1>
            </div>
            <div className="flex justify-center text-center mx-6 lg:mx-16">
              <p className="text-base lg:text-lg mt-6 text-justify">
                Peacify is a digital mental health platform that aims to
                revolutionize the way people access and receive mental health
                care. Our mission is to provide affordable, accessible, and
                high-quality mental health care to anyone, anywhere, at any
                time. At Peacify, we believe that everyone deserves access to
                mental health care, and that it should not be a luxury for the
                privileged few. We understand that seeking mental health care
                can be difficult and overwhelming, which is why we have created
                a safe and supportive environment for people to receive the help
                they need.Our team of mental health professionals, technology
                experts, and business leaders work together to ensure that our
                platform is accessible, user-friendly, and effective. We use the
                latest technology and evidence-based practices to deliver
                personalized and holistic mental health care that meets the
                unique needs of each individual.
              </p>
            </div>
            <img
              src={lowerimg}
              className="my-8 lg:my-20 w-full lg:w-[60%] mx-auto"
              alt="Peacify"
            />
          </div>
        </div>

        {/* */}
        <span className="my-10 md:mx-60 text-4xl  md:text-6xl font-bold text-transparent inline-block bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text">
          Our Values
        </span>

        <div className="flex flex-col lg:flex-row justify-center gap-4 mb-10">
          <div className="bg-[#B3F0E8] flex flex-col items-center justify-center lg:w-[317px]">
            <span className="mx-4 lg:mx-28">lorem ipsum</span>
            <p className="mx-4 my-6 lg:mx-7 lg:my-10">
              Lorem ipsum dolor sit amet consectetur. Et in eget interdum turpis
              ipsum quam. Dictum egestas nullam fermentum luctus integer sed.
            </p>
          </div>
          <div className="bg-[#B3F0E8] flex flex-col items-center justify-center lg:w-[317px]">
            <span className="mx-4 lg:mx-28">lorem ipsum</span>
            <p className="mx-4 my-6 lg:mx-7 lg:my-10">
              Lorem ipsum dolor sit amet consectetur. Et in eget interdum turpis
              ipsum quam. Dictum egestas nullam fermentum luctus integer sed.
            </p>
          </div>
          <div className="bg-[#B3F0E8] flex flex-col items-center justify-center lg:w-[317px]">
            <span className="mx-4 lg:mx-28">lorem ipsum</span>
            <p className="mx-4 my-6 lg:mx-7 lg:my-10">
              Lorem ipsum dolor sit amet consectetur. Et in eget interdum turpis
              ipsum quam. Dictum egestas nullam fermentum luctus integer sed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
