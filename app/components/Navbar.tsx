"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
  import { cubicBezier } from "framer-motion";

import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Cog,
  Folder,
  Phone,
} from "lucide-react";
import SwitchMode from "./SwitchMode";

interface NavLink {
  name: string;
  href: string;
  icon: any;
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeLink, setActiveLink] = useState<string>("/");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Solutions", href: "#solutions", icon: Cog },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Contact", href: "#contact", icon: Phone },
  ];


  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3,
        ease: cubicBezier(0.42, 0, 0.58, 1),
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: cubicBezier(0.42, 0, 0.58, 1),
      },
    },
  };



  // تأثير للخلفية الخلفية
  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  // تأثير للعناصر الفردية في القائمة

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
        ease: cubicBezier(0.42, 0, 0.58, 1),
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: cubicBezier(0.42, 0, 0.58, 1),
      },
    },
  };


  // تأثير للعناصر مع تأخير متدرج
  const staggerContainer = {
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full flex justify-center items-center z-50 transition-all duration-500 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      {/* Mobile Header - ثابت في الأعلى */}
      <div className="md:hidden fixed top-0 mt-4 left-1/2 -translate-x-1/2 w-[90%] bg-black border-b border-[#00C2A8]/30 backdrop-blur-md z-50 py-1 px-7 rounded-2xl">
        <div className="flex items-center justify-between w-full">
          {/* Brand/Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/Images/Logo_aivora.png"
              alt="Logo"
              width={35}
              height={35}
              style={{ objectFit: "cover" }}
              className="w-auto h-full scale-90 sm:scale-100"
              priority
            />
          </motion.div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SwitchMode />
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className=" p-2  text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <div
          className={`relative flex items-center px-8 border bg-black rounded-2xl backdrop-blur-md transition-all duration-500 ${
            isScrolled
              ? " border-[#00C2A8]/30 py-3 max-w-[350px] scale-95 justify-center shadow-2xl shadow-[#00C2A8]/10"
              : " border-[#00C2A8]/40 py-4  scale-100 justify-between shadow-xl shadow-[#00C2A8]/5"
          }`}
        >
          {/* Desktop Navigation Links */}
          {!isScrolled && (
            <motion.ul
              className="hidden md:flex items-center space-x-3 text-white relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.li
                    key={link.name}
                    className="relative"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 overflow-hidden group flex items-center gap-2 rounded-lg transition-all duration-300 ${
                        activeLink === link.href
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => setActiveLink(link.href)}
                    >
                      {/* Animated Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] rounded-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale:
                            hoveredIndex === index || activeLink === link.href
                              ? 1
                              : 0,
                          opacity:
                            hoveredIndex === index || activeLink === link.href
                              ? 1
                              : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />

                      {/* Icon */}
                      <motion.div
                        animate={{
                          scale:
                            hoveredIndex === index || activeLink === link.href
                              ? 1.2
                              : 1,
                          rotate: hoveredIndex === index ? 5 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon size={16} className="relative z-10" />
                      </motion.div>

                      {/* Text */}
                      <span className="relative z-10 font-medium text-sm transition-all duration-300">
                        {link.name}
                      </span>

                      {/* Active Indicator */}
                      {activeLink === link.href && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#00E0B8] rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}

              {/* Action Buttons */}
              <motion.div
                className="flex items-center space-x-3 ml-4 pl-4 border-l border-[#00C2A8]/30"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  className="relative overflow-hidden rounded-lg bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] px-6 py-2 font-semibold text-white shadow-lg transition-all duration-300 group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0, 194, 168, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Register
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.button>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <SwitchMode />
                </motion.div>
              </motion.div>
            </motion.ul>
          )}

          {/* Scrolled State - Compact */}
          {isScrolled && (
            <motion.div
              className="flex items-center justify-between gap-8 px-2 "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="relative overflow-hidden rounded-lg bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] px-5 py-2 font-semibold text-white shadow-lg transition-all duration-300 text-sm group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(0, 194, 168, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Register</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <SwitchMode />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 md:hidden bg-black backdrop-blur-sm"
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="fixed top-0 left-0 w-full h-full z-40 md:hidden pt-16"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="w-full h-full border-b border-[#00C2A8]/30 backdrop-blur-xl shadow-2xl shadow-[#00C2A8]/20 overflow-y-scroll scrollbar-none">
                {/* Menu Header */}

                {/* Menu Items */}
                <motion.div
                  className="p-4 space-y-2"
                  variants={staggerContainer}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.div key={link.name} variants={itemVariants}>
                        <Link
                          href={link.href}
                          className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${
                            activeLink === link.href
                              ? "bg-gradient-to-r from-[#00C2A8]/20 to-[#00E0B8]/20 border border-[#00C2A8]/30"
                              : "bg-white/5 border border-transparent hover:bg-white/10 hover:border-[#00C2A8]/20"
                          }`}
                          onClick={() => {
                            setActiveLink(link.href);
                            setMenuOpen(false);
                          }}
                        >
                          <motion.div
                            className={`p-2 rounded-lg ${
                              activeLink === link.href
                                ? "bg-gradient-to-r from-[#00C2A8] to-[#00E0B8]"
                                : "bg-white/10 group-hover:bg-[#00C2A8]/20"
                            }`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon
                              size={18}
                              className={
                                activeLink === link.href
                                  ? "text-white"
                                  : "text-gray-300 group-hover:text-white"
                              }
                            />
                          </motion.div>

                          <span
                            className={`font-medium flex-1 text-sm ${
                              activeLink === link.href
                                ? "text-white"
                                : "text-gray-300 group-hover:text-white"
                            }`}
                          >
                            {link.name}
                          </span>

                          <motion.div
                            className="opacity-0 group-hover:opacity-100 text-[#00C2A8]"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            →
                          </motion.div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Mobile Menu Footer */}
                <motion.div
                  className="p-4 border-t border-[#00C2A8]/20"
                  variants={itemVariants}
                >
                  <motion.button
                    className="w-full bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] text-white py-3 rounded-xl font-semibold shadow-lg text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Register
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
