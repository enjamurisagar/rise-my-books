import React, { useState } from "react";
import "./Swipe.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BooksCollection } from "../../../assets/BooksCollection";
//import ItemList from "../../MyCart/ItemList";

const Swipe = (props) => {
  const [click, setClick] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  function clicked(slide, i) {
    const ar = click;
    ar[i]++;
    setClick(ar);
  }
  return (
    <div className="swiper-main">
      <h1>Best Sellers</h1>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        navigation={true}
        className="my-swiper"
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
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
            slidesPerView: 2,
            spaceBetween: 10,
          },
          972: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        {BooksCollection.map((slide, i) => (
          <SwiperSlide className={"swiper-slide"}>
            <div className="card-left">
              <h4 className="slide-name">{slide.name}</h4>
              <span className="slide-author">{slide.author}</span>
              <h5 className="slide-detail">{slide.detail}</h5>

              <div className="slide-amt">
                {" "}
                <span className="rupee">&#8377;</span>
                <h6 className="slide-price">{slide.price}</h6>
                <span className="slide-striked-price">
                  {slide.strikedprice}
                </span>
              </div>
              <div className="btn-swipe" onClick={() => clicked(slide, i)}>
                <button
                  className="swiper-btn"
                  onClick={() => props.sendData(slide)}
                >
                  {click[i] ? "Added" : "Cart"}
                </button>
              </div>
            </div>

            <div className="card-right">
              <img src={slide.img} alt="Slider Imagee" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipe;
