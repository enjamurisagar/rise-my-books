import React from "react";
import "./Body1.css";
import gif from "../../../assets/body1-book-unscreen.gif";
import img from "../../../assets/body1-icon.png";
const Body1 = (props) => {
  return (
    <div className="body1-main">
      <div className="body1-left-content">
        <h1>
          Until I feared I would lose it, I never loved to read. One does not
          love breathing
          <br />
          <div className="author">
            <i class="uil uil-minus"></i>
            <span> Harper Lee</span>
          </div>
        </h1>
        <div className="gif">
          <img src={gif} alt="gif" />
        </div>
      </div>
      <div className="body1-wrapper">
        <div className="body1-circle"></div>
        <img src={img} alt="" />
      </div>
      <div className="body1-right-content">
        <div className="fill-cart">
          <h1>It's Time to fill your Cart</h1>
          <div className="body1-right-btn">
            <button onClick={props.funct}>
              <a href="#gallery">
                Shop here<i class="uil uil-angle-right-b"></i>
              </a>
            </button>
          </div>
        </div>

        <div className="body1-contact">
          <i class="uil uil-bag"></i>
          <div className="body1-contact-btn">
            <button>Let's talk</button>
            <i class="uil uil-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body1;
