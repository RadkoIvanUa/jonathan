import { MutatingDots } from "react-loader-spinner";
import { motion } from "framer-motion";

export default function LoadingPage() {
  return (
    <motion.div
      exit={{
        y: "-100vh",
        opacity: 0,
      }}
      transition={{ ease: [0.4, 0, 0.2, 1], duration: 1.5 }}
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
        zIndex: 1000000000,
      }}
    >
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.5 }}
      >
        <MutatingDots
          height="100"
          width="100"
          color="#FFF"
          secondaryColor="#FFF"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          visible={true}
        />
      </motion.div>
    </motion.div>
  );
}
