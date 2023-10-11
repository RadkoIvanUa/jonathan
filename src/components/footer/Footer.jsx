import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import "./footer.css";

import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Footer({ selectedColor }) {
  return (
    <div className="footer__section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
          className="footer__wrapper"
        >
          <div className="footer__copyright">
            <div>
              <p>
                <span>Copyright © 2023</span>{" "}
                <a href="#" style={{ color: selectedColor }}>
                  Jonathan
                </a>
              </p>
            </div>
            <div>
              <p>
                <span>Designed by</span>{" "}
                <a href="#" style={{ color: selectedColor }}>
                  ScriptSculptor
                </a>
              </p>
            </div>
            <div>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="about__icons-wrapper">
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.5 }}
          href="https://dribbble.com/"
        >
          <BsDribbble size={20} />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.6 }}
          href="https://www.facebook.com/"
        >
          <BsFacebook size={20} />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.7 }}
          href="https://www.linkedin.com/"
        >
          <BsLinkedin size={20} />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
          href="https://www.instagram.com/"
        >
          <BsInstagram size={20} />
        </motion.a>
      </div>
    </div>
  );
}

Footer.propTypes = {
  selectedColor: PropTypes.string,
};
