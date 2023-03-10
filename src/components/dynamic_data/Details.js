//contact data starts here
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

//skills data starts here
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import node from "../../images/node.png";
import jquery from "../../images/jquery.png";
import bootstrap from "../../images/bootstrap.png";
import tailwind from "../../images/tailwind.png";

//intro data starts here
import intro from "../../images/intro.png";

//about data starts here
import avatar from "../../images/avatar.png";

//experience data starts here
import silvertouchlogo from "../../images/silvertouchlogo.png";
import welteclogo from "../../images/welteclogo.png";

//testimonials data starts here
import namo from "../../images/namo.jfif";
import donald from "../../images/donald.jpg";
import taliban from "../../images/taliban.jfif";

export const contactData = {
  title: "We can get in touch here!",
};

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: GitHubIcon,
    url: "https://github.com/lucky7xx",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/lucky-patel-b285a4138/",
  },
  {
    id: 3,
    name: "Twitter",
    icon: TwitterIcon,
    url: "https://twitter.com/notsolucky7x_",
  },
  {
    id: 4,
    name: "Facebook",
    icon: FacebookIcon,
    url: "https://facebook.com/lucky7ex",
  },
  {
    id: 5,
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://instagram.com/lucky7x_",
  },
];

//contact data ends here

export const skillsData = [
  {
    id: 1,
    name: "html",
    image: html,
  },
  {
    id: 2,
    name: "css",
    image: css,
  },
  {
    id: 3,
    name: "javascript",
    image: js,
  },
  {
    id: 4,
    name: "react",
    image: react,
  },
  {
    id: 5,
    name: "node",
    image: node,
  },
  {
    id: 6,
    name: "jquery",
    image: jquery,
  },
  {
    id: 7,
    name: "bootstrap",
    image: bootstrap,
  },
  {
    id: 8,
    name: "tailwind",
    image: tailwind,
  },
];

//skills data ends here

export const introDetails = {
  title: "Intro",
  text: `Passionate about learning and developing new skills, I am dedicated to creating meaningful projects that make a positive impact. With a focus on design and coding, I am committed to building high-quality products and bringing them to life. Driven by a fast-paced, collaborative environment, I am motivated to work with my team to continuously ship, learn, and iterate. My strong communication and problem-solving abilities allow me to effectively contribute to any project, and I am excited to learn and grow alongside my team. When not working, I enjoy spending time at the gym, reading, traveling, and exploring the great outdoors. Let's create something amazing together!`,
  image: intro,
};

//intro data ends here

export const aboutDetails = {
  name: "Hi, I am Lucky!",
  pos1: "I am Developer!",
  pos2: "& Designer!",
  pos3: "& Photographer!",
  city: "Based in Ahmedabad,India",
  about:
    " designing stunning user interfaces is my passion, and bringing them to life with code is my superpower.",
  image: avatar,
};

//about data ends here

export const experienceDetails = {
  title: " Experience",
  subtitle: "A brief summary.",
  sub_subtitle: "1+ years experience in frontend development.",
};

//experience data ends here

export const experienceCardComponentDetails = [
  {
    id: 1,
    companyLogo: silvertouchlogo,
    companyName: "SilverTouch Technologies",
    position: "React Developer",
  },
  {
    id: 2,
    companyLogo: welteclogo,
    companyName: "WelTec Institute",
    position: "MERN Stack Development",
  },
];

//navabar data starts here

export const nav_brand = {
  name: "Lucky.react()",
};

export const navBarData = [
  {
    id: 1,
    name: "About",
    to: "#intro",
  },
  {
    id: 2,
    name: "Experience",
    to: "#experience",
  },
  {
    id: 3,
    name: "Skills",
    to: "#skills",
  },
  {
    id: 4,
    name: "Contact",
    to: "#contact",
  },
];

export const skillsProgressBarData = [
  { name: "HTML", percent: 85 },
  { name: "CSS", percent: 70 },
  { name: "JavaScript", percent: 70 },
  { name: "React", percent: 65 },
  { name: "Bootstrap", percent: 65 },
  { name: "Tailwind", percent: 60 },
];

export const testimonialsData = [
  {
    name: "Narendra Modi",
    review:
      "He is a great guy! get your work done by him. I am really impressed mitron!!!",
    rating: 4,
    image: namo,
  },
  {
    name: "Donald Trump",
    review:
      "Fabulous work fellas, my white house's website is managed by him. keep up the good work!!!",
    rating: 5,
    image: donald,
  },
  {
    name: "Donald Trump",
    review:
      "Fabulous work fellas, my white house's website is managed by him. keep up the good work!!!",
    rating: 5,
    image: donald,
  },
  {
    name: "Taliban Sarkar",
    review:
      "Mashallah!!! what a work!!! will suggest you to get your work done by him.",
    rating: 4,
    image: taliban,
  },
];
