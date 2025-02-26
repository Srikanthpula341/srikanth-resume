import { ProjectData } from '@/types';
import { IMAGES } from '@/constants';

export const mockProjects: ProjectData[] = [
  {
    name: "OnFit Healthcare Platform",
    description: "Developed a comprehensive healthcare platform connecting doctors and patients online. Implemented secure medical prescription system and deployed Android version to Play Store.",
    tech_stack: ["React Native", "NextJS", "NodeJS", "Socket.io"],
    company: "ArThink",
    duration: "June 2023 - Present",
    image: IMAGES.PLACEHOLDERS.PROJECT,
    github_url: "#",
    live_url: "#"
  },
  {
    name: "AI Chatbot Assistant",
    description: "Developed an intelligent chatbot system with business logic integration and adaptive learning capabilities. Enhanced customer service efficiency by 40%.",
    tech_stack: ["Python", "TensorFlow", "NLP", "REST APIs"],
    company: "ArThink",
    duration: "2023",
    image: IMAGES.PLACEHOLDERS.PROJECT,
    github_url: "#",
    live_url: "#"
  },
  {
    name: "E-Commerce Platform",
    description: "Built a scalable e-commerce platform with real-time inventory management and secure payment processing. Increased sales conversion by 25%.",
    tech_stack: ["React", "Node.js", "MongoDB", "Stripe"],
    company: "Previous Company",
    duration: "2022",
    image: IMAGES.PLACEHOLDERS.PROJECT,
    github_url: "#",
    live_url: "#"
  }
]; 