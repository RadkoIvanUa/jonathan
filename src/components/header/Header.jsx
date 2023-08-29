import { useState } from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";

import "./header.css";

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
        <nav className="header_nav">
          <a href="" className="header_nav__logo">
            JONATHAN
          </a>
          <ul className="header_nav__list">
            <li className="header_nav__item">
              <a href="" className="header_nav__link">
                Home
              </a>
            </li>
            <li>
              <a href="" className="header_nav__link">
                About
              </a>
            </li>
            <li>
              <a href="" className="header_nav__link">
                Services
              </a>
            </li>
            <li>
              <a href="" className="header_nav__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="" className="header_nav__link">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="header_nav__link">
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
          isMenuOpen ? "mobile_header_nav" : "mobile_header_nav ishidden"
        }
      >
        <div className="container">
          {" "}
          <ul className="mobile_header_nav__list">
            <li className="mobile_header_nav__item">
              <a href="" className="mobile_header_nav__link">
                Home
              </a>
            </li>
            <li className="mobile_header_nav__item">
              <a href="" className="mobile_header_nav__link">
                About
              </a>
            </li>
            <li className="mobile_header_nav__item">
              <a href="" className="mobile_header_nav__link">
                Services
              </a>
            </li>
            <li className="mobile_header_nav__item">
              <a href="" className="mobile_header_nav__link">
                Portfolio
              </a>
            </li>
            <li className="mobile_header_nav__item">
              <a href="" className="mobile_header_nav__link">
                Blog
              </a>
            </li>
            <li className="mobile_header_nav__item">
              <a href="" className="mobile_header_nav__link">
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
