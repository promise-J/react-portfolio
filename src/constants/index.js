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
    microverse,
    solution,
    varsell,
    alicia,
    german,
    schoolSystem,
    chatApp,
    workinprogress,
    investApp,
    lendsqr
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Databases",
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
      title: "Full Stack Software Developer (Intern)",
      company_name: "Microverse Inc. (San Francisco Carlifornia)",
      icon: microverse,
      iconBg: "#383E56",
      date: "Jan 2021 - Oct 2021",
      points: [
        " Worked on many projects using Rails, NodeJS, Postgres, MongoDB, Web Sockets, Heroku, Cloudinary, Git, etc",
        "Wrote unit test and integration test with jest, supertest and rspec.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Implemented Continous Integration and Continous Deployment with circleCI and github actions"
      ],
    },
    {
      title: "Full Stack Software Engineer",
      company_name: "Solution Academy Awka",
      icon: solution,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Aug 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Writing and deploying REST APIs in NodeJS",
        "Managing existing APIs endpoints written in NodeJS",
        " Interfacing with web Developers to implement Designs and build API’s in ReactJS.",
        "Implementing authentication and building secured apps"
      ],
    },
    {
      title: "Web Developer",
      company_name: "Varsell Nig Enugu",
      icon: varsell,
      iconBg: "#383E56",
      date: "Oct 2022 - Present",
      points: [
        "Building Robost and scalable applications",
        "Writing and deploying REST APIs in NodeJS",
        " Building of APIs and management of servers.",
        "Integration of APIs with using GraphQL",
        "Working with UI technologies like Chakra-ui for smooth user experience",
        " Researching relevant technical requirements needed to implement scalable applications",
        "Working with other engineers to add new features to existing products and build new tools"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Promise is a talented developer with great enthusiasm for learning and sharing what he knows. I was his mentor while enrolled at a remote software developer program, and in that time he displayed motivation and commitment with his learning path. He takes feedback seriously and is never afraid to ask for help. Promise is also a great communicator, and he stays motivated while solving a problem, thus mentoring him was an excellent experience. I believe he would be a positive addition to any team, and I will watch his career grow with great expectations. ",
      name: "Alicia Rojas",
      designation: "Software Engineer",
      company: "Telos Lab mexico",
      image: alicia
    },
    {
      testimonial:
        "I had the pleasure of working with Promise Chiemela when we were paired up to work on several Ruby on Rails learning projects which consisted in creating web apps. Promise displayed an uncanny ability to understand the MVC patterns involved and the CRUD operations required to implement them. This allowed us to push forward when certain aspects of the task seemed insurmountable. His clarity in understanding the underlying logical design and his drive to reach the goal moved us forward with an ease that was remarkable for tasks that were very demanding under the tight deadlines that were expected for their delivery. This effect was helped along also by Promise’s relaxed and supportive manner and the ease that it allows in communicating with him as a coding partner. A highly competent web developer, a pleasure to have as a coding partner and an overall great guy. I am sure he will be successful in his endeavors and will be an asset to whatever web development team is lucky to include him.",
      name: "German Cobian",
      designation: "Software Engineer",
      company: "Tijuana, Baja California, Mexico",
      image: german,
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "School Management System",
      description:
        "A web-based school management platform built to manage the school activities between the management and the students",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node js",
          color: "pink-text-gradient",
        },
      ],
      image: schoolSystem,
      source_code_link: "https://github.com/promise-J/mock-school-system-backend",
      live_link: "https://resonance-test.netlify.app"
    },
    {
      name: "Pancake Reloaded (2)",
      description:
        "Web application: an online exam system platform. It seeks to modify the lapses in the previous project of the school management system. It is specifically for taking/grading online exams. It covers the best practices in folder structure set up and usage of classes. It is a project in progress.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node js",
          color: "green-text-gradient",
        },
        {
          name: "mongoodb",
          color: "pink-text-gradient",
        },
      ],
      image: workinprogress,
      source_code_link: "https://github.com/promise-J/scaling-pancaked",
      live_link: ""
    },
    {
      name: "Flimzy Chat App",
      description:
        "A chat application for desktop only (after the order of web whatsapp) built with Nodejs on the backend and react js on the front end",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: chatApp,
      source_code_link: "https://github.com/promise-J/flimzyClient",
      live_link: "https://flimzyapp.netlify.app"
    },
    {
      name: "Invest with G",
      description:
        "A simple full stack investment site. Integrates crypto trading and APIs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: investApp,
      source_code_link: "https://github.com/promise-J/G-invest-client",
      live_link: "https://g-invest.netlify.app"
    },
    {
      name: "Lendsqr loaning front-end challenge clone",
      description:
        "Clone of Lendsqr front end app, responsiveness across all media devices and use of API",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        }
      ],
      image: lendsqr,
      source_code_link: "https://github.com/promise-J/lendsqr-fe-test",
      live_link: "https://promise-johnson-lendsqr-fe-test.netlify.app"
    },
  ];

  export { services, technologies, experiences, testimonials, projects };