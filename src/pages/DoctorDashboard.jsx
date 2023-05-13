import { useState, React } from "react";
import {
  search,
  chat,
  bell,
  kim,
  doctor,
  incline,
  decline,
  downarrow,
  fever,
  heart,
  cough,
  dots,
} from "../assets";
import { render } from "react-dom";
import Calendar from "react-calendar";
export default function DoctorDashboard() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="px-20 py-10">
      <div className="md:flex md:flex-row h-auto md:h-[60px]">
        <div className="xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[45%] xs:w-[75%] flex">
          <input
            placeholder="Search "
            className="py-4 pl-2 w-[100%] text-black outline-none bg-[#E5E5E5]  border-gray-300 border-[1px] rounded-s-xl"
          />
          <div className="bg-[#E5E5E5] py-4 px-12 rounded-e-xl">
            <img src={search} className="w-6 h-6"></img>
          </div>
        </div>
        <div className=" w-screen md:w-[30%] flex justify-start my-5 md:my-0  md:justify-end mr=0">
          <img src={chat} className="w-6 h-6 ml-4 my-4 "></img>
          <img src={bell} className="w-6 h-6 ml-4 my-4"></img>
          <div className="flex flex-row ml-4 border border-black w-[170px] p-2 rounded-3xl">
            <img src={kim} className=""></img>
            <p className="text-black font-medium ml-2 align-middle text-center py-2">
              Dr Kim
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row sm:py-8">
        <div className="w-[70%] ">
          <div className="flex">
            <h1>
              Good Morning
              <span className=" font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-[#45BDBF] to-[#005C7B]">
                {" "}
                Dr Kim!
              </span>
            </h1>
          </div>
          <div className="h-[350px] md:h-[312px] w-screen md:w-[815px] rounded-3xl my-8 bg-gradient-to-r from-[#B2E6FD] to-[#52D0C2] flex flex-row">
            <div className="w-[60%] ml-10 py-10">
              <h3 className="font-semibold text-3xl">Visits for Today</h3>
              <h1>104</h1>
              <div className=" py-20 flex flex-row gap-10">
                <div className="w-[50%] bg-[#D7F1FC] rounded-2xl">
                  <div className="ml-5 mt-1">
                    <h3 className="font-semibold tracking-wide ">
                      New Patients
                    </h3>
                    <div className="flex flex-row">
                      <div className="w-[45%]">
                        <h1>40</h1>
                      </div>
                      <div className=" py-2 ">
                        <div className="w-20 h-6 shadow-md shadow-slate-500  bg-[#DFFDDD] rounded-3xl  flex flex-row">
                          <div>
                            <h3 className="font-semibold text-center text-[#008000] pl-5">
                              51%
                            </h3>
                          </div>
                          <div className="justify-end">
                            <img
                              src={incline}
                              alt="incline"
                              className="h-1/2 my-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[50%] bg-[#D7F1FC] rounded-2xl">
                  <div className="ml-5 mt-1">
                    <h3 className="font-semibold tracking-wide">
                      Old Patients
                    </h3>
                    <div className="flex flex-row">
                      <div className="w-[45%]">
                        <h1>64</h1>
                      </div>
                      <div className=" py-2 ">
                        <div className="w-20 h-6 shadow-md shadow-slate-500  bg-[#FBC3C3] rounded-3xl  flex flex-row">
                          <div>
                            <h3 className="font-semibold text-center text-[#D30404] pl-5">
                              20%
                            </h3>
                          </div>
                          <div className="justify-end">
                            <img
                              src={decline}
                              alt="incline"
                              className="h-1/2 my-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[45%]  my-8 mx-5   ">
              <img src={doctor} className="  "></img>
            </div>
          </div>
          <div className="md:flex md:flex-row ml-2">
            <div className="w-full md:w-[40%]">
              <div className="inline-flex flex-col space-y-10  justify-end">
                <div className="inline-flex space-x-36 items-center justify-end w-full h-9">
                  <p className="text-2xl font-medium">Patient List</p>
                  <div className="flex space-x-2 items-center justify-end w-20 h-2/3">
                    <p className="text-base text-black text-opacity-60">
                      Today
                    </p>
                    <img
                      src={downarrow}
                      alt="arrow"
                      className="cursor-pointer"
                    ></img>{" "}
                  </div>
                </div>
                <div className="inline-flex space-x-24 items-start justify-start w-full">
                  <div className="relative flex">
                    <div>
                      <div className="w-14 h-14 border rounded-full border-green-600 border-opacity-60">
                        <p className=" m-4 text-base">DJ</p>
                        <div className="w-12 ml-1 mt-1 h-12 absolute left-0 top-0 bg-green-600 bg-opacity-25 rounded-full"></div>
                      </div>
                    </div>
                    <div className="ml-5">
                      <p className="text-lg font-medium">Demi Joan</p>
                      <p className="text-xs text-green-600">Report</p>
                    </div>
                  </div>

                  <div className="w-1/5 h-7">
                    <div className="flex items-center justify-center flex-1 h-full px-2 py-1 bg-green-600 bg-opacity-20 rounded-lg">
                      <p className="text-xs text-green-600">9 : 50 AM</p>
                    </div>
                  </div>
                </div>
                <div className="inline-flex space-x-24 items-start justify-start w-full">
                  <div className="relative flex">
                    <div>
                      <div className="w-14 h-14 border rounded-full border-green-600 border-opacity-60">
                        <p className=" m-4 text-base">DJ</p>
                        <div className="w-12 ml-1 mt-1 h-12 absolute left-0 top-0 bg-green-600 bg-opacity-25 rounded-full"></div>
                      </div>
                    </div>
                    <div className="ml-5">
                      <p className="text-lg font-medium">Demi Joan</p>
                      <p className="text-xs text-green-600">Report</p>
                    </div>
                  </div>

                  <div className="w-1/5 h-7">
                    <div className="flex items-center justify-center flex-1 h-full px-2 py-1 bg-green-600 bg-opacity-20 rounded-lg">
                      <p className="text-xs text-green-600">9 : 50 AM</p>
                    </div>
                  </div>
                </div>
                <div className="inline-flex space-x-24 items-start justify-start w-full">
                  <div className="relative flex">
                    <div>
                      <div className="w-14 h-14 border rounded-full border-green-600 border-opacity-60">
                        <p className=" m-4 text-base">DJ</p>
                        <div className="w-12 ml-1 mt-1 h-12 absolute left-0 top-0 bg-green-600 bg-opacity-25 rounded-full"></div>
                      </div>
                    </div>
                    <div className="ml-5">
                      <p className="text-lg font-medium">Demi Joan</p>
                      <p className="text-xs text-green-600">Report</p>
                    </div>
                  </div>

                  <div className="w-1/5 h-7">
                    <div className="flex items-center justify-center flex-1 h-full px-2 py-1 bg-green-600 bg-opacity-20 rounded-lg">
                      <p className="text-xs text-green-600">9 : 50 AM</p>
                    </div>
                  </div>
                </div>
                <div className="inline-flex space-x-24 items-start justify-start w-full">
                  <div className="relative flex">
                    <div>
                      <div className="w-14 h-14 border rounded-full border-green-600 border-opacity-60">
                        <p className=" m-4 text-base">DJ</p>
                        <div className="w-12 ml-1 mt-1 h-12 absolute left-0 top-0 bg-green-600 bg-opacity-25 rounded-full"></div>
                      </div>
                    </div>
                    <div className="ml-5">
                      <p className="text-lg font-medium">Demi Joan</p>
                      <p className="text-xs text-green-600">Report</p>
                    </div>
                  </div>

                  <div className="w-1/5 h-7">
                    <div className="flex items-center justify-center flex-1 h-full px-2 py-1 bg-green-600 bg-opacity-20 rounded-lg">
                      <p className="text-xs text-green-600">9 : 50 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-10 md:mt-0 md:w-[50%]">
              <div className="inline-flex flex-col space-y-6  justify-end">
                <p className="text-2xl font-medium">Consultation</p>
                <div
                  className="flex pl-2  pt-4 pb-5 border rounded-2xl border-blue-400 border-opacity-50"
                  style={{ width: 390.19, height: 370.74 }}
                >
                  <div className="inline-flex flex-col space-y-4 items-start justify-start flex-1 h-full">
                    <div className="inline-flex ml-5 space-x-24 items-start justify-start w-full">
                      <div className="relative  flex">
                        <div>
                          <div className="w-14 h-14 border rounded-full border-green-600 border-opacity-60">
                            <p className=" m-4 text-base">DJ</p>
                            <div className="w-12 ml-1 mt-1 h-12 absolute left-0 top-0 bg-green-600 bg-opacity-25 rounded-full"></div>
                          </div>
                        </div>
                        <div className="ml-5">
                          <p className="text-lg font-medium">Demi Joan</p>
                          <p className="text-xs text-[#978E8E]">
                            Male - 28 Years 3 Months
                          </p>
                        </div>
                      </div>

                      <div className="w-1/5 h-7">
                        <div className="flex items-center justify-center ">
                          <img
                            src={dots}
                            alt="dots"
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    <div className=" ml-5 inline-flex space-x-8 items-center justify-start w-52 h-14">
                      <div className="inline-flex flex-col space-y-1 items-center justify-end w-1/6 h-14">
                        <img src={fever} alt="fever"></img>
                        <p className="text-xs font-medium">Fever</p>
                      </div>
                      <div className="inline-flex flex-col space-y-1 items-center justify-end w-1/5 h-14">
                        <img src={cough} alt="cough"></img>
                        <p className="text-xs font-medium">Cough</p>
                      </div>
                      <div className="inline-flex flex-col space-y-1.5 items-center justify-end w-16 h-14">
                        <img src={heart} alt="heart"></img>
                        <p className="text-xs font-medium">Heart Burn</p>
                      </div>
                    </div>
                    <div className=" flex flex-col space-y-5 items-start justify-start w-full h-1/2">
                      <div className="ml-5 flex space-x-3 justify-end w-80 h-9">
                        <p className="w-1/4 text-xs font-medium">
                          Last Checked
                        </p>
                        <p className="w-64 text-xs text-black text-opacity-50">
                          Dr Everly on 21 April 2021 Prescription #2J983KT0
                        </p>
                      </div>
                      <div className="ml-5 flex space-x-3 justify-end w-80 h-9">
                        <p className="w-1/4 text-xs font-medium">Observation</p>
                        <p className="w-64 text-xs text-black text-opacity-50">
                          High fever and cough at normal hemoglobin levels.{" "}
                        </p>
                      </div>
                      <div className="ml-5 flex space-x-3 justify-end w-80 h-9">
                        <p className="w-1/4 text-xs font-medium">
                          Prescription
                        </p>
                        <p className="w-64 text-xs text-black text-opacity-50">
                          Paracetmol - 2 times a day Dizopam - Day and Night
                          before meal Wikoryl
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%]  flex mr-0 ">
          <div className=" justify-end py-4 px-4 bg-white rounded-2xl">
            <div className="flex space-x-28">
              <h2 className="text-2xl font-medium">Upcoming Appointments</h2>
              <img src={downarrow} alt="" className="" />
            </div>

            {/* calender */}
            <div>
              <Calendar onChange={onChange} value={date} />
            </div>

            {/* ---------- */}
            <div className="flex space-x-56">
              <h2 className="text-2xl font-medium">Upcoming </h2>
              <h3
                href=""
                className="text-sm base underline underline[#1A71FF] text-[#1A71FF] mt-2"
              >
                View All
              </h3>
            </div>

            <div className="relative" style={{ width: 380.98, height: 120.85 }}>
              <div className="inline-flex space-x-40 items-center justify-between w-96 absolute right-0 bottom-0">
                <p className="text-xl font-bold leading-10 text-gray-800">
                  Upcoming
                </p>
                <p className="text-xs leading-normal underline text-blue-600">
                  View All
                </p>
              </div>
              <div className="w-11 h-9 absolute right-0 bottom-0 rounded" />
              <div className="w-96 h-16 absolute right-0 bottom-0">
                <div className="flex items-center justify-start flex-1 h-full py-2 pl-3 pr-8 bg-blue-50 rounded-xl">
                  <div className="flex space-x-0.5 items-center justify-start flex-1 h-full">
                    <div className="w-12 h-full bg-gradient-to-tr from-blue-400 via-blue-400 to-indigo-800 rounded-full" />
                    <p className="text-base font-bold text-white">M</p>
                    <div className="inline-flex flex-col space-y-1 items-start justify-end w-64 h-full">
                      <p className="w-full text-base font-medium text-gray-800">
                        Montly doctor’s meet
                      </p>
                      <p className="w-40 text-xs text-black text-opacity-60">
                        8 April, 2021 | 04:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
