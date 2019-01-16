/*!
 * Guim González - Portfolio v1.0.0 (https://guimgonzalez.me)
 * Copyright 2019 Guim González
 * Licensed under MIT (https://github.com/GuimG/dev-portfolio/master/LICENSE)
 */

// Change your profile data here
let profile = {
  picture: "", // The default image is in the img folder, put a new path here or change it manually in the folder
  name: "Guim González",
  position: "Blockchain and FullStack developer",
  description:
    "I'm a Full Stack engineer primarily working with React, Node and MongoDB. Blockchain development enthusiast working with Ethereum, Solidity and Web3.",
  bio:
    "Guim González has been programming for 7 years. Right now he is studying an engineering degree in Computer Science at Barcelona. Besides the studies, he has worked for other companies as well as private, doing websites for small businesses.<br><br>Lately, he has been programming with Solidity and Web3 for Blockchain development, as well as with ReactJs and NodeJs for web development. He does both, FrontEnd and BackEnd engineering, also with SQL and NoSQL databases, such as MariaDB and MongoDB.",
  email: "guim.gonzalez@gmail.com",
  location: "Barcelona, Spain",
  birth: "1997-07-26", // YYYY-MM-DD format
  skills: [
    "Bootstrap",
    "CSS",
    "ES6",
    "Ethereum",
    "HTML",
    "Javascript",
    "JSX",
    "MongoDB",
    "Node.js",
    "React.js",
    "Redux",
    "Solidity",
    "SQL",
    "Web3"
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/guim-gonzalez-846606134/",
    twitter: "https://twitter.com/GuimGonzalez",
    github: "https://github.com/GuimG/",
    stackoverflow: "https://stackoverflow.com/users/8700961/guim-gonzalez",
    dev: "https://dev.to/guimg"
  },
  experience: [
    {
      title: "IT Consultant",
      company: "Innova-TSN",
      url: "https://www.innova-tsn.com/",
      location: "Barcelona, Spain",
      description:
        "I developed web services, worked with SAS for data manipulation, and email marketing with Oracle Eloqua.",
      from: "July 2018",
      to: "February 2019"
    },
    {
      title: "Fullstack developer",
      company: "Me",
      url: "",
      location: "Barcelona, Spain",
      description:
        "I make websites for small businesses. I develop all the server from the backend models, logic and security to the frontend design, logic and responsiveness.",
      from: "September 2017",
      to: "Now"
    }
  ],
  education: [
    {
      school: "Universitat Autònoma de Barcelona",
      degree: "Engineering",
      fieldOfStudy: "Computer Science",
      location: "Barcelona, Spain",
      from: "September 2016",
      to: "Now"
    }
  ],
  quote: "I turn coffee into code"
};

let page = {
  language: "english",
  // ^ languages suported:
  //  - english (default)
  //  - spanish
  //  - italian
  //  - catalan
  //  - french
  theme: "nightsky"
  // ^ themes suported:
  //  - nightsky (default)
  //  - sunset
  //  - purpledream
  //  - cutekitty
};
