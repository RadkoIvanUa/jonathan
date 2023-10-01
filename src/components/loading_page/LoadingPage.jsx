import { Puff } from "react-loader-spinner";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

export default function LoadingPage({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: "100vh", bottom: 0 }}
          animate={{
            height: 0,
            transition: {
              when: "afterChildren",
              duration: 2,
              ease: [0.87, 0, 0.13, 1],
            },
          }}
          exit={{ duration: 2, opacity: 0 }}
          style={{
            display: "flex",
            alignItems: "center",

            justifyContent: "center",
            backgroundColor: "black",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 10000000,
          }}
        >
          <Puff
            height="150"
            width="150"
            radius={1}
            color="white"
            ariaLabel="puff-loading"
            visible={true}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

LoadingPage.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
