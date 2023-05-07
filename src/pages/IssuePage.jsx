import React from "react";
import { useEffect, useState } from "react";


import { help, interngradient } from "../assets";

import { FaSearch } from 'react-icons/fa';
import { issues } from "../constants/index";
import IssueCard from "../components/IssueCard";

// import IHero from "../components/IssueComponents/IHero";
// import Searchbar from "../components/IssueComponents/searchbar";
// import Main from "../components/IssueComponents/Main";
const IssuePage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setIsLoaded(true);
    }, []);
    const [searchTerm, setSearchTerm] = useState('');
  
    function handleSearch(e) {
      e.preventDefault();
      // handle search logic here
    };
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };
  
  return (
    <div>
      
  
      {/* hero page */}
      <div className='relative my-8 '>
        <div className=' flex flex-col gap-6 z-30 leading-snug h-auto bg-bghero dark:bg-bghero '>
            <h1 className='text-[#3B6377] font-bold text-8xl ml-5'> Are you facing </h1>
            <h1 className='text-[#3B6377] font-bold text-8xl ml-5'>any issue..</h1>
            <p className='text-2xl w-[50%] ml-5'>Don’t hesitate to share, we are there for you.</p>
            <div className='text-white justify-center item px-12 rounded-full  font-bold text-lg py-4 mt-4'>
              <nav className="bg-gray-50  py-1 rounded-md border w-[320px] border-gray-300">
                <div className=" mx-auto px-4 sm:px-2 lg:px-2 flex  items-center">
                  <div className="flex-shrink-0">
                    <form onSubmit={handleSearch}>
                      <input
                        type="text"
                        placeholder="Search"
                        className="py-2 px-2 rounded-md hover:border-transparent bg-transparent w-full sm:w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </form>
                  </div>
                  <div className="flex items-center">
                  
                    <div className="bg-lightcyan h-8 w-8 rounded-full flex justify-center items-center ml-4">
                      <FaSearch className="text-white" />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
        </div>
        <div className='hidden absolute sm:flex right-0 top-0 '>
            <img src={help} className="h-[400px]" />
        </div>
      </div>
      {/* --------- */}
      {/* SearchBar */}
      <div>
        <div className='flex flex-col items-center justify-center xs:w-[60%]  w-full gap-6 z-30 leading-snug  '>
          <p className='md:text-2xl text-[#232323] md:font-medium text-[40px] md:text-[60px]'>Most Common Health issues</p>
        </div>
        <nav className=" flex flex-col items-center justify-center  ">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
              </div>
              <div className="hidden lg:block md:block">
                <div className=" flex items-center">
                  <a
                    href="#"
                    className={`${
                      activeTab === 'Categories'
                        ? 'bg-teal-500 border-teal-500 text-white'
                        : 'text-gray-300 hover:bg-lightcyan hover:text-[#262626]'
                    } px-3 py-2 rounded-md  text-lg font-bold mx-10`}
                    onClick={() => handleTabClick('Categories')}
                  >
                    All Categories
                  </a>

                  <a
                    href="#"
                    className={`${
                      activeTab === 'Social life'
                        ? 'bg-teal-500 border-teal-500 text-[white]'
                        : 'text-gray-300 hover:bg-lightcyan hover:text-[#262626]'
                    } px-3 py-2 rounded-md text-lg font-medium mx-10`}
                    onClick={() => handleTabClick('Social life')}
                  >
                    Social life
                  </a>

                  <a
                    href="#"
                    className={`${
                      activeTab === 'Relationship'
                        ? 'bg-teal-500 border-teal-500 text-[white]'
                        : 'text-gray-300 hover:bg-lightcyan hover:text-[#262626]'
                    } px-3 py-2 rounded-md text-lg font-medium mx-10`}
                    onClick={() => handleTabClick('Relationship')}
                  >
                    Relationship
                  </a>

                  <a
                    href="#"
                    className={`${
                      activeTab === 'Depressed'
                      ? 'bg-teal-500 border-teal-500 text-[white]'
                        : 'text-gray-300 hover:bg-lightcyan hover:text-[#262626]'
                    } px-3 py-2 rounded-md text-lg font-medium mx-10`}
                    onClick={() => handleTabClick('Depressed')}
                  >
                    Depressed
                  </a>

                  <a
                    href="#"
                    className={`${
                      activeTab === 'Stress'
                      ? 'bg-teal-500 border-teal-500 text-[white]'
                      : 'text-gray-300 hover:bg-lightcyan hover:text-[#262626]'
                  } px-3 py-2 rounded-md text-lg font-medium mx-10`}
                    onClick={() => handleTabClick('Stress')}
                  >
                    Stress
                  </a>
                  <a
                    href="#"
                    className={`${
                      activeTab === 'Health'
                      ? 'bg-teal-500 border-teal-500 text-[white]'
                      : 'text-gray-300 hover:bg-lightcyan hover:text-[#262626]'
                  } px-3 py-2 rounded-md text-lg font-medium mx-10`}
                    onClick={() => handleTabClick('Health')}
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
      <div className='w-[90%]  m-auto flex justify-between  '>
      
          <div className="md:flex mx-auto pl-0 md:pl-8 flex-wrap xs:justify-start justify-center w-full">
            {issues.map((card) => <IssueCard key={card.id} {...card} />)}
          </div>
      </div>
     
      </div>
      <div className=" flex flex-col items-center justify-center mt-5">
        <button type="button" className="w-[240px] h-[65px] text-2xl text-black outline hover:outline-btn border-btn bg-lightcyan hover:text-white justify-center hover:bg-btn outline-btn rounded-full font-semibold mb-5 ">
          See More
        </button>
      </div>
      {/* ------------- */}
     

    </div>
  );
};

export default IssuePage;
