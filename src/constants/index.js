const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: false,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "",
    title: "",
    image: "",
    link: "",
  },
  {
    id: 2,
    date: "",
    title: "",
    image: "",
    link: "",
  },
  {
    id: 3,
    date: "",
    title: "",
    image: "",
    link: "",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript"],
  },

  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "Java"],
  }
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/raghulari",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://raghuari.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/raghulari",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/sri-raghul-krishna-arivalagan/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/",
  },
  {
    id: 2,
    img: "/images/",
  },
  {
    id: 3,
    img: "/images/",
  },
  {
    id: 4,
    img: "/images/",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "REST API",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[10vh] right-10", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "REST API.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The REST API is a secure and well-structured backend designed to power modern web applications.",
            "Rather than being a basic API, it delivers a production-ready architecture with JWT-based authentication, authorization, and structured data handling.",
            "Think of it as the backbone of an application—managing users, access control, and data securely behind the scenes.",
            "It is built with Node.js, Express, and MongoDB, ensuring scalability, performance, and clean, maintainable code."


          ],
        },
        {
          id: 2,
          name: "REST API",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/raghulari/crud-api",
          position: "top-10 right-20",
        },

      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[30vh] right-10",
      children: [
        {
          id: 1,
          name: "Portfolio.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The macOS-inspired portfolio is a refined and immersive personal showcase designed to feel like a real operating system.",
            "Instead of a traditional portfolio layout, it recreates the macOS experience with fluid animations, interactive windows, and system-level interactions.",
            "Think of it as navigating a Mac desktop—where projects, skills, and information open like native applications.",
            "It is built with React.js and GSAP, delivering smooth motion, precise interactions, and a polished, premium user experience."

          ],
        },
        {
          id: 2,
          name: "portfolio",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-20 left-20",
        },

      ],
    },

    // ▶ Project 3

  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/srk.jpg",
      description: [
        "Hello, I’m Sri Raghul Krishna, a full stack developer focused on building secure, scalable, and production-grade digital solutions.",
        "Driven by continuous learning, my goal is to create impactful solutions that combine engineering excellence with intelligent automation.",
        "Alongside core development, I actively explore artificial intelligence to design systems that are smarter, more adaptive, and future-ready."

      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-50 left-10",
      imageUrl: "",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };