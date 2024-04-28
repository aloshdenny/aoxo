/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Alosh's Portfolio",
  description:
    "Iccus Battahnus",
  og: {
    title: "Alosh Denny Portfolio",
    type: "website",
    url: "http://aloshdenny.pages.dev/",
  },
};

//Home Page
const greeting = {
  title: "Alosh Denny",
  logo_name: "AloshDenny",
  nickname: "a_o_x_o",
  subTitle:
    "AI hobbyist and multi-domain researcher",
  resumeLink:
    "https://drive.google.com/file/d/1xu8X3tC3fzpq4Y4sU6wCwyE2PuOEmD8A/view?usp=sharing",
  portfolio_repository: "https://github.com/aloshdenny/aoxo",
  githubProfile: "https://github.com/aloshdenny",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/aloshdenny",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alosh-denny-38a923225/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "http://www.youtube.com/@aloshdenny9481",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:aloshdenny@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/AloshDenny",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "ResearchGate",
    link: "https://www.researchgate.net/profile/Alosh-Denny",
    fontAwesomeIcon: "fa-researchgate", // Reference https://fontawesome.com/icons/researchgate-f?style=brands
    backgroundColor: "#63E6BE", // Reference https://simpleicons.org/?q=researchgate
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/a_o_x_o/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "AI & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Billion Parameter LLMs, Multimodal Generative AI, Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for big data analysis, dynamic forecasting and time series analysis",
        "⚡ Scheduling multi-GPU clusters for large parameter training and finetuning",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
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
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos-pandas",
          style: {
            backgroundColor: "transparent",
          }
        },
        {
          skillName: "CUDA",
          fontAwesomeClassname: "logos-nvidia",
          style: {
            backgroundColor: "transparent",
          }
        },
      ],
    },
    {
      title: "Front End and Back End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React and HTML-CSS",
        "⚡ Developing cross-language wrappers and utility APIs",
        "⚡ Creating application backend in Node, Python and FastAPI",
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
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            backgroundColor: "transparent",
            color: "#F7DF1E",
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
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
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
      ],
    },
    {
      title: "Cloud Computing & IoT",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple Amazon Web Services - Athena, Lambda, S3, RDS",
        "⚡ Hosting and maintaining static websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Writing, Editing & Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Building presentations, research writeup and technical content",
        "⚡ Photo and video editing",
        "⚡ Creating the flow of application functionalities",
      ],
      softwareSkills: [
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Zotero",
          fontAwesomeClassname: "simple-icons:zotero",
          style: {
            color: "#FF0000",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "DaVinci Resolve",
          fontAwesomeClassname: "simple-icons:davinciresolve",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://www.coursera.org/user/866feb8c1ddf17feda45bf0dc1beadee",
    },
    {
      siteName: "HuggingFace",
      iconifyClassname: "logos:hugging-face-icon",
      style: {
        color: "#32343d",
      },
      profileLink: "https://huggingface.co/aoxo",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/kanelsnegl",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Cochin University of Science and Technology",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "cusat-logo.png",
      alt_name: "CUSAT",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have covered basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and IoT.",
        "⚡ I was selected for IndiaSkills Cloud Computing National Level Competition. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://cusat.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Supervised Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/AWDFRPHJUFT9",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Research, Internships and Organizations",
  description:
    "I have worked with many evolving startups as a Computer Vision Architect, AI consultant and Data Engineer. I love involving myself in multi-domain and multi-omic research.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Research and Publications",
      work: true,
      experiences: [
        {
          title: "e-Healthcare Data Management Using Machine Learning and IoT",
          company: "Springer",
          company_url: "",
          logo_path: "springer.png",
          description:
            "Chapter 5 of the Springer Book Series: IoT and ML for Information Management A Smart Healthcare Perspective",
          color: "#000000",
        },
        {
          title: "Singularity - A Fast Reconstructive Super Resolution Framework",
          company: "IEEE Xplore",
          company_url: "",
          logo_path: "IEEE-1.png",
          description:
            "We present Singularity, a dynamic algorithm and framework that generates rapid convolutional encoder-decoder layers for frame upscaling and interpolation in video games. Singularity beats Nvidia DLSS and AMD FSR at zero-shot tasks with high fidelity.",
          color: "#0879bf",
        },
        {
          title: "T2A: A Novel Text2ASMR Framework for Generating Autonomous Sensory Meridian Response Audio",
          company: "ISBN",
          company_url: "",
          logo_path: "isbn.png",
          description:
            "This work proposes an efficient Diffusion-based UNet neural network framework, namely T2A, for the generation of Text-2-Autonomous Sensory Meridian Response audio. T2A takes plain text as input and is capable of generating speech and non-speech ASMR elements.",
          color: "#9b1578",
        },
        {
          title: "Regularized Hybrid Deep Learning for DDoS Attack Prediction in Software-Defined IoT Networks",
          company: "IEEE Xplore",
          company_url: "https://ieeexplore.ieee.org/document/10474620",
          logo_path: "IEEE-1.png",
          description:
            "This work proposes an efficient method by combining CNN with Bi-LSTM for predicting DDoS attacks based on a modified loss function with regularization. We test our method on the CICDDOS2019 dataset of network traffic and demonstrate that it can accurately and successfully predict DDoS attacks with an accuracy of 99.8% and an F-score of 97.29%.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "NATPAC",
          company_url: "https://www.natpac.kerala.gov.in/",
          logo_path: "natpac.png",
          duration: "Feb 2024 - April 2024",
          location: "Kerala, India",
          description:
            "Designed and tested different unsupervised algorithms to model and forecast commodity-wise and district-wise export and import freight traffic from and to Cochin Port. Published a conference paper as well.",
          color: "#000000",
        },
        {
          title: "Computer Vision Architect",
          company: "Coco Robotics",
          company_url: "www.cocorobotics.com",
          logo_path: "coco.png",
          duration: "September 2023 - Present",
          location: "Kochi, India",
          description:
            "Designed a novel derivative of YOLO vision model for zero-shot detection and segmentation. Finetuning of said model to improve local-device optimisation in progress.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Organizations",
      experiences: [
        {
          title: "Exploration and AI/ML Lead",
          company: "Team Horizon",
          company_url: "https://horizoncusat.in/",
          logo_path: "horizon.png",
          duration: "2022 - Present",
          location: "CUSAT",
          description:
            "Team Horizon is a multi-disciplinary rover building team from CUSAT. We hold the 19th International Rank at European Rover Challenge (ERC), where me and my team had participated in September of 2023 at Poland. Looking forward to ERC 2024",
          color: "#000000",
        },
        {
          title: "Member",
          company: "National Service Scheme",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "nss.png",
          duration: "2021 - 2023",
          location: "CUSAT",
          description:
            "Took part in various cleanup drives, engaged in community services and led a bootcamp.",
          color: "#0C9D58",
        },
        {
          title: "Secretary",
          company: "Association of Computer Engineering Students",
          company_url: "https://acescusat.in/",
          logo_path: "aces.png",
          duration: "2022 - 2024",
          location: "CUSAT",
          description:
            "Actively organised and hosted hackathons - CodeCrypt. Hosted sessions on Blockchain, AI/ML and Research.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "ddos-attach-prediction",
      name: "Regularized Hybrid Deep Learning for DDoS Attack Prediction in Software-Defined IoT Networks",
      createdAt: "2024-03-25T00:00:00Z",
      description: "Paper published in IEEE Xplore",
      url: "https://ieeexplore.ieee.org/document/10474620",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me_circle.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Gem Street, Aranattukara, Thrissur, 680618",
    locality: "Thrissur",
    country: "India",
    region: "Kerala",
    postalCode: "680618",
    streetAddress: "Gem Street, Laloor",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/pxugrJXNCV6dffyk8",
  },
  phoneSection: {
    title: "",
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
