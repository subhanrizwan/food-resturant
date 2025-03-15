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
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
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
          <Slidercard1 title1={"Office Menu1"} price1={"1400-2000 kkal"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercard1 title2={"Office Menu2"} price2={"1300-1000 kkal"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercard1 title3={"Office Menu3"} price3={"1600-4000 kkal"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercard1 title4={"Office Menu4"} price4={"1800-6000 kkal"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercard1 title5={"Office Menu5"} price5={"2000-8000 kkal"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercard1 title6={"Office Menu6"} price1={"1500-3000 kkal"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercard1 title7={"Office Menu7"} price1={"1900-7000 kkal"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
