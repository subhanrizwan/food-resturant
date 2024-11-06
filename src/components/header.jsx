import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import Getmorebtn from "./getmorebtn";
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
                <a
                  className="menu relative hover:text-getmoreBtnColor  duration-500 md:py-2"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="menu hover:text-getmoreBtnColor duration-500 md:py-2"
                  href="#blog"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="menu hover:text-getmoreBtnColor duration-500 md:py-2"
                  href="#service"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className="menu hover:text-getmoreBtnColor duration-500 md:py-2"
                  href="#solution"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="menu hover:text-getmoreBtnColor duration-500 md:py-2"
                  href="#contact"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex justify-end">
            <Getmorebtn />
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
