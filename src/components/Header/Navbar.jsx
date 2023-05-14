import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo, downarrow } from "../../assets";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

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
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  const handleHide = () => {
    setIsShow(!isShow);
  };

  function handleButtonClick() {
    setShowDropdown(!showDropdown);
  }
  return (
    <nav className="relative z-20 flex items-center justify-between px-6 py-3 md:py-6 lg:py-6">
      {/* <!-- Logo --> */}
      <div>
        <a href="/">
          <img
            src={logo}
            alt=""
            className="w-28 object-cover lg:w-32 xl:w-36"
          />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
      <ul className="mr-8 justify-end space lg:space-x-4 xl:space-x-6 lg:flex mb-6 lg:mb-0">
            <li>
              <Link to="" className="menu-link">
                About
              </Link>
            </li>
            <li className="group relative inline-block">
              <Link to="" className="menu-link">
                Services <FontAwesomeIcon icon={faAngleDown} />
              </Link>

              {/* <!-- Submenu --> */}
              <ul className="absolute hidden w-60 z-10 rounded-xl border-[1px] border-slate-100 bg-white px-6 py-4 shadow-md group-hover:block">
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Therapy
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Psychiatry
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Couples Therapy
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Self-Care
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Community
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="" className="menu-link">
                Experts
              </Link>
            </li>
            <li className="group relative inline-block">
              <Link to="" className="menu-link">
                Issues <FontAwesomeIcon icon={faAngleDown} />
              </Link>

              {/* <!-- Submenu --> */}
              <ul className="absolute hidden w-60 bg-white rounded-xl border-[1px] border-slate-100 px-6 py-4 z-10 shadow-md group-hover:block">
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Depression
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Anxiety
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Adult ADHD
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Stress
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Feeling Low
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="" className="menu-link">
                Internship
              </Link>
            </li>
            <li className="group relative inline-block">
              <Link to="" className="menu-link">
                Exercises <FontAwesomeIcon icon={faAngleDown} />
              </Link>

              {/* <!-- Submenu --> */}
              <ul className="absolute hidden w-60 rounded-xl border-[1px] border-slate-100 z-10 bg-white px-6 py-4 shadow-md group-hover:block">
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Yoga
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Meditation
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Goal Plan
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Sadhna
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Brain Exercise
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="" className="menu-link">
                Blogs
              </Link>
            </li>
          </ul>

          {/* <!-- Authentication --> */}
          <button className="btn-lg lg:mr-4 inline-block">Sign Up</button>
        </div>
        
      {/* Mobile Menu */}
      {isShow && (
        <div className="fixed top-0 left-0 bottom-0 w-60 sm:w-80 bg-white lg:w-auto lg:static lg:flex items-center py-5 px-4 sm:px-6 md:px-10 shadow-xl lg:shadow-none">
          {/* <!-- Menu list --> */}
          <ul className="mr-8 justify-end space lg:space-x-4 xl:space-x-6 lg:flex mb-6 lg:mb-0">
            <li>
              <Link to="" className="menu-link">
                About
              </Link>
            </li>
            <li className="group relative inline-block">
              <Link to="" className="menu-link">
                Services <FontAwesomeIcon icon={faAngleDown} />
              </Link>

              {/* <!-- Submenu --> */}
              <ul className="absolute hidden w-60 z-10 rounded-xl border-[1px] border-slate-100 bg-white px-6 py-4 shadow-md group-hover:block">
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Therapy
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Psychiatry
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Couples Therapy
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Self-Care
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Community
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="" className="menu-link">
                Experts
              </Link>
            </li>
            <li className="group relative inline-block">
              <Link to="" className="menu-link">
                Issues <FontAwesomeIcon icon={faAngleDown} />
              </Link>

              {/* <!-- Submenu --> */}
              <ul className="absolute hidden w-60 bg-white rounded-xl border-[1px] border-slate-100 px-6 py-4 z-10 shadow-md group-hover:block">
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Depression
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Anxiety
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Adult ADHD
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Stress
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Feeling Low
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="" className="menu-link">
                Internship
              </Link>
            </li>
            <li className="group relative inline-block">
              <Link to="" className="menu-link">
                Exercises <FontAwesomeIcon icon={faAngleDown} />
              </Link>

              {/* <!-- Submenu --> */}
              <ul className="absolute hidden w-60 rounded-xl border-[1px] border-slate-100 z-10 bg-white px-6 py-4 shadow-md group-hover:block">
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Yoga
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Meditation
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Goal Plan
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Sadhna
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu-link inline-block py-2">
                    Brain Exercise
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="" className="menu-link">
                Blogs
              </Link>
            </li>
          </ul>

          {/* <!-- Authentication --> */}
          <button className="btn-lg lg:mr-4 inline-block">Sign Up</button>
        </div>
      )}

      <div className="relative lg:hidden">
        {/* <!-- Hamburger Icon --> */}
        {/* <!-- Onclick => Hidden  --> */}
        <button
          className="right-5 top-5 sm:right-8 sm:top-8 md:top-10 md:right-10"
          onClick={handleShow}
        >
          {!isShow && <FontAwesomeIcon icon={faBars} />}
        </button>

        {/* <!-- Onclick => Block  --> */}
        {/* <!-- Close Icon --> */}
        <button
          onClick={handleHide}
          className=" fixed right-5 top-5 sm:right-8 sm:top-8 md:top-10 md:right-10"
        >
          {isShow && <FontAwesomeIcon icon={faXmark} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
