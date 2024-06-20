// contains all constants to be used throughout the project
// dont' remove anything from here if not sure

import { trakky, shreejimarketing } from "../assets/images";
import {
  car,
  css,
  estate,
  // express,
  git,
  github,
  html,
  java,
  javascript,
  mongodb,
  motion,
  numpy,
  figma,
  python,
  django,
  bootstrap,
  canva,
  react_bootstrap,
  pandas,
  c,
  mui,
  // nextjs,
  nodejs,
  react,
  redux,
  // sass,
  summiz,
  // tailwindcss,
  threads,
  youtube,
  snappy,
  // typescript,
} from "../assets/icons";

// sidebar links
export const SIDEBAR_LINKS = [
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

// skills
export const SKILLS = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  // {
  //   imageUrl: express,
  //   name: "Express",
  //   type: "Backend",
  // },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Frontend and Backend",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: c,
    name: "C#",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: numpy,
    name: "NumPy",
    type: "Frontend and Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Frontend and Backend",
  },
  {
    imageUrl: pandas,
    name: "Pandas",
    type: "Frontend and Backend",
  },
  {
    imageUrl: django,
    name: "Django",
    type: "Frontend and Backend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },

  // {
  //   imageUrl: nextjs,
  //   name: "Next.js",
  //   type: "Frontend",
  // },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: canva,
    name: "Canva",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: react_bootstrap,
    name: "React Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  // {
  //   imageUrl: sass,
  //   name: "Sass",
  //   type: "Frontend",
  // },
  // {
  //   imageUrl: tailwindcss,
  //   name: "Tailwind CSS",
  //   type: "Frontend",
  // },
  // {
  //   imageUrl: typescript,
  //   name: "TypeScript",
  //   type: "Frontend",
  // },
];

// site name
export const SITE_NAME = "Sujal Patel";

// extra links
export const EXTRA_LINKS = {
  source_code: "https://github.com/sanidhyy/3d_portfolio",
  linkdeen_code:
    "https://www.linkedin.com/in/sujal-patel6021?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};

// experiences
export const EXPERIENCES = [
  {
    title: "React.js Developer(Internship)",
    company_name: "Trakky",
    icon: trakky,
    iconBg: "#accbe1",
    date: "Feb 2024 - March 2024",
    points: [
      "Developing and maintaining live web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Shreeji Marketing",
    icon: shreejimarketing,
    iconBg: "#0F6987",
    date: "March 2024 - Present",
    points: [
      "Developing and maintaining web applications using HTML , Css and Javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Building inventory management system for web applications",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#b7e4c7",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#a2d2ff",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// projects
export const PROJECTS = [
  {
    iconUrl: youtube,
    theme: "btn-back-red",
    name: "Modern UI/UX YouTube Clone",
    description:
      "Explore my React.js-based YouTube clone, powered by Rapid API. Seamlessly navigate, search, and enjoy dynamic video content with a sleek and intuitive design.",
    link: "http://yt-youtube.netlify.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://threaad.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://carhb.vercel.app/",
  },
  {
    iconUrl: snappy,
    theme: "btn-back-pink",
    name: "Online Chat Application",
    description:
      "Experience my chat app, built on React.js, Socket.io, and MongoDB. Enjoy seamless communication with a sleek design for an intuitive and engaging messaging experience.",
    link: "https://snappy-chatapp.netlify.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://real-estate-app-react.vercel.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://summise.netlify.app/",
  },
];
