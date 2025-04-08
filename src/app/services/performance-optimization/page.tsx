"use client";

import React from "react";
import PageLayout from "@/layout/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Code, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const PerformanceOptimization = () => {
  const benefits = [
    "Improved page load speeds and user experience",
    "Better search engine rankings due to performance",
    "Reduced bounce rates and increased conversions",
    "Lower hosting and bandwidth costs",
    "Enhanced application responsiveness",
    "Support for more concurrent users",
  ];

  const optimizationAreas = [
    "Frontend code and bundle optimization",
    "Database query performance improvements",
    "Caching strategies (browser, CDN, server)",
    "Image and asset optimization",
    "Server-side rendering & code splitting",
    "Network request optimization",
  ];

  return (
    <PageLayout
      title="Performance Optimization"
      subtitle="Optimization of web applications for maximum speed, efficiency, and user experience"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-orange-500/20 backdrop-blur-md border border-orange-500/10">
                  <Zap size={28} className="text-white" />
                </div>
                <h2 className="text-2xl font-semibold">
                  Performance Optimization
                </h2>
              </div>

              <p className="text-gray-300 mb-6">
                I help businesses improve the speed, efficiency, and overall
                performance of their web applications. By identifying
                bottlenecks and implementing targeted optimizations, I enhance
                user experience and reduce operational costs.
              </p>

              <h3 className="text-xl font-medium mb-4">My Approach</h3>
              <p className="text-gray-300 mb-8">
                My performance optimization process begins with thorough
                analysis using industry-standard tools to identify specific
                issues. I then implement targeted improvements across the
                application stack, from frontend rendering to backend processing
                and database operations. The result is a measurably faster, more
                efficient application.
              </p>

              <h3 className="text-xl font-medium mb-4">Optimization Areas</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {optimizationAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Code className="mt-1 text-electric-blue" size={18} />
                    <span className="text-gray-300">{area}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-medium mb-4">Optimization Process</h3>
              <ol className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Performance Audit</h4>
                    <p className="text-gray-300">
                      Comprehensive analysis using Lighthouse, WebPageTest, and
                      other performance tools to establish baseline metrics.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Bottleneck Identification</h4>
                    <p className="text-gray-300">
                      Identifying specific performance issues across the
                      application stack.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">
                      Implementation of Improvements
                    </h4>
                    <p className="text-gray-300">
                      Applying targeted optimizations based on the audit
                      findings.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">
                      Verification and Benchmarking
                    </h4>
                    <p className="text-gray-300">
                      Measuring improvement against baseline metrics to ensure
                      optimization goals are met.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    5
                  </div>
                  <div>
                    <h4 className="font-medium">
                      Documentation and Knowledge Transfer
                    </h4>
                    <p className="text-gray-300">
                      Providing documentation on optimizations made and
                      recommendations for ongoing performance maintenance.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="rounded-lg bg-white/5 border border-white/10 p-6 mb-8">
                <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                  <TrendingUp className="text-green-400" size={20} />
                  <span>Typical Results</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-electric-blue mb-2">
                      40-60%
                    </span>
                    <span className="text-gray-300 text-center">
                      Reduction in page load time
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-electric-blue mb-2">
                      30-50%
                    </span>
                    <span className="text-gray-300 text-center">
                      Reduction in bundle size
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-electric-blue mb-2">
                      20-40%
                    </span>
                    <span className="text-gray-300 text-center">
                      Increase in user engagement
                    </span>
                  </div>
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

          <Card className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 border-white/10 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-4">
                Need performance improvements?
              </h3>
              <p className="text-gray-300 mb-6">
                Let&apos;s discuss how I can help optimize your web application
                for better performance and user experience.
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

export default PerformanceOptimization;
