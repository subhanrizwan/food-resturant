import React from "react";
import Power from "../assets/img/food2.jpg";
import Slider from "../components/slider";
import Aboutfood from "../components/aboutfood";
function HerSection2() {
  return (
    <>
      <div className="container">
        <div className="heroSection2 flex flex-wrap justify-center h-[1000px] w-screen -mt-[120px] md:mb-32 mb-40">
          <div className="swipper-slider flex justify-center p-5 md:h-[380px] h-[370px] md:w-[70%] w-[100%] ">
            <Slider />
          </div>
          <Aboutfood />
        </div>
      </div>
    </>
  );
}

export default HerSection2;
