import { useState } from "react";
import manImg1 from "../image/man_img1.webp";
import manImg2 from "../image/man_img2.webp";
import womanImg1 from "../image/woman_img1.webp";
import womanImg2 from "../image/woman_img2.webp";
import womanImg3 from "../image/woman_img3.webp";
import womanImg4 from "../image/woman_img4.webp";
import rightarr from "../icon/rightarr.svg";
import leftarr from "../icon/leftarr.svg";

const testimonialListData = [
  {
    image: manImg1,
    name: "Bambang Karlos",
    location: "Jakarta, Indonesia",
    id: "1",
    time: "13 May 2018",
    testimonial:
      "As a solo traveler, safety and escitement are crucial. Venice delivered both impeccably. I joined the Adventure Explorer Package and It was great",
  },
  {
    image: womanImg1,
    name: "Sarah Johnson",
    location: "New York, USA",
    time: "23 September 2022",
    id: "1",
    testimonial:
      "Venice turned my spontaneous getaway dreams into reality. From breathtaking landscapes to unexpected encounters, every moment was a highlight.",
  },
  {
    image: womanImg2,
    name: "Lola Morris",
    location: "Mountain View, United States",
    time: "1 January 2022",
    id: "2",
    testimonial:
      "Absolutely awesome experience with Venice, recommended for all of you to join a package and enjoy a holiday with friends and family.",
  },
  {
    image: womanImg3,
    name: "Rosemarie Bryan",
    location: "Sollstedt, Germany",
    time: "30 August 2023",
    id: "2",
    testimonial:
      "This is the first time my friend and I went on vacation to Indonesia. It's really very beautiful; I thought of staying there all the time.",
  },
  {
    image: manImg2,
    name: "Alex Sarapova",
    location: "Gulgong, Australia",
    time: "12 September 2023",
    id: "3",
    testimonial:
      "Great holiday. Vevice were good to deal with and had excellent communication. Thank you, we'll be looking for our next holiday with you!",
  },
  {
    image: womanImg4,
    name: "Marian Collins",
    location: "Malilla, Sweden",
    id: "3",
    time: "11 June 2022",
    testimonial:
      "Would be very happy to use Venice again for our next holiday. Very happy with the service, no complaints from us!",
  },
];

export default function SectionTestimonials() {
  const [curr, setCurr] = useState(1);
  // console.log(curr);

  // const itemId = testimonialListData.map((e,i)=>{return e})
  const showedTestimonial = testimonialListData.filter((e, i) => {
    return e.id == curr;
  });
  console.log(showedTestimonial);
  const handlePlus = () => {
    if (curr <= 2) setCurr(curr + 1);
  };
  const handleMinus = () => {
    if (curr >= 2) setCurr(curr - 1);
  };
  const handledot1 = () => {
    setCurr(1);
  };
  const handledot2 = () => {
    setCurr(2);
  };
  const handledot3 = () => {
    setCurr(3);
  };

  return (
    <section
      className="section-testimonials   u-sec-padd-block"
      id="testimonial"
    >
      <h2 className="heading-secondary">We make people genuinely happy </h2>
      <p className="paragraph-medium">
        Don't just take our word for it. Hear directly from travelers who have
        embarked on unforgettable explorations
      </p>
      <div className="testimonials">
        <button
          className="testimonials__testimonial--btn"
          onClick={handleMinus}
          aria-label="Swiper"
        >
          <img src={leftarr} alt="left-arr" />
        </button>
        {showedTestimonial.map((e, i) => {
          return (
            <Testimonial
              image={e.image}
              name={e.name}
              location={e.location}
              testimonial={e.testimonial}
              id={e.id}
              key={e.name}
              time={e.time}
            />
          );
        })}
        <button
          className="testimonials__testimonial--btn"
          onClick={handlePlus}
          aria-label="Swiper"
        >
          <img src={rightarr} alt="right-arr" />
        </button>
      </div>
      <div className="dots">
        {" "}
        <button
          className={curr === 1 ? "dots_dot dots_dot--clicked" : "dots_dot"}
          onClick={handledot1}
          aria-label="dot"
        ></button>
        <button
          className={curr === 2 ? "dots_dot dots_dot--clicked" : "dots_dot"}
          onClick={handledot2}
          aria-label="dot"
        ></button>
        <button
          className={curr === 3 ? "dots_dot dots_dot--clicked" : "dots_dot"}
          onClick={handledot3}
          aria-label="dot"
        ></button>
      </div>
    </section>
  );
}

function Testimonial({ image, name, location, testimonial, id, time }) {
  return (
    <div
      className={`testimonials__testimonial testimonials__testimonial${id + 1}`}
    >
      <div style={{ height: "11rem", aspectRatio: "1" }}>
        <img
          src={image}
          alt="person"
          className="testimonials__testimonial--image"
        />
      </div>
      <p className="testimonials__testimonial--name">{name}</p>
      <address className="testimonials__testimonial--address">
        {location}
      </address>
      <p className="testimonials__testimonial--text">{testimonial}</p>
      <p className="testimonials__testimonial--time">_ {time}</p>
    </div>
  );
}
