import { styles } from "../styles";
import { ComponentType } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component: ComponentType) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        // @ts-expect-error
        variants={staggerContainer()}
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 bg-transparent`}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
