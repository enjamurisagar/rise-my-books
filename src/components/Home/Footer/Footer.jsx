import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="foot-main">
      <div className="foot-wrapper">
        <div className="foot-top">
          <div className="foot-name">
            <h4>BookYourBook</h4>
            <h5>Let's fill your Shelf</h5>
          </div>
        </div>
        <div className="foot-mid">
          <div className="company foot-mid-child">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="policies foot-mid-child">
            <h3>Policies</h3>
            <ul>
              <li>Privacy Policies</li>
              <li>Terms of Use</li>
              <li>Secure Shopping</li>
              <li>Copyright Policy</li>
            </ul>
          </div>
          <div className="help foot-mid-child">
            <h3>Any Help</h3>
            <ul>
              <li>Payment</li>
              <li>Shipping</li>
              <li>Return</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <h2>
            Copyright &copy; 2023. BookYourBook.com. All Rights Reserved :)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
