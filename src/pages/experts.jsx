import { Link } from "react-router-dom";
import DoctorCarousel from "../components/Swipers/DoctorCarousel";
import DoctorCard from "../components/card/doctorCard";
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
} from "../assets";
import Testimonials from "../components/Swipers/Testinomials";
import ArticalCard from "../components/card/ArticalCard";
const Experts = () => {
  return (
    <div className="w-full">
      <div className="text-black">
        <div>
          <div className="flex w-full items-center my-20">
            <div className="flex flex-col gap-8 w-[60%] md:w-[40%] m-auto text-center md:text-left">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-lightcyan font-medium">
                    Mental Health Matters
                  </h2>
                  <img src={Med} className="w-10" />
                </div>
                <h4 className="text-black text-5xl">Protect your</h4>
                <h4 className="text-black text-5xl">
                  <span className="text-lightcyan  ">mental health</span> and
                </h4>
                <h4 className="text-black text-5xl">take care of your</h4>
                <h4 className="text-black text-5xl flex item-c ">
                  health{" "}
                  <span>
                    <img className="w-16 " src={Line} />
                  </span>{" "}
                </h4>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <button className="bg-[#008080] rounded-3xl font-bold text-white p-3 hover:bg-lightcyan outline-btn hover:text-black">
                  Make an appointment
                </button>
                <button className="bg-white text-black border-gray-400 p-3 rounded-3xl hover:bg-black outline-btn hover:text-white">
                  Explore more
                </button>
              </div>
            </div>

            <div className="flex w-[40%] m-auto items-center">
              <div className="w-[50%]">
                <img src={Male} />
              </div>
              <div className="w-[50%]">
                <img src={Female} />
              </div>
            </div>
          </div>

          <div
            className="w-[1240px]
h-[217px] rounded-md flex bg-[#B4F0E933] my-20 gap-[108px] text-black m-auto px-8 py-4 justify-center"
          >
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-start md:gap-8 ">
              <div className="flex items-center gap-3 ">
                <div className="bg-white p-4 rounded-full">
                  <img src={Health} className="w-20 md:w-24" />
                </div>
                <h3 className="w-36 md:w-48 text-center md:text-left">
                  Get the best and assured service.
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white p-4 rounded-full">
                  <img src={Profit} className="w-20 md:w-24" />
                </div>
                <h3 className="w-36 md:w-48 text-center md:text-left">
                  Have a good mental health at a price of pizza.
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white p-4 rounded-full">
                  <img src={Quality} className="w-20 md:w-24" />
                </div>
                <h3 className="w-36 md:w-48 text-center md:text-left">
                  24X7 Quality service
                </h3>
              </div>
            </div>
          </div>

          <DoctorCarousel />

          {/* OUr speacialist doctor team */}

          <div className="w-full items-center">
            <h1 className="text-center my-8 font-semibold text-black">
              Our <span className="text-lightcyan">Specialist</span> Doctors
              Team
            </h1>
            <h2 className="text-center mx-auto text-[#5A5A5A] max-w-xl text-sm leading-7">
              Our team of specialized doctors is committed to providing
              personalized and comprehensive care to our patients. With a
              passion for the latest medical advancements, we deliver
              high-quality treatment in a warm and welcoming environment.
            </h2>
            <div className="w-[80%] m-auto flex flex-col items-center md:flex-row md:justify-center lg:justify-between my-8">
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </div>

            <div className="text-center">
              <button
                type="button"
                className="w-32 h-12 text-[18px] text-black outline hover:outline-btn border-btn bg-[#289C8F] hover:text-white justify-center hover:bg-lightcyan outline-btn rounded-full font-semibold mb-5 "
              >
                view all
              </button>
            </div>
          </div>

          {/* Whye you should take our service */}
          <div className="w-[80%] m-auto bg-[#B4F0E933] px-4 md:px-12 py-16 rounded-md my-20">
            <h2 className="text-center text-6xl font-semibold mb-3">Why Us?</h2>
            <h2 className="text-center mx-auto max-w-[650px] text-2xl md:text-2xl text-[#5A5A5A]">
              Discover the power of personalized mental health care with our
              dedicated team of experts committed to helping you achieve your
              goals and improve your well-being.
            </h2>
            <div className="flex flex-col md:flex-row md:justify-around mx-4 my-8">
              <div className="w-[100%] md:w-[40%]">
                <img
                  src={Rectangle}
                  className="w-full md:rounded-br-8em"
                  style={{ borderBottomRightRadius: "8em" }}
                />
              </div>
              <div className="w-[100%] md:w-[50%] flex flex-col justify-between">
                <div className="border-l-2 border-black pl-4">
                  <h2 className="text-[#85CDB2] font-semibold text-4xl md:text-xl">
                    Experience
                  </h2>
                  <h2 className="text-[#5A5A5A] text-2xl md:text-base">
                    Eu sit proin amet quis malesuada vitae elit. Vel consectetur
                    nibh quis ullamcorper quis. Quam enim tortor, id sed
                  </h2>
                </div>
                <div className="border-l-2 border-black pl-4">
                  <h2 className="text-[#85CDB2] font-semibold text-4xl md:text-xl">
                    Commitment
                  </h2>
                  <h2 className="text-[#5A5A5A] text-2xl md:text-base">
                    Eu sit proin amet quis malesuada vitae elit. Vel consectetur
                    nibh quis ullamcorper quis. Quam enim tortor, id sed
                  </h2>
                </div>
                <div className="border-l-2 border-black pl-4">
                  <h2 className="text-[#85CDB2] font-semibold text-4xl md:text-xl">
                    Facility
                  </h2>
                  <h2 className="text-[#5A5A5A] text-2xl md:text-base">
                    Eu sit proin amet quis malesuada vitae elit. Vel consectetur
                    nibh quis ullamcorper quis. Quam enim tortor, id sed
                  </h2>
                </div>
                <div className="border-l-2 border-black pl-4">
                  <h2 className="text-[#85CDB2] font-semibold text-4xl md:text-xl">
                    Relationship
                  </h2>
                  <h2 className="text-[#5A5A5A] text-2xl md:text-base">
                    Eu sit proin amet quis malesuada vitae elit. Vel consectetur
                    nibh quis ullamcorper quis. Quam enim tortor, id sed
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Our special patients say */}
          <div className="w-[90%] m-auto ">
            <h1>
              Our special{" "}
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                patients
              </span>{" "}
              say
            </h1>
          </div>
          <div className="mx-auto px-4 md:px-8 lg:px-16 max-w-[1500px]">
            <Testimonials />
          </div>
          {/* Check our Article */}

          <div className="w-[90%] m-auto my-28 ">
            <h1 className="text-[#525252] w-[90%]">
              Check our <span className="text-[#24A4CC]">Articles</span>
            </h1>
            {/*Artical*/}
            <ArticalCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
