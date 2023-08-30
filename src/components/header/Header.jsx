import { useState } from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { isMobile } from "react-device-detect";

import "./header.css";
import { Link } from "react-scroll";

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
            smooth={true}
            duration={500}
          >
            JONATHAN
          </Link>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to={"hero"}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to={"about"}
                activeClass="active"
                spy={true}
                offset={isMobile ? -7 : -10}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <a href="" className="header__nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="" className="header__nav-link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="" className="header__nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="header__nav-link">
                Contact
              </a>
            </li>
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
              <VscChromeClose size={40} />
            ) : (
              <RxHamburgerMenu size={40} />
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
                smooth={true}
                duration={500}
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
                smooth={true}
                offset={-40}
                duration={500}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                About
              </Link>
            </li>
            <li className="mobile__header-nav-item">
              <a href="" className="mobile__header-nav-link">
                Services
              </a>
            </li>
            <li className="mobile__header-nav-item">
              <a href="" className="mobile__header-nav-link">
                Portfolio
              </a>
            </li>
            <li className="mobile__header-nav-item">
              <a href="" className="mobile__header-nav-link">
                Blog
              </a>
            </li>
            <li className="mobile__header-nav-item">
              <a href="" className="mobile__header-nav-link">
                Contact
              </a>
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
