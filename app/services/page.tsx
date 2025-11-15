"use client";
import React, { useEffect, useRef, useState } from "react";
import Threads from "../../public/animations/Threads";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import WorkProcess from "../components/WorkProcess";
import Contact from "../components/Contact";

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const services = [
  // ... your services array remains exactly the same
  {
    title: "AI Solutions",
    description:
      "Empower your business with AI-driven solutions that enhance productivity, automate repetitive tasks, and provide predictive insights. Leverage cutting-edge neural networks to analyze data and deliver actionable intelligence.",
    features: [
      "Machine Learning",
      "Neural Networks",
      "Predictive Analysis",
      "Natural Language Processing",
      "Computer Vision",
      "AI-driven Automation",
      "Data Pattern Recognition",
    ],
    highlights: [
      "Real-time AI insights",
      "Seamless integration with existing workflows",
      "Scalable solutions for any business size",
      "Optimized performance with low latency",
    ],
    keyframes: [
      "Initialize AI",
      "Train Model",
      "Deploy Model",
      "Continuous Monitoring",
    ],
    animations: [
      "/animations/Robots_with_artificial_intelligence_answer_questions.lottie",
      "/animations/SOLUTIONS.lottie",
      "/animations/artificial_intelligencee.lottie",
    ],
  },
  {
    title: "Data Insights",
    description:
      "Convert complex datasets into meaningful insights. Utilize interactive dashboards, advanced analytics, and visualization tools to make data-driven decisions confidently.",
    features: [
      "Data Visualization",
      "Real-time Analytics",
      "Custom Dashboards",
      "Business Intelligence",
      "Predictive Modelling",
      "Trend Analysis",
      "KPI Tracking",
    ],
    highlights: [
      "Actionable insights in seconds",
      "Interactive charts and graphs",
      "Cross-platform data access",
      "Custom alerts and notifications",
    ],
    keyframes: ["Data Collection", "Data Cleaning", "Analysis", "Reporting"],
    animations: [
      "/animations/Data_Analysis1.lottie",
      "/animations/Dashboard_Data_Visualization.lottie",
      "/animations/Analysis.lottie",
    ],
  },
  {
    title: "Automation Tools",
    description:
      "Streamline your processes with AI-powered automation tools. Reduce manual workload, optimize operations, and improve efficiency across your organization.",
    features: [
      "Workflow Automation",
      "Process Optimization",
      "Smart Scheduling",
      "AI Assistants",
      "Task Prioritization",
      "Automated Reporting",
      "Integration with APIs",
    ],
    highlights: [
      "Boost productivity up to 60%",
      "Reduce human error",
      "Automate repetitive tasks",
      "Customizable automation rules",
    ],
    keyframes: [
      "Identify Tasks",
      "Automate Process",
      "Monitor Performance",
      "Optimize Workflow",
    ],
    animations: [
      "/animations/ecommerce_order_fulfillment automation.lottie",
      "/animations/robot_process_automation.lottie",
      "/animations/AI_Tools.lottie",
    ],
  },
  {
    title: "Smart Analytics",
    description:
      "Deep dive into your business metrics and uncover hidden opportunities. Advanced analytics tools allow for performance tracking, growth analysis, and market forecasting.",
    features: [
      "Business Intelligence",
      "Performance Metrics",
      "Growth Analysis",
      "Market Insights",
      "Customer Behavior Analysis",
      "Forecasting Models",
      "Data-driven Decision Making",
    ],
    highlights: [
      "Identify key growth areas",
      "Track KPIs in real-time",
      "Visualize trends over time",
      "Make strategic decisions faster",
    ],
    keyframes: [
      "Data Aggregation",
      "Analysis",
      "Insights Generation",
      "Strategy Formulation",
    ],
    animations: [
      "/animations/Marketing_analytics.lottie",
      "/animations/Marketing_Aqnalytics.lottie",
      "/animations/Business_analysis.lottie",
    ],
  },
];

