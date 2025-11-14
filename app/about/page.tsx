"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Missions from "../components/Missions";

export default function About() {




  return (
    <div className="min-h-screen py-16 px-6 mt-20 flex flex-col items-center">
      <div className="w-3/4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] bg-clip-text text-transparent">
          INNOVATION, INTELLIGENCE
        </h1>
        <p className="text-center text-lg md:text-2xl">
          Aivora leverages cutting-edge AI technology to simplify complex
          processes, provide actionable insights, and empower businesses to make
          smarter, data-driven decisions.{" "}
        </p>
        <DotLottieReact src="/animations/Live_chatbot.lottie" loop autoplay />
          </div>
          <div>
              <Missions/>
          </div>
    </div>
  );
}
