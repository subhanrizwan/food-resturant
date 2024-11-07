import React from "react";
import plat1 from "../assets/img/plat1.png";
function Testimonial() {
  return (
    <>
      <div className="card flex flex-col justify-evenly items-center bg-cardBackgroundColor md:w-[16%] md:h-80 rounded-3xl">
        <div className="quote pt-0 ">
          <img
            className="w-36 border-2 border-bgBorderColor rounded-full"
            src={plat1}
            alt=""
          />
        </div>
        <div className="card-heading text-getmoreBtnColor text-2xl font-semibold">
          <h2>Only natural food</h2>
        </div>
        <div className="pararaph text-center w-72">
          <p>Nam malesuada eros nec luctus laoreet fusce sodales consequat</p>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
