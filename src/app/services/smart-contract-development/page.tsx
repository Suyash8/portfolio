"use client";

import React from "react";
import PageLayout from "@/layout/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Code, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const SmartContractDevelopment = () => {
  const benefits = [
    "Secure, audited smart contracts for your project",
    "Gas-optimized implementations for cost efficiency",
    "Upgradable contract architecture when needed",
    "Comprehensive testing and verification",
    "Clear documentation and deployment guidance",
    "Ongoing maintenance and support",
  ];

  const contractTypes = [
    "ERC-20 tokens and tokenomics",
    "ERC-721 and ERC-1155 NFT collections",
    "Governance and voting systems",
    "DeFi protocols (DEXs, lending, staking)",
    "DAO structures and treasury management",
    "Custom business logic implementations",
  ];

  return (
    <PageLayout
      title="Smart Contract Development"
      subtitle="Development and auditing of secure, efficient smart contracts for various blockchain platforms"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-green-500/20 backdrop-blur-md border border-green-500/10">
                  <Shield size={28} className="text-white" />
                </div>
                <h2 className="text-2xl font-semibold">
                  Smart Contract Development
                </h2>
              </div>

              <p className="text-gray-300 mb-6">
                I develop secure, efficient, and well-tested smart contracts for
                Ethereum and EVM-compatible chains. With a focus on security and
                gas optimization, I create reliable on-chain solutions for your
                project needs.
              </p>

              <h3 className="text-xl font-medium mb-4">My Approach</h3>
              <p className="text-gray-300 mb-8">
                Security is the primary focus when developing smart contracts. I
                follow industry best practices, conduct thorough testing, and
                implement proven design patterns to ensure your contracts
                function correctly and securely. Gas optimization is also a key
                consideration to minimize transaction costs.
              </p>

              <h3 className="text-xl font-medium mb-4">Contract Types</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {contractTypes.map((type, index) => (
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
                    <h4 className="font-medium">Requirements Analysis</h4>
                    <p className="text-gray-300">
                      Understanding your project needs and defining the contract
                      specifications.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Architecture Design</h4>
                    <p className="text-gray-300">
                      Creating a secure and efficient contract architecture with
                      appropriate patterns.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Implementation</h4>
                    <p className="text-gray-300">
                      Writing clean, well-documented, and gas-optimized contract
                      code.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Testing & Verification</h4>
                    <p className="text-gray-300">
                      Comprehensive testing with unit tests, integration tests,
                      and formal verification when applicable.
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
                      Secure deployment to testnets and mainnets with ongoing
                      monitoring and support.
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

          <Card className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-white/10 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-4">
                Need smart contracts?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your project requirements and how we can implement
                them securely on-chain.
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

export default SmartContractDevelopment;
