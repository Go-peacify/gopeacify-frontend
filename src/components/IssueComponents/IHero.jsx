import React from "react";
import { help } from "../../assets";
import { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';


const IHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    // handle search logic here
  };

  return (
    <div className="bg-bghero dark:bg-bghero">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:py-24 sm:px-6 lg:px-8 flex  ">
        <div className="">
          <p className="mt-2 sm:text-4xl">
            <div className="flex flex-row">
             
              <h2
                className={`leading-none  text-3xl text-[80px] font-bold text-lightcyan transition-opacity duration-1000 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              >
                Are you facing any issue..
              </h2>
            </div>
          </p>
          <p className="ml-0 mt-6 max-w-prose mx-auto text-xl text-gray-500 w-[590px] h-[120px] l-[135px] ">
            Don’t hesitate to share, we are there for you.
          </p>
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
        <div>
          <img className="h-[100%] w-[100%] sm:left-0" src={help} alt="help" />
        </div>
      </div>
    </div>
  );
};

export default IHero;
