import "./about.css";
import aboutImg from "../../img/about/about_photo.jpg";

import {
  BsFacebook,
  BsDribbble,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__img-wrapper">
          <img className="about__img" src={aboutImg} width={450} />
        </div>
        <div>
          <h2 className="about__title section__title">
            <span>About</span> Me
          </h2>
          <h3 className="about__subtitle">
            Hello! <span>I`m Jonathan</span>
          </h3>
          <div className="about__text section__text">
            <p>
              Welcome to my creative world, where imagination takes form and
              visuals weave stories.
            </p>
            <p>
              I am a graphic designer, and my journey revolves around molding
              the visual identities of projects, products, and brands.
            </p>
            <p>
              As a graphic designer, my canvas extends beyond images; I am a
              storyteller who wields visuals to convey messages and stir
              emotions.
            </p>
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
