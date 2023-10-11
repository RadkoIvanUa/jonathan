import "./services.css";

import { CgWebsite } from "react-icons/cg";
import { BiLogo500Px } from "react-icons/bi";
import { GoPackage } from "react-icons/go";
import { TbSocial } from "react-icons/tb";
import { FiPrinter } from "react-icons/fi";
import { AiOutlinePicture } from "react-icons/ai";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Services({ selectedColor }) {
  return (
    <section className="services__section section" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
        >
          <h2 className="servises__title section__title">
            <span>Our</span> Services
          </h2>
          <p className="services__subtitle section__subtitle">
            It is a long established fact that a reader will be of a page when
            established fact looking at its layout.
          </p>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1, delay: 0.3 }}
          className="services__list"
        >
          <li className="services__list-item">
            <div className="services__item-icon">
              <CgWebsite size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">Web</h3>
            <p
              className="services__item-text section__text"
              style={{ borderTop: `2px solid ${selectedColor}` }}
            >
              There are many variations of passages of but the majority have
              suffered alteration in some form.
            </p>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <BiLogo500Px size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">Logo</h3>
            <p
              className="services__item-text section__text"
              style={{ borderTop: `2px solid ${selectedColor}` }}
            >
              There are many variations of passages of but the majority have
              suffered alteration in some form.
            </p>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <GoPackage size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">Packaging</h3>
            <p
              className="services__item-text section__text"
              style={{ borderTop: `2px solid ${selectedColor}` }}
            >
              There are many variations of passages of but the majority have
              suffered alteration in some form.
            </p>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <TbSocial size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">Social Media</h3>
            <p
              className="services__item-text section__text"
              style={{ borderTop: `2px solid ${selectedColor}` }}
            >
              There are many variations of passages of but the majority have
              suffered alteration in some form.
            </p>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <FiPrinter size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">Print Design</h3>
            <p
              className="services__item-text section__text"
              style={{ borderTop: `2px solid ${selectedColor}` }}
            >
              There are many variations of passages of but the majority have
              suffered alteration in some form.
            </p>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <AiOutlinePicture size={60} color={selectedColor} />
            </div>
            <h3 className="servises__item-title">Illustration</h3>
            <p
              className="services__item-text section__text"
              style={{ borderTop: `2px solid ${selectedColor}` }}
            >
              There are many variations of passages of but the majority have
              suffered alteration in some form.
            </p>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
Services.propTypes = {
  selectedColor: PropTypes.string,
};
