import React from "react";
import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { TestiData } from "./TestiData";
const Testimonials = () => {
  return (
    <div className="testi-main">
      <h1>Let's hear Some from our Customers...</h1>
      <Swiper
        modules={[Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        navigation={true}
        className="testi-swiper"
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          972: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {TestiData.map((item, i) => (
          <SwiperSlide>
            <div className="testi-card">
              <div className="card-top">
                <h2>{item.heading}</h2>
                <h5>{item.data}</h5>
              </div>
              <div className="card-bottom">
                <div className="card-img">
                  <img src={item.img} alt="testi-img" />
                </div>
                <div className="testi-details">
                  <h2>{item.name}</h2>
                  <div className="testi-profession">
                    <i class="uil uil-briefcase-alt"></i>
                    <h3>{item.profession}</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
