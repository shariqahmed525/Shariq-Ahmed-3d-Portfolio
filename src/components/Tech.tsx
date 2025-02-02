import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className={`-mt-20`}>
      {/* @ts-expect-error */}
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} text-center`}
          title="My Skills, Technologies, and Tech Stack"
        >
          Technologies
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-5 mt-10">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            // @ts-expect-error
            variants={textVariant((index + 9) * 0.05)}
          >
            <div
              className="w-[90px] h-[90px] p-[2px] border border-solid border-c-border-light dark:border-secondary shadow-md border-green-pink-gradient bg-white dark:bg-black bg-light-gradient dark:bg-black-gradient rounded-full"
              style={{
                transform:
                  "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
              }}
            >
              <div className="bg-c-white dark:bg-light-black w-full h-full rounded-full flex justify-center items-center">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech);
