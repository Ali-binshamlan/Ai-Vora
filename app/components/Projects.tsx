"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import { useState, useRef, useContext, useEffect } from "react";
import { DarkModeContext } from "../context/DarkModeeContext";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


const features = [
  {
    title: "AI Workflow Automation System",
    description:
      "Developed an intelligent automation system that uses computer vision and NLP to streamline document processing and customer support workflows — reducing manual work by 90%.",
    techStack: ["Python", "TensorFlow", "FastAPI", "React"],
    icon: "/animations/Robot.lottie",

    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    lightGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    stats: "90% faster",
    color: "#f093fb",
  },
  {
    title: "Data Intelligence Platform",
    description:
      "Built a machine learning platform that analyzes structured and unstructured data to deliver real-time insights and predictive analytics for business decisions.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    lightGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    stats: "85% accuracy",
    color: "#764ba2",
  },
  {
    title: "AI Cloud Infrastructure Integration",
    description:
      "Integrated multiple AI microservices into a scalable cloud-based ecosystem with seamless API connectivity between data pipelines and analytics dashboards.",
    icon: "/animations/Cloud_Library.lottie",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    lightGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    stats: "99.9% uptime",
    color: "#4facfe",
  },
  {
    title: "Cyber AI Defense System",
    description:
      "Designed a real-time AI-powered cybersecurity system with anomaly detection and threat prediction, protecting enterprise networks from data breaches.",
    icon: "/animations/Security.lottie",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    lightGradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    stats: "100% secure",
    color: "#eee272",
  },
  {
    title: "AI Operations Dashboard",
    description:
      "Built an interactive analytics dashboard for monitoring industrial systems in real-time using machine learning models for predictive maintenance and performance insights.",
    icon: "/animations/UX_Analytic_Animation.lottie",
    gradient: "linear-gradient(135deg, #fa70dc 0%, #cf3ef3 100%)",
    lightGradient: "linear-gradient(135deg, #fa70dc 0%, #cf3ef3 100%)",
    stats: "Real-time",
    color: "#fa709a",
  },
];

