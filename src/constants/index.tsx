import {
  // Service Icon
  frontend,
  devops,
  mobile,
  backend,

  // Companies Icon
  freelancing,
  bioCompany,
  lineageCompany,
  relayCompany,
  diridealCompany,
  moertschCompany,
  plaiCompany,

  // Tech Icons
  reactJS,
  typescript,
  nextJS,
  angular,
  vueJS,
  docker,
  firebase,
  flutter,
  nodeJS,
  nestJS,
  postgresSQL,
  mongoDB,
  aws,
  sass,
  redux,
  redis,
  svelte,
  nuxtJS,
  viteJS,
  express,
  javascript,
  azureDevops,
  googleCloud,
  tailwindCSS,
  adonis,

  // Portfolios Icons
  bioPortfolio,
  plaiPortfolio,
  lionsPortfolio,
  dirtoutPortfolio,
  lineagePortfolio,
  iAgilityPortfolio,
  personalPortfolio,
  moertschPortfolio,
  diridealPortfolio,
  steepRockPortfolio,
  relayAutoPortfolio,
  floeyMobilePortfolio,

  // Clients
  francisco,
  alberto,
  jan,

  // Certifications
  orasoft,
  coursera,
  aptech,
  udacity,
  smit,
} from "../assets";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaMedium } from "react-icons/fa6";
import { TbBrandUpwork } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development Specialist",
    icon: frontend,
  },
  {
    title: "Mobile Application Expert",
    icon: mobile,
  },
  {
    title: "Backend Architecture Engineer",
    icon: backend,
  },
  {
    title: "DevOps & Cloud Engineer",
    icon: devops,
  },
];

const technologies = [
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindCSS,
  },
  {
    name: "JS",
    icon: javascript,
  },
  {
    name: "TS",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactJS,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Vite JS",
    icon: viteJS,
  },
  {
    name: "Next JS",
    icon: nextJS,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue",
    icon: vueJS,
  },
  {
    name: "Nuxt JS",
    icon: nuxtJS,
  },
  {
    name: "Svelte",
    icon: svelte,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Node JS",
    icon: nodeJS,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Nest",
    icon: nestJS,
  },
  {
    name: "Adonis JS",
    icon: adonis,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "PostgreSQL",
    icon: postgresSQL,
  },
  {
    name: "MongoDB",
    icon: mongoDB,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Google Cloud",
    icon: googleCloud,
  },
  {
    name: "Azure DevOps",
    icon: azureDevops,
  },
];

export interface ExperienceInterface {
  title: string;
  company_name: string;
  icon: string;
  iconColor: string;
  date: string;
  points: string[];
}

