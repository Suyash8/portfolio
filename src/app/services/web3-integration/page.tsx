"use client";

import React from "react";
import PageLayout from "@/layout/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Code, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import Link from "next/link";

const Web3Integration = () => {
  const benefits = [
    "Seamless integration with existing web applications",
    "Secure wallet connectivity and transaction handling",
    "Multi-chain support (Ethereum, Polygon, Solana, etc.)",
    "NFT minting and marketplace functionality",
    "Token gating for exclusive content access",
    "Decentralized identity solutions",
  ];

  const techStack = [
    "ethers.js / web3.js for Ethereum interactions",
    "Solidity for smart contract development",
    "IPFS for decentralized storage",
    "Hardhat/Truffle for testing frameworks",
    "MetaMask and WalletConnect integration",
    "TheGraph for blockchain data indexing",
  ];

  return (
    <PageLayout
      title="Web3 Integration"
      subtitle="Seamless integration of blockchain functionality into web applications"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-purple-500/20 backdrop-blur-md border border-purple-500/10">
                  <Wallet size={28} className="text-white" />
                </div>
                <h2 className="text-2xl font-semibold">Web3 Integration</h2>
              </div>

              <p className="text-gray-300 mb-6">
                I help businesses bridge the gap between traditional web
                applications and blockchain technology, creating decentralized
                applications (dApps) that leverage the power of Web3.
              </p>

              <h3 className="text-xl font-medium mb-4">My Approach</h3>
              <p className="text-gray-300 mb-8">
                My approach to Web3 integration focuses on creating intuitive
                user experiences that abstract away the complexity of blockchain
                interactions while maintaining security and decentralization
                principles. I develop solutions that are accessible to both
                Web3-native users and newcomers to the space.
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

              <h3 className="text-xl font-medium mb-4">Integration Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-lg border border-white/10 bg-white/5">
                  <h4 className="font-medium mb-2">Wallet Integration</h4>
                  <p className="text-sm text-gray-300">
                    Seamless connection to popular wallets like MetaMask,
                    WalletConnect, and Coinbase Wallet with proper error
                    handling and status management.
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-white/5">
                  <h4 className="font-medium mb-2">NFT Functionality</h4>
                  <p className="text-sm text-gray-300">
                    Implementation of NFT minting, viewing, and trading
                    functionality with metadata management and rendering.
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-white/5">
                  <h4 className="font-medium mb-2">Token Management</h4>
                  <p className="text-sm text-gray-300">
                    Integration of token transfers, approvals, and balance
                    management for ERC-20 and other token standards.
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-white/5">
                  <h4 className="font-medium mb-2">DeFi Integration</h4>
                  <p className="text-sm text-gray-300">
                    Connection to decentralized finance protocols for swapping,
                    lending, borrowing, and other financial services.
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

          <Card className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-white/10 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-4">Ready to go Web3?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how blockchain technology can add value to your
                application and create new possibilities for your users.
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

export default Web3Integration;
