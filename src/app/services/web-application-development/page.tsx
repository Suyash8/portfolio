"use client";

import React from "react";
import PageLayout from "@/layout/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Code, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const WebAppDevelopment = () => {
  const benefits = [
    "Custom tailored solutions that perfectly match your business needs",
    "Modern, responsive UIs that work on all devices",
    "Scalable architecture designed for future growth",
    "Performance optimized applications for faster load times",
    "SEO-friendly implementation for better visibility",
    "Secure development practices to protect your data",
  ];

  const techStack = [
    "React / Next.js for frontend development",
    "Node.js backend with Express or NestJS",
    "PostgreSQL, MongoDB or other databases",
    "TailwindCSS for styling",
    "TypeScript for type safety",
    "AWS, Vercel, or Netlify for hosting",
  ];

  return (
    <PageLayout
      title="Custom Web Application Development"
      subtitle="End-to-end web application development using modern frontend technologies"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/20 backdrop-blur-md border border-blue-500/10">
                  <Globe size={28} className="text-white" />
                </div>
                <h2 className="text-2xl font-semibold">
                  Web Application Development
                </h2>
              </div>

              <p className="text-gray-300 mb-6">
                I specialize in building custom web applications that solve
                complex business problems. From ideation to deployment, I can
                help you bring your vision to life with modern technologies and
                best practices.
              </p>

              <h3 className="text-xl font-medium mb-4">My Approach</h3>
              <p className="text-gray-300 mb-8">
                I follow a user-centered design approach, starting with
                understanding your business needs and user requirements. I then
                create a detailed plan for development, implementing features
                iteratively with constant feedback. The result is a polished,
                high-performance web application tailored to your specific
                needs.
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

              <h3 className="text-xl font-medium mb-4">Development Process</h3>
              <ol className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Discovery & Planning</h4>
                    <p className="text-gray-300">
                      Understanding your goals, requirements, and constraints to
                      create a detailed plan.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Design & Prototyping</h4>
                    <p className="text-gray-300">
                      Creating wireframes and interactive prototypes to
                      visualize the solution.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Development</h4>
                    <p className="text-gray-300">
                      Building the application iteratively with regular
                      check-ins and feedback loops.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Testing & Quality Assurance</h4>
                    <p className="text-gray-300">
                      Ensuring the application is bug-free, secure, and performs
                      well across all devices.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    5
                  </div>
                  <div>
                    <h4 className="font-medium">Deployment & Maintenance</h4>
                    <p className="text-gray-300">
                      Launching the application and providing ongoing support as
                      needed.
                    </p>
                  </div>
                </li>
              </ol>
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

          <Card className="bg-gradient-to-br from-electric-blue/20 to-neon-pink/20 border-white/10 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-4">
                Ready to start your project?
              </h3>
              <p className="text-gray-300 mb-6">
                Let&apos;s discuss how I can help you create a custom web
                application that meets your specific needs.
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

export default WebAppDevelopment;
