"use client";

import React from "react";
import PageLayout from "@/layout/page-layout";
import ServicesSection from "@/components/services-section";

const Services = () => {
  // Ensure the page starts at the top when loaded
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <ServicesSection />
    </PageLayout>
  );
};

export default Services;
