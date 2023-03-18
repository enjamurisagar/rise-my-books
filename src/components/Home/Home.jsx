import React, { useEffect, useState } from "react";
import "./Home.css";

import Body1 from "./Body1/Body1";
import Swipe from "./Swipe/Swipe";
import Testimonials from "./Testimonials/Testimonials";
import Trending from "./Trending/Trending";
import GalleryContentInHome from "./GalleryContentInHome/GalleryContentInHome";
import AwardWinners from "./AwardWinners/AwardWinners";
import Footer from "./Footer/Footer";

import homeImg from "./home-preview.jpg";

const Home = (props) => {
  const [array, setArray] = useState([]);
  const [trendArray, setTrendArray] = useState([]);
  const [awardData, setAwardData] = useState([]);
  function sendData(item) {
    setArray((old) => {
      return [...old, item];
    });
  }
  useEffect(() => {
    //To Quick update of the state
    props.setData(array);
  });

  //Trending Component data
  function trendSendData(item) {
    setTrendArray((prev) => {
      return [...prev, item];
    });
  }
  useEffect(() => {
    props.setTrendData(trendArray);
  });

  //AwardWinnersData
  function awardWinnersSendData(item) {
    setAwardData((oldItem) => {
      return [...oldItem, item];
    });
  }
  useEffect(() => {
    props.setAwardData(awardData);
  });

  return (
    <div
      className={props.className}
      /**body-main & body-active */
    >
      <Body1 funct={props.function} />

      <Swipe sendData={sendData} />

      <img className="home-preview" src={homeImg} alt="Home img" />

      <Trending trendSendData={trendSendData} />
      <Testimonials />
      <GalleryContentInHome funct={props.function} />
      <AwardWinners awardWinnersSendData={awardWinnersSendData} />
      <Footer />
    </div>
  );
};

export default Home;
