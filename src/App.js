import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";

// import LeftNav from "./components/Home/LeftNav/LeftNav";
import "../src/components/Home/LeftNav/LeftNav.css";
import Header from "./components/Home/Header/Header";
import MyCart from "./components/MyCart/MyCart";
import ReachUs from "./components/ReachUs/ReachUs";
//Gallery Section

function App() {
  /***Data trnasfer */
  const [data, setData] = useState([]);
  const [trendData, setTrendData] = useState([]);
  const [awardData, setAwardData] = useState([]);

  const [gallData, setGallData] = useState([]);
  // console.log(gallData);
  /***Data trnasfer */
  const [showHome, setShowHome] = useState(1);
  const [showGallery, setShowGallery] = useState(0);
  const [showMyCart, setShowMyCart] = useState(0);
  const [showReachUs, setShowReachUs] = useState(0);
  function displayHome() {
    setShowHome(1);
    setShowGallery(0);
    setShowMyCart(0);
    setShowReachUs(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function displayGallery() {
    setShowHome(0);
    setShowGallery(1);
    setShowMyCart(0);
    setShowReachUs(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function displayMyCart() {
    setShowHome(0);
    setShowGallery(0);
    setShowMyCart(1);
    setShowReachUs(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function displayReachUs() {
    setShowHome(0);
    setShowGallery(0);
    setShowMyCart(0);
    setShowReachUs(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="App">
      <Header />
      {/***NAVIGATIONS */} {/**LEFT - NAV */}
      <div className="app-main">
        <div className="left-nav-main">
          <div className="left-nav-wrapper">
            <div className="navs">
              <div
                className={
                  showHome ? "home nav-child home-bg-black" : "home nav-child"
                }
                onClick={displayHome}
              >
                <i class="uil uil-estate"></i>
                <span className="nav-name">Home</span>
              </div>
              <div
                className={
                  showGallery
                    ? "gallery nav-child gallery-bg-black"
                    : "gallery nav-child"
                }
                onClick={displayGallery}
              >
                <i class="uil uil-images"></i>
                <span className="nav-name">Gallery</span>
              </div>
              <div
                className={
                  showMyCart
                    ? "my-cart nav-child my-cart-bg-black"
                    : "my-cart nav-child"
                }
                onClick={displayMyCart}
              >
                <i class="uil uil-shopping-cart-alt"></i>
                <span className="nav-name">My Cart</span>
              </div>
              {/* <div className="about-us nav-child">
              <i class="uil uil-briefcase-alt"></i>
              <span href="#home">About Us</span>
            </div> */}
              <div
                className={
                  showReachUs
                    ? "reach-us nav-child reach-us-bg-black"
                    : "reach-us nav-child"
                }
                onClick={displayReachUs}
              >
                <i class="uil uil-message"></i>
                <span className="nav-name">Reach Us</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-gall-my-cart-reach-us">
          <Home
            className={showHome ? "home-main home-active" : "home-main"}
            function={displayGallery}
            setData={setData}
            setTrendData={setTrendData}
            setAwardData={setAwardData}
          />
          <Gallery
            className={
              showGallery ? "gallery-main gallery-active" : "gallery-main"
            }
            setGallData={setGallData}
          />
          <MyCart
            className={
              showMyCart ? "my-cart-main my-cart-active" : "my-cart-main"
            }
            data={data}
            trendData={trendData}
            awardData={awardData}
            gallData={gallData}
          />
          <ReachUs
            className={
              showReachUs ? "reach-us-main reach-us-active" : "reach-us-main"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
