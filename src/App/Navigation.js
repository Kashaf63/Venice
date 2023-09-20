import { useState } from "react";

function Navigation() {
  const [clicked, setClicked] = useState(false);
  const handleCloseNavigation = () => {
    setClicked(false)
  }
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <button className="hamburger" onClick={handleClick} aria-label="hamburger-manu">
        <span
          className={
            clicked
              ? "hamburger_dash hamburger_dash--1 clicked"
              : "hamburger_dash hamburger_dash--1"
          }
        ></span>
        <span
          className={
            clicked
              ? "hamburger_dash hamburger_dash--2 clicked"
              : "hamburger_dash hamburger_dash--2"
          }
        ></span>
        <span
          className={
            clicked
              ? "hamburger_dash hamburger_dash--3 clicked"
              : "hamburger_dash hamburger_dash--3"
          }
        ></span>
      </button>
      {/* <div className="header_navigation_bg"> */}
      <nav
        className={clicked ? "header_navigation clicked" : "header_navigation"}
      >
        <ul className="header_navigation-list">
          <li className="header_navigation-listItems">
            <a href="#home" onClick={handleCloseNavigation}>Home</a>
          </li>
          <li className="header_navigation-listItems">
            <a href="#service" onClick={handleCloseNavigation}>Services</a>
          </li>
          <li className="header_navigation-listItems">
            <a href="#feature" onClick={handleCloseNavigation}>Features</a>
          </li>
          <li className="header_navigation-listItems">
            <a href="#location" onClick={handleCloseNavigation}>Best Locations</a>
          </li>
          <li className="header_navigation-listItems">
            <a href="#howItWorks" onClick={handleCloseNavigation}>How It Works</a>
          </li>
          <li className="header_navigation-listItems">
            <a href="#booking" onClick={handleCloseNavigation}>Book Now</a>
          </li>
          <li className="header_navigation-listItems">
            <a href="#testimonial" onClick={handleCloseNavigation}>Testimonials</a>
          </li>
        </ul>
      </nav>
      <div
        className={
          clicked ? "header_navigation-bg clicked " : "header_navigation-bg"
        }
      ></div>
      {/* </div> */}
    </>
  );
}

export default Navigation;
