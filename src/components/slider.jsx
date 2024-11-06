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
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        speed={1500}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <Slidercard1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercard1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercard1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercard1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercard1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercard1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercard1 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
