import React from "react";
import { Landing, Heart } from "../assets";
import { useEffect, useState } from "react";
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <section
      id="hero"
      className="grid grid-cols-2 bg-bghero dark:bg-bghero mx-12 rounded-3xl min-h-[700px] pt-20 relative"
    >
      <div>
        <img
          className="absolute bottom-[-120px] h-[700px] scale-110"
          src={Landing}
        />
      </div>
      <div className="p-24">
        <p className="text-8xl font-bold leading-[122px] mb-3 text-transparent inline-block bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text">
          Peacify
        </p>
        <p className="flex text-5xl">
          Humans for human{" "}
          <span>
            <img src={Heart} alt="Heart" />
          </span>
        </p>
        <p className="text-[1.1rem] mt-6 text-justify">
          We fuse the powers of self-nurturing, expert guidance, and social
          connectivity to offer you a mental health care experience that is
          second to none. Tailoring our approach to your needs ensures you
          receive the finest care to enhance your well-being and elevate your
          life.
        </p>
        <div className="button rounded-xl mt-14 ">
          <button className="w-[300px] h-[62px] rounded-[32px] text-[1.1rem] bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
            Schedule an appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
