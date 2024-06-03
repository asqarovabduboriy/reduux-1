import React from "react";
import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from '../../assets/imgs/image copy.png'
import img2 from '../../assets/imgs/image copy 2.png'
import img3 from '../../assets/imgs/image copy 3.png'
import img4 from '../../assets/imgs/image copy 4.png'
import img5 from '../../assets/imgs/image copy 5.png'
const Banner = () => {
  return (
    <>
   <div className="container">
   <Swiper 
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <img className="banner_img" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="banner_img" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="banner_img" src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="banner_img" src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="banner_bagraund">
        <img className="banner_img" src={img5} alt="" />
        </div>
        </SwiperSlide>
      </Swiper>
   </div>
    </>
  );
};

export default Banner;
