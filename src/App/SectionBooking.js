import uparr from "../icon/up.svg"
const cardListData = [
  {
    title: "Adventure Explore",
    price: 599,
    secondTitle: "Thrill Seeker's Delight",
    li1: "Guided Mountain Trek",
    li2: "White-water rafting",
    li3: "Camping under the stars",
    button: "Book Your Adventure Now",
  },
  {
    title: "Cultural Discvery",
    price: 749,
    secondTitle: "Cultural Odyssey",
    li1: "Guided City Tours",
    li2: "Traditional Cooking Classes",
    li3: "Cultural Performances",
    button: "Start Your Cultural Journey",
  },
  {
    title: "Relaxation Retreat",
    price: 899,
    secondTitle: "Tranquil Escapes",
    li1: "Spa retreat",
    li2: "Beachside relaxation",
    li3: "Yoga and meditation sessions",
    button: "Book Your Adventure Now",
  },
];

export default function SectionBooking() {
  return (
    <section className="section-booking">
      <h2 className="heading-secondary">Discover your perfect journey</h2>
      <p className="paragraph-medium">
        From thrilling expeditions to cultural escapades, find your ideal
        vacation.
      </p>
      <CardWrapper />
    </section>
  );
}

function CardWrapper() {
  return (
    <div className="grid grid_3col section-booking__grid  ">
      {cardListData.map((e, i) => {
        return (
          <Card
            title={e.title}
            price={e.price}
            secondTitle={e.secondTitle}
            li1={e.li1}
            li2={e.li2}
            li3={e.li3}
            button={e.button}
            id={i}
            key={e.title}
          />
        );
      })}
    </div>
  );
}

function Card({ title, price, secondTitle, li1, li2, li3, button, id }) {
  return (
    <div className={`card card${id + 1}`}>
      <div className="card__helper">
        <img src={uparr} alt="icon" className="card__img"/>
        <h3 className="card__heading">{title}</h3>
        <p className="card__price">{price}</p>
        <p className="card__secondTitle">{secondTitle}</p>
        <ul className="card__ul">
          <li className="card__ul--li">{li1}</li>
          <li className="card__ul--li">{li2}</li>
          <li className="card__ul--li">{li3}</li>
        </ul>
        <button className="card__button">{button}</button>
      </div>
    </div>
  );
}
