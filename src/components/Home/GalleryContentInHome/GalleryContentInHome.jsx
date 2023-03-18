import React from "react";
import "./GalleryContentInHome.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../../../assets/FullWidthImgs/actionAdventure.jpg";
import img2 from "../../../assets/FullWidthImgs/Comics.jpg";
import img3 from "../../../assets/FullWidthImgs/computerAndInternet.jpg";
import img4 from "../../../assets/FullWidthImgs/Crime.jpg";
import img5 from "../../../assets/FullWidthImgs/Enginnering.jpg";
import img6 from "../../../assets/FullWidthImgs/examPrep.jpg";
import img7 from "../../../assets/FullWidthImgs/sports.jpg";

const GalleryContentInHome = (props) => {
  //   const [imgClicked, setImg] = useState(0);

  return (
    <div className="gall-home-main">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        navigation={true}
        className="my-swiper"
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        mousewheel={true}
      >
        <SwiperSlide>
          <div className="gall-home-wrapper">
            <img src={img1} alt="gallery-home" onClick={props.funct} />
            <h1>Action & Adventure</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gall-home-wrapper">
            <img src={img2} alt="gallery-home" onClick={props.funct} />
            <h1>Comics</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gall-home-wrapper">
            <img src={img3} alt="gallery-home" onClick={props.funct} />
            <h1>Computers & Internet</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gall-home-wrapper">
            <img src={img4} alt="gallery-home" onClick={props.funct} />
            <h1>Crime</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gall-home-wrapper">
            <img src={img5} alt="gallery-home" onClick={props.funct} />
            <h1>Engineering</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gall-home-wrapper">
            <img src={img6} alt="gallery-home" onClick={props.funct} />
            <h1>Exam Preparation</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gall-home-wrapper">
            <img src={img7} alt="gallery-home" onClick={props.funct} />
            <h1>Sports</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GalleryContentInHome;
