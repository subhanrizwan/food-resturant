import React from "react";
import plat1 from "../assets/img/plat1.png";
function Testimonial() {
  return (
    <>
      <div className="card flex flex-col justify-evenly items-center bg-cardBackgroundColor md:w-[16%] md:h-80 rounded-3xl p-10">
        <div className="quote pt-0 ">
          <img
            className="w-32 border-2 border-bgBorderColor rounded-full"
            src={plat1}
            alt=""
          />
        </div>
        <div className="card-heading text-getmoreBtnColor md:text-2xl text-1xl font-semibold">
          <h2>Only natural food</h2>
        </div>
        <div className="pararaph text-center md:w-72 w-56">
          <p>Nam malesuada eros nec luctus laoreet fusce sodales consequat</p>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
