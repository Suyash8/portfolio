"use client";

import React from "react";
import PageLayout from "@/layout/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Code, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const ApiDevelopment = () => {
  const benefits = [
    "Consistent and well-documented API endpoints",
    "Secure authentication and authorization",
    "Scalable architecture for growing applications",
    "Optimized performance for fast response times",
    "Comprehensive testing and error handling",
    "Integration with third-party services and APIs",
  ];

  const apiTypes = [
    "RESTful APIs with clear resource-oriented design",
    "GraphQL APIs for flexible data querying",
    "WebSocket APIs for real-time applications",
    "Microservices architecture",
    "Serverless API implementations",
    "OAuth2 and JWT authentication",
  ];

  return (
    <PageLayout
      title="API Development & Integration"
      subtitle="Creation of robust RESTful APIs and integration with third-party services and platforms"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-red-500/20 backdrop-blur-md border border-red-500/10">
                  <Server size={28} className="text-white" />
                </div>
                <h2 className="text-2xl font-semibold">
                  API Development & Integration
                </h2>
              </div>

              <p className="text-gray-300 mb-6">
                I specialize in building robust, scalable APIs that connect your
                systems and enable seamless data flow between applications.
                Whether you need a new API for your application or integration
                with third-party services, I can deliver reliable solutions.
              </p>

              <h3 className="text-xl font-medium mb-4">My Approach</h3>
              <p className="text-gray-300 mb-8">
                My approach to API development focuses on creating
                well-structured, consistent, and thoroughly documented
                interfaces. I implement best practices for security, error
                handling, and performance optimization, ensuring your API is
                both robust and developer-friendly.
              </p>

              <h3 className="text-xl font-medium mb-4">
                API Types & Technologies
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {apiTypes.map((type, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Code className="mt-1 text-electric-blue" size={18} />
                    <span className="text-gray-300">{type}</span>
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
                    <h4 className="font-medium">API Design</h4>
                    <p className="text-gray-300">
                      Creating a clear API specification with endpoints,
                      request/response formats, and error handling.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Implementation</h4>
                    <p className="text-gray-300">
                      Building the API with robust error handling, validation,
                      and security measures.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Testing</h4>
                    <p className="text-gray-300">
                      Comprehensive testing with unit, integration, and
                      end-to-end tests.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Documentation</h4>
                    <p className="text-gray-300">
                      Creating detailed documentation with Swagger/OpenAPI,
                      examples, and usage guidelines.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    5
                  </div>
                  <div>
                    <h4 className="font-medium">Deployment & Monitoring</h4>
                    <p className="text-gray-300">
                      Setting up deployment with proper monitoring, logging, and
                      alerting.
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

          <Card className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border-white/10 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-4">
                Need API development?
              </h3>
              <p className="text-gray-300 mb-6">
                Let&apos;s discuss your integration needs and how I can create
                reliable API solutions for your business.
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

export default ApiDevelopment;
