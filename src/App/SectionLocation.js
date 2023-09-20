const galleryListData = [
  {
    title: "Pragser Wildsee Italy",
    bio: "A great place to fall in love with.",
  },
  {
    title: "Kuala Kubu Bharu Malaysia",
    bio: "A place to have fun with friends.",
  },
  {
    title: "Sierra Nevada United States",
    bio: "Here you can see how beautiful the nature can be.",
  },
  {
    title: "Bali Indonesia",
    bio: "This place will remove your frustrations",
  },
];

function SectionLocation() {
  return (
    <section className="section-location   u-sec-padd-block" id="location">
      <h2 className="heading-secondary "> Best Locations</h2>
      <p className="paragraph-medium">
        Extraordinary natural beauty, enjoy the rich culture, and experience the
        friendliness of the local people.
      </p>
      <div className="grid grid_gallery section-location__gallery u-margin-top">
        {galleryListData.map((e,i)=>{return <GalleryItems title={e.title} bio={e.bio} id={i} key={e.title}/>})}
      </div>
    </section>
  );
}
function GalleryItems({ title, bio, id }) {
  return (
    <div
      className={`section-location__gallery--img section-location__gallery--img${id + 1}`}>
      <h3 className="tertiary-heading gallery-heading">
        {title}
      </h3>
      <p className="paragraph-small">{bio}</p>
    </div>
  );
}

export default SectionLocation;
