import Navigation from "./Navigation";
// import rswipingIcon from "../icon/rswiper.svg";
// import lswipingIcon from "../icon/lswiper.svg";
import bgimg1 from "../image/head_img.png";
import bgimg2 from "../image/header_img2.jpg";
import bgimg3 from "../image/header_img.png";
// import Logo from "../icon/logo.svg"
import Logo from "../icon/Logo.svg";
import { useState } from "react";

const imgList = [
  { image: bgimg1, id: 1 },
  { image: bgimg2, id: 2 },
  { image: bgimg3, id: 3 },
];

function Header() {
  const [bgImg, setBgImg] = useState(1);
  const currImg = imgList.filter((e, i) => {
    return e.id === bgImg;
  });
  // console.log(...currImg)
  const spread = currImg.map((e, i) => {
    return e.image;
  });
  console.log(spread);
  const handleRightSwipe = (e) => {
    if (bgImg <= 2) setBgImg(bgImg + 1);
  };

  const handleLeftSwipe = (e) => {
    if (bgImg >= 2) setBgImg(bgImg - 1);
  };

  return (
    <header
      className={bgImg && "header headeBgImgani"}
      style={{ backgroundImage: `url(${spread})` }}
      id="home"
    >
      <a href="#home">
        {" "}
        <img src={Logo} alt="logo" className="logo" />{" "}
      </a>
      <Navigation />
      <div className="header_wrapper">
        <p className="header-paragraph">Discover the world with</p>
        <h1 className="primary-heading">Venice Agency</h1>
        <p className="header-paragraph">
          Discover a world of quick, easy, and exciting travel experiences with
          Venice, <br />
          where your wanderlust can be transformed into memorable journeys.
        </p>
        <div className="header_btns">
          <a href="#booking" className="header_btns--btn header-paragraph">
            Book Now!
          </a>
          <a href="#service" className="header_btns--btn header-paragraph">
            Learn More
          </a>
        </div>
      </div>
      <div className="header_swipers-btns">
        {/* <button
          className="header_swipers header_swipers--lbtn"
          onClick={handleLeftSwipe}
        >
          <img src={lswipingIcon} alt="icon" />
        </button>
        <button
          className="header_swipers header_swipers--rbtn"
          onClick={handleRightSwipe}
        >
          <img src={rswipingIcon} alt="icon" />
        </button> */}
      </div>
    </header>
  );
}

export default Header;