const experiences: ExperienceInterface[] = [
  {
    title: "Upwork, Fiverr, Freelancer",
    company_name: "Freelancing",
    icon: freelancing,
    iconColor: "#0389e2",
    date: "On and off since 2018",
    points: [
      "Freelance on Upwork, Fiverr, and Freelancer, specializing in mobile app development with React Native and Expo, as well as full-stack development including backend services.",
      "Develop websites using Next.js and Vite, and provide backend solutions, API integration, and custom services for clients.",
    ],
  },
  {
    title: "Backend Engineer → Full Stack Developer",
    company_name: "Bio Insights",
    icon: bioCompany,
    iconColor: "#ffffff",
    date: "May 2024 - July 2024",
    points: [
      "Developed APIs and middleware with Adonis.js and PostgreSQL, improving speed by 30% and reducing errors by 15% through automation.",
      "Designed front-end with Next.js and Material UI, managed back-end systems, and ensured smooth deployments using Docker.",
      "Delivered secure, high-quality applications with a focus on testing, optimization, and user-friendly experiences.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Lineage CRM",
    icon: lineageCompany,
    iconColor: "#ffffff",
    date: "March 2023 - May 2024",
    points: [
      "Developed a mobile application using Expo, adding the website's features to the app.",
      "Ensured a seamless user experience by replicating and optimizing the website's functionality for mobile users.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Relay Automotive",
    icon: relayCompany,
    iconColor: "#ffffff",
    date: "July 2023 - February 2024",
    points: [
      "Developed and managed the backend with Node.js, Express.js, and MySQL, creating APIs to support web and mobile applications seamlessly.",
      "Built a responsive website using React.js with Vite and a mobile app using React Native CLI, ensuring both platforms had consistent features and functionality.",
      "Integrated Persona for identity verification and CometChat for chat, group messaging, and calling across web and mobile platforms.",
      "Refactored codebase to be more scalable for future development.",
    ],
  },
  {
    title: "Senior Software Developer",
    company_name: "DiriDeal",
    icon: diridealCompany,
    iconColor: "#8c3fb8",
    date: "July 2021 - May 2023",
    points: [
      "Led the development of a backend using Nest.js with MongoDB, deployed on AWS, and integrated APIs for a seamless connection between the mobile app, admin panel, and backend.",
      "Built a multilingual mobile app (English, French, Arabic) using React Native CLI and React Native Paper, ensuring smooth functionality across platforms and integrated APIs for consistent data flow.",
      "Provided technical leadership, set technology strategies, and guided teams to ensure all components—backend, mobile app, and admin panel—worked harmoniously together.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Moertsch",
    icon: moertschCompany,
    iconColor: "#ffffff",
    date: "December 2020 - April 2021",
    points: [
      "Developed on mobile development using React Native CLI and Firebase for services like authentication, storage, cloud functions, and database management.",
      "Focused map and calendar features for the event management app, ensuring a smooth user experience.",
      "Created an admin panel with React.js to validate and manage events effectively.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Plai",
    icon: plaiCompany,
    iconColor: "#1e45fa",
    date: "March 2019 - November 2019",
    points: [
      "Developed on mobile development using React Native CLI and Firebase for services like authentication, storage, notifications, database, Crashlytics, dynamic links, and in-app messaging.",
      "Integrated third-party APIs and backend APIs to enhance app functionality and performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I enjoyed working with Shariq and was thoroughly pleased with his work. I wouldn't hesitate to recommend him to anyone seeking a skilled React and Next.js developer. Shariq consistently met deadlines, communicated effectively, and adeptly solved any challenges.",
    name: "Francisco Gomez",
    image: francisco,
  },
  {
    testimonial:
      "Quality price guaranteed! Shariq used for this project: Functional Components, async/await pattern, try/catch pattern, connection to MongoDB database, Stripe Integration. He delivered in record time and he asked when he had road-block. Definitely hiring him again for the next bit!",
    name: "Alberto Cubeddu",
    image: alberto,
  },
  {
    testimonial:
      "Awesome Work. Delivery was fast and indeed, he is a react native beast! Will work with him in the future even more close and highly recommend him to anyone who wants do get his project done fast and efficient along with good communication through the whole process.",
    name: "Jan Kasper",
    image: jan,
  },
];

export interface ProjectInterface {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  android_link?: string;
  ios_link?: string;
  live_link?: string;
  source_code_link?: string;
}

const projects: ProjectInterface[] = [
  {
    name: "LionsRKing",
    description:
      "LionsRKing (LRK) is a fun and exciting app that offers a unique experience with several cool features. Users can enjoy exclusive brand discounts, connect with others through dating, and engage in fun games. The app also lets users meet college athletes, customize their profile with personalized songs, and share their favorite playlists with friends.",
    tags: [
      {
        name: "React Native",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Spotify API",
        color: "pink-text-gradient",
      },
      {
        name: "Apple Music",
        color: "green-text-gradient",
      },
      {
        name: "Comet Chat",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: lionsPortfolio,
    android_link:
      "https://play.google.com/store/apps/details?id=com.lionsrking",
    ios_link: "https://apps.apple.com/us/app/lionsrking/id6448316220",
    live_link: "https://relayautomotive.com/",
  },
  {
    name: "Personal Portfolio",
    description:
      "Welcome to my website! I want to give special thanks to JavaScript Mastery for the ThreeJS template, which I heavily modified to my liking. I also modified the magical particles effect by Eli Shmerler to fit my website, learning about vertex and fragment shaders along the way.",
    tags: [
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Shaders",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: personalPortfolio,
    source_code_link:
      "https://github.com/shariqahmed525/Shariq-Ahmed-3d-Portfolio",
    live_link: "https://shariqahmed.org/",
  },
  {
    name: "Bioinsights",
    description:
      "Bioinsights is a complete platform to help users start and scale functional medicine effortlessly—with the tools, protocols, and support people need from day one.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Adonis.js",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "Sentry",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
    ],
    image: bioPortfolio,
    live_link: "https://www.bioinsights.com/",
  },
  {
    name: "DiriDeal",
    description:
      "Dirideal is a community-driven platform in Algeria where users can sell clothes they no longer wear, with easy home pickup and quick payments via the app. Buyers get great deals delivered to their door, paying on delivery with a money-back guarantee. People can join the eco-friendly movement, rotate their wardrobe, and help build a sustainable fashion future.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Nest.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Sentry",
        color: "pink-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "pink-text-gradient",
      },
      {
        name: "OTA",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "blue-text-gradient",
      },
      {
        name: "Digital Ocean",
        color: "blue-text-gradient",
      },
    ],
    image: diridealPortfolio,
    android_link: "https://play.google.com/store/apps/details?id=com.dirideal",
    live_link: "https://www.dirideal.com/",
  },
  {
    name: "Lineage CRM",
    description:
      "Lineage CRM is a simple and powerful tool for senior market insurance agents. It helps them collect, track, and manage leads in one place, making every customer interaction more effective and productive.",
    tags: [
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "pink-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Twilio",
        color: "blue-text-gradient",
      },
      {
        name: "Sendgrid",
        color: "pink-text-gradient",
      },
      {
        name: "Google Map API",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "blue-text-gradient",
      },
    ],
    image: lineagePortfolio,
    live_link: "https://www.lineagecrm.com/",
  },
  {
    name: "Moertsch",
    description:
      "Moertsch is an app that helps users discover events, clubs, and artists from around the world. It keeps users updated with the best nightlife events and allows people to create and share their own events, both private and public. Users can also use a personal calendar to track events and enjoy other helpful features. Moertsch brings everything together in one place for a better experience.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Google Map API",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Cloud Functions",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI APIs",
        color: "pink-text-gradient",
      },
    ],
    image: moertschPortfolio,
    ios_link: "https://apps.apple.com/us/app/moertsch/id1617860624",
  },
  {
    name: "Relay Automotive",
    description:
      "Relay Automotive is a unique software built for retail auto experts to help dealerships with daily challenges. It improves accountability, productivity, efficiency, and profits, making dealership management easier and more effective.",
    tags: [
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Persona",
        color: "pink-text-gradient",
      },
      {
        name: "Comet Chat",
        color: "green-text-gradient",
      },
      {
        name: "Chart.js",
        color: "blue-text-gradient",
      },
      {
        name: "Netlify",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "Sentry",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: relayAutoPortfolio,
    live_link: "https://relayautomotive.com/",
  },
  {
    name: "iAgility",
    description:
      "iAgility is an online consulting platform that helps businesses adapt to the future of work. With the best talent moving to independent work, iAgility connects businesses and consultants to stay ahead, offering a platform that supports growth and innovation.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: iAgilityPortfolio,
    live_link: "https://iagility.com/",
  },
  {
    name: "Floey",
    description:
      "Floey is an app that simplifies finding and booking gyms in Kuwait. Users can easily search for gyms, compare prices, view class schedules, and book classes in one place. Floey also allows users to manage memberships, purchase packages, and make quick payments. It’s the easiest way to start and maintain your fitness journey.",
    tags: [
      {
        name: "React Native",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "DJango",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Google Map API",
        color: "pink-text-gradient",
      },
    ],
    image: floeyMobilePortfolio,
    live_link: "https://www.floeyapp.com/floey-app",
    android_link: "https://play.google.com/store/apps/details?id=com.floey",
    ios_link: "https://apps.apple.com/us/app/floey/id1665622409",
  },
  {
    name: "Plai",
    description:
      "Plai is a digital marketing platform that helps businesses create and manage ads on platforms like Facebook, Instagram, Google, and TikTok. It leverages AI to improve ad performance, offering easy-to-use templates, automated improvements, and efficient budget management. Plai aims to make digital advertising accessible for everyone, even those without prior experience, helping businesses reach their marketing goals faster and with better results.",
    tags: [
      {
        name: "React Native",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Cloud Storage",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Sentry",
        color: "pink-text-gradient",
      },
      {
        name: "OTA",
        color: "green-text-gradient",
      },
    ],
    image: plaiPortfolio,
    live_link: "https://www.plai.io/",
    android_link: "https://play.google.com/store/apps/details?id=com.plai",
  },
  {
    name: "Dirt Out Duct Cleaning",
    description:
      "Dirt Out Duct Cleaning offers professional services focused on improving indoor air quality. They provide air duct, dryer vent, furnace, and mold cleaning across various states in the U.S. The platform ensures better airflow, energy efficiency, and safety for homes and businesses, delivering services with fast, thorough, and eco-friendly methods.",
    tags: [
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Sendgrid",
        color: "pink-text-gradient",
      },
    ],
    image: dirtoutPortfolio,
    live_link: "https://dirtoutductcleaning.co/",
  },
  {
    name: "Steep Rock",
    description:
      "SteepRock helps customers make faster and more accurate decisions in the field of innovative therapies and medical devices. The experienced team includes experts from top institutions like MIT and Google, using AI, ML, and NLP to help businesses grow. The goal is to ensure every patient can access life-changing therapies. SteepRock provides solutions that keep users ahead in the race to help those in need.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
    ],
    image: steepRockPortfolio,
    live_link: "https://www.steeprockinc.com/",
  },
];

export interface ProgramInterface {
  company: string;
  title: string;
  description: string;
  date: string;
  link?: string;
  icon: string;
}

const programs: ProgramInterface[] = [
  {
    company: "Orasoft",
    title: "Bachelors",
    icon: orasoft,
    date: "Feb 2024 - Present",
    description: "Bachelors in Computer Science BSCS",
  },
  {
    company: "Coursera",
    title: "DevOps on AWS",
    icon: coursera,
    date: "Aug 2024 - Oct 2024",
    description:
      "DevOps on AWS specialization teaches me how to use the combination of DevOps philosophies, practices and tools to develop, deploy, and maintain applications in the AWS Cloud. Benefits of adopting DevOps include: rapid delivery, reliability, scalability, security and improved collaboration.",
    link: "https://www.coursera.org/account/accomplishments/specialization/P4H18ETM02V8",
  },
  {
    company: "Aptech",
    title: "ACCP PRO",
    icon: aptech,
    date: "Jun 2018 - Jun 2021",
    description:
      "ACCP PRO (Aptech Certified Computer Program Professional) is a complete career-oriented program to prepare students for todays I.T. Industry. The course gives a strong foundation to students on various concepts related to software development and global technology insights.",
    link: "https://drive.google.com/file/d/1G2au1thtPKqMQWv7smyzAyGaREOsaL2l/view",
  },
  {
    company: "Udacity",
    title: "React Nano Degree",
    icon: udacity,
    date: "Jun 2020 - Jul 2020",
    description:
      "Udacity's React Nanodegree program teaches how to build web and mobile apps using React, Redux, and React Native. It provides hands-on projects to help learners gain real-world experience. The course is ideal for those with JavaScript knowledge looking to master React development.",
    link: "https://www.udacity.com/certificate/YDYPUAYY",
  },
  {
    company: "SMIT",
    title: "Certified Web & Mobile Application Developer",
    icon: smit,
    date: "Jan 2018 - Feb 2019",
    description:
      "The Certified Web & Mobile Application Developer program at Saylani Mass IT Training covers essential technologies for modern app development. It React, React Native, Node.js, Express.js, MongoDB, and Expo. This training equips learners with the skills to build dynamic web and mobile applications.",
    link: "https://drive.google.com/file/d/1iS5DLdigUaDo65ioujI4ymIZITS4Gp4O/view",
  },
  {
    company: "SMIT",
    title: "Progressive Web App Developer",
    icon: smit,
    date: "Jul 2018",
    description:
      "The Progressive Web App (PWA) Program at Saylani Mass IT Training teaches the skills needed to build fast and reliable web applications. It covers HTML, CSS, JavaScript, ECMAScript, Firebase, and PWA technologies. This training helps learners create web apps that work offline, load quickly, and provide a smooth user experience.",
    link: "https://drive.google.com/file/d/1Nh1GNVfMOe_Fs7mAzAongjOguEJZTmrJ/view",
  },
];

const EMAIL = "shariq.ahmed525@gmail.com";
const EMAIL_LINK = "mailto:shariq.ahmed525@gmail.com";

const PHONE = "+92 3032139848";
const PHONE_LINK = "tel:+923032139848";

const SOCIALS = [
  {
    target: "_blank",
    icon: <FaLinkedin size={25} className="text-c-black dark:text-gray-300" />,
    link: "https://www.linkedin.com/in/shariqahmed525/",
    name: "LinkedIn",
  },
  {
    target: "_blank",
    icon: <FaGithub size={25} className="text-c-black dark:text-gray-300" />,
    link: "https://github.com/shariqahmed525",
    name: "Github",
  },
  {
    target: "_blank",
    icon: <FaMedium size={25} className="text-c-black dark:text-gray-300" />,
    link: "https://medium.com/@shariq.ahmed525",
    name: "Medium",
  },
  {
    target: "_blank",
    icon: (
      <TbBrandUpwork size={30} className="text-c-black dark:text-gray-300" />
    ),
    link: "https://www.upwork.com/freelancers/~0178102783a7696254",
    name: "Upwork",
  },
  {
    target: "_self",
    icon: <MdEmail size={25} className="text-c-black dark:text-gray-300" />,
    link: EMAIL_LINK,
    name: "Email",
  },
  {
    target: "_self",
    icon: <IoMdCall size={25} className="text-c-black dark:text-gray-300" />,
    link: PHONE_LINK,
    name: "Call",
  },
];

export {
  EMAIL,
  EMAIL_LINK,
  PHONE,
  PHONE_LINK,
  SOCIALS,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  programs,
};
