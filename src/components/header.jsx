import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import Getmorebtn from "./getmorebtn";
import { Link, NavLink } from "react-router-dom";
import { HiUserPlus } from "react-icons/hi2";
import { IoIosCart } from "react-icons/io";
import CustomizedSwitches from "./switchbtn";

function Header() {
  const [open,setOpen] = useState(false);
  return (
    <>
      <header >
        <div className="container-fluid mx-auto flex justify-between items-center p-5">
          <div className="main-logo text-2xl font-bold text-getmoreBtnColor">
           logo
          </div>
          <nav>
            <ul className="hidden md:flex lg:space-x-16 md:space-x-8 text-black">
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
          <div className="flex justify-end relative items-center md:space-x-6 space-x-4 sm:left-32 lg:left-0 md:left-0 left-10">
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
            <li className="list-none" id="listone" >
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
            <li className="list-none sm:pr-5">
            <CustomizedSwitches  />
            </li>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden p-0">
            <div onClick={()=> setOpen(!open)} className="text-2xl text-black hover:text-gray-400">
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>

           {/* Mobile Menu */}
           {open && (
          <div className="md:hidden bg-white p-5 shadow-md absolute top-16 left-0 w-full z-50">
            <ul className="flex flex-col space-y-4 text-black">
              {["Home", "About us", "Products", "Blog", "Contacts"].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="block text-lg hover:text-getmoreBtnColor"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
