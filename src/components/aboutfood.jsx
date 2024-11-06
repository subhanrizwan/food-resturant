import React from "react";
import Getmorebtn from "./getmorebtn";
import jug from "../assets/img/jug.jpg";
import { IoMdDoneAll } from "react-icons/io";

function Aboutfood() {
  return (
    <>
      <div className="about-section md:flex flex-wrap justify-between md:w-[65%] md:h-[450px] p-0 m-0 -mt-0">
        <div className="child1 md:w-[42%] md:h-[100%] p-8 pl-0 ">
          <h1 className="text-5xl font-bold pb-4 hover:text-getmoreBtnColor cursor-pointer">
            Healthy and tasty foods with
          </h1>
          <div className="sub-title text-5xl font-bold text-getmoreBtnColor pb-8">
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
        <div className="child2  md:w-[55%] md:h-[100%] p-8 md:flex flex justify-around md:justify-around md:items-center">
          <div className="img-parent w-[40%] md:h-full">
            <img className="mix-blend-multiply" src={jug} alt="" />
          </div>
          <div className="list w-[40%] md:h-full flex items-center">
            <ul className=" space-y-6">
              <li className="flex items-center space-x-2">
                <IoMdDoneAll className="text-getmoreBtnColor text-2xl" />
                <a href="">Exact calorie content</a>
              </li>
              <li className="flex items-center space-x-2">
                <IoMdDoneAll className="text-getmoreBtnColor text-2xl" />
                <a href="">Exact calorie content</a>
              </li>
              <li className="flex items-center space-x-2">
                <IoMdDoneAll className="text-getmoreBtnColor text-2xl" />
                <a href="">Improves health</a>
              </li>
              <li className="flex items-center space-x-2">
                <IoMdDoneAll className="text-getmoreBtnColor text-2xl" />
                <a href="">No sugar and gluten</a>
              </li>
              <li className="flex items-center space-x-2">
                <IoMdDoneAll className="text-getmoreBtnColor text-2xl" />
                <a href="">Adds strength and energy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutfood;
