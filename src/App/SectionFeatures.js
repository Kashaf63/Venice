import stacksvg from "../icon/stack.svg";
import cubesvg from "../icon/cube.svg";
import fastsvg from "../icon/fast.svg";
import blogsvg from "../icon/blog.svg";
import scansvg from "../icon/scan.svg";
import sparksvg from "../icon/spark.svg";

const featuresListData = [
  {
    icon: stacksvg,
    title: "Dynamic Packaging",
    description:
      "Dynamic packaging is a method used in package holiday bookings to enable consumers to build their package",
  },
  {
    icon: fastsvg,
    title: "Instant Itinerary",
    description:
      "Get a verifiable Flight and Hotel itinerary in less than 5 minutes for you next Visa travel application to the place.",
  },
  {
    icon: scansvg,
    title: "Vendor Extant",
    description:
      "An integrated decision model for cloud vendor selection using ... of the model are analysed by using sensitivity analysis.",
  },
  {
    icon: cubesvg,
    title: "Multiple Verticals",
    description:
      "A Vertical, also known as a sales vertical or vertical market, is the industry that a company's offerings are specifically.",
  },
  {
    icon: blogsvg,
    title: "Blogging Platform",
    description:
      "We recommend using a platform, such as Wix or Squarespace. Neither requires ony coding knowledge and each provides.",
  },
  {
    icon: sparksvg,
    title: "Language Locales",
    description:
      "A locale defines a user language and contains language and country related parameters. Many languages",
  },
];

function SectionFeatures() {
  return (
    <section className="section-features" id="feature">
      <h2 className="heading-secondary feature_heading ">Our Features</h2>
      <p className="paragraph-medium" >We believe in making travel accessible and exciting.Out unique approach to planning and experiencing trips ensures that you have a nice journey</p>
      <FeaturesList />
      {/* <ReactSVG src="../icon/stack.svg"/> */}
    </section>
  );
}

function FeaturesList() {
  return (
    <ul className="grid grid_3col section-features_wrapper">
      {/* <li><img src={stacksvg} alt="shit"/></li>
      <li><img src={cubesvg} alt="shit"/></li>
      <li><img src={blogsvg} alt="shit"/></li>
      <li><img src={sparksvg} alt="shit"/></li>
      <li><img src={scansvg} style={{height:"44rem"}} alt="shit"/></li>
      <li><img src={fastsvg} alt="shit"/></li> */}
      {featuresListData.map((e, i) => {
        return (
          <FeaturesListItems
            icon={e.icon}
            title={e.title}
            description={e.description}
            key={i}
          />
        );
      })}
    </ul>
  );
}
function FeaturesListItems({ icon, title, description }) {
  return (
    <li className="section-features_wrapper--list">
      <img src={icon} alt="icon" className="section-features__svg" />
      <div>
        <h3 className="similler-tertiary-heading u-margin-bottom-mini">
          {title}
        </h3>
        <p className="feature-paragraph">{description}</p>
      </div>
    </li>
  );
}

export default SectionFeatures;
