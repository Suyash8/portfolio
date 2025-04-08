"use client";

import React from "react";
import PageLayout from "@/layout/page-layout";
import { motion } from "framer-motion";
import ServicesSection from "@/components/services-section";

const Services = () => {
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
    <PageLayout>
      <ServicesSection />
    </PageLayout>
  );
};

export default Services;
