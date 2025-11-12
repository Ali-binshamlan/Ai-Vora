"use client";

import { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Variants, easeInOut } from "framer-motion";

import {
  Brain,
  BarChart3,
  Zap,
  TrendingUp,
  Sparkles,
  ArrowRight,
 
  Rocket,
} from "lucide-react";
import { DarkModeContext } from "../context/DarkModeeContext";

export default function Services() {
  const { dark } = useContext(DarkModeContext);
  const [isDark, setIsDark] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.body.classList.contains("darkMode"));
    }
  }, [dark]);

  // Auto rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description:
        "Transform your workflow with intelligent automation and predictive analytics powered by cutting-edge artificial intelligence.",
      features: [
        "Machine Learning",
        "Neural Networks",
        "Predictive Analysis",
        "Natural Language Processing",
      ],
      color: "from-[#00C2A8] to-[#00E0B8]",
      accent: "#00C2A8",
      gradient: "linear-gradient(135deg, #00C2A8 0%, #00E0B8 100%)",
      particles: 5,
    },
    {
      icon: BarChart3,
      title: "Data Insights",
      description:
        "Turn complex data into clear, actionable insights for smarter decision-making with advanced analytics.",
      features: [
        "Data Visualization",
        "Real-time Analytics",
        "Custom Dashboards",
        "Business Intelligence",
      ],
      color: "from-[#667eea] to-[#764ba2]",
      accent: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      particles: 6,
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description:
        "Reduce manual tasks and increase efficiency with cutting-edge AI-powered automation tools.",
      features: [
        "Workflow Automation",
        "Process Optimization",
        "Smart Scheduling",
        "AI Assistants",
      ],
      color: "from-[#f093fb] to-[#f5576c]",
      accent: "#f093fb",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      particles: 4,
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description:
        "Gain a deep understanding of your business trends and opportunities with intelligent analytics.",
      features: [
        "Business Intelligence",
        "Performance Metrics",
        "Growth Analysis",
        "Market Insights",
      ],
      color: "from-[#4facfe] to-[#00f2fe]",
      accent: "#4facfe",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      particles: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut", // بدل المصفوفة
      },
    },
  };

 const floatingVariants: Variants = {
   float: {
     y: [0, -20, 0],
     transition: {
       duration: 3,
       repeat: Infinity,
       ease: easeInOut, // ✅ استخدم دالة جاهزة من Framer Motion
     },
   },
 };

  return (
    <section
      className={`relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-20 overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-purple-50/50 to-cyan-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <motion.div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark ? "bg-[#00C2A8]/10" : "bg-[#00C2A8]/20"
          }`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark ? "bg-[#667eea]/10" : "bg-[#667eea]/15"
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating shapes */}
        <motion.div
          className={`absolute top-1/3 right-1/4 w-32 h-32 rounded-full ${
            isDark ? "bg-[#f093fb]/10" : "bg-[#f093fb]/20"
          } blur-2xl`}
          variants={floatingVariants}
          animate="float"
        />
        <motion.div
          className={`absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full ${
            isDark ? "bg-[#4facfe]/10" : "bg-[#4facfe]/20"
          } blur-2xl`}
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 2 }}
        />

        {/* Grid pattern */}
        <div
          className={`absolute inset-0 bg-[length:50px_50px] ${
            isDark
              ? "bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)]"
              : "bg-[radial-gradient(circle,rgba(0,0,0,0.05)_1px,transparent_1px)]"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="relative inline-block mb-8"
          >
            {/* Animated sparkles */}
            <motion.div
              className="absolute -top-4 -left-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles
                className={`w-8 h-8 ${
                  isDark ? "text-[#00C2A8]" : "text-[#00C2A8]"
                }`}
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 right-[-40px]"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Rocket
                className={`w-8 h-8 ${
                  isDark ? "text-[#667eea]" : "text-[#667eea]"
                }`}
              />
            </motion.div>

            {/* Main title with enhanced gradient */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-4xl md:text-6xl font-black  relative">
                Our Services
              </h2>
              {/* Animated underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-[#00C2A8] to-[#2f93ac] rounded-full mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto font-medium ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            At{" "}
            <span className="font-bold  bg-gradient-to-r from-[#00C2A8] to-[#2f93ac] bg-clip-text text-transparent">
              Aivora
            </span>
            , we provide AI-powered solutions designed to streamline operations,
            boost efficiency, and empower your business with actionable insights
            that drive real growth.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group relative cursor-pointer overflow-hidden rounded-3xl p-8 shadow-2xl backdrop-blur-xl border transition-all duration-700 transform ${
                isDark
                  ? "bg-gray-900/40 border-white/10 hover:border-white/30"
                  : "bg-white/60 border-gray-200/50 hover:border-gray-300/80"
              } ${
                hoveredCard === index ? "scale-105 shadow-2xl" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{
                y: -15,
                transition: { type: "spring", stiffness: 300, damping: 25 },
              }}
              style={{
                background: isDark
                  ? `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`
                  : `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)`,
              }}
            >
              {/* Animated Gradient Overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: service.gradient,
                }}
                initial={false}
                animate={{ opacity: hoveredCard === index ? 0.1 : 0 }}
              />

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(service.particles)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      background: service.accent,
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 12}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: hoveredCard === index ? [0, 1, 0] : 0,
                      opacity: hoveredCard === index ? [0, 0.8, 0] : 0,
                      y: hoveredCard === index ? [0, -40, -80] : 0,
                      x:
                        hoveredCard === index
                          ? [
                              0,
                              Math.random() * 20 - 10,
                              Math.random() * 40 - 20,
                            ]
                          : 0,
                    }}
                    transition={{
                      duration: 3,
                      repeat: hoveredCard === index ? Infinity : 0,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <motion.div
                  className="relative mb-8 "
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  <motion.div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-2xl ${
                      isDark ? "bg-white/5" : "bg-white/80"
                    } backdrop-blur-sm border ${
                      isDark ? "border-white/10" : "border-gray-200/50"
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <service.icon
                      className="w-10 h-10"
                      style={{ color: service.accent }}
                    />
                  </motion.div>

                  {/* Pulsing ring */}
                  <motion.div
                    className="absolute w-3/5 inset-[-50]  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 opacity-0"
                    style={{ borderColor: service.accent }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className="space-y-6 text-center">
                  {/* Title */}
                  <motion.h3
                    className={`text-2xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className={`leading-relaxed font-medium ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0.8,
                    }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Features List */}
                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            className={`flex items-center text-sm font-medium px-3 py-2 rounded-lg backdrop-blur-sm border ${
                              isDark
                                ? "bg-white/5 border-white/10 text-gray-200"
                                : "bg-white/50 border-gray-200/50 text-gray-700"
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            whileHover={{
                              x: 5,
                              background: isDark
                                ? "rgba(255,255,255,0.1)"
                                : "rgba(255,255,255,0.8)",
                            }}
                          >
                            <motion.div
                              className="w-2 h-2 rounded-full mr-3"
                              style={{ background: service.accent }}
                              animate={{
                                scale: [1, 1.5, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: featureIndex * 0.2,
                              }}
                            />
                            {feature}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA Button */}
                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 1 }}
                    animate={{
                      color:
                        hoveredCard === index
                          ? service.accent
                          : isDark
                          ? "#9CA3AF"
                          : "#6B7280",
                    }}
                  >
                    <motion.button
                      className={`flex items-center justify-center gap-3 w-full py-3 px-6 rounded-xl font-semibold backdrop-blur-sm border transition-all duration-300 ${
                        isDark
                          ? "bg-white/5 border-white/10 hover:bg-white/10"
                          : "bg-white/50 border-gray-200/50 hover:bg-white/80"
                      }`}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0 10px 30px ${service.accent}30`,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Learn More</span>
                      <motion.span
                        animate={{
                          x: hoveredCard === index ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight size={16} />
                      </motion.span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>

              {/* Corner accents */}
              <div
                className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ borderColor: service.accent }}
              />
              <div
                className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ borderColor: service.accent }}
              />
              <div
                className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ borderColor: service.accent }}
              />
              <div
                className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ borderColor: service.accent }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className={`px-12 py-4 rounded-2xl font-bold text-lg backdrop-blur-lg border transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-r from-[#00C2A8] to-[#667eea] text-white border-transparent hover:shadow-2xl hover:shadow-[#00C2A8]/30"
                : "bg-gradient-to-r from-[#00C2A8] to-[#667eea] text-white border-transparent hover:shadow-2xl hover:shadow-[#00C2A8]/50"
            }`}
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              Start Your AI Journey
              <Rocket className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
