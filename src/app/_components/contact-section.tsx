"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-royal-purple/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-electric-blue/10 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Have a project in mind or want to discuss potential opportunities?
            I&apos;d love to hear from you!
          </p>
          <Link href="/contact">
            <Button className="bg-electric-blue hover:bg-royal-purple text-white font-medium px-8 py-6 rounded-md transition-all duration-300 text-lg">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
