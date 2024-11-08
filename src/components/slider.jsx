import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
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
