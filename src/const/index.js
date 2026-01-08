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
    name: "CV",
    type: "cv",
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
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
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
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["Vue.js", "React.js", "JavaScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js"],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Filiqpo",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/insta.svg",
    bg: "#4bcb63",
    link: "https://www.instagram.com/filiqpoo/",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/filippo-comelato-b3a1ba21b/",
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
      name: "Apple MacBook Pro Web Page",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[60vh] left-30",
      children: [
        {
          id: 1,
          name: "MacBook Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This MacBook Pro landing page is a faithful and elegant replica of the official 2024 Apple page, designed to showcase the new model with M4 chip.",
            "Instead of a simple informational page, it delivers an immersive experience with interactive 3D models, smooth scroll-based animations, and a design that embodies Apple's signature minimalism.",
            "It's built with Vue.js, GSAP for animations, Three.js for 3D models, and Tailwind CSS, ensuring optimal performance, engaging interactivity, and that clean, sophisticated aesthetic that defines Apple.",
          ],
        },
        {
          id: 2,
          name: "apple-macbook-pro.com",
          icon: "/images/logo.svg",
          kind: "file",
          fileType: "url",
          href: "https://macbook-pro-landing-replica.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "apple.png",
          icon: "/images/project-1.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Velvet Pour - Mojito",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] right-40",
      children: [
        {
          id: 1,
          name: "Velvet Pour.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The Velvet Pour website is a sleek and immersive showcase for an imaginary upscale cocktail lounge, designed to capture the essence of modern mixology.",
            "Instead of a standard bar website, it delivers a captivating visual experience with scroll-triggered animations—watch as a cocktail glass fills smoothly while you scroll, and explore drinks with dynamic ingredient transitions.",
            "Think of it like stepping into an intimate, dimly-lit lounge—but from the comfort of your screen, where every scroll tells a story.",
            "It's built with Vue.js, vanilla JavaScript, GSAP for buttery-smooth animations, and Tailwind CSS, ensuring a refined, responsive design with that luxurious lounge atmosphere.",
          ],
        },
        {
          id: 2,
          name: "velvet-pour.com",
          icon: "/images/mask-img.png",
          kind: "file",
          fileType: "url",
          href: "https://velvet-mojito.netlify.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "velvet pour.png",
          icon: "/images/project-2.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
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
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/filippo-1.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-40 right-4",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/filippo-1.jpg",
      description: [
        "Hey! I’m Filippo 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, Vue, React and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me in bouldering gyms, football games or in bed 😅",
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
      name: "top secret.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/Secret.jpg",
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
  cv: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
