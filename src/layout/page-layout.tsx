import React, { ReactNode } from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          {title && subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">{title}</span>
              </h1>
              {subtitle && (
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
