import React, { useState } from "react";
import "./AwardWinners.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { AwardWinnersData } from "./AwardWinnersData";

const AwardWinners = (props) => {
  const [awardClick, setAwardClick] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  function awardBtnClicked(item, i) {
    const a = awardClick;
    a[i]++;
    setAwardClick(a);
    console.log(awardClick);
  }
  return (
    <div className="award-main">
      <div className="award-heading">
        <h1>Award Winners</h1>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        navigation={true}
        className="award-swiper"
        slidesPerView={4}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        mousewheel={true}
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
      >
        {AwardWinnersData.map((item, i) => (
          <SwiperSlide>
            <div className="award-card">
              <div className="award-top">
                <img src={item.img} alt="award pic" />
              </div>
              <div className="award-bottom">
                <h2 className="award-name">{item.name}</h2>
                <h3 className="award-detail">{item.detail}</h3>
                <div className="award-price">
                  <span className="award-rupee">&#8377;</span>
                  <h2>{item.price}</h2>
                  <h3>{item.strikedprice}</h3>
                </div>
              </div>
              <div
                className="award-btn"
                onClick={() => awardBtnClicked(item, i)}
              >
                <button
                  className="button"
                  onClick={() => props.awardWinnersSendData(item)}
                >
                  <i class="uil uil-shopping-cart"></i>
                  {awardClick[i] ? "Added" : "Cart"}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AwardWinners;
