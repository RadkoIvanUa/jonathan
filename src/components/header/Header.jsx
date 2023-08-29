import "./header.css";
import PropTypes from "prop-types";

export default function Header({ className }) {
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
        </nav>
      </div>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};
