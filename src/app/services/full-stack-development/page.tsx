"use client";

import React from "react";
import PageLayout from "@/layout/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Code, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const FullStackDevelopment = () => {
  const benefits = [
    "End-to-end development from a single developer",
    "Consistent implementation across frontend and backend",
    "Seamless integration between all system components",
    "Full-stack performance optimization",
    "Comprehensive testing across the entire application",
    "One point of contact for all development needs",
  ];

  const techStack = [
    "React, Next.js for frontend development",
    "Node.js, Express, NestJS for backend",
    "PostgreSQL, MongoDB, Redis for databases",
    "GraphQL or REST API architecture",
    "TypeScript for type safety",
    "AWS, GCP, or Azure for cloud deployment",
  ];

  return (
    <PageLayout
      title="Full Stack Development"
      subtitle="Comprehensive development covering both frontend and backend aspects of web applications"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-yellow-500/20 backdrop-blur-md border border-yellow-500/10">
                  <Layers size={28} className="text-white" />
                </div>
                <h2 className="text-2xl font-semibold">
                  Full Stack Development
                </h2>
              </div>

              <p className="text-gray-300 mb-6">
                As a full-stack developer, I handle all aspects of web
                application development, from interactive frontends to robust
                backends and database design. This comprehensive approach
                ensures a cohesive, well-integrated solution for your business
                needs.
              </p>

              <h3 className="text-xl font-medium mb-4">My Approach</h3>
              <p className="text-gray-300 mb-8">
                I take a holistic approach to development, considering the
                entire system architecture from the outset. This allows for
                efficient data flow, optimal performance, and a seamless user
                experience. With expertise in both frontend and backend
                technologies, I create solutions where all components work
                together harmoniously.
              </p>

              <h3 className="text-xl font-medium mb-4">Technology Stack</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {techStack.map((tech, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Code className="mt-1 text-electric-blue" size={18} />
                    <span className="text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-medium mb-4">Full Stack Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-lg border border-white/10 bg-white/5">
                  <h4 className="font-medium mb-2">Frontend Development</h4>
                  <p className="text-sm text-gray-300">
                    Creating responsive, interactive user interfaces with modern
                    frameworks and design systems.
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-white/5">
                  <h4 className="font-medium mb-2">Backend Development</h4>
                  <p className="text-sm text-gray-300">
                    Building robust server-side applications with secure
                    authentication, authorization, and business logic.
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-white/5">
                  <h4 className="font-medium mb-2">Database Design</h4>
                  <p className="text-sm text-gray-300">
                    Creating efficient database schemas and query patterns for
                    optimal data storage and retrieval.
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-white/5">
                  <h4 className="font-medium mb-2">DevOps & Deployment</h4>
                  <p className="text-sm text-gray-300">
                    Setting up CI/CD pipelines, infrastructure as code, and
                    cloud deployment for reliable operations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Zap className="text-electric-blue" size={20} />
                <span>Key Benefits</span>
              </h3>

              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="mt-1 text-green-400" size={18} />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-white/10 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-4">
                Need a complete solution?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your project requirements and how I can deliver a
                full-stack solution that meets all your needs.
              </p>

              <Link href="/contact">
                <Button className="w-full py-6 bg-white/10 hover:bg-white/20 transition-all">
                  Get in Touch
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default FullStackDevelopment;
