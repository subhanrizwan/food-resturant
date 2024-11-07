import React from "react";
import Testimonial from "../components/testimonial";

function Section3() {
  return (
    <>
      <div className="container">
        <div className="section3 md:flex md:items-center md:flex-col w-screen p-16 md:mt-20">
          <div className="sub-title text-center font-light font-semibold text-getmoreBtnColor">
            <h5 className="secttion2-subtitle bg-bgBorderColor w-44 p-1 text-center rounded-full md:ml-10 md:mb-3">
              Our Benefits
            </h5>
          </div>
          <div className="section-title text-center text-6xl font-bold pb-10">
            <h1>
              Why customers{" "}
              <strong className="text-getmoreBtnColor">choose us</strong>
            </h1>
          </div>
          <div className="description text-center md:w-[43%]">
            <p>
              Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam
              malesuada eros nec luctus laoreet. Fusce sodales consequat velit
              eget dictum. Integer ornare magna vitae ex eleifend congue. Morbi
              sit amet nisi iaculis, fringilla orci nec.
            </p>
          </div>
          <div class="w-full md:flex md:justify-center p-10">
            <div className="card-parent md:flex md:justify-center md:flex-wrap w-[90%] p-8 space-x-10">
              <Testimonial />
              <Testimonial />
              <Testimonial />
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
