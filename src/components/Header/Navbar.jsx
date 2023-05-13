import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo, downarrow } from "../../assets";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,} from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate(`/${data}`);
  };
  //signin drop down menu
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const[isShow,setIsShow]=useState(false);

  const handleShow=()=>{
    setIsShow(!isShow);
  }

  function handleButtonClick() {
    setShowDropdown(!showDropdown);
  }
  return (
    // <nav className="flex px-12 justify-between shadow-md">
    //   <div className="">
    //     <Link to="/" className="no-underline">
    //       <img src={logo} className="w-full h-16" />
    //     </Link>
    //   </div>

    //   <div className="flex h-auto gap-8 items-center justify-end">
    //     <p
    //       className="sm:flex  text-black sm:text-lg text-base cursor-pointer"
    //       onClick={() => handleClick("about")}
    //     >
    //       About
    //     </p>

    //     <div
    //       onMouseEnter={() => setIsDropdownOpen1(true)}
    //       onClick={() => setIsDropdownOpen1(true)}
    //       onMouseLeave={() => setIsDropdownOpen1(false)}
    //       className="relative  sm:block  text-black sm:text-lg text-base cursor-pointer  "
    //     >
    //       <div className="flex flex-row">
    //         <div>Services</div>
    //         <div>
    //           <img src={downarrow} className="ml-1 mt-3" />
    //         </div>
    //       </div>

    //       <Transition
    //         show={isDropdownOpen1}
    //         enter="transition ease-out duration-200"
    //         enterFrom="opacity-0"
    //         enterTo="opacity-100"
    //         leave="transition ease-in duration-150"
    //         leaveFrom="opacity-100"
    //         leaveTo="opacity-0"
    //       >
    //         <div className="absolute z-10 w-[140px]  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    //           <p className="text-sm block px-4 py-2 text-[#A4A4A4] ">
    //             {" "}
    //             OUR SERVICES
    //           </p>
    //           <div className="py-1">
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //               >
    //               Therapy
    //             </a>
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //               onClick={() => handleClick("musicalTherapy")}>
    //               Musical Therapy
    //             </a>
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //              >
    //               Psychiatry
    //             </a>
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //               >
    //               Couples Therapy
    //             </a>
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //               >
    //               Self-Care
    //             </a>
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //               >
    //               Community
    //             </a>
    //           </div>
    //         </div>
    //       </Transition>
    //     </div>

    //     {/* <p className="sm:flex hidden text-black sm:text-lg text-base cursor-pointer" onClick={() => handleClick("yoga")} >Services </p> */}
    //     <p
    //       className="sm:flex text-black sm:text-lg text-base cursor-pointer"
    //       onClick={() => handleClick("doctor")}
    //     >
    //       Experts
    //     </p>
    //     <div
    //       onMouseEnter={() => setIsDropdownOpen2(true)}
    //       onClick={() => setIsDropdownOpen2(true)}
    //       onMouseLeave={() => setIsDropdownOpen2(false)}
    //       className="relative sm:block  text-black sm:text-lg text-base cursor-pointer  "
    //     >
    //       <div className="flex flex-row">
    //         <div>Issues</div>
    //         <div>
    //           <img src={downarrow} className="ml-1 mt-3" />
    //         </div>
    //       </div>
    //       <Transition
    //         show={isDropdownOpen2}
    //         enter="transition ease-out duration-200"
    //         enterFrom="opacity-0"
    //         enterTo="opacity-100"
    //         leave="transition ease-in duration-150"
    //         leaveFrom="opacity-100"
    //         leaveTo="opacity-0"
    //       >
    //         <div className="absolute z-10  w-[140px]  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    //           <p
    //             className="text-sm block px-4 py-2 text-[#A4A4A4]  "
    //             onClick={() => handleClick("issues")}
    //           >
    //             {" "}
    //             Issues We Solve
    //           </p>
    //           <div className="py-1">
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
    //               Depression
    //             </a>
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
    //               Anxiety
    //             </a>
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
    //               Adult ADHD
    //             </a>
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
    //               Stress
    //             </a>
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
    //               Feeling Low
    //             </a>
    //           </div>
    //         </div>
    //       </Transition>
    //     </div>
    //     {/*<p className="sm:flex hidden text-black sm:text-lg text-base cursor-pointer" onClick={() => handleClick("issues")} >Issues </p> */}
    //     <p
    //       className="md:flex text-black sm:text-lg text-base cursor-pointer"
    //       onClick={() => handleClick("internship")}
    //     >
    //       Internship{" "}
    //     </p>
    //     <div
    //       onMouseEnter={() => setIsDropdownOpen3(true)}
    //       onClick={() => setIsDropdownOpen3(true)}
    //       onMouseLeave={() => setIsDropdownOpen3(false)}
    //       className="relative sm:block  text-black sm:text-lg text-base cursor-pointer  "
    //     >
    //       <div className="flex flex-row">
    //         <div>Exercises</div>
    //         <div>
    //           <img src={downarrow} className="ml-1 mt-3" />
    //         </div>
    //       </div>
    //       <Transition
    //         show={isDropdownOpen3}
    //         enter="transition ease-out duration-200"
    //         enterFrom="opacity-0"
    //         enterTo="opacity-100"
    //         leave="transition ease-in duration-150"
    //         leaveFrom="opacity-100"
    //         leaveTo="opacity-0"
    //       >
    //         <div className="absolute z-10  w-[140px]  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    //           <p
    //             className="text-sm block px-4 py-2 text-[#A4A4A4]  "
    //             onClick={() => handleClick("yoga")}
    //           >
    //             {" "}
    //             Exercise we offer
    //           </p>
    //           <div className="py-1">
    //             <a
    //               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //               onClick={() => handleClick("yoga")}
    //             >
    //               Yoga
    //             </a>
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //               onClick={() => handleClick("meditation")}>
    //               Meditation
    //             </a>
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //               onClick={() => handleClick("goalPlan")}>
    //               Goal Plan
    //             </a>
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //               onClick={() => handleClick("sadhna")}>
    //               Sadhna
    //             </a>
    //             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //               onClick={() => handleClick("brainExercise")}>
    //               Brain Exercise
    //             </a>
    //           </div>
    //         </div>
    //       </Transition>
    //     </div>
    //     {/* <p className="sm:flex hidden text-black sm:text-lg text-base cursor-pointer" onClick={() => handleClick("exercises")} >Exercises </p> */}

    //     <p
    //       className="md:flex text-black sm:text-lg text-base cursor-pointer"
    //       onClick={() => handleClick("blog")}
    //     >
    //       {" "}
    //       Blog{" "}
    //     </p>

    //     <div className="">
    //       <Link to="/patientsignin"><div
    //         onClick={handleButtonClick}
    //         className="
    //         bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]
    //         text-sm 
    //          text-center
    //          rounded-3xl  
    //           text-white
    //           uppercase
    //           tracking-widest
    //           font-medium
    //           py-3 px-8
    //           border-1
    //           border-dashed
    //           border-teal-500
    //           shadow-md
    //           transition
    //           duration-400 ease-in-out cursor-pointer focus:outline-none hover:bg-white hover:text-teal-500 hover:border-teal-500"
    //       >
    //         sign up
    //         <span className="hidden">Hidden Text</span>
    //       </div>
    //       </Link>
    //       {/* {showDropdown && (
    //         <div className=" absolute w-[140px] border shadow-lg bg-transparent mt-2 rounded-lg dropdown-content">
    //           <ul className=" text-sm text-gray-700 dark:text-gray-200">
    //             <li>
    //               <Link to="/patientsignin">
    //                 <div className="cursor-pointer rounded-t-lg font-medium block px-4 py-2 hover:shadow-md hover:bg-white hover:text-teal-500 hover:border-teal-500">
    //                   Patient
    //                 </div>
    //               </Link>
    //             </li>
    //             <li>
    //               <Link to="/doctorsignin">
    //                 <div className="cursor-pointer rounded-b-lg font-medium block px-4 py-2 hover:shadow-md hover:bg-white hover:text-teal-500 hover:border-teal-500">
    //                   Doctor
    //                 </div>
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       )} */}
    //     </div>
    //   </div>

    //   {/* <nav className="bg-gray-800">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <div className="flex items-center">
    //         <div className="flex-shrink-0">
    //           <img
    //             className="h-8 w-8"
    //             src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
    //             alt="Workflow"
    //           />
    //         </div>
    //         <div className="hidden md:block">
    //           <div className="ml-10 flex items-baseline space-x-4">
    //             <a
    //               href="#"
    //               className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
    //             >
    //               Home
    //             </a>

    //             <div
    //               onMouseEnter={() => setIsDropdownOpen(true)}
    //               onMouseLeave={() => setIsDropdownOpen(false)}
    //               className="relative px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 cursor-pointer"
    //             >
    //               Options
    //               <Transition
    //                 show={isDropdownOpen}
    //                 enter="transition ease-out duration-200"
    //                 enterFrom="opacity-0"
    //                 enterTo="opacity-100"
    //                 leave="transition ease-in duration-150"
    //                 leaveFrom="opacity-100"
    //                 leaveTo="opacity-0"
    //               >
    //                 <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    //                   <div className="py-1">
    //                     <a
    //                       href="#"
    //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //                     >
    //                       Option 1
    //                     </a>
    //                     <a
    //                       href="#"
    //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //                     >
    //                       Option 2
    //                     </a>
    //                     <a
    //                       href="#"
    //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //                     >
    //                       Option 3
    //                     </a>
    //                     <a
    //                       href="#"
    //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //                     >
    //                       Option 4
    //                     </a>
    //                     <a
    //                       href="#"
    //                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    //                     >
    //                       Option 5
    //                     </a>
    //                   </div>
    //                 </div>
    //               </Transition>
    //             </div>

    //             <a
    //               href="#"
    //               className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
    //             >
    //               Contact
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       </div>
    //       </div>
    //       </nav> */}
    // </nav>

    <nav class=" mx-auto flex items-center justify-between px-4 lg:px-12 py-3 shadow-lg border-2">
        {/* Logo */}
        <div>
            <a href="/">
                <img src={logo} alt="" class="w-28 object-cover lg:w-32 xl:w-36" />
            </a>
        </div>

        <div class="flex items-center">
            {/* Menu list */}
            <ul class="mr-8 hidden justify-end space-x-6 xl:flex">
                <li><a href="#" class="menu-link">About</a></li>
                <li class="group relative inline-block">
                    <a href="#" class="menu-link">Services <i class="fa-solid fa-angle-down"></i></a>

                    {/* Submenu  */}
                    <ul
                        class="absolute hidden w-60 rounded-xl border-[1px] border-slate-100 bg-white px-6 py-4 shadow-md group-hover:block">
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Therapy</a>
                        </li>
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Psychiatry</a>
                        </li>
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Couples Therapy</a>
                        </li>
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Self-Care</a>
                        </li>
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Community</a>
                        </li>
                    </ul>
                </li>
                <li><a href="experts.html" class="menu-link">Experts</a></li>
                <li class="group relative inline-block">
                    <a href="issues.html" class="menu-link">Issues <i class="fa-solid fa-angle-down"></i></a>

                    {/* Submenu */}
                    <ul
                        class="absolute hidden w-60 rounded-xl border-[1px] border-slate-100 bg-white px-6 py-4 shadow-md group-hover:block">
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Depression</a>
                        </li>
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Anxiety</a>
                        </li>
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Adult ADHD</a>
                        </li>
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Stress</a>
                        </li>
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Feeling Low</a>
                        </li>
                    </ul>
                </li>
                <li><a href="internship.html" class="menu-link">Internship</a></li>
                <li class="group relative inline-block">
                    <a href="#" class="menu-link">Exercises <i class="fa-solid fa-angle-down"></i></a>

                    {/* Submenu */}
                    <ul
                        class="absolute hidden w-60 rounded-xl border-[1px] border-slate-100 bg-white px-6 py-4 shadow-md group-hover:block">
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Yoga</a>
                        </li>
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Meditation</a>
                        </li>
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Goal Plan</a>
                        </li>
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Sadhna</a>
                        </li>
                        <li>
                            <a href="#" class="menu-link inline-block py-2">Brain Exercise</a>
                        </li>
                    </ul>
                </li>
                <li><a href="#" class="menu-link">Blogs</a></li>
            </ul>

             {/* Authentication */}
            <button class="btn-lg hidden lg:mr-4 lg:inline-block">Sign Up</button>

            {/* Hamburger Icon */}
            <button class="xl:hidden bg-white" onClick={handleShow}>
            <FontAwesomeIcon className="cursor-pointer text-2xl" icon={faBars} />
            </button>
        </div>
    </nav>
  );
};

export default Navbar;
