import { useRef } from "react";
import "./hero.css";

import { SlMouse } from "react-icons/sl";
import { Link } from "react-scroll";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";

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
          duration={500}
          offset={isMobile ? -7 : -200}
        >
          <motion.button
            animate={{ y: [10, 0, 10], x: [-30] }}
            transition={{
              duration: 1,

              times: [0, 1],
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
            className="hero__scroll"
            type="button"
          >
            <SlMouse
              size={windowSize.current[0] < 768 ? 40 : 60}
              color="white"
            />
          </motion.button>
        </Link>
      </div>
    </>
  );
}
