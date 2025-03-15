import React from "react";
import Getmorebtn from "./getmorebtn";
import jug from "../assets/img/jug.jpg";
import { IoMdDoneAll } from "react-icons/io";

function Aboutfood() {
  return (
    <>
      <div className="about-section md:flex flex-wrap md:justify-between md:w-[65%] md:h-[450px] -mt-0 ">
        {/* First Child */}
        <div className="child1 sm:text-center text-center md:text-start md:w-[42%] md:h-[100%] p-8">
          <div className="sm:flex sm:justify-center flex justify-center md:justify-start">
          <h5 className="secttion2-subtitle md:text-sm bg-bgBorderColor w-44 p-1 md:mb-2 text-center text-getmoreBtnColor font-semibold rounded-full md:ml-10 ml-11 mb-3 md:mb-0">
            Wholesome Flavors
          </h5>
          </div>
          <h1 className="md:text-4xl text-3xl font-bold pb-4 hover:text-getmoreBtnColor cursor-pointer">
            Healthy and tasty foods with
          </h1>
          <div className="sub-title text-3xl font-bold text-getmoreBtnColor pb-8">
            <h2>natural ingredients</h2>
          </div>
          <div className="paragraph lg:pb-14 md:pb-8 sm:pb-4 leading-7 md:text-sm">
            <p>
              Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam
              malesuada eros nec luctus laoreet. Fusce sodales consequat velit
              eget dictum. Integer ornare magna vitae ex eleifend congue. Morbi
              sit amet nisi iaculis, fringilla orci nec.
            </p>
          </div>
          <div className="">
            <Getmorebtn />
          </div>
        </div>
        {/* Second Child */}
        <div className="child2 md:w-[55%] md:h-[100%] p-8 md:flex flex justify-between md:justify-around md:items-center sm:p-5 p-5">
          <div className="img-parent sm:flex sm:justify-center flex justify-center w-[100%] md:h-full md:w-[100%] sm:h-96 h-72">
            <img className="mix-blend-multiply" src={jug} alt="" />
          </div>
          {/* <div className="list w-[40%] md:h-full flex items-center">
            <ul className=" space-y-6">
              <li className="flex items-center space-x-2">
                <IoMdDoneAll className="text-getmoreBtnColor md:text-2xl " />
                <a className="text-[13px]" href="">
                  Exact calorie content
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <IoMdDoneAll className="text-getmoreBtnColor md:text-2xl " />
                <a className="text-[13px]" href="">
                  Exact calorie content
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <IoMdDoneAll className="text-getmoreBtnColor md:text-2xl text-[13px]" />
                <a className="text-[13px]" href="">
                  Improves health
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <IoMdDoneAll className="text-getmoreBtnColor md:text-2xl text-[13px]" />
                <a className="text-[13px]" href="">
                  No sugar and gluten
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <IoMdDoneAll className="text-getmoreBtnColor md:text-2xl text-[13px]" />
                <a className="text-[13px]" href="">
                  Adds strength and energy
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Aboutfood;
