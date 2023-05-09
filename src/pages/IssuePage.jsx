import React from "react";
import { useEffect, useState } from "react";

import { help, interngradient } from "../assets";
import { heroimg } from "../assets";
import { FaSearch } from "react-icons/fa";
import { issues } from "../constants/index";
import IssueCard from "../components/card/IssueCard";

// import IHero from "../components/IssueComponents/IHero";
// import Searchbar from "../components/IssueComponents/searchbar";
// import Main from "../components/IssueComponents/Main";
const IssuePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    // handle search logic here
  }
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      {/* hero page */}
      <div className="flex flex-col sm:flex-row mb-16">
        <div className="ml-6 mt-16 sm:ml-24 sm:mt-16 flex flex-col sm:w-1/2">
          <h1 className="py-4 font-bold text-4xl sm:text-6xl bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Are you facing{" "}
          </h1>
          <h1 className="py-4 font-bold text-4xl sm:text-6xl bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            any issue..?
          </h1>
          <p className="text-[#383838] mt-3 sm:w-[600px]">
            Mental health is just as important as physical health, and seeking
            help is a sign of strength. Our team of experts understands that
            everyone goes through their own mental development and strives to
            provide individualized care and support. We can help you find the
            resources and support you need to improve your mental well-being.
          </p>

          <form onSubmit={handleSearch}>
            <div className="relative mb-4 mt-4 flex sm:w-[600px] flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
              />

              <button
                className="relative z-[2] bg-lightcyan flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
              >
                <FaSearch className="h-6 w-6 rounded-full flex justify-center items-center" />
              </button>
            </div>
          </form>
        </div>
        <div className="flex sm:w-1/2 sm:flex">
          <div className="mt-8 relative">
            <img className="w-full sm:max-w-none" src={heroimg} alt="" />
          </div>
        </div>
      </div>

      {/* --------- */}
      {/* SearchBar */}
      <div>
        <div className="flex flex-col items-center justify-center xs:w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 gap-6 z-30 leading-snug mx-auto">
          <h1 className="text-center py-4 font-bold  bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent md:font-medium text-4xl md:text-5xl">
            Most Common Health Issues
          </h1>
        </div>

        <nav className=" flex flex-col items-center justify-center  ">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0"></div>
              <div className="hidden lg:block md:block">
                <div className=" flex items-center">
                  <a
                    href="#"
                    className={`${
                      activeTab === "Categories"
                        ? "bg-teal-500 border-teal-500 text-white"
                        : "text-gray-300 hover:bg-lightcyan hover:text-[#262626]"
                    } px-3 py-2 rounded-md  text-lg font-bold mx-10`}
                    onClick={() => handleTabClick("Categories")}
                  >
                    All Categories
                  </a>

                  <a
                    href="#"
                    className={`${
                      activeTab === "Social life"
                        ? "bg-teal-500 border-teal-500 text-[white]"
                        : "text-gray-300 hover:bg-lightcyan hover:text-[#262626]"
                    } px-3 py-2 rounded-md text-lg font-medium mx-10`}
                    onClick={() => handleTabClick("Social life")}
                  >
                    Social life
                  </a>

                  <a
                    href="#"
                    className={`${
                      activeTab === "Relationship"
                        ? "bg-teal-500 border-teal-500 text-[white]"
                        : "text-gray-300 hover:bg-lightcyan hover:text-[#262626]"
                    } px-3 py-2 rounded-md text-lg font-medium mx-10`}
                    onClick={() => handleTabClick("Relationship")}
                  >
                    Relationship
                  </a>

                  <a
                    href="#"
                    className={`${
                      activeTab === "Depressed"
                        ? "bg-teal-500 border-teal-500 text-[white]"
                        : "text-gray-300 hover:bg-lightcyan hover:text-[#262626]"
                    } px-3 py-2 rounded-md text-lg font-medium mx-10`}
                    onClick={() => handleTabClick("Depressed")}
                  >
                    Depressed
                  </a>

                  <a
                    href="#"
                    className={`${
                      activeTab === "Stress"
                        ? "bg-teal-500 border-teal-500 text-[white]"
                        : "text-gray-300 hover:bg-lightcyan hover:text-[#262626]"
                    } px-3 py-2 rounded-md text-lg font-medium mx-10`}
                    onClick={() => handleTabClick("Stress")}
                  >
                    Stress
                  </a>
                  <a
                    href="#"
                    className={`${
                      activeTab === "Health"
                        ? "bg-teal-500 border-teal-500 text-[white]"
                        : "text-gray-300 hover:bg-lightcyan hover:text-[#262626]"
                    } px-3 py-2 rounded-md text-lg font-medium mx-10`}
                    onClick={() => handleTabClick("Health")}
                  >
                    Health
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* ------- */}
      {/* Main Card Section */}
      <div>
        <div className="max-w-7xl px-4 mx-auto flex items-center justify-center">
          <div className="w-[90%] m-auto flex justify-between">
            <div className="md:flex mx-auto pl-0 md:pl-8 flex-wrap xs:justify-start justify-center w-full">
              {issues.map((card) => (
                <IssueCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center mt-5">
        <button
          type="button"
          className="w-[240px] h-[65px] text-2xl text-black outline hover:outline-btn border-btn bg-lightcyan hover:text-white justify-center hover:bg-btn outline-btn rounded-full font-semibold mb-5 "
        >
          See More
        </button>
      </div>
      {/* ------------- */}
    </div>
  );
};

export default IssuePage;
