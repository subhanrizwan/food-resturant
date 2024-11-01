import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <header className="bg-gray-800">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="main-logo text-2xl font-bold text-yellow-300">
            My logo
          </div>
          <nav>
            <ul className="hidden md:flex space-x-16 text-white shadow">
              <li>
                <a className="hover:text-gray-400" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#blog">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#service">
                  Products
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#solution">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#contact">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex justify-end">
            <button className="bg-black text-center text-bold text-white hover:bg-gray-400 px-6 py-3 rounded-sm">
              Get Menu
            </button>
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
