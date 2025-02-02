import { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { DarkModeContext } from "./DarkModeProvider";
import { ExperienceInterface, experiences } from "../constants";

const ExperienceCard = ({
  experience,
}: {
  experience: ExperienceInterface;
}) => {
  const { isDark } = useContext(DarkModeContext);
  const isMobile = window.innerWidth < 640;
  const bgColor = isDark ? "rgba(30,30,40,.7)" : "#f3f7fb";
  const bgColorOp = isDark ? "#f3f7fb" : "rgba(30,30,40,.7)";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: bgColor,
        color: isDark ? "#f3f4f6" : "#0d1117",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${bgColorOp}`,
        display: isMobile ? "none" : "inline-block",
      }}
      date={experience.date}
      dateClassName="text-gray-500 dark:text-gray-400 !opacity-100"
      iconClassName="hidden sm:block"
      iconStyle={{ overflow: "hidden", background: experience?.iconColor }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <div className="flex items-start justify-between">
          <h3 className="text-c-black flex-1 dark:text-gray-100 text-[24px] font-bold">
            {experience.title}
          </h3>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-10 h-10 ml-2 block sm:hidden rounded-full"
          />
        </div>
        <p
          className="text-gray-500 dark:text-gray-400 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-c-black dark:text-gray-300 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const isMobile = window.innerWidth < 640;
  return (
    <div
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 bg-transparent`}
    >
      {/* @ts-expect-error */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center md:text-left`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center md:text-left`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        {isMobile ? (
          experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))
        ) : (
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience);
