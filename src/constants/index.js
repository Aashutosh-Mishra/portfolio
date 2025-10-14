import {
  mobile,
  backend,
  creator,
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
  jobit,
  tripguide,
  threejs,
  object,
  gmail,
  weather
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
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
  {
    title: "Content Creator",
    icon: creator,
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
    title: "B.Tech CSE",
    company_name: "Jain Deemed to be University",
    icon: "",
    iconBg: "#383E56",
    date: "Sept 2022 - July 2026",
    points: [
      "Gaining strong foundational knowledge in computer science concepts, programming, and software development.",
      "Building academic and personal projects using technologies like React.js, Node.js, and Python.",
      "Collaborating with peers and faculty on technical assignments, research work, and hackathons.",
      "Learning principles of responsive web design, data structures, algorithms, and modern development practices.",
      "Actively engaging in workshops, seminars, and code reviews to enhance technical and teamwork skills.",
    ],
  },
  {
    title: "Interschool -12th",
    company_name: "M.S.S.G College",
    icon: "",
    iconBg: "#E6DEDD",
    date: "April 2021 - June 2022",
    points: [
      "Studied core subjects including Physics, Chemistry, and Mathematics with a focus on analytical and problem-solving skills.",
      "Developed a strong foundation in logical reasoning, quantitative aptitude, and scientific principles.",
      "Engaged in practical laboratory sessions to apply theoretical knowledge and enhance experimental understanding.",
      "Participated in academic activities, group discussions, and science-based projects to build teamwork and communication skills.",
      "Explored the fundamentals of computer science and technology, sparking an interest in pursuing engineering at the undergraduate level.",
    ],
  },
  {
    title: "High School -10th",
    company_name: "Medical Science School",
    icon: "",
    iconBg: "#383E56",
    date: "April 2019 - April 2020",
    points: [
      "Completed foundational education with a focus on core subjects such as Mathematics, Science, and English.",
      "Developed a disciplined learning approach and a keen interest in technology and logical problem-solving.",
      "Actively participated in school-level academic activities, quizzes, and science exhibitions.",
      "Built strong analytical and communication skills through consistent academic performance and teamwork.",
      "Laid the groundwork for pursuing higher studies in the Science stream with an emphasis on innovation and curiosity.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
  name: "Object Detection AI",
  description:
    "An AI-powered web application that detects and classifies multiple objects in real time using the YOLOv3 deep learning model. The system integrates computer vision and neural networks to provide fast and accurate object recognition through an interactive web interface.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "fastapi",
      color: "green-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
    {
      name: "yolov3",
      color: "yellow-text-gradient",
    },
  ],
  image: object,
  source_code_link: "https://github.com/Aashutosh-Mishra/Object-Detection",
},
  {
  name: "Gmail",
  description:
    "A responsive web application built with React that replicates core Gmail functionalities such as composing, sending, and organizing emails. It features a clean user interface, real-time updates, and intuitive navigation to enhance the email management experience.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "mongoDb",
      color: "green-text-gradient",
    },
    {
      name: "Tailwind CSS",
      color: "pink-text-gradient",
    },
  ],
  image: gmail,
  source_code_link: "https://github.com/Aashutosh-Mishra/Gmail",
},
  {
  name: "Weather App",
  description:
    "A real-time weather forecasting web application that displays current conditions, temperature, humidity, and wind speed using data fetched from a public weather API. It features a clean, responsive interface and allows users to search weather details for any city worldwide.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "weatherapi",
      color: "green-text-gradient",
    },
    {
      name: "Tailwind CSS",
      color: "pink-text-gradient",
    },
  ],
  image: weather,
  source_code_link: "https://github.com/Aashutosh-Mishra/Weather-App",
},
];

export { services, technologies, experiences, projects };
