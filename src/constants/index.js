export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him fo web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review: `Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.`,
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review: `I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.`,
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "DolphinAI - Multi-Modal AI Image Generation Suite",
    desc: "DolphinAI is an advanced AI-powered platform featuring three distinct generation modes: text-to-image synthesis using Stable Diffusion XL, voice-enabled image creation with Web Speech API, and intelligent image captioning powered by Salesforce BLIP. It demonstrates seamless integration of multiple AI models in a production-ready web application.",
    subdesc:
      "Built with modern vanilla JavaScript and integrated with Hugging Face Inference API, DolphinAI showcases advanced features including real-time speech recognition, drag-and-drop file uploads, customizable generation parameters (resolution, batch size, creativity), dark/light theme switching, and user authentication with persistent sessions.",
    href: "https://pseudocode21.github.io/DolphinAi---Text-to-Image-and-vice-versa/",
    // texture: "/textures/project/dolphinAI-demo-video.mp4",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/dolphinAI.png",
    logoStyle: {
      backgroundColor: "#1c2e38",
      border: "0.2px solid #091319",
      boxShadow: "0px 0px 60px 0px #3c4e57",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "JavaScript ",
        path: "/assets/javascript.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "assets/css.svg",
      },
      {
        id: 3,
        name: "HTML",
        path: "/assets/html.svg",
      },
    ],
  },
  {
    title: "Employee Task Management System",
    desc: "A comprehensive task management platform that revolutionizes workplace productivity through role-based dashboards. As a modern task tracking solution, it enables administrators to create and assign tasks while employees manage their workload with real-time status updates and persistent data storage.",
    subdesc:
      "With this system, organizations can streamline task delegation and tracking, where admins assign work and employees update progress in real-time without data loss, built using React.js, Context API, and LocalStorage for seamless state management.",
    href: "https://employee-mangagement-system.vercel.app/",
    // Add your deployed link
    texture: "/textures/project/project2.mp4", // Add your demo video
    logo: "/assets/employee-logo.png", // Add your logo
    logoStyle: {
      backgroundColor: "#10B981",
      border: "0.2px solid #059669",
      boxShadow: "0px 0px 60px 0px #10B9814D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "CarePulse - Health Management System",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Horizon - Online Banking Platform",
    desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
    subdesc:
      "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
    href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Imaginify - AI Photo Manipulation App",
    desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : isTablet ? 0.08 : 0.1,

    deskPosition: isSmall
      ? [0, -4, 0]
      : isMobile
      ? [0.5, -4.5, 0]
      : isTablet
      ? [0.25, -5, 0]
      : [0.25, -9, 0],

    cubePosition: isSmall
      ? [4, -8, 0]
      : isMobile
      ? [5, -8, 0]
      : isTablet
      ? [5, -8, 0]
      : [11, -8.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-10, 22, 0]
      : isMobile
      ? [-15, 20, 0]
      : isTablet
      ? [-22, 18, 0]
      : [-30, 17, 0],
    targetPosition: isSmall
      ? [-5, 0, -10]
      : isMobile
      ? [-10, -10, -10]
      : isTablet
      ? [-14, -7, -10]
      : [-17, -16, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
