import React from "react";
import Power from "../assets/img/food2.jpg";
import Slider from "../components/slider";

function HerSection2() {
  return (
    <>
      <div className="container">
        <div className="heroSection2 flex justify-center h-[1000px] w-screen -mt-[120px] m-0 p-0">
          <div className="swipper-slider flex justify-center p-5  h-[350px] w-3/5 m-0 ">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}

export default HerSection2;
