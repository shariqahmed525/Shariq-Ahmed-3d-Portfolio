import { styles } from "../styles";
import LinkButton from "./LinkButton";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectInterface, projects } from "../constants";

const ProjectCard = ({
  tags,
  name,
  image,
  ios_link,
  live_link,
  description,
  android_link,
  source_code_link,
}: ProjectInterface) => {
  return (
    <div className="bg-c-white dark:bg-light-black p-5 rounded-2xl max-w-[400px] w-full h-full min-h-[400px] flex flex-col justify-between mx-auto">
      <div>
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <LinkButton
            ios_link={ios_link}
            live_link={live_link}
            android_link={android_link}
            source_code_link={source_code_link}
          />
        </div>

        <div className="mt-5">
          <h3 className="text-c-black dark:text-gray-100 text-[24px] font-bold">
            {name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-[14px]">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <p
            className={`text-[14px] ${tag.color}`}
            key={`tags-${Math.random()}-${index}-${tag.name}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <div>
      {/* @ts-expect-error */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center md:text-left`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center md:text-left`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          // @ts-expect-error
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[15px] sm:text-lg max-w-3xl leading-[30px] text-c-black dark:text-gray-300 text-center md:text-left"
        >
          Here are some of my projects that showcase my skills and experience.
          Each project includes a brief description with links to code
          repositories and live demos. These examples highlight my ability to
          solve problems, work with various technologies, and manage projects
          efficiently.
        </motion.p>
      </div>

      {/* @ts-expect-error */}
      <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
        <div className="mt-20 grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={`projects-${index}`} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works);
