import glob from "../icon/globe.svg";
import comment from "../icon/comment.svg";
import lightning from "../icon/lightning.svg";
import search from "../icon/search.svg";
import image from "../image/howitworksimg.jpg";
import { useState } from "react";

const howitworkListData = [
  {
    icon: search,
    title: "Find you destination",
    description:
      "Embark on a jouney to discover your dream destination, where adventure and relaxation await",
  },

  {
    icon: comment,
    title: "Book a ticket",
    description:
      "Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform",
  },

  {
    icon: lightning,
    title: "Make payment",
    description:
      "We offer a veriety of payment options to meet your preferences and ensure a hassle-free transaction process.",
  },

  {
    icon: glob,
    title: "Explore destination",
    description:
      "You'll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets.",
  },
];

function SectionHowItWorks() {
  return (
    <section className="section-howItWorks">
      <div className="grid grid_2col section-howItWorks__grid">
        <div className="section-howItWorks__grid-1col">
          <img
          className="section-howItWorks__grid-1col--img"
            src={image}
            alt="A man passing a bridge"
          />
          <p className="paragraph-medium weight-6">
            Life is short, so do everything you can to live happily.
          </p>
        </div>
        <div className="section-howItWorks__grid-2col">
          <h2 className="heading-secondary u-margin-bottom-small">
            How it works
          </h2>
          <SectionHowItWorksList />
        </div>
      </div>
    </section>
  );
}
function SectionHowItWorksList() {
  return (
    <ul className="section-howItWorks__List">
      {howitworkListData.map((e, i) => {
        return (
          <SectionHowItWorksListItems
            title={e.title}
            description={e.description}
            icon={e.icon}
            key={e.title}
          />
        );
      })}
    </ul>
  );
}

function SectionHowItWorksListItems({ title, description, icon }) {
  const [listhover, setListhover] = useState(false);

  function handleListhover() {
    setListhover(true);
  }
  function handleListunhover() {
    setListhover(false);
  }

  return (
    <li
      className={
        listhover
          ? "grid section-howItWorks__ListItems active"
          : "grid section-howItWorks__ListItems"
      }
      onMouseEnter={handleListhover}
      onMouseLeave={handleListunhover}
    >
      <img src={icon} alt="icon" className="section-howItWorks__icon" />
      <h3 className="similler-tertiary-heading">{title}</h3>
      <p className="feature-paragraph u-helper-grid">{description}</p>
    </li>
  );
}
export default SectionHowItWorks;
