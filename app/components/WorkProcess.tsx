import React from "react";
import styled from "styled-components";
import { Lightbulb, ClipboardCheck, Cog, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb size={32} />,
    title: "Idea & Discovery",
    text: "We analyze your needs and identify the best AI-driven solutions tailored to your goals.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    number: "01",
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: "Planning & Strategy",
    text: "We create a clear roadmap that ensures smooth execution and perfect alignment with your vision.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    number: "02",
  },
  {
    icon: <Cog size={32} />,
    title: "Development & Optimization",
    text: "We build and refine your solution with high performance and efficiency.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    number: "03",
  },
  {
    icon: <Rocket size={32} />,
    title: "Launch & Support",
    text: "We deliver your product and continue supporting you whenever needed.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    number: "04",
  },
];

const WorkProcess = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <h2 className="title">Our Work Process</h2>
        <p className="subtitle">Step-by-step approach to excellence</p>

        <div className="cards-grid">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card"
              style={{ "--gradient": step.gradient } as React.CSSProperties}
            >
              <div className="card-header">
                <div className="icon-wrapper">{step.icon}</div>
                <div className="step-number">{step.number}</div>
              </div>

              <div className="card-content">
                <h3 className="card-title">{step.title}</h3>
                <p className="card-text">{step.text}</p>
              </div>

              <div className="card-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-circle"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 100px 0;
  padding: 0 20px;

  .container {
    width: 75%;
    max-width: 1200px;
    text-align: center;
  }

  .title {
    color: white;
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    color: #94a3b8;
    font-size: 1.7rem;
    margin-bottom: 4rem;
  }

  .cards-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: stretch;
  }

  .card {
    background: rgba(7, 24, 46, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    min-height: 300px;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      border-color: transparent;

      &::before {
        opacity: 1;
      }

      .icon-wrapper {
        transform: scale(1.1);
        background: var(--gradient);
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gradient);
      opacity: 0.7;
      transition: opacity 0.3s ease;
    }
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }

  .icon-wrapper {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all 0.3s ease;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .step-number {
    font-size: 3rem;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.05);
    line-height: 1;
  }

  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .card-title {
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .card-text {
    color: #94a3b8;
    font-size: 1rem;
    line-height: 1.6;
    flex: 1;
  }

  .card-decoration {
    position: absolute;
    bottom: -20px;
    right: -20px;
    opacity: 0.1;
  }

  .decoration-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--gradient);

    &:nth-child(2) {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 768px) {
    .cards-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .title {
      font-size: 2.5rem;
    }

    .card {
      padding: 1.5rem;
      min-height: 250px;
    }
  }
`;

export default WorkProcess;
