import { Puff } from "react-loader-spinner";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

export default function LoadingPage({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, height: 0 }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1, delay: 0.3 }}
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
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 1, delay: 0.3 }}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

LoadingPage.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
