import React from "react";
import "./LeftNav.css";

const LeftNav = () => {
  return (
    <>
      <div className="left-nav-main">
        <div className="left-nav-wrapper">
          <div className="navs">
            <div className="home nav-child">
              <i class="uil uil-estate"></i>
              <a href="#home">Home</a>
            </div>
            <div className="gallery nav-child">
              <i class="uil uil-images"></i>
              <a href="#home">Gallery</a>
            </div>
            <div className="my-cart nav-child">
              <i class="uil uil-shopping-cart-alt"></i>
              <a href="#home">My Cart</a>
            </div>
            <div className="about-us nav-child">
              <i class="uil uil-briefcase-alt"></i>
              <a href="#home">About Us</a>
            </div>
            <div className="reach-us nav-child">
              <i class="uil uil-message"></i>
              <a href="#home">Reach Us</a>
            </div>
          </div>
          <div className="social"></div>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