// Animated Service Item Component
const AnimatedServiceItem = ({ service, index }) => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [descRef, descVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <div className="mb-20 lg:mb-32">
      {/* Service Title with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex justify-center mb-6 lg:mb-8 px-4"
      >
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent text-center">
          {service.title}
        </h2>
      </motion.div>

      {/* Description with Staggered Animation */}
      <div
        ref={descRef}
        className={`flex justify-center mb-6 lg:mb-8 text-center transition-all duration-1000 ease-out delay-300 px-4 ${
          descVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
      >
        <p className="text-base md:text-lg lg:text-xl font-medium text-gray-600 w-full lg:w-3/4 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Content with Animation */}
      <div
        ref={contentRef}
        className={`flex flex-col lg:flex-row items-start gap-6 lg:gap-8 transition-all duration-1000 ease-out delay-500 px-4 ${
          contentVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
      >
        {/* Left: Animations in Grid with Enhanced Styling */}
        <div className="w-full lg:w-1/2 relative group">
          {/* Enhanced Border Effects - Hidden on mobile */}
          <div className="hidden lg:block absolute -inset-4 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-all duration-500"></div>
          <div className="hidden lg:block absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>

          {/* Main Container */}
          <div className="relative rounded-xl p-2 lg:p-4">
            <div className="grid grid-rows-2 grid-cols-2 gap-3 lg:gap-4 h-[250px] sm:h-[300px] lg:h-[400px] relative">
              {/* Floating Corner Accents - Hidden on mobile */}
              <div className="hidden lg:block absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-teal-400 rounded-tl-lg opacity-60"></div>
              <div className="hidden lg:block absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-blue-500 rounded-tr-lg opacity-60"></div>
              <div className="hidden lg:block absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-teal-400 rounded-bl-lg opacity-60"></div>
              <div className="hidden lg:block absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blue-500 rounded-br-lg opacity-60"></div>

              {/* Top animation (span 2 columns) */}
              <div className="row-span-1 col-span-2 relative group/item">
                <div className="absolute inset-0 rounded-lg"></div>
                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 w-full h-full p-1 lg:p-2 overflow-hidden">
                  <div className="w-full h-full animate-slide-right">
                    <DotLottieReact
                      src={service.animations[0]}
                      loop
                      autoplay
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom two animations */}
              <div className="relative group/item">
                <div className="absolute inset-0 rounded-lg"></div>
                <div className="absolute inset-0 rounded-lg"></div>

                <div className="relative z-10 w-full h-full p-1 lg:p-2">
                  <DotLottieReact
                    src={service.animations[1]}
                    loop
                    autoplay
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>

              <div className="relative group/item">
                <div className="absolute inset-0 rounded-lg"></div>
                <div className="absolute inset-0 rounded-lg"></div>

                <div className="relative z-10 w-full h-full p-1 lg:p-2">
                  <DotLottieReact
                    src={service.animations[2]}
                    loop
                    autoplay
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Features and Highlights */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 lg:space-y-6">
          {/* Grid Features + Keyframes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {/* Features */}
            <div className="">
              <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
                Features
              </h3>
              <ul className="space-y-1 lg:space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm lg:text-lg font-medium"
                  >
                    <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-teal-400 rounded-full mr-2 lg:mr-3 flex-shrink-0"></span>
                    <span className="break-words">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Keyframes */}
            <div className="">
              <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
                Keyframes
              </h3>
              <ul className="space-y-1 lg:space-y-2">
                {service.keyframes.map((frame, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm lg:text-lg font-medium transition-all duration-300 hover:text-blue-600 hover:translate-x-2"
                  >
                    <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-500 rounded-full mr-2 lg:mr-3 flex-shrink-0"></span>
                    <span className="break-words">{frame}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlights */}
          <div className="">
            <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3">
              Highlights
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              {service.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start text-sm lg:text-lg font-medium rounded-lg"
                >
                  <span className="mr-2 lg:mr-3 mt-0.5 flex-shrink-0">✓</span>
                  <span className="break-words">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[610px] mb-2">
        <Threads amplitude={2} distance={0.5} enableMouseInteraction={true} />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl lg:text-9xl font-bold text-center z-10 px-4">
          Services
        </h1>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {services.map((service, idx) => (
          <AnimatedServiceItem key={idx} service={service} index={idx} />
        ))}
      </div>
      <div>
        <WorkProcess />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
