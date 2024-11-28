import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer container mx-auto md:flex md:justify-around md:items-center p-5 bg-gray-800">
        <div className="step1 md:w-[35%] h-96 bg-gray-400 p-5">
          <div className="resturant-title">
            <h1 className="text-4xl pb-3" >Food Delivery</h1>
            <p className="pt-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam recusandae nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla nulla  mollitia est, optio laboriosam fuga?</p>
          </div>
          <div className="social-icons">
          </div>
        </div>
        <div className="step2 menus w-[20%] h-96  bg-gray-300 p-5">
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
        <div className="step2 menus md:w-[20%] h-96 height-auto bg-gray-200 p-5">
        <h2 className="text-2xl" >Useful Links</h2>

        <ul className="pt-5 text-1xl">
        <li className="pb-2">
        <Link>
              Food
              </Link>
            </li>
            <li className="pb-2">
              <Link>
              Food
              </Link>
            </li>
            <li className="pb-2">
              <Link>
              Food
              </Link>
            </li>
          </ul>
          </div>
        <div className="step2 menus md:w-[20%] md:h-96 bg-gray-300 p-5">
        <h2 className="text-2xl" >Contact us</h2>
          <ul  >
            <li>
              <Link>
              Chicken Burger
              </Link>
            </li>
            <li>
              <Link>
              Brief Burger
              </Link>
            </li>
            <li>
              <Link>
              Beef
              </Link>
             

            </li>
            <li>
            <Link>
              Meat
              </Link>
            </li>
            <li>
            <Link>
              Vegetable
              </Link>
            </li>
          </ul>
          </div>
       
       

      </div>
    </>
  );
}

export default Footer;
