"use client";
import { ReactLenis } from "lenis/react";
import { Brain, Zap, BarChart3, Globe } from "lucide-react";

export default function Missions() {
  return (
    <ReactLenis root>
      <main className="">
        <section className="text-white w-full">
          {/* Mobile Header - يظهر فقط على الجوال */}
          <div className="lg:hidden py-8 px-6 text-center">
            <h1 className="text-4xl font-black mb-2">
              <span className="bg-gradient-to-r from-[#00C2A8] via-[#00A8B5] to-[#2f93ac] bg-clip-text text-transparent">
                Our Mission
              </span>
            </h1>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00C2A8] to-[#0085A3] bg-clip-text text-transparent">
              with AI-Vora
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00C2A8] to-[#2f93ac] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-16">
            {/* البطاقات - نفس الشكل تماماً ولكن بترتيب عمودي على الجوال */}
            <div className="grid gap-4 lg:gap-8 order-2 lg:order-1 w-full lg:w-auto">
              {/* Card 1 */}
              <figure className="lg:sticky lg:top-0 lg:h-screen grid place-content-center py-8 lg:py-0">
                <article className="relative h-64 lg:h-80 w-full lg:w-120 rounded-2xl rotate-0 lg:rotate-6 p-6 lg:p-8 grid place-content-center gap-4 lg:gap-6 shadow-2xl overflow-hidden group hover:rotate-0 lg:hover:rotate-0 transition-all duration-500">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00C2A8] to-[#2f93ac] opacity-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shine"></div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                        style={{
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 5}s`,
                          animationDuration: `${3 + Math.random() * 4}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Border Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"></div>

                  {/* Content */}
                  <div className="absolute top-4 right-4 text-white">
                    <Brain
                      size={28}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center text-white relative z-10">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 group-hover:tracking-wide transition-all duration-300">
                      Smart Decision Making
                    </h1>
                    <p className="text-base lg:text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      Empowering businesses with AI to make smarter, faster
                      decisions
                    </p>
                  </div>

                  {/* Animated Bottom Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </article>
              </figure>

              {/* Card 2 */}
              <figure className="lg:sticky lg:top-0 lg:h-screen grid place-content-center py-8 lg:py-0">
                <article className="relative h-64 lg:h-80 w-full lg:w-120 rounded-2xl p-6 lg:p-8 grid place-content-center gap-4 lg:gap-6 shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-500">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-bl from-[#00C2A8] to-[#2f93ac] opacity-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse-slow"></div>

                  {/* Floating Shapes */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute border-2 border-white/20 rounded-full animate-rotate"
                        style={{
                          width: `${20 + i * 15}px`,
                          height: `${20 + i * 15}px`,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${15 + i * 2}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Border Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"></div>

                  {/* Content */}
                  <div className="absolute top-4 right-4 text-white">
                    <Zap
                      size={28}
                      className="group-hover:rotate-12 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center text-white relative z-10">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 group-hover:tracking-wide transition-all duration-300">
                      Process Simplification
                    </h1>
                    <p className="text-base lg:text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      Simplifying complex processes using intelligent AI
                      solutions.
                    </p>
                  </div>

                  {/* Animated Bottom Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </article>
              </figure>

              {/* Card 3 */}
              <figure className="lg:sticky lg:top-0 lg:h-screen grid place-content-center py-8 lg:py-0">
                <article className="relative h-64 lg:h-80 w-full lg:w-120 rounded-2xl rotate-0 lg:-rotate-6 p-6 lg:p-8 grid place-content-center gap-4 lg:gap-6 shadow-2xl overflow-hidden group hover:rotate-0 transition-all duration-500">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00C2A8] to-[#2f93ac] opacity-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent -skew-x-12 animate-shine-reverse"></div>

                  {/* Animated Grid */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-grid-white/[0.2] bg-[length:40px_40px]"></div>
                  </div>

                  {/* Border Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"></div>

                  {/* Content */}
                  <div className="absolute top-4 right-4 text-white">
                    <BarChart3
                      size={28}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center text-white relative z-10">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 group-hover:tracking-wide transition-all duration-300">
                      Data-Driven Insights
                    </h1>
                    <p className="text-base lg:text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      Providing precise data insights to drive innovation and
                      growth.
                    </p>
                  </div>

                  {/* Animated Bottom Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </article>
              </figure>

              {/* Card 4 */}
              <figure className="lg:sticky lg:top-0 lg:h-screen grid place-content-center py-8 lg:py-0">
                <article className="relative h-64 lg:h-80 w-full lg:w-120 rounded-2xl p-6 lg:p-8 grid place-content-center gap-4 lg:gap-6 shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-500">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#00C2A8] to-[#2f93ac] opacity-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent animate-pulse-slow"></div>

                  {/* Orbital Animation */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40 border border-white/10 rounded-full animate-spin-slow"></div>
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-60 lg:h-60 border border-white/10 rounded-full animate-spin-slow"
                      style={{ animationDirection: "reverse" }}
                    ></div>
                  </div>

                  {/* Border Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"></div>

                  {/* Content */}
                  <div className="absolute top-4 right-4 text-white">
                    <Globe
                      size={28}
                      className="group-hover:rotate-180 transition-transform duration-700"
                    />
                  </div>
                  <div className="text-center text-white relative z-10">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 group-hover:tracking-wide transition-all duration-300">
                      AI for Everyone
                    </h1>
                    <p className="text-base lg:text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      Making AI accessible and impactful for everyone,
                      everywhere.
                    </p>
                  </div>

                  {/* Animated Bottom Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </article>
              </figure>
            </div>

            {/* العنوان الجانبي - يظهر فقط على الكمبيوتر */}
            <div className="hidden lg:sticky lg:top-0 lg:h-screen lg:grid place-content-center relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00C2A8]/10 to-[#2f93ac]/10 blur-3xl rounded-full"></div>
              <h1 className="text-8xl px-12 font-black text-center tracking-tighter leading-[100%] relative z-10">
                <span className=" bg-gradient-to-r from-[#00C2A8] via-[#00A8B5] to-[#2f93ac] bg-clip-text text-transparent drop-shadow-2xl">
                  Our Mission
                </span>
                <br />
                <span className="text-7xl tracking-normal font-extrabold bg-gradient-to-r from-[#00C2A8] to-[#0085A3] bg-clip-text text-transparent mt-6 block">
                  with AI-Vora
                </span>
              </h1>
              <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 w-3/5 h-1 bg-gradient-to-r from-[#00C2A8] to-[#2f93ac] rounded-full"></div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        @keyframes shine-reverse {
          0% {
            transform: translateX(100%) skewX(-12deg);
          }
          100% {
            transform: translateX(-200%) skewX(-12deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slow {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
        .animate-shine-reverse {
          animation: shine-reverse 3s infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-rotate {
          animation: rotate linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </ReactLenis>
  );
}