const ModernShowcase = () => {
  const { dark } = useContext(DarkModeContext);
  const [isDark, setIsDark] = useState(true);
  const [activeLayer, setActiveLayer] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.body.classList.contains("darkMode"));
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, [dark]);

  return (
    <Wrapper $isDark={isDark} ref={containerRef}>
      {/* Animated Background */}
      <div className="background-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      {/* Header Section */}
      <motion.div
        className="header-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="main-title">
          Our Projects
        </h1>
        <p className="subtitle">
          Discover how our cutting-edge technology can transform your business
          with intelligent automation and data-driven insights
        </p>
      </motion.div>

      {/* Main Showcase */}
      <div className="showcase-container">
        {/* Background Layers */}
        <div className="background-layers">
          {features.map((_, index) => (
            <motion.div
              key={index}
              className={`layer ${index === activeLayer ? "active" : ""}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity:
                  index === activeLayer
                    ? isDark
                      ? 0.15
                      : 0.08
                    : isDark
                    ? 0.05
                    : 0.02,
                scale: index === activeLayer ? 1 : 0.9,
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>

        {/* Feature Cards Stack */}
        <div className="cards-stack">
          {features.map((feature, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            // Mobile adjustments
            const layerOffset = isMobile ? 0 : (index - activeLayer) * 240;
            const zIndex = isMobile
              ? features.length - index
              : 10 - Math.abs(index - activeLayer);
            const scale = isMobile
              ? index === activeLayer
                ? 1
                : 0.8
              : 1 - Math.abs(index - activeLayer) * 0.12;
            const opacity = isMobile
              ? index === activeLayer
                ? 1
                : 0
              : 1 - Math.abs(index - activeLayer) * 0.25;
            const rotation = isMobile ? 0 : (index - activeLayer) * 3;

            return (
              <FeatureCard
                key={index}
                ref={ref}
                $index={index}
                $activeLayer={activeLayer}
                $gradient={isDark ? feature.gradient : feature.lightGradient}
                $color={feature.color}
                $zIndex={zIndex}
                $scale={scale}
                $opacity={opacity}
                $xOffset={layerOffset}
                $rotation={rotation}
                $isDark={isDark}
                $isMobile={isMobile}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                animate={
                  inView
                    ? {
                        opacity: opacity,
                        y: 0,
                        rotateX: 0,
                        x: layerOffset,
                        scale: scale,
                        rotateY: rotation,
                      }
                    : {}
                }
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 25,
                  delay: index * 0.15,
                }}
                onClick={() => setActiveLayer(index)}
                whileHover={
                  !isMobile
                    ? {
                        scale: Math.min(scale * 1.08, 1),
                        y: -15,
                        transition: { duration: 0.3 },
                      }
                    : {}
                }
              >
                {/* Animated Border */}
                <div
                  className="animated-border"
                  style={{
                    background: isDark
                      ? feature.gradient
                      : feature.lightGradient,
                  }}
                />

                {/* Card Glow */}
                <div
                  className="card-glow"
                  style={{
                    background: isDark
                      ? feature.gradient
                      : feature.lightGradient,
                  }}
                />

                {/* Main Content */}
                <div className="card-content">
                  {/* Icon Section */}
                  <motion.div
                    className="icon-section"
                    animate={{
                      scale: index === activeLayer ? 1.1 : 1,
                      rotate: index === activeLayer ? [0, -5, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="icon-wrapper"
                      style={{
                        background: isDark
                          ? feature.gradient
                          : feature.lightGradient,
                      }}
                    >
                      <DotLottieReact src={feature.icon} loop autoplay />
                    </div>
                    <motion.div
                      className="stats-badge"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: index === activeLayer ? 1 : 0,
                        opacity: index === activeLayer ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {feature.stats}
                    </motion.div>
                  </motion.div>

                  {/* Text Content */}
                  <div className="text-section">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      className="description"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: index === activeLayer ? 1 : 0.7,
                        height: "auto",
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {feature.description}
                    </motion.p>

                    {/* Action Button */}
                    <motion.button
                      className="action-btn"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: index === activeLayer ? 1 : 0,
                        y: index === activeLayer ? 0 : 20,
                      }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      style={{
                        background: isDark
                          ? feature.gradient
                          : feature.lightGradient,
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0 10px 30px ${feature.color}50`,
                      }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>

                {/* Floating Elements */}
                {!isMobile && (
                  <div className="floating-elements">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="floating-dot"
                        style={{ background: feature.color }}
                        animate={{
                          y: [0, -25, 0],
                          x: [0, Math.random() * 15 - 7.5, 0],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.7,
                        }}
                      />
                    ))}
                  </div>
                )}
              </FeatureCard>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="navigation-section">
        {/* Navigation Controls */}
        <div className="nav-controls">
          <div className="nav-dots">
            {features.map((feature, index) => (
              <motion.button
                key={index}
                className={`dot ${index === activeLayer ? "active" : ""}`}
                onClick={() => setActiveLayer(index)}
                whileHover={{ scale: isMobile ? 1.1 : 1.3 }}
                whileTap={{ scale: 0.8 }}
                animate={{
                  background:
                    index === activeLayer
                      ? isDark
                        ? feature.gradient
                        : feature.lightGradient
                      : isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)",
                  borderColor:
                    index === activeLayer
                      ? feature.color
                      : isDark
                      ? "rgba(255, 255, 255, 0.3)"
                      : "rgba(0, 0, 0, 0.3)",
                }}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ModernShowcase;

// Animations
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

const glowAnimation = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

// Styled Components
const Wrapper = styled.div`
  background: ${(props) =>
    props.$isDark
      ? "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)"
      : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)"};
  min-height: 100vh;
  padding: 2rem 1rem;
  position: relative;
  overflow: hidden;
  font-family: "Inter", sans-serif;
  transition: background 0.5s ease;

  .background-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;

    .floating-shape {
      position: absolute;
      border-radius: 50%;
      background: ${(props) =>
        props.$isDark
          ? "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
          : "linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, transparent 50%)"};
      animation: ${floatAnimation} 20s ease-in-out infinite;

      &.shape-1 {
        width: 200px;
        height: 200px;
        top: 10%;
        left: 5%;
        animation-delay: 0s;

        @media (max-width: 768px) {
          width: 120px;
          height: 120px;
          top: 5%;
          left: 2%;
        }
      }
      &.shape-2 {
        width: 150px;
        height: 150px;
        top: 60%;
        right: 5%;
        animation-delay: 5s;

        @media (max-width: 768px) {
          width: 100px;
          height: 100px;
          top: 70%;
          right: 2%;
        }
      }
      &.shape-3 {
        width: 100px;
        height: 100px;
        bottom: 20%;
        left: 10%;
        animation-delay: 10s;

        @media (max-width: 768px) {
          width: 80px;
          height: 80px;
          bottom: 10%;
          left: 5%;
        }
      }
    }
  }

  .header-section {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    z-index: 10;
    padding: 0 1rem;

    .main-title {
      font-size: 2.2rem;
      font-weight: 800;
      color: ${(props) => (props.$isDark ? "#ffffff" : "#1a202c")};
      margin-bottom: 1rem;
      line-height: 1.2;
      transition: color 0.3s ease;

      @media (min-width: 768px) {
        font-size: 4rem;
      }

      .gradient-text {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .subtitle {
      font-size: 1rem;
      color: ${(props) =>
        props.$isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"};
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.5;
      transition: color 0.3s ease;

      @media (min-width: 768px) {
        font-size: 1.3rem;
        line-height: 1.6;
      }
    }
  }

  .showcase-container {
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1200px;

    @media (max-width: 768px) {
      height: 400px;
      perspective: 800px;
    }
  }

  .background-layers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    .layer {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 280px;
      background: ${(props) =>
        props.$isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"};
      border-radius: 25px;
      border: 1px solid
        ${(props) =>
          props.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
      backdrop-filter: blur(20px);
      transition: all 0.6s ease;

      @media (min-width: 768px) {
        width: 500px;
        height: 380px;
        border-radius: 35px;
      }

      &.active {
        background: ${(props) =>
          props.$isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"};
        border-color: ${(props) =>
          props.$isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};
        box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
      }
    }
  }

  .cards-stack {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navigation-section {
    margin-top: 2rem;
    position: relative;
    z-index: 20;

    @media (min-width: 768px) {
      margin-top: 3rem;
    }

    .nav-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      @media (min-width: 768px) {
        gap: 2rem;
      }

      .nav-dots {
        display: flex;
        gap: 0.5rem;

        @media (min-width: 768px) {
          gap: 1rem;
        }

        .dot {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          border: 2px solid;
          color: ${(props) => (props.$isDark ? "white" : "#1a202c")};
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          font-size: 0.8rem;

          @media (min-width: 768px) {
            width: 45px;
            height: 45px;
            font-size: 1rem;
          }

          &.active {
            box-shadow: 0 0 25px
              ${(props) =>
                props.$isDark
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)"};
          }
        }
      }
    }
  }
`;

const FeatureCard = styled(motion.div)`
  position: absolute;
  width: 280px;
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.98)"};
  border-radius: 20px;
  padding: 1.5rem;
  min-height: 300px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.$isDark
      ? "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
      : "0 20px 60px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)"};
  backdrop-filter: blur(30px);
  border: 1px solid
    ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.1)"};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: ${(props) => props.$zIndex};
  transform: translateX(${(props) => props.$xOffset}px)
    scale(${(props) => props.$scale}) rotateY(${(props) => props.$rotation}deg);

  @media (min-width: 768px) {
    width: 420px;
    padding: 2.5rem;
    min-height: 350px;
    border-radius: 30px;
  }

  .animated-border {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 22px;
    background: ${(props) => props.$gradient};
    z-index: -2;
    opacity: 0;
    transition: opacity 0.3s ease;

    @media (min-width: 768px) {
      border-radius: 32px;
    }
  }

  &:hover .animated-border {
    opacity: ${(props) => (props.$isMobile ? 0 : 1)};
    animation: ${glowAnimation} 2s ease-in-out infinite;
  }

  .card-glow {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 30px;
    opacity: 0;
    filter: blur(25px);
    z-index: -1;
    transition: opacity 0.3s ease;

    @media (min-width: 768px) {
      border-radius: 40px;
    }
  }

  &:hover .card-glow {
    opacity: ${(props) => (props.$isDark ? 0.15 : 0.08)};
  }

  .card-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;

    .icon-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;

      @media (min-width: 768px) {
        margin-bottom: 2rem;
      }

      .icon-wrapper {
        width: 60px;
        height: 60px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        position: relative;
        overflow: hidden;

        @media (min-width: 768px) {
          width: 85px;
          height: 85px;
          border-radius: 22px;
          font-size: 2.8rem;
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2) 0%,
            transparent 50%
          );
        }
      }

      .stats-badge {
        padding: 0.4rem 0.8rem;
        background: ${(props) =>
          props.$isDark ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.05)"};
        border-radius: 15px;
        color: ${(props) => (props.$isDark ? "#333" : "#1a202c")};
        font-weight: 700;
        font-size: 0.8rem;
        backdrop-filter: blur(10px);
        border: 1px solid
          ${(props) =>
            props.$isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"};

        @media (min-width: 768px) {
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          font-size: 0.9rem;
        }
      }
    }

    .text-section {
      flex: 1;

      h3 {
        font-size: 1.3rem;
        color: ${(props) => (props.$isDark ? "#1a1a2e" : "#1a202c")};
        margin-bottom: 1rem;
        font-weight: 800;
        line-height: 1.2;

        @media (min-width: 768px) {
          font-size: 1.5rem;
          margin-bottom: 1.2rem;
        }
      }

      .description {
        color: ${(props) => (props.$isDark ? "#4a5568" : "#4a5568")};
        font-size: 0.9rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
        font-weight: 500;

        @media (min-width: 768px) {
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
      }

      .action-btn {
        padding: 0.8rem 1.5rem;
        border: none;
        border-radius: 15px;
        color: white;
        font-weight: 700;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        position: relative;
        overflow: hidden;

        @media (min-width: 768px) {
          padding: 1rem 2rem;
          border-radius: 18px;
          font-size: 1rem;
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2) 0%,
            transparent 50%
          );
        }
      }
    }
  }

  .floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    .floating-dot {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      opacity: 0.3;

      @media (min-width: 768px) {
        width: 8px;
        height: 8px;
      }

      &:nth-child(1) {
        top: 15%;
        left: 8%;
      }
      &:nth-child(2) {
        top: 75%;
        left: 85%;
      }
      &:nth-child(3) {
        top: 45%;
        left: 5%;
      }
      &:nth-child(4) {
        top: 25%;
        left: 92%;
      }
    }
  }
`;
