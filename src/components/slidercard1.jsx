import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Getmorebtn from "./getmorebtn";
import ViewPlanBtn from "./viewPlan";
import plat6 from '../assets/img/plat6.png'
// const images = [
//   "../assets/img/plat6.png",
// ];

const Slidercard1 = ({
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  price1,
  price2,
  price3,
  price4,
  price5,
  price6,
  price7,
}) => {
  return (
    <>
      <SwiperSlide>
        <div className="max-w-md mx-auto bg-cardBackgroundColor rounded-xl shadow-md overflow-hidden md:max-w-1xl">
          <div className="md:flex flex">
              <img
                className="h-full w-60 -ml-28 object-cover md:h-full md:w-60 rounded md:-ml-28 mt-1 transform hover:translate-x-4 duration-500"
                src={plat6}
                alt={`Image`}
              />
            <div className="p-8 pl-10">
              <div className="uppercase tracking-wide text-2xl text-black font-bold">
                <h4>
                  {title1}
                  {title2}
                  {title3}
                  {title4}
                  {title5}
                  {title6}
                  {title7}
                </h4>
              </div>
              <p className="text-getmoreBtnColor text-[14px] font-semibold mt-0 pb-3">
                {price1}
                {price2}
                {price3}
                {price4}
                {price5}
                {price6}
                {price7}
              </p>
              <div className="mt-2 text-slate-50 h-28 flex flex-col justify-between">
                <Getmorebtn />
                <ViewPlanBtn />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </>
  );
};

export default Slidercard1;
