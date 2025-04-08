"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Code,
  User,
  Briefcase,
  Mail,
  Home,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Use usePathname instead of useRouter for App Router
  const pathname = usePathname();

  // Only access pathname properties after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Safely check paths after mounting
  const isHomePage = mounted && pathname === "/";
  const isServicePage = mounted && pathname?.includes("/services/");

  // Define different navigation options based on current page
  let navigation = [];

  if (isHomePage) {
    navigation = [
      { name: "Home", href: "/#home", icon: Home },
      { name: "Skills", href: "/#skills", icon: Code },
      { name: "Services", href: "/#services", icon: Briefcase },
      { name: "Contact", href: "/#contact", icon: Mail }, // Changed to #contact for home page
    ];
  } else if (isServicePage) {
    // Service page navigation
    navigation = [
      { name: "Back to Home", href: "/", icon: ArrowLeft },
      { name: "All Services", href: "/#services", icon: Briefcase },
      { name: "Contact", href: "/contact", icon: Mail },
    ];
  } else {
    // Default navigation for other pages
    navigation = [
      { name: "Home", href: "/", icon: Home },
      { name: "Skills", href: "/#skills", icon: Code },
      { name: "Services", href: "/#services", icon: Briefcase },
      { name: "Contact", href: "/contact", icon: Mail },
    ];
  }

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.scrollY + 100;
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute("id") || "";
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
          }
        });
      }

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Set active section based on pathname for non-home pages
  useEffect(() => {
    if (!isHomePage && mounted) {
      if (pathname?.includes("services")) {
        setActiveSection("services");
      } else if (pathname?.includes("contact")) {
        setActiveSection("contact");
      }
    }
  }, [pathname, isHomePage, mounted]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "py-3 glass" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 z-20">
          <Link href="/" className="text-2xl font-bold text-gradient">
            Suyash Sharma
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => {
            const isActive = isHomePage
              ? activeSection === item.href.split("#")[1]
              : item.href === "/"
              ? pathname === "/"
              : item.href.includes(activeSection);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2",
                  isActive
                    ? "text-white bg-white/10"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-20 w-10 h-10 flex items-center justify-center"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          aria-label="Toggle menu"
        >
          {showMobileMenu ? (
            <X className="text-white" size={24} />
          ) : (
            <Menu className="text-white" size={24} />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-10 glass md:hidden transition-all duration-300 ${
            showMobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navigation.map((item) => {
              const isActive = isHomePage
                ? activeSection === item.href.split("#")[1]
                : item.href === "/"
                ? pathname === "/"
                : item.href.includes(activeSection);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setShowMobileMenu(false)}
                  className={cn(
                    "px-5 py-3 rounded-lg text-xl flex items-center gap-3 transition-all duration-300",
                    isActive
                      ? "text-white bg-white/10"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  )}
                >
                  <item.icon size={22} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
