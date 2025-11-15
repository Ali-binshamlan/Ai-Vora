"use client";
import React from "react";
import styled from "styled-components";
import { Star, Users, Zap, Clock } from "lucide-react";

type IconType = "star" | "users" | "zap" | "clock";

interface CardProps {
  title: string;
  description: string;
  icon: IconType;
}

// ====================== CARD COMPONENT ======================
const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case "star":
        return <Star size={32} />;
      case "users":
        return <Users size={32} />;
      case "zap":
        return <Zap size={32} />;
      case "clock":
        return <Clock size={32} />;
      default:
        return <Star size={32} />;
    }
    };
    
  return (
    <StyledCard>
      <div className="card-container">
        <div className="card">
          <div className="front-content">
            <div className="icon-wrapper">
              <div className="icon-circle">{getIcon()}</div>
            </div>
            <p>{title}</p>
          </div>

          <div className="content">
            <div className="content-background"></div>
            <div className="content-text">
              <div className="icon-wrapper back">
                <div className="icon-circle">{getIcon()}</div>
              </div>
              <p className="heading">{title}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  .card-container {
    width: 300px;
    height: 320px;
    position: relative;
    border-radius: 20px;
    perspective: 1000px;
  }

  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: inherit;
  }

  .card-container:hover .card {
    transform: rotateY(180deg);
  }

  .front-content,
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    box-sizing: border-box;
  }

  .front-content {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border: 1px solid rgba(0, 194, 168, 0.959);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08),
      0 0 0 1px rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
  }

  .card-container:hover .front-content {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 194, 168, 0.2);
  }

  .icon-wrapper {
    margin-bottom: 20px;
    transition: transform 0.3s ease;
    color:white;
  }

  .icon-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00c2a8 0%, #00e0b8 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 20px rgba(0, 194, 168, 0.3);
  }

  .icon {
    font-size: 32px;
    filter: brightness(0) invert(1);
    color:white;
  }

  .front-content p {
    font-size: 26px;
    font-weight: 700;
    background: linear-gradient(135deg, #00c2a8 0%, #00e0b8 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    text-align: center;
  }

  .content {
    background: linear-gradient(135deg, #00c2a8 0%, #00e0b8 100%);
    transform: rotateY(180deg);
    color: white;
    position: relative;
    overflow: hidden;
  }

  .content-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }

  .content-text {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .icon-wrapper.back {
    margin-bottom: 15px;
  }

  .icon-wrapper.back .icon-circle {
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .content .heading {
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0;
    text-align: center;
  }

  .content p {
    font-size: 15px;
    line-height: 1.6;
    margin: 10px 0 20px;
    text-align: center;
    opacity: 0.9;
  }

  .learn-more-btn {
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.5);
    color: white;
    padding: 10px 24px;
    border-radius: 25px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    margin-top: 10px;
  }

  .learn-more-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

// ====================== MAIN WHY CHOOSE US ======================
const WhyChooseUs = () => {
    type IconType = "star" | "users" | "zap" | "clock";

    interface Item {
      title: string;
      description: string;
      icon: IconType; // مهم جداً
    }
 const items: Item[] = [
   {
     title: "High Quality",
     description:
       "We deliver outstanding results with a commitment to excellence and precision in every project.",
     icon: "star",
   },
   {
     title: "Trusted Team",
     description:
       "Our team consists of experienced professionals dedicated to providing reliable and efficient service.",
     icon: "users",
   },
   {
     title: "Fast Delivery",
     description:
       "We complete tasks quickly without compromising quality, ensuring your satisfaction every time.",
     icon: "zap",
   },
   {
     title: "24/7 Support",
     description:
       "We are always available to assist you — anytime, anywhere, whenever you need help.",
     icon: "clock",
   },
 ];

  return (
    <SectionWrapper>
      <div className="header-section">
        <h1 className="title">Why Choose Us</h1>
        <p className="subtitle">
          Discover the difference that sets us apart from the rest
        </p>
      </div>

      <div className="grid-cards">
        {items.map((item, idx) => (
          <Card
            key={idx}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;

// ====================== STYLING ======================
const SectionWrapper = styled.section`
  padding: 100px 20px;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header-section {
    margin-bottom: 70px;
    max-width: 600px;
  }

  .title {
    font-size: 52px;
    font-weight: 800;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #00c2a8 0%, #00e0b8 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.5px;
  }

  .subtitle {
    font-size: 18px;
    color: #6c757d;
    line-height: 1.6;
    margin: 0;
  }

  .grid-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1300px;
    width: 100%;
    justify-items: center;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;

    .title {
      font-size: 36px;
    }

    .subtitle {
      font-size: 16px;
    }

    .grid-cards {
      grid-template-columns: 1fr;
      gap: 25px;
    }
  }
`;
