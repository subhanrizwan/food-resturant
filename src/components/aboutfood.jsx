import React from "react";
import Getmorebtn from "./getmorebtn";
import jug from "../assets/img/jug.jpg";
import { IoMdDoneAll } from "react-icons/io";

function Aboutfood() {
  return (
    <>
      <div className="about-section md:flex flex-wrap justify-between md:w-[65%] md:h-[450px] p-0 m-0 -mt-0">
        {/* First Child */}

        <div className="child1 md:w-[42%] md:h-[100%] p-8">
          <h5 className="secttion2-subtitle bg-bgBorderColor w-44 p-1 text-center text-getmoreBtnColor font-semibold rounded-full md:ml-10 ml-11 mb-3 md:mb-0">
            Wholesome Flavors
          </h5>
          <h1 className="md:text-5xl text-3xl font-bold pb-4 hover:text-getmoreBtnColor cursor-pointer">
            Healthy and tasty foods with
          </h1>
          <div className="sub-title md:text-5xl text-2xl font-bold text-getmoreBtnColor pb-8">
            <h2>natural ingredients</h2>
          </div>
          <div className="paragraph pb-14 leading-7">
            <p>
              Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam
              malesuada eros nec luctus laoreet. Fusce sodales consequat velit
              eget dictum. Integer ornare magna vitae ex eleifend congue. Morbi
              sit amet nisi iaculis, fringilla orci nec.
            </p>
          </div>
          <div className="button">
            <Getmorebtn />
          </div>
        </div>
        {/* Second Child */}
        <div className="child2 md:w-[55%] md:h-[100%] p-8 md:flex flex justify-between md:justify-around md:items-center">
          <div className="img-parent w-[40%] md:h-full">
            <img className="mix-blend-multiply" src={jug} alt="" />
          </div>
          <div className="list w-[40%] md:h-full flex items-center">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutfood;
