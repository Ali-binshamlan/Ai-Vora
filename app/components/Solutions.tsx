"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../context/DarkModeeContext";
import { Variants } from "framer-motion";

const services = [
  {
    title: "Intelligent Automation",
    description:
      "Automate repetitive tasks with AI-powered workflows to save time and reduce errors.",
    animation: "/animations/Light_Solutions.lottie",
  },
  {
    title: "Data Analytics",
    description:
      "Unlock insights from your data with advanced analytics and predictive modeling.",
    animation: "/animations/Data_Analysis.lottie",
  },
  {
    title: "AI Integration",
    description:
      "Seamlessly integrate AI solutions into your existing systems and processes.",
    animation: "/animations/AI_Automation.lottie",
  },
  {
    title: "Business Intelligence",
    description:
      "Gain actionable insights to drive informed decisions and strategic growth.",
    animation: "/animations/Advanced_Analytics.lottie",
  },
];

const cardMargins = ["mt-0", "md:mt-10", "md:mt-5", "md:mt-12"];

export default function Solutions() {
  const { dark } = useContext(DarkModeContext);
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.body.classList.contains("darkMode"));
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, [dark]);

 const cardVariants: Variants = {
   offscreenLeft: { opacity: 0, x: -80 },
   offscreenRight: { opacity: 0, x: 80 },
   onscreen: {
     opacity: 1,
     x: 0,
     transition: { duration: 0.45, ease: "easeOut" as const },
   },
   hover: {
     scale: 1.03,
     transition: { duration: 0.25, ease: "easeOut" as const },
   },
 };


  return (
    <section
      className={`relative w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-20 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-purple-50/50 to-cyan-50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl ${
            isDark ? "bg-purple-500/10" : "bg-purple-300/20"
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl ${
            isDark ? "bg-blue-500/10" : "bg-blue-300/20"
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6  "
        >
          Our Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl md:max-w-3xl mx-auto leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Revolutionary AI solutions that transform businesses through
          intelligent automation and data-driven insights
        </motion.p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={index % 2 === 0 ? "offscreenLeft" : "offscreenRight"}
            whileInView="onscreen"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer ${
              cardMargins[index]
            } h-[300px] sm:h-[350px] md:h-[380px] lg:h-[410px] w-full max-w-full md:max-w-[500px] mx-auto shadow-lg md:shadow-xl ${
              isDark
                ? "bg-gray-800/60 backdrop-blur-md border border-gray-700/50 text-white"
                : "bg-white/80 backdrop-blur-md border border-gray-200/50 text-gray-900"
            } transition-all duration-500`}
          >
            {/* Gradient Background Effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  isDark
                    ? "from-purple-500/10 via-blue-500/10 to-cyan-500/10"
                    : "from-purple-100/30 via-blue-100/30 to-cyan-100/30"
                }`}
              ></div>
            </div>

            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </div>

            {/* Card Content */}
            <div className="relative h-full flex flex-col p-4 sm:p-6 md:p-8">
              {/* Animation Container */}
              <div className="flex-1 flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                  <DotLottieReact
                    src={service.animation}
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                <motion.h3
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00C2A8] to-[#667eea] bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.description}
                </motion.p>
              </div>

              {/* Border Effects */}
              <div
                className={`absolute inset-0 rounded-2xl md:rounded-3xl border ${
                  isDark
                    ? "border-white/20 group-hover:border-white/40"
                    : "border-gray-300/50 group-hover:border-gray-400/70"
                } transition-all duration-500`}
              ></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
                {[...Array(isMobile ? 3 : 5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                      isDark ? "bg-white/60" : "bg-gray-400/60"
                    }`}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, Math.random() * 10 - 5, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: "easeInOut",
                    }}
                    style={{
                      left: `${15 + i * (isMobile ? 25 : 15)}%`,
                      top: `${20 + i * 15}%`,
                    }}
                  />
                ))}
              </div>

              {/* Corner Accents */}
              <div
                className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDark ? "border-[#00C2A8]" : "border-[#00C2A8]"
                }`}
              ></div>
              <div
                className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDark ? "border-[#667eea]" : "border-[#667eea]"
                }`}
              ></div>
              <div
                className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 rounded-lg  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDark ? "border-[#f093fb]" : "border-[#f093fb]"
                }`}
              ></div>
              <div
                className={`absolute bottom-2 right-4 w-4 h-4 border-b-2 border-r-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDark ? "border-[#00E0B8]" : "border-[#00E0B8]"
                }`}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-12 md:mt-16"
      >
        <motion.button
          className={`px-8 py-3 md:px-12 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg backdrop-blur-lg border transition-all duration-300 ${
            isDark
              ? "bg-gradient-to-r from-[#00C2A8] to-[#667eea] text-white border-transparent hover:shadow-2xl hover:shadow-[#00C2A8]/30"
              : "bg-gradient-to-r from-[#00C2A8] to-[#667eea] text-white border-transparent hover:shadow-2xl hover:shadow-[#00C2A8]/50"
          }`}
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{ scale: 0.95 }}
        >
          Discover All Solutions
        </motion.button>
      </motion.div>
    </section>
  );
}
