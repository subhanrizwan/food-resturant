import React from "react";
import Testimonial from "../components/testimonial";
import Plat1 from "../assets/img/plat1.png";
import Plat2 from "../assets/img/plat2.png";
import Plat3 from "../assets/img/plat3.png";
import Plat4 from "../assets/img/Plat4.png";
function Section3() {
  return (
    <>
      <div className="container">
        <div className="section3 md:flex md:items-center md:flex-col w-screen p-12 flex flex-col items-center">
          <div className="sub-title text-center font-semibold text-getmoreBtnColor">
            <h5 className="secttion2-subtitle bg-bgBorderColor w-44 p-1 text-center rounded-full md:ml-10 md:mb-3 mb-5">
              Our Benefits
            </h5>
          </div>
          <div className="section-title text-center md:text-6xl text-5xl font-bold pb-10">
            <h1>Why customers </h1>
            <strong className="text-getmoreBtnColor">choose us</strong>
          </div>
          <div className="description text-center md:w-[43%]">
            <p>
              Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam
              malesuada eros nec luctus laoreet. Fusce sodales consequat velit
              eget dictum. Integer ornare magna vitae ex eleifend congue. Morbi
              sit amet nisi iaculis, fringilla orci nec.
            </p>
          </div>
          <div class="w-full md:flex md:justify-center">
            <div className="card-parent md:flex md:justify-center md:flex-wrap md:w-[90%] w-[100%] md:p-5 pt-16 md:space-x-10 md:space-y-0 space-y-10">
              <Testimonial
                heading1={"Natural Food 1"}
                description1={"Description1"}
              />
              <Testimonial
                heading2={"Natural Food 2"}
                description2={"Description2"}
              />
              <Testimonial
                heading3={"Natural Food 3"}
                description3={"Description3"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
