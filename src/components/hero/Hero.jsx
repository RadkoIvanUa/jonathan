import { useRef } from "react";
import "./hero.css";

import { SlMouse } from "react-icons/sl";
import { Link } from "react-scroll";

export default function Hero() {
  const windowSize = useRef([window.innerWidth]);

  return (
    <>
      <div className="hero">
        <div className="container">
          <p className="hero__text">Welcome</p>
          <h1 className="hero__title">I`m a Graphic designer</h1>
          <p className="hero__subtitle">
            Loremus ipsum dolor sit amet consectetur adipisicing elit, nostrum!
          </p>
          <button className="hero__btn">
            <a
              href="public\download__sample\download_sample.txt"
              download={true}
            >
              Download CV
            </a>
          </button>
        </div>

        <Link
          to={"about"}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-1}
          duration={500}
        >
          <button className="hero__scroll" type="button">
            <SlMouse
              size={windowSize.current[0] < 768 ? 40 : 60}
              color="white"
            />
          </button>
        </Link>
      </div>
    </>
  );
}
