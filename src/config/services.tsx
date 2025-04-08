import {
  Code,
  Globe,
  Server,
  Layers,
  Wallet,
  Shield,
  LucideIcon,
  Zap,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
  color: string;
  link: string;
}

export const services: Service[] = [
  {
    title: "Custom Web Application Development",
    description:
      "End-to-end web application development using Next.js, React, and modern frontend technologies.",
    icon: Globe,
    delay: 0,
    color: "from-blue-500/20 to-blue-600/20",
    link: "/services/web-application-development",
  },
  {
    title: "Web3 Integration",
    description:
      "Seamless integration of blockchain functionality into web applications with Solidity and Web3.js.",
    icon: Wallet,
    delay: 100,
    color: "from-purple-500/20 to-purple-600/20",
    link: "/services/web3-integration",
  },
  {
    title: "Smart Contract Development",
    description:
      "Development and auditing of secure, efficient smart contracts for various blockchain platforms.",
    icon: Shield,
    delay: 200,
    color: "from-green-500/20 to-green-600/20",
    link: "/services/smart-contract-development",
  },
  {
    title: "Full Stack Development",
    description:
      "Comprehensive development covering both frontend and backend aspects of web applications.",
    icon: Layers,
    delay: 300,
    color: "from-yellow-500/20 to-yellow-600/20",
    link: "/services/full-stack-development",
  },
  {
    title: "API Development & Integration",
    description:
      "Creation of robust RESTful APIs and integration with third-party services and platforms.",
    icon: Server,
    delay: 400,
    color: "from-red-500/20 to-red-600/20",
    link: "/services/api-development",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimization of web applications for maximum speed, efficiency, and user experience.",
    icon: Zap,
    delay: 500,
    color: "from-orange-500/20 to-orange-600/20",
    link: "/services/performance-optimization",
  },
];
