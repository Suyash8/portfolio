"use client";

import React from "react";
import { Github, Linkedin, Mail, Calendar } from "lucide-react";
import { personalInfo } from "@/config/personalInfo";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isServicePage = pathname.includes("/services/");

  // Define different footer links based on the current page
  let footerLinks = [];

  if (isHomePage) {
    footerLinks = [
      { name: "Home", href: "/#home" },
      { name: "Skills", href: "/#skills" },
      { name: "Services", href: "/#services" },
      { name: "Contact", href: "/#contact" },
    ];
  } else if (isServicePage) {
    // For service pages
    footerLinks = [
      { name: "Back to Home", href: "/" },
      { name: "All Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ];
  } else {
    // Default links for other pages
    footerLinks = [
      { name: "Home", href: "/" },
      //   { name: "Skills", href: "/#skills" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ];
  }

  return (
    <footer className="py-16 px-4 border-t border-white/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-deep-purple/10 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="text-2xl font-bold text-gradient mb-2">
                {personalInfo.name}
              </span>
              <span className="text-gray-400">{personalInfo.title}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300 max-w-xs"
            >
              Building innovative digital experiences with modern technologies
              and creative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={personalInfo.social.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Calendar"
              >
                <Calendar size={20} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-5"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-5"
          >
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <p className="text-gray-400">
                <span className="text-white">Email:</span>{" "}
                <a
                  href={"mailto:" + personalInfo.email}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {personalInfo.email}
                </a>
              </p>
              {personalInfo.contact.phone && (
                <p className="text-gray-400">
                  <span className="text-white">Phone:</span>{" "}
                  <a
                    href={"tel:" + personalInfo.contact.phone}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {personalInfo.contact.phone}
                  </a>
                </p>
              )}
              <p className="text-gray-400">
                <span className="text-white">Location:</span>{" "}
                <a
                  href="https://maps.app.goo.gl/eBL7CaqjxfKrNtwG7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {personalInfo.contact.location}
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
