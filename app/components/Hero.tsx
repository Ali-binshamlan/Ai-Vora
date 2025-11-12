"use client";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* الصورة بدون أي فراغ */}
      <div className="overflow-hidden mt-20 md:mt-24 h-[150px] sm:h-[180px] md:h-[200px] lg:h-[250px] w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] flex justify-center items-center">
        <Image
          src="/Images/Logo_aivora.png"
          alt="Logo"
          width={250}
          height={200}
          style={{ objectFit: "cover" }}
          className="w-auto h-full scale-90 sm:scale-100"
          priority
        />
      </div>

      {/* الزر مباشرة بعد الصورة */}
      <div className="relative flex justify-center items-center mt-4 sm:mt-6">
        {/* الزر */}
        <div
          className="relative px-6 py-3 sm:px-7 sm:py-4
      bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] 
      dark:from-[#00C2A880] dark:to-[#00E0B880] 
      text-white font-bold text-base sm:text-lg md:text-xl
      rounded-full
      shadow-[0_10px_30px_rgba(0,194,168,0.4)]
      dark:shadow-[0_10px_30px_rgba(0,194,168,0.2)]
      transition-all duration-300
      flex justify-center items-center text-center
      group hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,194,168,0.6)]
      w-full max-w-xs sm:max-w-sm"
        >
          <span className="relative z-10 text-center">
            Empower Your Ideas with AI
          </span>
        </div>

        {/* الحدود والدوائر المتحركة */}
        <div
          className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4
      bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] 
      dark:from-[#00C2A880] dark:to-[#00E0B880] 
      rounded-full animate-ping shadow-lg"
        />
        <div
          className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4
      bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] 
      dark:from-[#00C2A880] dark:to-[#00E0B880] 
      rounded-full animate-ping shadow-lg"
        />
        <div
          className="absolute top-1/3 left-2 sm:left-3 w-2 h-2 sm:w-3 sm:h-3
      bg-[#00E0B8] dark:bg-[#00E0B880] 
      rounded-full animate-ping opacity-70"
        />
        <div
          className="absolute top-2/3 right-2 sm:right-3 w-2 h-2 sm:w-3 sm:h-3
      bg-[#00C2A8] dark:bg-[#00C2A880] 
      rounded-full animate-ping opacity-70"
        />
      </div>

      {/* القسم النصي مع الأنيميشنات */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-10  font-semibold text-xl sm:text-xl md:text-xl lg:text-xl">
        {/* الأنيميشن الأول */}
        <div className="order-1 w-48 h-48">
          <DotLottieReact
            src="/animations/Ai_Report_card.lottie"
            loop
            autoplay
          />
        </div>

        {/* النصوص - ترتيب مختلف في الجوال */}
        <div className="order-3 sm:order-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-center">
          <span className="hover:text-[#00E0B8] transition-colors duration-300 cursor-pointer px-3 py-1 rounded-lg hover:bg-white/5">
            AI Solutions
          </span>
          <span className="hover:text-[#00E0B8] transition-colors duration-300 cursor-pointer px-3 py-1 rounded-lg hover:bg-white/5">
            Data Insights
          </span>
          <span className="hover:text-[#00E0B8] transition-colors duration-300 cursor-pointer px-3 py-1 rounded-lg hover:bg-white/5">
            Automation Tools
          </span>
          <span className="hover:text-[#00E0B8] transition-colors duration-300 cursor-pointer px-3 py-1 rounded-lg hover:bg-white/5">
            Smart Analytics
          </span>
        </div>

        {/* الأنيميشن الثاني */}
        <div className="order-2 w-48 h-48">
          <DotLottieReact src="/animations/AI_Robot.lottie" loop autoplay />
        </div>
      </div>

      {/* الأنيميشن الرئيسي في الأسفل */}
      <div className="w-full max-w-4xl mx-auto mt-4  px-4">
        <div className="w-full h-48 sm:h-64 md:h-80 lg:h-3/4">
          <DotLottieReact src="/animations/Software.lottie" loop autoplay />
        </div>
      </div>
    </div>
  );
}
