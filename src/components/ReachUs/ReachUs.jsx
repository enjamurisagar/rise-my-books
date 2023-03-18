import React, { useRef } from "react";
import "./ReachUs.css";
import emailjs from "@emailjs/browser";
const ReachUs = (props) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_nay4y3h",
      "template_x003hcr",
      form.current,
      "EOSWEqVCK4lsvGpcc"
    );
    e.target.reset();
  };
  return (
    <div className={props.className}>
      <div className="contact-main" id="contact">
        <div className="contact-name">
          <p>Contact Me</p>
        </div>
        <div className="main-flex">
          <div className="left">
            <div className="left-block">
              <h2>Talk to me</h2>
              <div className="contact-social">
                <i class="bx bx-envelope"></i>
                <span>Email</span>
                <button className="contact-social-btn">
                  <a href="https://www.email.com">
                    Write me <i class="uil uil-arrow-right"></i>
                  </a>
                </button>
              </div>
              <div className="contact-social">
                <i class="bx bxl-linkedin"></i>
                <span>Linkedin</span>
                <button className="contact-social-btn">
                  <a href="https://www.linkedin.com/in/enjamuri-sagar-5b0425222/">
                    Write me <i class="uil uil-arrow-right"></i>
                  </a>
                </button>
              </div>
              <div className="contact-social">
                <i class="bx bxl-facebook"></i>
                <span>Facaebook</span>
                <button className="contact-social-btn">
                  <a href="https://www.facebook.com/sagar.enjamuri.3/">
                    Write me <i class="uil uil-arrow-right"></i>
                  </a>
                </button>
              </div>
              <div className="contact-social">
                <i class="bx bxl-instagram"></i>
                <span>Instagram</span>
                <button className="contact-social-btn">
                  <a href="https://www.instagram.com/sagar.enjamuri/">
                    Write me <i class="uil uil-arrow-right"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="right-block">
              <h2>Any Suggestions To Me</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-div">
                  {/* <label>Name</label> */}
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Insert your name"
                  />
                </div>
                <div className="form-div">
                  {/* <label>Email</label> */}
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Insert your Email"
                  />
                </div>
                <div className="form-div">
                  {/* <label>Any suggestion</label> */}
                  <textarea
                    className="form-input"
                    name="suggestion"
                    cols="20"
                    rows="3"
                    placeholder="Give me Suggestion"
                  ></textarea>
                </div>
                <div className="reach-us-btn">
                  <button className="say-hello">Say hello</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
