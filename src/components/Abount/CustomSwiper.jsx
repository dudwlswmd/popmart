import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {  Navigation,Autoplay } from 'swiper/modules';

import './CustomSwiper.scss';

const CustomSwiper = () => {


  
  return (
    <div className='CustomSwiper'>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        // autoplay={true}
        speed={500}
        loop={true}
        navigation={true}
        modules={[ Navigation,Autoplay]}
        className="mySwiper"
      >
        <img className='paint' src="/img/paint.png" alt="스왑배경" />
        <SwiperSlide>
          <img src="/img/img1.jpg" alt="어바웃슬라이드1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img2.jpg" alt="어바웃슬라이드2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img3.jpg" alt="어바웃슬라이드3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img4.jpg" alt="어바웃슬라이드4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/img5.jpg" alt="어바웃슬라이드5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
