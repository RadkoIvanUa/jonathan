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
        <h2 className="about__title">
          <span>About</span> Me
        </h2>
        <h3 className="about__subtitle">
          Hello! <span>I`m Jonathan</span>
        </h3>
        <div className="about__text">
          <p>
            Welcome to my creative world, where imagination takes form and
            visuals weave stories. I am a graphic designer, and my journey
            revolves around molding the visual identities of projects, products,
            and brands. As a graphic designer, my canvas extends beyond images;
            I am a storyteller who wields visuals to convey messages and stir
            emotions.
          </p>
          <p>
            With a trained eye for aesthetics and a mastery of design tools, I
            give life to concepts through visuals that resonate with my intended
            audience. My process begins with diving deep into project
            objectives, understanding the audiences pulse, and deciphering the
            essence of the message. Sketching, selecting colors, typefaces, and
            images—all my choices are intentional, aimed at creating a visual
            language that aligns seamlessly with project goals.
          </p>
          <p>
            Refinement is my ally as I sculpt the perfect composition. I am not
            merely an artist; I am the architect of brands visual identities. I
            craft logos that encapsulate a companys soul, curate marketing
            materials that narrate coherent stories, and ensure every visual
            element mirrors the brands core values. Collaboration fuels my
            journey—I partner with clients, writers, illustrators, and fellow
            professionals to breathe life into ideas.
          </p>
          <p>
            Adapting and absorbing feedback is the essence of my growth, for the
            design landscape is ever-changing. In a world flooded with visuals,
            my designs emerge as powerful tools for communication. They steer
            decisions, simplify intricate information, and ignite emotional
            bonds. From website layouts to product packaging, the reach of a
            proficient graphic designer knows no bounds. As you step into my
            dynamic realm, you will gain insight into how I mold perspectives
            and weave visual stories that resonate with the world around us.
          </p>
        </div>
        <div className="about__icons-wrapper">
          <a href="https://dribbble.com/">
            <BsDribbble size={40} />
          </a>
          <a href="https://www.facebook.com/">
            <BsFacebook size={40} />
          </a>
          <a href="https://www.linkedin.com/">
            <BsLinkedin size={40} />
          </a>
          <a href="https://www.instagram.com/">
            <BsInstagram size={40} />
          </a>
        </div>
      </div>
    </section>
  );
}
