import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import Getmorebtn from "./getmorebtn";
import { Link, NavLink } from "react-router-dom";
import { HiUserPlus } from "react-icons/hi2";
import { IoIosCart } from "react-icons/io";
// import CustomizedSwitches from "./switchbtn";

function Header() {
  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto flex justify-between items-center p-6">
          <div className="main-logo text-2xl font-bold text-getmoreBtnColor">
            My logo
          </div>
          <nav>
            <ul className="hidden md:flex space-x-16 text-black">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `menu relative hover:text-getmoreBtnColor ${
                      isActive ? "text-getmoreBtnColor" : "text-black"
                    } duration-500 md:py-2 cursor-pointer `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `menu  hover:text-getmoreBtnColor ${
                      isActive ? "text-getmoreBtnColor" : "text-black"
                    } duration-500 md:py-2 cursor-pointer `
                  }
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    `menu  hover:text-getmoreBtnColor duration-500 ${
                      isActive ? "text-getmoreBtnColor" : "text-black"
                    } md:py-2 cursor-pointer `
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `menu  hover:text-getmoreBtnColor duration-500 ${
                      isActive ? "text-getmoreBtnColor" : "text-black"
                    } md:py-2 cursor-pointer `
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `menu  hover:text-getmoreBtnColor duration-500 ${
                      isActive ? "text-getmoreBtnColor" : "text-black"
                    } md:py-2 cursor-pointer `
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* navbar 2 */}

          <div className="flex justify-end first relative items-center space-x-6">
            <li className="list-none">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-getmoreBtnColor duration-500 ${
                    isActive ? "text-getmoreBtnColor" : "text-black"
                  } md:py-2 cursor-pointer text-xl `
                }
              >
                <IoIosCart />
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `hover:text-getmoreBtnColor duration-500 ${
                    isActive ? "text-getmoreBtnColor" : "text-black"
                  } md:py-2 cursor-pointer text-xl`
                }
              >
                <HiUserPlus />
              </NavLink>
            </li>
            {/* <Getmorebtn /> */}
            {/* <CustomizedSwitches /> */}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden ">
            <button className="text-2xl text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
