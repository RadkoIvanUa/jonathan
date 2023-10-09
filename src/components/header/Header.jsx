import { useState } from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";

import "./header.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Header({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const iconAnimation = useSpring({
    transform: `rotate(${isMenuOpen ? 90 : 0}deg)`,
    config: { duration: 250 },
  });

  return (
    <div className={className}>
      <div className="container">
        <nav className="header__nav">
          <Link
            className="header__nav-logo"
            to={"hero"}
            activeClass="active"
            spy={true}
          >
            JONATHAN
          </Link>
          <ul className="header__nav-list">
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "Inertia", stiffness: 100, delay: 0.2 }}
              className="header__nav-item"
            >
              <Link
                className="header__nav-link"
                to={"hero"}
                activeClass="active"
                spy={true}
              >
                Home
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "Inertia", stiffness: 100, delay: 0.4 }}
              className="header__nav-item"
            >
              <Link
                className="header__nav-link"
                to={"about"}
                spy={true}
                activeClass="active"
                // offset={-200}
              >
                About
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "Inertia", stiffness: 100, delay: 0.6 }}
              className="header__nav-item"
            >
              <Link
                activeClass="active"
                className="header__nav-link"
                to={"services"}
                spy={true}
              >
                Services
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "Inertia", stiffness: 100, delay: 0.8 }}
              className="header__nav-item"
            >
              <Link
                activeClass="active"
                className="header__nav-link"
                spy={true}
                to={"portfolio"}
              >
                Portfolio
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "Inertia", stiffness: 100, delay: 1 }}
              className="header__nav-item"
            >
              <Link
                activeClass="active"
                className="header__nav-link"
                spy={true}
                to={"client"}
              >
                Client
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "Inertia", stiffness: 100, delay: 1.2 }}
              className="header__nav-item"
            >
              <Link
                activeClass="active"
                className="header__nav-link"
                spy={true}
                to={"contact"}
              >
                Contact
              </Link>
            </motion.li>
          </ul>

          {/* mobile  */}
          <animated.button
            style={{
              border: 0,
              backgroundColor: "transparent",
              ...iconAnimation,
            }}
            type="button"
            onClick={handleMenuClick}
            className="burger"
          >
            {isMenuOpen ? (
              <VscChromeClose size={40} color={"black"} />
            ) : (
              <RxHamburgerMenu size={40} color={"black"} />
            )}
          </animated.button>
        </nav>
      </div>

      <nav
        className={
          isMenuOpen ? "mobile__header-nav" : "mobile__header-nav ishidden"
        }
      >
        <div className="container">
          <ul className="mobile__header-nav-list">
            <li className="mobile__header-nav-item">
              <Link
                className="mobile__header-nav-link"
                to={"hero"}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            <li className="mobile__header-nav-item">
              <Link
                className="mobile__header-nav-link"
                to="section about"
                activeClass="active"
                spy={true}
                offset={-40}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                About
              </Link>
            </li>
            <li className="mobile__header-nav-item">
              <Link
                className="mobile__header-nav-link"
                to="services"
                activeClass="active"
                spy={true}
                offset={-40}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Services
              </Link>
            </li>
            <li className="mobile__header-nav-item">
              <Link
                className="mobile__header-nav-link"
                to="portfolio"
                activeClass="active"
                spy={true}
                offset={-40}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Portfolio
              </Link>
            </li>
            <li className="mobile__header-nav-item">
              <Link
                className="mobile__header-nav-link"
                to="client"
                activeClass="active"
                spy={true}
                offset={-40}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Client
              </Link>
            </li>
            <li className="mobile__header-nav-item">
              <Link
                className="mobile__header-nav-link"
                to="contact"
                activeClass="active"
                spy={true}
                offset={-40}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};
