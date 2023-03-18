import React, { useState } from "react";
import "./GalleryHeadCatergories.css";

import { ActionAdventure } from "../ActionAdventure";
import { ArtsFilms } from "../ArtsFilms";
import { Biographies } from "../Biographies";
import { Comics } from "../Comics";
import { Computers } from "../Computers";
import { Crime } from "../Crime";
import { Engg } from "../Engg";
import { ExamPrep } from "../ExamPrep";
import { Health } from "../Health";
import { Law } from "../Law";
import { Maps } from "../Maps";
import { Medicine } from "../Medicine";
import { Sports } from "../Sports";

//Swipers
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const GalleryHeadCategories = (props) => {
  const [showActionAdventure, setActionAdventure] = useState(1);
  const [showArtsFilms, setArtsFilms] = useState(0);
  const [showBiographies, setBiographies] = useState(0);
  const [showComics, setComics] = useState(0);
  const [showComputers, setComputers] = useState(0);
  const [showCrime, setCrime] = useState(0);
  const [showEngg, setEngg] = useState(0);
  const [showExamPrep, setExamPrep] = useState(0);
  const [showHealth, setHealth] = useState(0);
  const [showLaw, setLaw] = useState(0);
  const [showMaps, setMaps] = useState(0);
  const [showMedicine, setMedicine] = useState(0);
  const [showSports, setSports] = useState(0);

  function displayActionAdventure() {
    setActionAdventure(1);
    setArtsFilms(0);
    setBiographies(0);
    setComics(0);
    setComputers(0);
    setCrime(0);
    setEngg(0);
    setExamPrep(0);
    setHealth(0);
    setLaw(0);
    setMaps(0);
    setMedicine(0);
    setSports(0);
  }
  function displayArtsFilms() {
    setActionAdventure(0);
    setArtsFilms(1);
    setBiographies(0);
    setComics(0);
    setComputers(0);
    setCrime(0);
    setEngg(0);
    setExamPrep(0);
    setHealth(0);
    setLaw(0);
    setMaps(0);
    setMedicine(0);
    setSports(0);
  }

  function displayBiographies() {
    setActionAdventure(0);
    setArtsFilms(0);
    setBiographies(1);
    setComics(0);
    setComputers(0);
    setCrime(0);
    setEngg(0);
    setExamPrep(0);
    setHealth(0);
    setLaw(0);
    setMaps(0);
    setMedicine(0);
    setSports(0);
  }

  function displayComics() {
    setActionAdventure(0);
    setArtsFilms(0);
    setBiographies(0);
    setComics(1);
    setComputers(0);
    setCrime(0);
    setEngg(0);
    setExamPrep(0);
    setHealth(0);
    setLaw(0);
    setMaps(0);
    setMedicine(0);
    setSports(0);
  }

  function displayComputers() {
    setActionAdventure(0);
    setArtsFilms(0);
    setBiographies(0);
    setComics(0);
    setComputers(1);
    setCrime(0);
    setEngg(0);
    setExamPrep(0);
    setHealth(0);
    setLaw(0);
    setMaps(0);
    setMedicine(0);
    setSports(0);
  }
  function displayCrime() {
    setActionAdventure(0);
    setArtsFilms(0);
    setBiographies(0);
    setComics(0);
    setComputers(0);
    setCrime(1);
    setEngg(0);
    setExamPrep(0);
    setHealth(0);
    setLaw(0);
    setMaps(0);
    setMedicine(0);
    setSports(0);
  }
  function displayEngg() {
    setActionAdventure(0);
    setArtsFilms(0);
    setBiographies(0);
    setComics(0);
    setComputers(0);
    setCrime(0);
    setEngg(1);
    setExamPrep(0);
    setHealth(0);
    setLaw(0);
    setMaps(0);
    setMedicine(0);
    setSports(0);
  }
  function displayExampPrep() {
    setActionAdventure(0);
    setArtsFilms(0);
    setBiographies(0);
    setComics(0);
    setComputers(0);
    setCrime(0);
    setEngg(0);
    setExamPrep(1);
    setHealth(0);
    setLaw(0);
    setMaps(0);
    setMedicine(0);
    setSports(0);
  }
  function displayHealth() {
    setActionAdventure(0);
    setArtsFilms(0);
    setBiographies(0);
    setComics(0);
    setComputers(0);
    setCrime(0);
    setEngg(0);
    setExamPrep(0);
    setHealth(1);
    setLaw(0);
    setMaps(0);
    setMedicine(0);
    setSports(0);
  }
  function displayLaw() {
    setActionAdventure(0);
    setArtsFilms(0);
    setBiographies(0);
    setComics(0);
    setComputers(0);
    setCrime(0);
    setEngg(0);
    setExamPrep(0);
    setHealth(0);
    setLaw(1);
    setMaps(0);
    setMedicine(0);
    setSports(0);
  }
  function displayMaps() {
    setActionAdventure(0);
    setArtsFilms(0);
    setBiographies(0);
    setComics(0);
    setComputers(0);
    setCrime(0);
    setEngg(0);
    setExamPrep(0);
    setHealth(0);
    setLaw(0);
    setMaps(1);
    setMedicine(0);
    setSports(0);
  }
  function displayMedicine() {
    setActionAdventure(0);
    setArtsFilms(0);
    setBiographies(0);
    setComics(0);
    setComputers(0);
    setCrime(0);
    setEngg(0);
    setExamPrep(0);
    setHealth(0);
    setLaw(0);
    setMaps(0);
    setMedicine(1);
    setSports(0);
  }
  function displaySports() {
    setActionAdventure(0);
    setArtsFilms(0);
    setBiographies(0);
    setComics(0);
    setComputers(0);
    setCrime(0);
    setEngg(0);
    setExamPrep(0);
    setHealth(0);
    setLaw(0);
    setMaps(0);
    setMedicine(0);
    setSports(1);
  }

  /****SEND THE DATA */
  function btnClicked(item, i) {
    props.addData(item);
  }

  /****SEND THE DATA */

  // WHEN BUTTON IS CLICKED

  const [actionAdventureBtn, setActionAdventureBtn] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [artsFilmsBtn, setArtsFilmsBtn] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [biographiesBtn, setBiographiesBtn] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [comicsBtn, setComicsBtn] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [computersBtn, setComputersBtn] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [crimeBtn, setCrimeBtn] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [enggBtn, setEnggBtn] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [ExamPrepBtn, setExamPrepBtn] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [healthBtn, setHealthBtn] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [lawBtn, setLawBtn] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [mapsBtn, setMapsBtn] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [medicineBtn, setMedcineBtn] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [sportsBtn, setSportsBtn] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  function actionAdventureBtnClicked(item, i) {
    const ar = actionAdventureBtn;
    ar[i]++;
    setActionAdventureBtn(ar);
  }
  function artsFilmsBtnClicked(item, i) {
    const ar1 = artsFilmsBtn;
    ar1[i]++;
    setArtsFilmsBtn(ar1);
  }
  function biographiesBtnClicked(item, i) {
    const ar2 = biographiesBtn;
    ar2[i]++;
    setBiographiesBtn(ar2);
  }
  function comicsBtnClicked(item, i) {
    const ar3 = comicsBtn;
    ar3[i]++;
    setComicsBtn(ar3);
  }

  function computersBtnClicked(item, i) {
    const ar4 = computersBtn;
    ar4[i]++;
    setComputersBtn(ar4);
  }

  function crimeBtnClicked(item, i) {
    const ar5 = crimeBtn;
    ar5[i]++;
    setCrimeBtn(ar5);
  }
  function enggBtnClicked(item, i) {
    const ar6 = enggBtn;
    ar6[i]++;
    setEnggBtn(ar6);
  }
  function ExamPrepBtnClicked(item, i) {
    const ar7 = ExamPrepBtn;
    ar7[i]++;
    setExamPrepBtn(ar7);
  }
  function healthBtnClicked(item, i) {
    const ar8 = healthBtn;
    ar8[i]++;
    setHealthBtn(ar8);
  }
  function lawBtnClicked(item, i) {
    const ar9 = lawBtn;
    ar9[i]++;
    setLawBtn(ar9);
  }
  function mapsBtnClicked(item, i) {
    const ar10 = mapsBtn;
    ar10[i]++;
    setMapsBtn(ar10);
  }
  function medicineBtnClicked(item, i) {
    const ar11 = medicineBtn;
    ar11[i]++;
    setMedcineBtn(ar11);
  }
  function sportsBtnClicked(item, i) {
    const ar = sportsBtn;
    ar[i]++;
    setSportsBtn(ar);
  }

  return (
    <div className="cat-main">
      <div className="cats">
        <h1>Category</h1>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loopFillGroupWithBlank={true}
          navigation={true}
          className="gallery-swiper"
          slidesPerView={10}
          spaceBetween={2}
          slidesPerGroup={1}
          loop={true}
          mousewheel={true}
          breakpoints={{
            350: {
              slidesPerView: 3,
              spaceBetween: 1,
              slidesPerGroup: 3,
            },
            500: {
              slidesPerView: 4,
              spaceBetween: 1,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 1,
              slidesPerGroup: 2,
            },
            972: {
              slidesPerView: 10,
              spaceBetween: 1,
            },
          }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: true,
          // }}
        >
          <SwiperSlide>
            <li
              onClick={displayActionAdventure}
              className={showActionAdventure ? "bg-black" : "no-bg-black"}
            >
              Action & Adventure
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li
              onClick={displayArtsFilms}
              className={showArtsFilms ? "bg-black" : "no-bg-black"}
            >
              Arts, Film & Photography
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li
              onClick={displayBiographies}
              className={showBiographies ? "bg-black" : "no-bg-black"}
            >
              Biographies, Diaries & True Accounts
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li
              onClick={displayComics}
              className={showComics ? "bg-black" : "no-bg-black"}
            >
              Comics & Mangas
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li
              onClick={displayComputers}
              className={showComputers ? "bg-black" : "no-bg-black"}
            >
              Computers & Internet
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li
              onClick={displayCrime}
              className={showCrime ? "bg-black" : "no-bg-black"}
            >
              Crime, Thriller & Mystery
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li
              onClick={displayEngg}
              className={showEngg ? "bg-black" : "no-bg-black"}
            >
              Engineering
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li
              onClick={displayExampPrep}
              className={showExamPrep ? "bg-black" : "no-bg-black"}
            >
              Exam Preparation
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li
              onClick={displayHealth}
              className={showHealth ? "bg-black" : "no-bg-black"}
            >
              Health, Family & Personal Development
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li
              onClick={displayLaw}
              className={showLaw ? "bg-black" : "no-bg-black"}
            >
              Law
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li
              onClick={displayMaps}
              className={showMaps ? "bg-black" : "no-bg-black"}
            >
              Maps & Atlases
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li
              onClick={displayMedicine}
              className={showMedicine ? "bg-black" : "no-bg-black"}
            >
              Medicine and Health Sciences Textbooks
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li
              onClick={displaySports}
              className={showSports ? "bg-black" : "no-bg-black"}
            >
              Sports
            </li>
          </SwiperSlide>
        </Swiper>

        <i class="uil uil-bars ham"></i>
      </div>
      {/**ACTION AND ADVENTURE */}

      <div
        className={
          showActionAdventure
            ? "card action-adventure action-adventure-active"
            : "card action-adventure"
        }
      >
        {ActionAdventure.map((item, i) => (
          <div className="card-wrapper" key={i}>
            <div className="card-img">
              <img className="img" src={item.img} alt="img" width={100} />
            </div>
            <h2 className="card-name">{item.name}</h2>
            <div className="card-author">-{item.author}</div>
            <div className="card-detail">{item.detail}</div>
            <div className="card-amt">
              <span className="rupee">&#8377;</span>
              <h2 className="card-price">{item.price}</h2>
              <h2
                className="card-striked-price"
                style={{ textDecoration: "line-through" }}
              >
                {item.strikedprice}
              </h2>
            </div>

            <h2 className="card-rating">{item.rating}</h2>
            <div
              className="card-btn"
              onClick={() => actionAdventureBtnClicked(item, i)}
            >
              <button className="btn" onClick={() => btnClicked(item, i)}>
                <i class="uil uil-shopping-cart"></i>
                {actionAdventureBtn[i] ? "Added" : "Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/***ARTS, FILMS & PHOTOGRAPHY */}
      <div
        className={
          showArtsFilms
            ? "card arts-films arts-films-active"
            : "card arts-films"
        }
      >
        {ArtsFilms.map((item, i) => (
          <div className="card-wrapper">
            <div className="card-img">
              <img className="img" src={item.img} alt="img" width={100} />
            </div>
            <h2 className="card-name">{item.name}</h2>
            <div className="card-author">-{item.author}</div>
            <div className="card-detail">{item.detail}</div>
            <div className="card-amt">
              <span className="rupee">&#8377;</span>
              <h2 className="card-price">{item.price}</h2>
              <h2
                className="card-striked-price"
                style={{ textDecoration: "line-through" }}
              >
                {item.strikedprice}
              </h2>
            </div>

            <h2 className="card-rating">{item.rating}</h2>
            <div
              className="card-btn"
              onClick={() => artsFilmsBtnClicked(item, i)}
            >
              <button className="btn" onClick={() => btnClicked(item)}>
                <i class="uil uil-shopping-cart"></i>
                {artsFilmsBtn[i] ? "Added" : "Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* BIOGRAPHIES */}
      <div
        className={
          showBiographies
            ? "card biographies biographies-active"
            : "card biographies"
        }
      >
        {Biographies.map((item, i) => (
          <div className="card-wrapper">
            <div className="card-img">
              <img className="img" src={item.img} alt="img" width={100} />
            </div>
            <h2 className="card-name">{item.name}</h2>
            <div className="card-author">-{item.author}</div>
            <div className="card-detail">{item.detail}</div>
            <div className="card-amt">
              <span className="rupee">&#8377;</span>
              <h2 className="card-price">{item.price}</h2>
              <h2
                className="card-striked-price"
                style={{ textDecoration: "line-through" }}
              >
                {item.strikedprice}
              </h2>
            </div>

            <h2 className="card-rating">{item.rating}</h2>
            <div
              className="card-btn"
              onClick={() => biographiesBtnClicked(item, i)}
            >
              <button className="btn" onClick={() => btnClicked(item)}>
                <i class="uil uil-shopping-cart"></i>
                {biographiesBtn[i] ? "Added" : "Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/***COMICS  */}
      <div className={showComics ? "card comics comics-active" : "card comics"}>
        {Comics.map((item, i) => (
          <div className="card-wrapper">
            <div className="card-img">
              <img className="img" src={item.img} alt="img" width={100} />
            </div>
            <h2 className="card-name">{item.name}</h2>
            <div className="card-author">-{item.author}</div>
            <div className="card-detail">{item.detail}</div>
            <div className="card-amt">
              <span className="rupee">&#8377;</span>
              <h2 className="card-price">{item.price}</h2>
              <h2
                className="card-striked-price"
                style={{ textDecoration: "line-through" }}
              >
                {item.strikedprice}
              </h2>
            </div>

            <h2 className="card-rating">{item.rating}</h2>
            <div className="card-btn" onClick={() => comicsBtnClicked(item, i)}>
              <button className="btn" onClick={() => btnClicked(item)}>
                <i class="uil uil-shopping-cart"></i>
                {comicsBtn[i] ? "Added" : "Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/***COMPUTERS */}
      <div
        className={
          showComputers ? "card computers computers-active" : "card computers"
        }
      >
        {Computers.map((item, i) => (
          <div className="card-wrapper">
            <div className="card-img">
              <img className="img" src={item.img} alt="img" width={100} />
            </div>
            <h2 className="card-name">{item.name}</h2>
            <div className="card-author">-{item.author}</div>
            <div className="card-detail">{item.detail}</div>
            <div className="card-amt">
              <span className="rupee">&#8377;</span>
              <h2 className="card-price">{item.price}</h2>
              <h2
                className="card-striked-price"
                style={{ textDecoration: "line-through" }}
              >
                {item.strikedprice}
              </h2>
            </div>

            <h2 className="card-rating">{item.rating}</h2>
            <div
              className="card-btn"
              onClick={() => computersBtnClicked(item, i)}
            >
              <button
                className="btn"
                onClick={() => {
                  btnClicked(item);
                }}
              >
                <i class="uil uil-shopping-cart"></i>
                {computersBtn[i] ? "Added" : "Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/***CRIME */}
      <div className={showCrime ? "card crime crime-active" : "card crime"}>
        {Crime.map((item, i) => (
          <div className="card-wrapper">
            <div className="card-img">
              <img className="img" src={item.img} alt="img" width={100} />
            </div>
            <h2 className="card-name">{item.name}</h2>
            <div className="card-author">-{item.author}</div>
            <div className="card-detail">{item.detail}</div>
            <div className="card-amt">
              <span className="rupee">&#8377;</span>
              <h2 className="card-price">{item.price}</h2>
              <h2
                className="card-striked-price"
                style={{ textDecoration: "line-through" }}
              >
                {item.strikedprice}
              </h2>
            </div>

            <h2 className="card-rating">{item.rating}</h2>
            <div className="card-btn" onClick={() => crimeBtnClicked(item, i)}>
              <button className="btn" onClick={() => btnClicked(item)}>
                <i class="uil uil-shopping-cart"></i>
                {crimeBtn[i] ? "Added" : "Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/***ENGINEERING */}
      <div className={showEngg ? "card engg engg-active" : "card engg"}>
        {Engg.map((item, i) => (
          <div className="card-wrapper">
            <div className="card-img">
              <img className="img" src={item.img} alt="img" width={100} />
            </div>
            <h2 className="card-name">{item.name}</h2>
            <div className="card-author">-{item.author}</div>
            <div className="card-detail">{item.detail}</div>
            <div className="card-amt">
              <span className="rupee">&#8377;</span>
              <h2 className="card-price">{item.price}</h2>
              <h2
                className="card-striked-price"
                style={{ textDecoration: "line-through" }}
              >
                {item.strikedprice}
              </h2>
            </div>

            <h2 className="card-rating">{item.rating}</h2>
            <div className="card-btn" onClick={() => enggBtnClicked(item, i)}>
              <button className="btn" onClick={() => btnClicked(item)}>
                <i class="uil uil-shopping-cart"></i>
                {enggBtn[i] ? "Added" : "Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/***EXAM PREPARATION */}
      <div
        className={
          showExamPrep ? "card exam-prep exam-prep-active" : "card exam-prep"
        }
      >
        {ExamPrep.map((item, i) => (
          <div className="card-wrapper">
            <div className="card-img">
              <img className="img" src={item.img} alt="img" width={100} />
            </div>
            <h2 className="card-name">{item.name}</h2>
            <div className="card-author">-{item.author}</div>
            <div className="card-detail">{item.detail}</div>
            <div className="card-amt">
              <span className="rupee">&#8377;</span>
              <h2 className="card-price">{item.price}</h2>
              <h2
                className="card-striked-price"
                style={{ textDecoration: "line-through" }}
              >
                {item.strikedprice}
              </h2>
            </div>

            <h2 className="card-rating">{item.rating}</h2>
            <div
              className="card-btn"
              onClick={() => ExamPrepBtnClicked(item, i)}
            >
              <button
                className="btn"
                onClick={() => {
                  btnClicked(item);
                }}
              >
                <i class="uil uil-shopping-cart"></i>
                {ExamPrepBtn[i] ? "Added" : "Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/**HEALTH, FAMILY AND DEV */}
      <div className={showHealth ? "card health health-active" : "card health"}>
        {Health.map((item, i) => (
          <div className="card-wrapper">
            <div className="card-img">
              <img className="img" src={item.img} alt="img" width={100} />
            </div>
            <h2 className="card-name">{item.name}</h2>
            <div className="card-author">-{item.author}</div>
            <div className="card-detail">{item.detail}</div>
            <div className="card-amt">
              <span className="rupee">&#8377;</span>
              <h2 className="card-price">{item.price}</h2>
              <h2
                className="card-striked-price"
                style={{ textDecoration: "line-through" }}
              >
                {item.strikedprice}
              </h2>
            </div>

            <h2 className="card-rating">{item.rating}</h2>
            <div className="card-btn" onClick={() => healthBtnClicked(item, i)}>
              <button className="btn" onClick={() => btnClicked(item)}>
                <i class="uil uil-shopping-cart"></i>
                {healthBtn[i] ? "Added" : "Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/***Law */}
      <div className={showLaw ? "card law law-active" : "card law"}>
        {Law.map((item, i) => (
          <div className="card-wrapper">
            <div className="card-img">
              <img className="img" src={item.img} alt="img" width={100} />
            </div>
            <h2 className="card-name">{item.name}</h2>
            <div className="card-author">-{item.author}</div>
            <div className="card-detail">{item.detail}</div>
            <div className="card-amt">
              <span className="rupee">&#8377;</span>
              <h2 className="card-price">{item.price}</h2>
              <h2
                className="card-striked-price"
                style={{ textDecoration: "line-through" }}
              >
                {item.strikedprice}
              </h2>
            </div>

            <h2 className="card-rating">{item.rating}</h2>
            <div className="card-btn" onClick={() => lawBtnClicked(item, i)}>
              <button className="btn" onClick={() => btnClicked(item)}>
                <i class="uil uil-shopping-cart"></i>
                {lawBtn[i] ? "Added" : "Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/***MAPS AND ATLASES */}
      <div className={showMaps ? "card maps maps-active" : "card maps"}>
        {Maps.map((item, i) => (
          <div className="card-wrapper">
            <div className="card-img">
              <img className="img" src={item.img} alt="img" width={100} />
            </div>
            <h2 className="card-name">{item.name}</h2>
            <div className="card-author">-{item.author}</div>
            <div className="card-detail">{item.detail}</div>
            <div className="card-amt">
              <span className="rupee">&#8377;</span>
              <h2 className="card-price">{item.price}</h2>
              <h2
                className="card-striked-price"
                style={{ textDecoration: "line-through" }}
              >
                {item.strikedprice}
              </h2>
            </div>

            <h2 className="card-rating">{item.rating}</h2>
            <div className="card-btn" onClick={() => mapsBtnClicked(item, i)}>
              <button className="btn" onClick={() => btnClicked(item)}>
                <i class="uil uil-shopping-cart"></i>
                {mapsBtn[i] ? "Added" : "Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/**MEDICINE, HEALTH AND SCIENCES  */}
      <div
        className={
          showMedicine ? "card medicine medicine-active" : "card medicine"
        }
      >
        {Medicine.map((item, i) => (
          <div className="card-wrapper">
            <div className="card-img">
              <img className="img" src={item.img} alt="img" width={100} />
            </div>
            <h2 className="card-name">{item.name}</h2>
            <div className="card-author">-{item.author}</div>
            <div className="card-detail">{item.detail}</div>
            <div className="card-amt">
              <span className="rupee">&#8377;</span>
              <h2 className="card-price">{item.price}</h2>
              <h2
                className="card-striked-price"
                style={{ textDecoration: "line-through" }}
              >
                {item.strikedprice}
              </h2>
            </div>

            <h2 className="card-rating">{item.rating}</h2>
            <div
              className="card-btn"
              onClick={() => medicineBtnClicked(item, i)}
            >
              <button
                className="btn"
                onClick={() => {
                  btnClicked(item);
                }}
              >
                <i class="uil uil-shopping-cart"></i>
                {medicineBtn[i] ? "Added" : "Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/***SPORTS */}
      <div className={showSports ? "card sports sports-active" : "card sports"}>
        {Sports.map((item, i) => (
          <div className="card-wrapper">
            <div className="card-img">
              <img className="img" src={item.img} alt="img" width={100} />
            </div>
            <h2 className="card-name">{item.name}</h2>
            <div className="card-author">-{item.author}</div>
            <div className="card-detail">{item.detail}</div>
            <div className="card-amt">
              <span className="rupee">&#8377;</span>
              <h2 className="card-price">{item.price}</h2>
              <h2
                className="card-striked-price"
                style={{ textDecoration: "line-through" }}
              >
                {item.strikedprice}
              </h2>
            </div>

            <h2 className="card-rating">{item.rating}</h2>
            <div className="card-btn" onClick={() => sportsBtnClicked(item, i)}>
              <button className="btn" onClick={() => btnClicked(item)}>
                <i class="uil uil-shopping-cart"></i>
                {sportsBtn[i] ? "Added" : "Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryHeadCategories;
