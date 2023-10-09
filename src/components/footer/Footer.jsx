import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import "./footer.css";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="footer__section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
          className="footer__wrapper"
        >
          <div>
            <p>All Rights Reserved by ScriptSculptor.</p>
            <p>
              Designed by{" "}
              <a href="#" style={{ color: "var( --primary-brand-color)" }}>
                ScriptSculptor
              </a>
            </p>
            <p>Copyright © 2023</p>
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
        </motion.div>
      </div>
    </section>
  );
}
