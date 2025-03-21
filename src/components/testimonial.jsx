import React from "react";
import plat1 from "../assets/img/plat1.png";

function Testimonial({
  heading1,
  heading2,
  heading3,
  heading4,
  description1,
  description2,
  description3,
  description4,
}) {
  return (
    <>
      <div className="card flex flex-col justify-evenly items-center sm:w-64 sm:h-64 w-64 h-64 md:mb-5 bg-cardBackgroundColor md:h-80 rounded-3xl">
        <div className="quote pt-0 ">
          <img
            className="w-32 border-2 border-bgBorderColor rounded-full"
            src={plat1}
            alt=""
          />
        </div>
        <div className="card-heading text-getmoreBtnColor md:text-2xl text-1xl font-semibold">
          <h2>
            {heading1}
            {heading2}
            {heading3}
            {heading4}
          </h2>
        </div>
        <div className="pararaph text-center md:w-72 w-56">
          <p>
            {" "}
            {description1}
            {description2}
            {description3}
            {description4}
          </p>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
