"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/config/services";

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-deep-purple/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-5 w-80 h-80 rounded-full bg-electric-blue/10 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">My Services</span>
          </h2>
          <p className="text-xl text-gray-300">
            Expert development services focused on modern web technologies and
            blockchain integration for innovative digital solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <Link href={service.link} className="block h-full">
                <div
                  className={cn(
                    "glass-card flex flex-col items-start h-full",
                    "transition-all duration-500 group-hover:translate-y-[-8px]",
                    "border border-white/10 backdrop-blur-xl",
                    "hover:shadow-xl hover:shadow-electric-blue/5",
                    "relative overflow-hidden"
                  )}
                >
                  {/* Background gradient */}
                  <div
                    className={cn(
                      "absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500",
                      "bg-gradient-to-br",
                      service.color
                    )}
                  ></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-white/5 backdrop-blur-md mb-5 border border-white/10">
                      <service.icon size={28} className="text-white" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 mt-auto">
                      {service.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/5 w-full">
                      <span className="inline-flex items-center text-sm font-medium text-electric-blue group-hover:text-royal-purple transition-colors duration-300">
                        Learn more
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
