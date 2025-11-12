"use client";
import Particles from "../../public/animations/Particles";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function About() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center py-10 md:py-0">
      {/* Particles Background */}
      <div className="absolute inset-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={
            typeof window !== "undefined" && window.innerWidth < 768 ? 80 : 200
          }
          particleSpread={8}
          speed={0.1}
          particleBaseSize={
            typeof window !== "undefined" && window.innerWidth < 768 ? 60 : 100
          }
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        {/* Text Section - Full width on mobile, 60% on desktop */}
        <div className="w-full md:flex-[60%] text-center md:text-left px-4 md:pl-8 lg:pl-20 order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 ">
            About Aivora
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose  max-w-2xl mx-auto md:mx-0">
            Aivora leverages cutting-edge AI technology to simplify complex
            processes, provide actionable insights, and empower businesses to
            make smarter, data-driven decisions. Our solutions are designed to
            save time, increase efficiency, and drive innovation.
          </p>

          {/* Additional Mobile-Only Features */}
          <div className="mt-6 md:hidden flex flex-wrap gap-3 justify-center">
            <span className="px-3 py-1 bg-[#00C2A8]/20 text-[#00C2A8] rounded-full text-sm border border-[#00C2A8]/30">
              AI Powered
            </span>
            <span className="px-3 py-1 bg-[#00C2A8]/20 text-[#00C2A8] rounded-full text-sm border border-[#00C2A8]/30">
              Data Driven
            </span>
            <span className="px-3 py-1 bg-[#00C2A8]/20 text-[#00C2A8] rounded-full text-sm border border-[#00C2A8]/30">
              Innovative
            </span>
          </div>
        </div>

        {/* Animation Section - Full width on mobile, 40% on desktop */}
        <div className="w-full md:flex-[40%] flex justify-center md:justify-end order-1 md:order-2">
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px]">
            <DotLottieReact src="/animations/delivery.lottie" loop autoplay />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:hidden">
        <div className="w-6 h-1 bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] rounded-full"></div>
      </div>
    </section>
  );
}
