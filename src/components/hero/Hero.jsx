import { useRef } from "react";
import "./hero.css";

import { SlMouse } from "react-icons/sl";

export default function Hero() {
  const windowSize = useRef([window.innerWidth]);

  return (
    <>
      <div className="hero">
        <div className="container">
          <p className="hero_text">Welcome</p>
          <h1 className="hero_title">I`m a Graphic designer</h1>
          <p className="hero_subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, nostrum!
          </p>
          <button className="hero_btn">
            <a
              href="public\download_sample\download_sample.txt"
              download={true}
            >
              Download CV
            </a>
          </button>
          <button className="hero_scroll" type="button">
            <SlMouse
              size={windowSize.current[0] < 768 ? 40 : 60}
              color="white"
            />
          </button>
        </div>
      </div>
    </>
  );
}
