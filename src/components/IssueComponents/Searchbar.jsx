import { useState } from 'react';

const Searchbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className='flex flex-col items-center justify-center '>
      <h1 className=" text-[#232323] font-medium text-[60px] mt-2 "  >Most Common Health issues </h1>
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
  );
};

export default Searchbar;
