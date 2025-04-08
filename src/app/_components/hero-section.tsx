"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Github, Linkedin, Mail, Calendar } from "lucide-react";
import { personalInfo } from "@/config/personalInfo";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      containerRef.current.style.transform = `perspective(1000px) rotateY(${
        x * 4
      }deg) rotateX(${y * -4}deg)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-electric-blue/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-neon-pink/10 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={containerRef}
          className="max-w-5xl mx-auto transition-transform duration-300 ease-out"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="glass-card backdrop-blur-xl shadow-xl border-white/20 relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-electric-blue/20 to-neon-pink/20 rounded-full blur-xl"></div>

            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
              <div className="lg:w-3/5">
                <div className="space-y-8">
                  <motion.div variants={itemVariants}>
                    {personalInfo.availableForHire && (
                      <div className="inline-block animate-float">
                        <span className="inline-block py-1.5 px-4 rounded-full text-sm font-semibold bg-gradient-to-r from-electric-blue/20 to-neon-pink/20 text-white border border-white/10 shadow-lg">
                          Available for Projects
                        </span>
                      </div>
                    )}
                    <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                      <span className="text-gradient">{personalInfo.name}</span>
                    </h1>
                    <h2 className="mt-4 text-2xl md:text-3xl font-medium text-white/90">
                      {personalInfo.title}
                    </h2>
                  </motion.div>

                  <motion.p
                    variants={itemVariants}
                    className="text-xl text-gray-300 max-w-2xl leading-relaxed"
                  >
                    Building innovative digital experiences with cutting-edge
                    technologies. Specializing in creating intuitive, responsive
                    applications with Next.js and seamlessly integrating Web3
                    solutions for the future.
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-5 pt-4"
                  >
                    <a
                      href="#contact"
                      className={cn(
                        "inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-base",
                        "bg-gradient-to-r from-electric-blue to-neon-pink text-white",
                        "transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/20",
                        "hover:translate-y-[-2px] shadow-lg"
                      )}
                    >
                      Get in Touch
                      <ArrowRight size={18} />
                    </a>

                    <div className="flex items-center gap-4">
                      <a
                        href={personalInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-110 border border-white/10"
                        aria-label="GitHub"
                      >
                        <Github size={22} className="text-white" />
                      </a>
                      <a
                        href={personalInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-110 border border-white/10"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={22} className="text-white" />
                      </a>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-110 border border-white/10"
                        aria-label="Email"
                      >
                        <Mail size={22} className="text-white" />
                      </a>
                      <a
                        href={personalInfo.social.calendly}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-110 border border-white/10"
                        aria-label="Calendar"
                      >
                        <Calendar size={22} className="text-white" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                variants={itemVariants}
                className="lg:w-2/5 flex justify-center"
              >
                <div className="relative">
                  {/* Decorative rings */}
                  <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-electric-blue/30 to-neon-pink/30 blur-xl animate-pulse-glow"></div>

                  <div className="w-72 h-72 rounded-full overflow-hidden gradient-border z-10 relative animate-float shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-deep-purple via-electric-blue/30 to-neon-pink/50 flex items-center justify-center text-6xl font-bold text-white backdrop-blur-sm">
                      {personalInfo.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>
                  </div>

                  {/* Animated particles */}
                  <div className="absolute bottom-5 right-0 w-20 h-20 rounded-full bg-electric-blue/30 blur-xl animate-float [animation-delay:2s]"></div>
                  <div className="absolute top-10 left-0 w-16 h-16 rounded-full bg-neon-pink/30 blur-xl animate-float [animation-delay:1s]"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
