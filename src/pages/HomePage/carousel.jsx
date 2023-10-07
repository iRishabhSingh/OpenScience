import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const OwlCarouselDemo = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper-homepg"
    >
      <SwiperSlide className="h-56 w-96">Slide 1</SwiperSlide>
      <SwiperSlide className="h-56 w-96">Slide 2</SwiperSlide>
      <SwiperSlide className="h-56 w-96">Slide 3</SwiperSlide>
      <SwiperSlide className="h-56 w-96">Slide 4</SwiperSlide>
      <SwiperSlide className="h-56 w-96">Slide 5</SwiperSlide>
      <SwiperSlide className="h-56 w-96">Slide 6</SwiperSlide>
      <SwiperSlide className="h-56 w-96">Slide 7</SwiperSlide>
      <SwiperSlide className="h-56 w-96">Slide 8</SwiperSlide>
      <SwiperSlide className="h-56 w-96">Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default OwlCarouselDemo;
