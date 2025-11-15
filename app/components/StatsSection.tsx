"use client";
import React from "react";
import styled from "styled-components";

const StatsSection = () => {
  const stats = [
    {
      number: "2010",
      label: "The year our journey began",
    },
    {
      number: "100+",
      label: "Clients we served",
    },
    {
      number: "400+",
      label: "Projects we executed",
    },
    {
      number: "50+",
      label: "Team members",
    },
  ];

  return (
    <StyledWrapper>
      <div className="container">
        <div className="content-wrapper">
          {/* العنوان على اليسار */}
          <div className="title-section">
            <h2 className="title">Our Achievements</h2>
            <p className="subtitle">
              Years of excellence and dedication have shaped our journey,
              delivering outstanding results for our valued clients worldwide.
            </p>
            <div className="achievement-highlights">
              <div className="highlight-item">
                <div className="highlight-dot"></div>
                <span>Trusted by industry leaders</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-dot"></div>
                <span>Global client base</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-dot"></div>
                <span>Proven track record</span>
              </div>
            </div>
          </div>

          {/* الكاردات على اليمين بشكل شبكة 2x2 */}
          <div className="stats-grid">
            {stats.map((item, index) => (
              <div className="outer" key={index}>
                <div className="dot" />
                <div className="card">
                  <div className="ray" />
                  <div className="text">{item.number}</div>
                  <div className="description">{item.label}</div>

                  <div className="line topl" />
                  <div className="line leftl" />
                  <div className="line bottoml" />
                  <div className="line rightl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    width: 90%;
    max-width: 1400px;
    padding: 0 40px;
  }

  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 80px;
    align-items: start;
  }

  /* قسم العنوان على اليسار */
  .title-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 40px;
  }

  .title {
    font-size: 3.5rem;
    font-weight: 800;
    color: white;
    text-align: left;
    margin-bottom: 24px;
    background: linear-gradient(45deg, #00c2a8);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.1;
    position: relative;
  }

  .title::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 88%;
    height: 4px;
    background: linear-gradient(45deg, #00c2a8, #00e0b8);
    border-radius: 2px;
  }

  .subtitle {
    font-size: 1.2rem;
    text-align: left;
    line-height: 1.6;
    margin-bottom: 40px;
    max-width: 500px;
  }

  .achievement-highlights {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .highlight-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }

  .highlight-item:hover {
    color: #00c2a8;
    transform: translateX(5px);
  }

  .highlight-dot {
    width: 8px;
    height: 8px;
    background: linear-gradient(45deg, #00c2a8, #00e0b8);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 194, 168, 0.5);
  }

  /* قسم الكاردات على اليمين بشكل شبكة 2x2 */
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: start;
  }

  /* كود الكارد مع تحسينات للشبكة */
  .outer {
    width: 100%;
    height: 220px;
    border-radius: 12px;
    padding: 1px;
    background: radial-gradient(circle 240px at 0% 0%, #ffffff, #0c0d0d);
    position: relative;
    transition: all 0.3s ease;
  }

  .outer:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 194, 168, 0.2);
  }

  .dot {
    width: 6px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #00c2a8;
    box-shadow: 0 0 15px #00c2a8;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%,
    100% {
      top: 10%;
      right: 10%;
    }
    25% {
      top: 10%;
      right: calc(100% - 35px);
    }
    50% {
      top: calc(100% - 30px);
      right: calc(100% - 35px);
    }
    75% {
      top: calc(100% - 30px);
      right: 10%;
    }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 11px;
    border: solid 1px #202222;
    background-size: 20px 20px;
    background: radial-gradient(circle 300px at 0% 0%, #444444, #0c0d0d);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: #fff;
    text-align: center;
    padding: 20px;
    overflow: hidden;
  }

  .ray {
    width: 200px;
    height: 40px;
    border-radius: 100px;
    position: absolute;
    background: linear-gradient(45deg, #00c2a8, #00e0b8);
    opacity: 0.3;
    box-shadow: 0 0 60px #00c2a8;
    filter: blur(12px);
    transform-origin: 10%;
    top: 0%;
    left: 0;
    transform: rotate(40deg);
    animation: rayMove 4s ease-in-out infinite;
  }

  @keyframes rayMove {
    0%,
    100% {
      opacity: 0.3;
      transform: rotate(40deg) translateX(0);
    }
    50% {
      opacity: 0.6;
      transform: rotate(40deg) translateX(20px);
    }
  }

  .card .text {
    font-weight: bolder;
    font-size: 2.5rem;
    background: linear-gradient(45deg, #00c2a8, #ffffff, #00e0b8);
    background-clip: text;
    color: transparent;
    margin-bottom: 8px;
  }

  .description {
    font-size: 0.9rem;
    opacity: 0.9;
    max-width: 90%;
    margin-top: 5px;
    color: #e0e0e0;
    line-height: 1.4;
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #2c2c2c;
  }

  .topl {
    top: 10%;
    background: linear-gradient(90deg, #00c2a8 30%, #1d1f1f 70%);
  }

  .bottoml {
    bottom: 10%;
    background: linear-gradient(90deg, #1d1f1f 30%, #00c2a8 70%);
  }

  .leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #00c2a8 30%, #222424 70%);
  }

  .rightl {
    right: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #222424 30%, #00c2a8 70%);
  }

  /* التصميم المتجاوب */
  @media (max-width: 1200px) {
    .content-wrapper {
      gap: 60px;
    }

    .title {
      font-size: 3rem;
    }

    .stats-grid {
      gap: 25px;
    }

    .outer {
      height: 200px;
    }

    .card .text {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 968px) {
    .content-wrapper {
      grid-template-columns: 1fr;
      gap: 60px;
    }

    .title-section {
      padding-right: 0;
      text-align: center;
      align-items: center;
    }

    .title {
      text-align: center;
    }

    .title::after {
      left: 50%;
      transform: translateX(-50%);
    }

    .subtitle {
      text-align: center;
    }

    .achievement-highlights {
      align-items: center;
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    .outer {
      height: 220px;
    }

    .card .text {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 0;

    .container {
      padding: 0 20px;
    }

    .title {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }

    .stats-grid {
      grid-template-columns: 1fr;
      gap: 25px;
      max-width: 400px;
      margin: 0 auto;
    }

    .outer {
      height: 200px;
    }

    .card .text {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 480px) {
    .outer {
      height: 180px;
    }

    .card .text {
      font-size: 2rem;
    }

    .description {
      font-size: 0.85rem;
    }
  }
`;

export default StatsSection;
