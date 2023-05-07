import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets";
const Navbar = () => {

  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate(`/${data}`)
  }
  //signin drop down menu

  const [showDropdown, setShowDropdown] = useState(false);

  function handleButtonClick() {
    setShowDropdown(!showDropdown);
  }
  return (
    <nav className="flex px-12 justify-between ">
      
      <div className="">
        <Link to="/" className="no-underline">
          <img src={logo} className="w-full h-16" />
        </Link>
      </div>

        <div className="flex gap-8 items-center justify-end">
          <p className="sm:flex hidden text-black sm:text-lg text-base cursor-pointer" onClick={() => handleClick("about")} >About</p>
          <p className="sm:flex hidden text-black sm:text-lg text-base cursor-pointer" onClick={() => handleClick("yoga")} >Services </p>
          <p className="sm:flex hidden text-black sm:text-lg text-base cursor-pointer" onClick={() => handleClick("doctor")} >Experts</p>
          <p className="md:flex hidden text-black sm:text-lg text-base cursor-pointer" onClick={() => handleClick("internship")} >Internship </p>
          <p className="sm:flex hidden text-black sm:text-lg text-base cursor-pointer" onClick={() => handleClick("issues")} >Issues </p>
          <p className="md:flex hidden text-black sm:text-lg text-base cursor-pointer" onClick={() => handleClick("blog")} > Blog </p>

          <div className="">
            <div onClick={handleButtonClick} className="
            bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]
            text-sm 
             text-center
             rounded-3xl  
              text-white
              uppercase
              tracking-widest
              font-medium
              py-3 px-8
              border-1
              border-dashed
              border-teal-500
              shadow-md
              transition
              duration-400 ease-in-out cursor-pointer focus:outline-none hover:bg-white hover:text-teal-500 hover:border-teal-500">
              sign up
              <span className="hidden">Hidden Text</span>
            </div>
            {showDropdown && (
              <div className=" absolute w-[140px] border shadow-lg bg-transparent mt-2 rounded-lg dropdown-content">
                <ul className=" text-sm text-gray-700 dark:text-gray-200" >
                  <li>
                    <Link to='/patientsignin'>
                      <div className="cursor-pointer rounded-t-lg font-medium block px-4 py-2 hover:shadow-md hover:bg-white hover:text-teal-500 hover:border-teal-500">Patient</div>
                    </Link>
                  </li>
                  <li>
                    <Link to='/doctorsignin'>
                      <div className="cursor-pointer rounded-b-lg font-medium block px-4 py-2 hover:shadow-md hover:bg-white hover:text-teal-500 hover:border-teal-500">Doctor</div>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>



    </nav>
  );
};

export default Navbar;
