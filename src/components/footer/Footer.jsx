import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import "./footer.css";

export default function Footer() {
  return (
    <section className="footer__section section">
      <div className="container">
        <div className="footer__wrapper">
          <div>
            <p>All Rights Reserved by ScriptSculptor.</p>
            <p>
              Designed by{" "}
              <a href="#" style={{ color: "var( --primary-brand-color)" }}>
                ScriptSculptor
              </a>
            </p>
            <p>Copyright © 2023</p>
          </div>
          <div className="about__icons-wrapper">
            <a href="https://dribbble.com/">
              <BsDribbble size={20} />
            </a>
            <a href="https://www.facebook.com/">
              <BsFacebook size={20} />
            </a>
            <a href="https://www.linkedin.com/">
              <BsLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/">
              <BsInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
