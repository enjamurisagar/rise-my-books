import React, { useState } from "react";
import "./Trending.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { TrendingData } from "./TrendingData";
import hot from "./hot.png";
const Trending = (props) => {
  const [trendClick, setTrendClick] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  function trendBtnClicked(item, i) {
    const a = trendClick;
    a[i]++;
    setTrendClick(a);
  }
  return (
    <div className="trend-main">
      <div className="trend-heading">
        <h1>Trending</h1>
        <img src={hot} alt="heading imag" />
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        navigation={true}
        className="trend-swiper"
        slidesPerView={4}
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
            slidesPerView: 3,
            spaceBetween: 10,
          },
          972: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        mousewheel={true}
      >
        {TrendingData.map((item, i) => (
          <SwiperSlide>
            <div className="trend-card">
              <div className="trend-top">
                <img src={item.img} alt="trend pic" />
              </div>
              <div className="trend-bottom">
                <h2 className="trend-name">{item.name}</h2>
                <h3 className="trend-detail">{item.detail}</h3>
                <div className="trend-price">
                  <span className="trend-rupee">&#8377;</span>
                  <h2>{item.price}</h2>
                  <h3>{item.strikedprice}</h3>
                </div>
              </div>
              <div
                className="trend-btn"
                onClick={() => trendBtnClicked(item, i)}
              >
                <button
                  className="button"
                  onClick={() => props.trendSendData(item)}
                >
                  <i class="uil uil-shopping-cart"></i>
                  {trendClick[i] ? "Added" : "Cart"}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trending;
