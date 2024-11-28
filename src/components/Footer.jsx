import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="md:flex mx-auto md:w-screen md:justify-center bg-getmoreBtnColor pt-8">
        <div className="step1 md:w-[28%] h-96 p-5 text-white">
          <div className="resturant-title">
            <h1 className="text-4xl pb-3" >Food Delivery</h1>
            <p className="pt-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam recusandae nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla  mollitia est, optio laboriosam fuga?</p>
          </div>
          <div className="social-icons md:w-72 md:flex space-x-10  pt-10">
            <Link>
            <FaLinkedin />
            </Link>
            <Link>
            <FaGithub />
            </Link>
            <Link>
            <FaTwitter />
            </Link>
            <Link>
            <MdMarkEmailUnread />
            </Link>
          </div>
        </div>
        <div className="step2 menus md:w-[16%] md:h-96  p-5 text-white">
          <h2 className="text-2xl" >Our Menus</h2>
          <ul className="pt-5 text-1xl">
            <li className="pb-2">
              <Link>
              Chicken Burger
              </Link>
            </li>
            <li className="pb-2">
              <Link>
              Brief Burger
              </Link>
            </li>
            <li className="pb-2">
              <Link>
              Beef
              </Link>
            </li>
            <li className="pb-2">
            <Link>
              Meat
              </Link>
            </li>
            <li className="pb-2">
            <Link>
              Vegetable
              </Link>
            </li>
            <li className="pb-2">
            <Link>
              Sea Food
              </Link>
            </li>
            <li className="pb-2">
            <Link>
              Desert
              </Link>
            </li>
            <li className="pb-0">
            <Link>
              Cold Drink
              </Link>
            </li>
          </ul>
          </div>
        <div className="step3 menus md:w-[16%] h-96 height-auto  p-5 text-white">
        <h2 className="text-2xl" >Useful Links</h2>

        <ul className="pt-5 text-1xl">
            <li className="pb-2">
              <Link>
              Home
              </Link>
            </li>
            <li className="pb-2">
              <Link>
              About Us
              </Link>
            </li>
            <li className="pb-2">
              <Link>
              Blog
              </Link>
            </li>
            <li className="pb-2">
            <Link>
              Contact Us
              </Link>
            </li>
            <li className="pb-2">
            <Link>
              Privacy Policy
              </Link>
            </li>
            <li className="pb-2">
            <Link>
              Faq Queries
              </Link>
            </li>
           
          </ul>
          </div>
        <div className="step4 menus md:w-[16%] md:h-96 p-5 text-white">
        <h2 className="text-2xl" >Contact us</h2>
        <ul className="pt-5 text-1xl">
            <li className="pb-2">
              <Link>
              Home
              </Link>
            </li>
            <li className="pb-2">
              <Link>
              About Us
              </Link>
            </li>
            <li className="pb-2">
              <Link>
              Blog
              </Link>
            </li>
            <li className="pb-2">
            <Link>
              Contact Us
              </Link>
            </li>
            <li className="pb-2">
            <Link>
              Privacy Policy
              </Link>
            </li>
            <li className="pb-2">
            <Link>
              Faq Queries
              </Link>
            </li>
           
          </ul>
          </div>
        </footer>
       
       

      </div>
    </>
  );
}

export default Footer;
