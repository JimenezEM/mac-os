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
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // Finder
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // Safari
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // Contacts
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // Terminal
    icon: "terminal.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "GSAP", "CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Java"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Firebase"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#7c7c7c",
    link: "https://github.com/JimenezEM",
  },
  {
    id: 2,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#7c7c7c",
    link: "",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#7c7c7c",
    link: "https://www.linkedin.com/in/emilyjimenezg/",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // Project 1
    {
      id: 5,
      name: "Benjamin Franklin High School Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Benjamin Franklin.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-1",
          description: [
            "A responsive high school website built with React and Vite.",
            "The website was fully designed and developed from scratch, including layout, color palette, and component structure.",
            "Some content has been modified or partially fictionalized for security and privacy reasons, while preserving the overall structure and functionality of the real project.",
          ],
        },
        {
          id: 2,
          name: "benjamin-franklin.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://benjamin-franklin.vercel.app/",
          position: "top-20 left-35",
        },
        {
          id: 3,
          name: "github-jimenezem.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/JimenezEM/benjamin-franklin",
          position: "top-20 left-75",
        },
      ],
    },

    // Project 2
    {
      id: 6,
      name: "Twice GSAP Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-50",
      windowPosition: "top-[25vh] left-7",
      children: [
        {
          id: 1,
          name: "Twice GSAP.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-1",
          description: [
            "An animated single-page website built with React, Vite, and GSAP.",
            "The project reimagines a tutorial-based layout and transforms it into a creative, lyric-driven experience inspired by the song Alcohol-Free by TWICE.",
            "Instead of traditional informational content, the site uses selected lyrics from Alcohol-Free as textual elements, blending music, motion, and front-end experimentation.",
          ],
        },
        {
          id: 2,
          name: "twice-gsap.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://twice-gsap.vercel.app",
          position: "top-20 left-35",
        },
        {
          id: 3,
          name: "github-jimenezem.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/JimenezEM/twice-gsap",
          position: "top-20 left-75",
        },
      ],
    },
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
      name: "About Me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-1",
      subtitle: "About Me",
      description: [
        "Hey! My name is Emily Jimenez, I’m a software engineer with a background in Computer Science and hands-on experience in both technical and analytical environments.",
        "My work is mainly on front-end development, and animation-heavy UI systems using modern tools. I care about writing maintainable code.",
        "Beyond front-end development, I’ve worked in cybersecurity and compliance-focused roles, including supporting technical operations at the U.S. Embassy and analyzing high-risk financial transactions at Western Union.",
        "I’m currently focused on building production-ready applications, expanding my technical depth, and contributing to teams where I can both add value and continue growing as a developer.",
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
      name: "Emily Jimenez Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      position: "top-5 left-1",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
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