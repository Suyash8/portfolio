"use client";

import React from "react";
import PageLayout from "@/layout/page-layout";
import { motion } from "framer-motion";
import ContactInfo from "@/app/contact/_components/contact-info";
import ContactForm from "@/app/contact/_components/contact-form";

const Contact = () => {
  // Ensure the page starts at the top when loaded
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <PageLayout
      title="Get In Touch"
      subtitle="Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!"
    >
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ContactInfo />
        <ContactForm />
      </motion.div>
    </PageLayout>
  );
};

export default Contact;
