/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Oliver's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create an impact.",
  og: {
    title: "Oliver Martinez Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Oliver Martinez",
  logo_name: "OliverMartinez",
  nickname: "Oli",
  subTitle:
    "A passionate individual who always thrives to work on end-to-end products, to develop sustainable, scalable, social, and technical systems to create an impact.",
  resumeLink:
    "https://drive.google.com/file/d/1uSMvfU5Z7nndFiB2IK7K57ieCS6vrHhx/view?usp=drive_link",
  portfolio_repository: "https://github.com/revil0mg/masterPortfolio",
  githubProfile: "https://github.com/revil0mg",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/revil0mg/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/oliver-martinez-8409b0127/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:oliver.mtz.g@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end specializing Angular 12+, Typescript, NPM, and Visual Studio Code", //TODO Seperate 1st & second bullet
        "⚡ Connecting front and back ends with ASP.NET, Flask, and/or Spring-Boot",
        "⚡ Creating application back-end in NodeJS, .NET, Java, and/or Python",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#ffffff",
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            backgroundColor: "#ffffff",
            color: "#DB3837",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Visual Studio Code",
          imageSrc: "vscode_logo.png",
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#EF5B25",
          },
        },
        {
          skillName: "C#",
          imageSrc: "c_sharp_logo.png",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            backgroundColor: "transparent",
            color: "#ff0000",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on Azure cloud platform",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on Azure",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Microsoft Access",
          fontAwesomeClassname: "simple-icons:microsoftaccess",
          style: {
            color: "#b02031",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Unity3D Game Development",
      fileName: "DataScienceImg",
      skills: [
        //TODO: Add hyperlink to Embodied Conversational Agents
        "⚡ Built multi-modal Virtual Reality experiences aimed to research human interactions with Embodied Conversational Agents", // <a href="https://en.wikipedia.org/wiki/Embodied_agent">Embodied Conversational Agents</a>
        "⚡ Program clean, efficient, performance-minded VR modular code for use across multiple projects",
        "⚡ Trained Machine Learning Algorithm to visually recognize player poses",
      ],
      softwareSkills: [
        {
          skillName: "Unity3D",
          fontAwesomeClassname: "logos-unity",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Visual Studio",
          imageSrc: "visual_studio_logo.png",
        },
        {
          skillName: "Mixamo Fuse",
          imageSrc: "mixamo_fuse_logo.png",
        },
      ],
    },
    {
      title: "Additional Computer Skills",
      fileName: "DesignImg",
      skills: [
        "⚡ Basic editing skills in images, video, and music ",
        "⚡ Intermediate usage of Microsoft Word, Powerpoint, and Excel",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Audacity",
          fontAwesomeClassname: "simple-icons:audacity",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Audition",
          fontAwesomeClassname: "simple-icons:adobeaudition",
          style: {
            color: "#00e4bb",
          },
        },
        {
          skillName: "Gimp",
          fontAwesomeClassname: "simple-icons:gimp",
          style: {
            color: "#7a715b",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#00a4e4",
          },
        },
        {
          skillName: "Adobe Premiere",
          fontAwesomeClassname: "simple-icons:adobepremiere",
          style: {
            color: "#ea77ff",
          },
        },
        {
          skillName: "Microsoft Word",
          fontAwesomeClassname: "simple-icons:microsoftword",
          style: {
            color: "#0087be",
          },
        },
        {
          skillName: "Microsoft Powerpoint",
          fontAwesomeClassname: "simple-icons:microsoftpowerpoint",
          style: {
            color: "#f65314",
          },
        },
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#7cbb00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Texas at El Paso",
      subtitle: "M.S. in Software Engineering",
      logo_path: "utep_blue_background_logo.png",
      alt_name: "UTEP",
      duration: "2018 - 2020",
      //gpa: "GPA: 3.50", //TODO: fix position when in small screen
      descriptions: [
        "⚡ I have taken a varity of courses focused in Software Engineering which correspond to Construction, Project Management, Architecture, Design, Integration, Validation & Verification. ",
        "⚡ Other courses taken include Human-Computer Interaction, Information Retrival & Visualization, Advanced Computational Methods, Mobile App Development, and more",
        "⚡ Apart from this, I have also done a research assistantship. As a part of it, I have created new reseach projects in a subset of HCI primarily focused in Embodied Conversational Agents.",
      ],
      website_link: "https://www.utep.edu/",
    },
    {
      title: "University of Texas at El Paso",
      subtitle: "B.S. in Computer Science",
      logo_path: "utep_orange_background_logo.png",
      alt_name: "UTEP",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ I have studied basic software engineering subjects such as Data Structures, Algorithms, Database Management Systems, Operating Systems, SE methodologies, etc. primarily in Java",
        "⚡ Apart from this, I have completed courses on Computer Vision, Data Science, Secure Web-based Systems, Full Stack Development, and more",
        "⚡ During my time here, I also obtained a minor in Mathematics which involved completing courses in Matrix Algerbra, Calculus, Statistics, Discrete Math, and Numerical Analysis.",
      ],
      website_link: "https://utep.edu",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CompTIA A+",
      subtitle: "Sep 2013",
      logo_path: "ComTIA_A_logo.jpg",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "CompTIA A+",
      color_code: "#8C151599",
    },
    {
      title: "CompTIA Network+",
      subtitle: "May 2014",
      logo_path: "ComTIA_Network_logo.jpg",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "compTIA Net+",
      color_code: "#8C151599",
    },
    {
      title: "Adobe Flash CS4",
      subtitle: "May 2012",
      logo_path: "Adobe_Flash_CS4_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Adobe FL",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "My interests and experience in full-stack, and game development using C#, Angular, Unity, etc. to contribute to the development, execution, and troubleshooting as part of a diverse team is sure to make me an asset to any development group.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Graduate UX Research Assistant",
          company: "Interactive Systems Group (ISG)",
          company_url: "https://isg.cs.utep.edu/",
          logo_path: "isg_dark_logo.png",
          duration: "Jan 2017 - May 2020",
          location: "El Paso, TX",
          description:
            "I primarily handled the testing, maintenece, deployment phases of most projects, whether that was for research experiments or showcasing our research to others in Virtual Reality. I also trained a ML algorithm to recognize human gestures in real time and integrated that feature into the main multi-modal program.  ",
          color: "#0879bf",
        },
        {
          title: "Vice President",
          company: "Game Builders! ISG Subsidiary Organization",
          company_url: "https://isg.cs.utep.edu/gamebuilders.html",
          logo_path: "isg_dark_logo.png", //TODO: Add GameBuilders! logo
          duration: "Oct 2015 - May 2019",
          location: "El Paso, TX",
          description:
            "I started by learning C# and Unity 3D Engine from scratch here. I was then tasked along with my peers to create a Unity game and we were each assigned a scene. Upon completion and demonstrating prowess, I was promoted to Vice President to help the next group of newcomers learn and create as I did. ",
          color: "#9b1578",
        },
      ],
    },

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer Kennel Helper",
          company: "Pet Guardian Angel",
          company_url: "https://petguardianangelelpaso.org/",
          logo_path: "pet_guardian_angel_logo.png",
          duration: "July 2011",
          location: "El Paso, TX",
          description:
            "Helped with daily kennel and room cleaning 3 hours a day",
          color: "#4285F4",
        },
      ],
    },
  ],
};
//TODO: Add Hobbies Page, Listen to music w/ Summermelody & other favorites, primarily listen to EDM and standouts from other genres
//TODO: Hobbies - Play and workout in VR with Beat Saber and VR Boxing
//TODO: Hobbies - Play video games, usually party games such as Mario Party, Spelunky 2, Smash Brothers,
// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of a vast variety of the latest technology tools. My best experience is to create full-stack projects and deploy them as web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publication",
  description: "I have worked on a research paper with my research group.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Usability of the Virtual Agent Interaction Framework",
      createdAt: "2020-06",
      description:
        "Paper Written on Human Computer Interaction comparing the usability of Virtual Agent Interaction Framework (VAIF) and Virtual Human Toolkit. ",
      url:
        "https://www.researchgate.net/publication/342835262_Usability_of_the_Virtual_Agent_Interaction_Framework",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Martinez_Oliver_Picture.jpg",
    description:
      "You can message me, I will reply within 24 hours. I can help you with C#, .NET, Unity3D, or anything else about me.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Current Location",
    subtitle: "El Paso TX, 79938",
    locality: "United States",
    country: "US",
    region: "Texas",
    postalCode: "79938",
    streetAddress: "N/A",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/5MTmQVCFVGAtXAyDA",
  },
  phoneSection: {
    title: "(915) 637-7427",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
