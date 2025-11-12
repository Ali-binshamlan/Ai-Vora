"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { DarkModeContext } from "../context/DarkModeeContext";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Contact() {
  const { dark } = useContext(DarkModeContext);
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.body.classList.contains("darkMode"));
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, [dark]);
const socialIcons = {
  Twitter: <SiX />, // أو <FaTwitter /> إذا تحب أيقونة تويتر الكلاسيكية
  LinkedIn: <FaLinkedinIn />,
  GitHub: <FaGithub />,
};
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Submitted:", formData);

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "contact@aivora.com",
      subtext: "Email us anytime",
    },
    {
      icon: Phone,
      text: "+966 555 123 456",
      subtext: "Call us Mon-Fri",
    },
    {
      icon: MapPin,
      text: "Riyadh, Saudi Arabia",
      subtext: "Our location",
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className={`absolute -top-20 -right-20 md:-top-40 md:-right-40 w-40 h-40 md:w-80 md:h-80 rounded-full blur-2xl md:blur-3xl ${
            dark ? "bg-purple-500/10" : "bg-purple-300/20"
          }`}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className={`absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-40 h-40 md:w-80 md:h-80 rounded-full blur-2xl md:blur-3xl ${
            dark ? "bg-blue-500/10" : "bg-blue-300/20"
          }`}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-2xl md:blur-3xl"
        ></motion.div>
      </div>

      {/* Title */}
      <div className="text-center mb-12 md:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x"
            whileHover={{
              scale: isMobile ? 1.02 : 1.05,
              background: "linear-gradient(45deg, #c084fc, #60a5fa, #c084fc)",
              backgroundSize: "200% 200%",
            }}
            transition={{ duration: 0.3 }}
          >
            Let's Talk
          </motion.h2>
          <motion.div
            className={`w-16 md:w-24 h-1 mx-auto rounded-full mb-4 ${
              dark
                ? "bg-gradient-to-r from-purple-400 to-blue-400"
                : "bg-gradient-to-r from-purple-600 to-blue-600"
            }`}
            whileHover={{
              width: isMobile ? "100px" : "120px",
              transition: { duration: 0.3 },
            }}
          ></motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-base sm:text-lg md:text-xl max-w-2xl md:max-w-3xl mx-auto leading-relaxed ${
            dark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Ready to bring your ideas to life? Let's create something
          extraordinary together. We're here to turn your vision into reality.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 relative z-10">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1 space-y-6 md:space-y-8"
        >
          <motion.div
            className={`backdrop-blur-xl rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border shadow-lg md:shadow-2xl ${
              dark
                ? "bg-white/5 border-white/10"
                : "bg-white/80 border-gray-200/50"
            }`}
            whileHover={{
              y: isMobile ? -2 : -5,
              boxShadow: dark
                ? "0 15px 40px -8px rgba(168, 85, 247, 0.25)"
                : "0 15px 40px -8px rgba(139, 92, 246, 0.15)",
            }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className={`text-xl sm:text-2xl md:text-2xl font-bold mb-4 md:mb-6 ${
                dark
                  ? "bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              }`}
            >
              Get in Touch
            </h3>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    x: isMobile ? 5 : 10,
                    backgroundColor: dark
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(255,255,255,0.5)",
                  }}
                  transition={{
                    delay: index * 0.1 + 0.5,
                    duration: 0.3,
                  }}
                  className="flex items-start space-x-3 md:space-x-4 group cursor-pointer p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-300"
                >
                  <motion.div
                    className={`p-2 md:p-3 rounded-lg md:rounded-xl border transition-all duration-300 ${
                      dark
                        ? "bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-white/10 group-hover:from-purple-500/30 group-hover:to-blue-500/30"
                        : "bg-gradient-to-br from-purple-500/15 to-blue-500/15 border-gray-300/50 group-hover:from-purple-500/25 group-hover:to-blue-500/25"
                    }`}
                    whileHover={{
                      scale: 1.1,
                      rotate: isMobile ? 2 : 5,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                          dark ? "text-purple-300" : "text-purple-600"
                        }`}
                      />
                    </motion.div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-semibold text-sm md:text-lg truncate ${
                        dark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.text}
                    </p>
                    <p
                      className={`text-xs md:text-sm ${
                        dark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.subtext}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={`mt-6 md:mt-8 pt-6 md:pt-8 ${
                dark
                  ? "border-t border-white/10"
                  : "border-t border-gray-300/50"
              }`}
            >
              <p
                className={`mb-3 md:mb-4 text-sm md:text-base ${
                  dark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Follow us on
              </p>
              <div className="flex space-x-3 md:space-x-4">
                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                  <motion.div
                    key={social}
                    whileHover={{
                      scale: isMobile ? 1.1 : 1.15,
                      y: isMobile ? -3 : -5,
                      backgroundColor: dark
                        ? "rgba(168, 85, 247, 0.2)"
                        : "rgba(139, 92, 246, 0.1)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 border ${
                      dark
                        ? "bg-white/5 border-white/10 hover:bg-purple-500/20"
                        : "bg-white/50 border-gray-300/50 hover:bg-purple-500/10"
                    }`}
                  >
                    <motion.span
                      whileHover={{ rotate: isMobile ? 180 : 360 }}
                      transition={{ duration: 0.5 }}
                      className={`text-xs md:text-sm font-medium ${
                        dark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {socialIcons[social]}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2"
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: isMobile ? -2 : -5 }}
            transition={{ duration: 0.9 }}
            className={`backdrop-blur-xl p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl md:rounded-2xl lg:rounded-3xl border shadow-lg md:shadow-2xl space-y-6 md:space-y-8 ${
              dark
                ? "bg-white/5 border-white/10"
                : "bg-white/80 border-gray-200/50"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    dark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Your Name *
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  whileFocus={{ scale: isMobile ? 1.01 : 1.02 }}
                  className={`w-full p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all duration-300 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-sm md:text-base ${
                    dark
                      ? "bg-black/40 border-gray-600/50 text-white"
                      : "bg-white/60 border-gray-400/50 text-gray-900"
                  }`}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    dark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Email Address *
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  whileFocus={{ scale: isMobile ? 1.01 : 1.02 }}
                  className={`w-full p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all duration-300 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-sm md:text-base ${
                    dark
                      ? "bg-black/40 border-gray-600/50 text-white"
                      : "bg-white/60 border-gray-400/50 text-gray-900"
                  }`}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className={`block text-sm font-semibold mb-2 ${
                  dark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Your Message *
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={isMobile ? 4 : 6}
                placeholder="Tell us about your project, ideas, or how we can help you..."
                whileFocus={{ scale: isMobile ? 1.005 : 1.01 }}
                className={`w-full p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all duration-300 resize-none placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-sm md:text-base ${
                  dark
                    ? "bg-black/40 border-gray-600/50 text-white"
                    : "bg-white/60 border-gray-400/50 text-gray-900"
                }`}
                required
              ></motion.textarea>
            </div>

            <motion.button
              whileHover={{
                scale: isMobile ? 1.02 : 1.03,
                boxShadow: "0 15px 30px -8px rgba(139, 92, 246, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 md:py-4 lg:py-5 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg md:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 flex items-center justify-center space-x-2 md:space-x-3 disabled:opacity-50 disabled:cursor-not-allowed group text-white"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 md:w-6 md:h-6 border-2 border-white/30 border-t-white rounded-full"
                />
              ) : (
                <>
                  <motion.div
                    whileHover={{
                      x: isMobile ? 2 : 3,
                      scale: isMobile ? 1.1 : 1.2,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                  <motion.span
                    whileHover={{
                      letterSpacing: isMobile ? "0.02em" : "0.05em",
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-sm md:text-base"
                  >
                    Send Message
                  </motion.span>
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Contact Info Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`text-center mt-12 md:mt-16 text-xs md:text-sm relative z-10 ${
          dark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        <motion.div
          className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-3 md:mb-4"
          whileHover={{
            width: isMobile ? "120px" : "200px",
            transition: { duration: 0.5 },
          }}
        ></motion.div>
        <p>
          © 2025 Aivora AI Solutions. Crafting the future, one line of code at a
          time.
        </p>
      </motion.div>
    </section>
  );
}
