import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Getmorebtn from "./getmorebtn";
import ViewPlanBtn from "./viewPlan";
import Card1 from "../assets/img/plat1.png";
import Card2 from "../assets/img/plat2.png";
import Card3 from "../assets/img/plat3.png";
import Card4 from "../assets/img/plat4.png";
import Card5 from "../assets/img/plat5.png";
import Card6 from "../assets/img/plat6.png";
import Slidercard1 from "./slidercard1";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        speed={1500}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slidercard1 />
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl">
            <div className="md:flex">
              <img
                className="h-48 w-full object-cover md:h-full md:w-60 rounded md:-ml-28 mt-1 transform hover:translate-x-4 duration-500"
                src={Card2}
                alt="Modern building architecture"
              />
              <div className="p-8 pl-10">
                <div className="uppercase tracking-wide text-3xl text-black font-bold">
                  Office Menu
                </div>
                <p className="text-getmoreBtnColor text-[14px] font-semibold mt-0 pb-3">
                  1400-2000 kkal
                </p>
                <div className="mt-2 text-slate-50 h-28 flex flex-col justify-between">
                  <Getmorebtn />
                  <ViewPlanBtn />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl">
            <div className="md:flex">
              <img
                className="h-48 w-full object-cover md:h-full md:w-60 rounded md:-ml-28 mt-1 transform hover:translate-x-4 duration-500"
                src={Card3}
                alt="Modern building architecture"
              />
              <div className="p-8 pl-10">
                <div className="uppercase tracking-wide text-3xl text-black font-bold">
                  Office Menu
                </div>
                <p className="text-getmoreBtnColor text-[14px] font-semibold mt-0 pb-3">
                  1400-2000 kkal
                </p>
                <div className="mt-2 text-slate-50 h-28 flex flex-col justify-between">
                  <Getmorebtn />
                  <ViewPlanBtn />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl">
            <div className="md:flex">
              <img
                className="h-48 w-full object-cover md:h-full md:w-60 rounded md:-ml-28 mt-1 transform hover:translate-x-4 duration-500"
                src={Card4}
                alt="Modern building architecture"
              />
              <div className="p-8 pl-10">
                <div className="uppercase tracking-wide text-3xl text-black font-bold">
                  Office Menu
                </div>
                <p className="text-getmoreBtnColor text-[14px] font-semibold mt-0 pb-3">
                  1400-2000 kkal
                </p>
                <div className="mt-2 text-slate-50 h-28 flex flex-col justify-between">
                  <Getmorebtn />
                  <ViewPlanBtn />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl">
            <div className="md:flex">
              <img
                className="h-48 w-full object-cover md:h-full md:w-60 rounded md:-ml-28 mt-1 transform hover:translate-x-4 duration-500"
                src={Card5}
                alt="Modern building architecture"
              />
              <div className="p-8 pl-10">
                <div className="uppercase tracking-wide text-3xl text-black font-bold">
                  Office Menu
                </div>
                <p className="text-getmoreBtnColor text-[14px] font-semibold mt-0 pb-3">
                  1400-2000 kkal
                </p>
                <div className="mt-2 text-slate-50 h-28 flex flex-col justify-between">
                  <Getmorebtn />
                  <ViewPlanBtn />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl">
            <div className="md:flex">
              <img
                className="h-48 w-full object-cover md:h-full md:w-60 rounded md:-ml-28 mt-1 transform hover:translate-x-4 duration-500"
                src={Card6}
                alt="Modern building architecture"
              />
              <div className="p-8 pl-10">
                <div className="uppercase tracking-wide text-3xl text-black font-bold">
                  Office Menu
                </div>
                <p className="text-getmoreBtnColor text-[14px] font-semibold mt-0 pb-3">
                  1400-2000 kkal
                </p>
                <div className="mt-2 text-slate-50 h-28 flex flex-col justify-between">
                  <Getmorebtn />
                  <ViewPlanBtn />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
