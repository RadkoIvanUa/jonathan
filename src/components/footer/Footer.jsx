import "./footer.css";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="footer__section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1, delay: 0.7 }}
          className="footer__wrapper"
        >
          <div className="footer__copyright">
            <div>
              <p>
                <span>Copyright © 2023</span>{" "}
                <a href="#" style={{ color: "var(--primary-brand-color)" }}>
                  Jonathan
                </a>
              </p>
            </div>
            <div>
              <p>
                <span>Designed by</span>
                <a href="#" style={{ color: "var(--primary-brand-color)" }}>
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
    </div>
  );
}
