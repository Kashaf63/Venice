import SectionSurvieces from "./SectionSurvieces";
import SectionFeatures from "./SectionFeatures";
import SectionLocation from "./SectionLocation";
import SectionHowItWorks from "./SectionHowitWorks";
import SectionBooking from "./SectionBooking";
import SectionTestimonials from "./SectionTestimonial";

function Main() {
  return (
    <main>
      <SectionSurvieces />
      <SectionFeatures />
      <SectionLocation />
      <SectionHowItWorks />
      <SectionBooking />
      <SectionTestimonials />
    </main>
  );
}

export default Main;
