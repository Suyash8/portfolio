import { Code, Server, Database, Wallet } from "lucide-react";

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  description: string;
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Code size={28} className="text-sky-400" />,
    description:
      "Creating responsive, accessible, and engaging user interfaces",
    color: "from-sky-500 to-blue-600",
    skills: [
      { name: "Next.js", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "HTML/CSS", level: "Expert" },
      { name: "Redux", level: "Beginner" },
      { name: "Vue.js", level: "Beginner" },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server size={28} className="text-purple-400" />,
    description: "Building robust server-side architectures and APIs",
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express", level: "Intermediate" },
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "GraphQL", level: "Beginner" },
      { name: "RESTful APIs", level: "Expert" },
      { name: "Python", level: "Expert" },
      { name: "Java", level: "Advanced" },
    ],
  },
  {
    title: "Web3 Development",
    icon: <Wallet size={28} className="text-amber-400" />,
    description:
      "Implementing decentralized applications and blockchain integrations",
    color: "from-amber-500 to-orange-600",
    skills: [
      { name: "Solidity", level: "Expert" },
      { name: "Web3.js", level: "Intermediate" },
      { name: "Ethers.js", level: "Intermediate" },
      { name: "Smart Contracts", level: "Expert" },
      { name: "DeFi Protocols", level: "Intermediate" },
      { name: "NFT Integration", level: "Advanced" },
      { name: "Hardhat", level: "Beginner" },
      { name: "Truffle", level: "Intermediate" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Database size={28} className="text-green-400" />,
    description: "Managing data and deployment infrastructures",
    color: "from-green-500 to-teal-600",
    skills: [
      { name: "Git", level: "Expert" },
      { name: "Firebase", level: "Expert" },
      { name: "Docker", level: "Advanced" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "AWS", level: "Intermediate" },
      { name: "Vercel", level: "Intermediate" },
      { name: "Jest", level: "Beginner" },
      { name: "Cypress", level: "Beginner" },
    ],
  },
];
