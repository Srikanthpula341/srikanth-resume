const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

// Helper function to create icon URL
const getDevIcon = (name: string) => `${DEVICON_BASE}/${name}/${name}-original.svg`;
const getDevIconPlain = (name: string) => `${DEVICON_BASE}/${name}/${name}-plain.svg`;

// Group icons by type with shared base URL
const JAVA_ICON = getDevIcon('java');
const SPRING_ICON = getDevIcon('spring');
const REACT_ICON = getDevIcon('react');
const NODE_ICON = getDevIcon('nodejs');
const ANGULAR_ICON = getDevIcon('angularjs');
const NEXT_ICON = getDevIcon('nextjs');
const TS_ICON = getDevIcon('typescript');
const JS_ICON = getDevIcon('javascript');
const HTML_ICON = getDevIcon('html5');
const CSS_ICON = getDevIcon('css3');
const TAILWIND_ICON = getDevIconPlain('tailwindcss');
const BOOTSTRAP_ICON = getDevIcon('bootstrap');
const MONGO_ICON = getDevIcon('mongodb');
const POSTGRES_ICON = getDevIcon('postgresql');
const MYSQL_ICON = getDevIcon('mysql');
const DOCKER_ICON = getDevIcon('docker');
const GIT_ICON = getDevIcon('git');
const AZURE_ICON = getDevIcon('azure');
const LINUX_ICON = getDevIcon('linux');
const NGINX_ICON = getDevIcon('nginx');
const VSCODE_ICON = getDevIcon('vscode');
const INTELLIJ_ICON = getDevIcon('intellij');

export const SKILL_ICONS = {
  // Backend & Related
  Java: JAVA_ICON,
  Microservices: JAVA_ICON,
  'REST APIs': JAVA_ICON,
  Spring: SPRING_ICON,
  'Node.js': NODE_ICON,
  
  // Frontend
  React: REACT_ICON,
  Angular: ANGULAR_ICON,
  NextJS: NEXT_ICON,
  TypeScript: TS_ICON,
  JavaScript: JS_ICON,
  HTML: HTML_ICON,
  CSS: CSS_ICON,
  Tailwind: TAILWIND_ICON,
  Bootstrap: BOOTSTRAP_ICON,

  // Database
  MongoDB: MONGO_ICON,
  PostgreSQL: POSTGRES_ICON,
  MySQL: MYSQL_ICON,

  // DevOps & Tools
  Docker: DOCKER_ICON,
  Git: GIT_ICON,
  Azure: AZURE_ICON,
  Linux: LINUX_ICON,
  NGINX: NGINX_ICON,

  // IDEs
  Eclipse: JAVA_ICON,
  VSCode: VSCODE_ICON,
  IntelliJ: INTELLIJ_ICON,
} as const;

export type SkillIconKey = keyof typeof SKILL_ICONS; 