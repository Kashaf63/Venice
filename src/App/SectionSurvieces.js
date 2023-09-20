import Paragraph from "./Paragraph";
import img1 from "../image/service_img.webp";
import img2 from "../image/service_img2.webp";
import img3 from "../image/service_img3.webp";

const serviceListData = [
  {
    title: "Travel Plan",
    description:
      "Travel plans are not really an instrument themselves but a delivery mechanism or strategy for other mostly",
  },
  {
    title: "Flights Booking",
    description:
      "Discover your next dream destination. Find deals on domestic and international flights",
  },
  {
    title: "Accommodation",
    description:
      "Lodging, food, and services or traveling space and related services usually used in plural.",
  },
];

function SectionSurvieces() {
  return (
    <section className="section-servieces   u-sec-padd-block" id="service">
      <h2 className="heading-secondary u-padding-top-huge">
        What Service We Provide
      </h2>
      <Paragraph className={"paragraph-medium"}>
        Traveling is a great way to explore new places, experience different
        cultures, and create unforgettable memories.
      </Paragraph>
      <div className="grid grid_2col section-servieces_grid">
        <div className="section-servieces_grid--1col">
          <img src={img1} alt="boat-traveling" className="serviece_img1"/>
          <p className="paragraph-medium">
            We offer a comprehensive trip planning platform on the Internet. It
            provides a wide range of options to choose from and has an
            easy-to-use interface with numerous filters to customize your
            search.
          </p>
        </div>
        <div className="section-servieces_grid--2col">
          <img src={img2} alt="jungle traveling" className="serviece_img2"/>
          <img src={img3} alt="Historical place" className="serviece_img3"/>
        </div>
        {/* <div className="section-servieces_1stcol"> */}
        {/* <div className="section-servieces__img section-servieces__img--1 u-margin-bottom-small">
            {" "}
            &nbsp;
          </div> */}
        {/* <Paragraph className={"paragraph-medium"}>
            We offer a comprehensive trip planning platform on the Internet. It
            provides a wide range of options to choose from and has an
            easy-to-use interface with numerous filters to customize your search
            . You can book accommodations, flights (including one-way and
            multi-city flights), sightseeing activities, and even airport taxis
            from one website
          </Paragraph> */}
        {/* 1. The website lists more than 28 million accommodation options, from hotels, hostels, and B&Bs to vacation homes and luxury resorts 1. Booking.com also performs well on cost and typically returns lower-than-average prices for flights and hotels 1. */}
        {/* </div> */}
        {/* <div className="section-servieces_2ndcol"> */}
        {/* <div className="section-servieces__img section-servieces__img--2">
            {" "}
            &nbsp;
          </div> */}
        {/* <div className="section-servieces__img section-servieces__img--3">
            &nbsp;
          </div> */}
        {/* </div> */}
      </div>
      <ServiceList />
    </section>
  );
}

function ServiceList() {
  return (
    <ul className="section-servieces__list">
      {serviceListData.map((e, i) => {
        return (
          <ServieceListItems
            title={e.title}
            description={e.description}
            key={e.title}
            id={i}
          />
        );
      })}
    </ul>
  );
}

function ServieceListItems({ title, description, id }) {
  return (
    <li className="section-servieces__list--Items">
      <h3 className="list list-heading">
        <span className="u-margin-right-small">0{id + 1}.</span>
        {title}
      </h3>
      <p className="list list-description">{description}</p>
    </li>
  );
}
export default SectionSurvieces;
