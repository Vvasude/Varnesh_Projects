import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  kvan,
  venvae,
  threejs,
  weather,
  webscraper,
  music
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Venvae",
    icon: venvae,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Developed a responsive user-interface (UI/UX), and custom rest API's that filter metric data. Leveraged ReactJs, TypeScript, Node.Js and Express. Averaging more than 200 users per day.",
      "Collaborated with a UI/UX desging team to enhance and refine exisiting applications.",
      "Utilized version control systems, including Github, to track and manage code changes; the optimized applications boosted conversion rates by 25%",
      
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Kvan Logistics",
    icon: kvan,
    iconBg: "#E6DEDD",
    date: "May 2021 - August 2021",
    points: [
      "Implemented a new react component for the customer web application, which improved the average user time on the website by 2-3 minutes.",
      "Revamped the full website to be more user-friendly. Implemented Material UI components for website to be more aesthetically pleasing, which increased the number of new users by 20%.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
     "After Varnesh optimized our website, our traffic increased by 50%. We can't thank the software team enough!",
    name: "Venvae",
    designation: "CTO",
    company: "Venvae",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },

];

const projects = [
  {
  name: "Webscraper (Python)",
    description:
      "Developed a custom web scraping application using Python, Selenium, Flask, and PostgreSQL. As a result learned web scraping, automation, web development, and database management",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      
    ],
    image: webscraper,
    source_code_link: "https://github.com/",
  },
  {
    name: "Weather App (JavaScript)",
    description:
      "Developed a modern weather app that shows the weather, the wind speed in a current area as well as the humidity. As a result, learned how to implement API’s and dynamically add elements ",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/",
  },
  {
    name: "FullStack Music App",
    description:
      "Developed a music streaming application like Spotify using ReactJS, TypeScript, jQuery, Redux, NodeJS, MongoDB, and JWT for user authentication. Successfully integrated the application with various APIs and utilized best practices for code organization and maintainability",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
