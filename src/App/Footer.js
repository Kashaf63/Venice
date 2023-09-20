import facebookSvg from "../icon/facebook.svg";
import instagramSvg from "../icon/instagram.svg";
import youtubeSvg from "../icon/youtube.svg";
import Logo from "../icon/Logo.svg";

const footerListData = [
  {
    title: "About",
    link1: "About Us",
    link2: "Blog",
    link3: "Careers",
    link4: "Jobs",
    link5: "In Press",
    link6: "Gallery",
  },
  {
    title: "Support",
    link1: "Contact Us",
    link2: "Online Chat",
    link3: "Whatsapp",
    link4: "Telegram",
    link5: "Ticketing",
    link6: "Call Center",
  },
  {
    title: "FAQ",
    link1: "Account",
    link2: "Booking",
    link3: "Payments",
    link4: "Returns",
    link5: "Privacy Policy",
    link6: "Terms & Condition",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper grid grid__footer">
        {" "}
        {footerListData.map((e, i) => {
          return (
            <FooterNav
              title={e.title}
              link1={e.link1}
              link2={e.link2}
              link3={e.link3}
              link4={e.link4}
              link5={e.link5}
              link6={e.link6}
              key={e.title}
            />
          );
        })}
        <div className="footer__newsletter">
          <Newslatter />
        </div>
      </div>
      <p className="footer-ending-text">© Venice, All Rights Reserved</p>
    </footer>
  );
}

function Newslatter() {
  return (
    <>
      <p className="footer_heading">Newsletter</p>
      <p className="footer-paragraph">
        Don't miss out on the exciting world of travel{" "}
        <strong>subscribe now</strong> and embark on a journey of discovery with
        us.
      </p>
      <form className="footer_form">
        <input
          type="email"
          className="footer_from-input"
          placeholder="Please write your email"
        />
        <button className="footer_from-inputBtn" aria-label="submit">Submit</button>
      </form>
      <div className="footer_social-mediaLinks">
        <a href="#">
          <img src={facebookSvg} alt="facebook-icon" />
        </a>
        <a href="#">
          <img src={instagramSvg} alt="instagram-icon" />
        </a>
        <a href="#">
          <img src={youtubeSvg} alt="youtube-icon" />
        </a>
      </div>
      <a href="#">
        <img src={Logo} alt="logo" className="footer_logo" />
      </a>
    </>
  );
}

function FooterNav({ title, link1, link2, link3, link4, link5, link6 }) {
  return (
    <>
      <nav className="footer__nav footer__nav--1">
        <p className="footer__nav--heading">{title}</p>
        <ul className="footer__nav--links">
          <li>
            <a href="#" className="footer__nav--link">
              {link1}
            </a>
          </li>
          <li>
            <a href="#" className="footer__nav--link">
              {link2}
            </a>
          </li>
          <li>
            <a href="#" className="footer__nav--link">
              {link3}
            </a>
          </li>
          <li>
            <a href="#" className="footer__nav--link">
              {link4}
            </a>
          </li>
          <li>
            <a href="#" className="footer__nav--link">
              {link5}
            </a>
          </li>
          <li>
            <a href="#" className="footer__nav--link">
              {link6}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
