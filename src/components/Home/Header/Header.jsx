import React, { useState } from "react";
import "./Header.css";
import img from "../../../assets/icon copy.png";
const Header = () => {
  const [visible, setVisible] = useState(false);
  const [signup, setsignup] = useState("Sign up");
  const [login, setLogin] = useState("Log in");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [clientMessage, setClientMessage] = useState(0);

  const [loginVisible, setLoginVisible] = useState(false);
  const [loginName, setLoginName] = useState("");

  const [forgotPassVisible, setForgotPassVisible] = useState(0);
  const [lastPass, setLastPass] = useState("");

  //HEADER HAMBURGER

  function signedUp() {
    setVisible(0);
    setsignup(""); // Vanishing signup & login when signup in the form clicked
    setLogin("");
  }
  function loggedIn() {
    setLoginVisible(0);
    setsignup(""); // Vanishing signup & login when signup in the form clicked
    setLogin("");
  }
  function forgotPassword() {
    setLoginVisible(0);
    setForgotPassVisible(true);
  }
  const len = firstname.length + lastname.length;
  const loginLen = loginName.length;
  const allFieldsFilled =
    firstname && lastname && email && pass === confirmPass;
  const allFieldsFilledForLogin = email && pass;
  const allFieldsFilledForForgotPass = email && lastPass;
  return (
    <>
      <div className="header-main">
        <div className="header-left">
          <img src={img} alt="pic" />
          <h1>Rise My Books</h1>
        </div>

        <div className="header-right">
          <p>
            {!visible && len
              ? "Hi " + firstname + " " + lastname
              : !loginVisible && loginLen
              ? "Hi " + loginName
              : ""}
          </p>
          {/* <a href="#ham" className="header-ham">
              <i class="uil uil-bars"></i>
            </a> */}

          <div className="right-wrapper">
            <div>
              <a
                href="#signup"
                onClick={() => {
                  setVisible(true);
                }}
              >
                {signup}
              </a>
              <a
                href="#login"
                onClick={() => {
                  setLoginVisible(1);
                }}
              >
                {login}
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      {/*END OF HEADER MAIN **/}
      {/**WHEN SIGNUP IS CLICKED*/}
      {/**HIDDEN */}
      <div className={visible ? "signup signup-active" : "signup"}>
        <div className="signup-wrapper">
          <div className="signup-header">
            <h2>One Step to go</h2>
            <img src={img} alt="signuplogo" width={50} />
            <div>
              <i
                class="uil uil-times-circle"
                onClick={() => {
                  setVisible(false);
                }}
              ></i>
            </div>
          </div>
          <div className="signup-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="firstname input">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="secondname input">
                <label htmlFor="">Second Name</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="email input">
                <label htmlFor="">Email </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="password input">
                <label htmlFor="">Set Password </label>
                <input
                  type="text"
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
              </div>
              <div className="confirm-password input">
                <label htmlFor="">Confirm Password</label>
                <input
                  type="password"
                  onChange={(e) => {
                    setConfirmPass(e.target.value);
                  }}
                />
              </div>
              <h2>
                {pass === confirmPass ? "" : "password doen't match each other"}
              </h2>
              <input className="checkbox" type="checkbox" checked={true} />
              <span>Accept terms & Conditions</span>
              <h1>{clientMessage ? "Please fill all the fields" : ""}</h1>
              <div className="form-btn">
                <button
                  type="submit"
                  onClick={
                    allFieldsFilled
                      ? () => signedUp()
                      : () => {
                          setClientMessage(1);
                        }
                  }
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/**WHEN LOGIN IS CLICKED */}
      <div
        className={loginVisible ? "signup signup-active login" : "signup login"}
      >
        <div className="signup-wrapper">
          <div className="signup-header">
            <h2>Welcome back...</h2>
            <img src={img} alt="signuplogo" width={50} />
            <div>
              <i
                class="uil uil-times-circle"
                onClick={() => {
                  setLoginVisible(false);
                }}
              ></i>
            </div>
          </div>
          <div className="signup-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="firstname input">
                <label htmlFor="">Your Name</label>
                <input
                  type="text"
                  value={loginName}
                  onChange={(e) => {
                    setLoginName(e.target.value);
                  }}
                />
              </div>
              <div className="email input">
                <label htmlFor="">Email </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="password input">
                <label htmlFor="">Set Password </label>
                <input
                  type="text"
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
              </div>
              <input className="checkbox" type="checkbox" checked={true} />
              <span>Accept terms & Conditions</span>
              <h1>{clientMessage ? "Please fill all the fields" : ""}</h1>
              <div className="form-btn">
                <button
                  type="submit"
                  onClick={
                    allFieldsFilledForLogin
                      ? loggedIn
                      : () => {
                          setClientMessage(1);
                        }
                  }
                >
                  Log in
                </button>
                <button className="forgot-btn" onClick={forgotPassword}>
                  Forgot Password ?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/**FORGOT PASSWORD */}
      <div
        className={
          forgotPassVisible ? "forgot-pass forgot-active" : "forgot-pass"
        }
      >
        <div className="forgot-pass-wrapper">
          <div className="forgot-pass-header">
            <h2>One Step to go</h2>
            <img src={img} alt="signuplogo" width={50} />
            <div>
              <i
                class="uil uil-times-circle"
                onClick={() => {
                  setForgotPassVisible(0);
                }}
              ></i>
            </div>
          </div>
          <div className="forgot-pass-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="forgot-email input">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="last-pass input">
                <label>Last Password</label>
                <input
                  type="text"
                  value={lastPass}
                  onChange={(e) => {
                    setLastPass(e.target.value);
                  }}
                />
              </div>
              <p>{clientMessage ? "Please fill all Fields " : ""}</p>
              <div className="forgot-submit-btn">
                <button
                  onClick={
                    allFieldsFilledForForgotPass
                      ? () => {
                          setForgotPassVisible(0);
                        }
                      : () => setClientMessage(1)
                  }
                >
                  {" "}
                  Submit here
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
