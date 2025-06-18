import {
  digihub,
  ShopEase,
  BuyNJoy,
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
  enotes,
  momentix,
  csharp,
  jenkins,
  mongodb,
  docker,
  kafka,
  kubernetes,
  postgresql,
  postman,
  swagger,
    
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
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Fronted React.js",
      icon: backend,
    },
    {
      title: "Backend Java",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },

    // {
    //   name: "BootStrap",
    //   icon: bootstrap,
    // },
    // {
    //   name: "Material UI",
    //   icon: materialUI,
    // },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "CSharp",
      icon: csharp,
    },
    {
      name: "Spring Boot",
      icon: springBoot,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "Kafka",
      icon: kafka,
    },
    {
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "Postgresql",
      icon: postgresql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "Postman",
    //   icon: postman,
    // },
    // {
    //   name: "Swagger",
    //   icon: swagger,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    
  ];
  
  const experiences = [
    {
      title: "Backend Java Developer Intern",
      company_name: "Digihub",
      icon: digihub,
      iconBg: "#383E56",
      date: "September 2024 - February 2025",
      points: [
        "Designing and developing RESTful APIs using Spring Boot.",
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

    {
      name: "BuyNJoy - Ecommerce Web Application",
      description:
        "BuyNJoy is a full stack ecommerce platform offering a seamless shopping experience with features like a smooth cart and checkout system, searchable product listings, user reviews, and an admin dashboard for managing products and orders",
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
      image: BuyNJoy,
      source_code_link: "https://github.com/Lokendra443/BuyNJoy-Full-Stack-Ecommerce-Web-Application-.git",
    },

    {
      name: "ShopEase - Ecommerce Shopping",
      description:
        "ShopEase is a ecommerce platform offering a seamless shopping experience with features like a smooth cart and checkout system, product listings, and an admin dashboard for managing products and orders",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "BootStrap",
          color: "green-text-gradient",
        },
        {
          name: "Thymeleaf",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Mysql",
          color: "pink-text-gradient",
        },
      ],
      image: ShopEase,
      source_code_link: "https://github.com/Lokendra443/ShopEase-Ecommerce-Shopping.git",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  