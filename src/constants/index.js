import {
   
   materialUI,
   mysql,
   python,
   java,
   springBoot,
   bootstrap,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    starbucks,
    carrent,
    jobit,
    tripguide,
    enotes,
    momentix
    
  } from "../assets";
  

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    // {
    //   title: "Fronted Developer",
    //   icon: fronted,
    // },
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
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },

    {
      name: "BootStrap",
      icon: bootstrap,
    },
    {
      name: "Material UI",
      icon: materialUI,
    },

    {
      name: "spring boot",
      icon: springBoot,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Mysql",
      icon: mysql,
    },
    
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Title",
      company_name: "Company Name",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Date",
      points: [
        "Searching for jobs",
      ],
    },

    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    
        
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "E-notes",
      description:
        "Web-based platform that allows users to create, search, and manage notes using Spring Boot, MySQL, and Bootstrap, providing a convenient and efficient solution for note-taking and organization.",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Mysql",
          color: "pink-text-gradient",
        },
      ],
      image: enotes,
      source_code_link: "https://github.com/Lokendra443/Enotes_SpringBoot_Project",
    },

    {
      name: "Momentix - Social Media Web Application",
      description:
        "Momentix is an innovative social media web application currently under development. The project involves building an interactive and dynamic platform where users can create and share posts, like and save content, manage profiles, follow and unfollow other users, and engage with posts through likes and comments.",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "Mysql",
          color: "pink-text-gradient",
        },
      ],
      image: momentix,
      source_code_link: "https://github.com/Lokendra443/Momentix-Social-Media-Web-Application.git",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  