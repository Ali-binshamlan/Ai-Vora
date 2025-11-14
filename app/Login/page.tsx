"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { DarkModeContext } from "../context/DarkModeeContext";
import { motion } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import { Mail, Lock, ArrowRight, CheckCircle, Eye, EyeOff } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import Image from "next/image";


interface LoginData {
  email: string;
  password: string;
}

// Schema لتسجيل الدخول
const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
});

export default function LoginPage() {
  const { dark } = useContext(DarkModeContext);
  const [isDark, setIsDark] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
 const [showAnimation, setShowAnimation] = useState(true);
 const [isClient, setIsClient] = useState(false);

 // للتأكد من أن الكود يعمل فقط على العميل
 useEffect(() => {
   setIsClient(true);
 }, []);

 // التبديل التلقائي كل 5 ثوان
 useEffect(() => {
   if (!isClient) return;

   const interval = setInterval(() => {
     setShowAnimation((prev) => !prev);
   }, 3000);

   return () => clearInterval(interval);
 }, [isClient]);

 // دالة للحصول على ألوان النص بناء على الوضع
 
  const methods = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.body.classList.contains("darkMode"));
    }
  }, [dark]);

  const onSubmit = async (data: LoginData) => {
    setIsSubmitting(true);
    // محاكاة عملية تسجيل الدخول
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Login data:", data);
    setIsSubmitting(false);
    // إرسال البيانات للباك اند هنا
  };

  const watchedFields = watch();

  // ألوان الحقول حسب الوضع
  const getInputClasses = () => {
    return isDark
      ? "w-full p-3 md:p-4 rounded-xl bg-white/5 border border-white/20 focus:border-[#00C2A8] focus:ring-2 focus:ring-[#00C2A8]/20 transition-all duration-300 text-white placeholder-gray-400"
      : "w-full p-3 md:p-4 rounded-xl bg-white border border-gray-300 focus:border-[#00C2A8] focus:ring-2 focus:ring-[#00C2A8]/20 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-sm";
  };

  

  const getLabelClasses = () => {
    return isDark ? "text-gray-300" : "text-gray-700";
  };

  const getContainerClasses = () => {
    return isDark
      ? "bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-[#00C2A8]/10"
      : "bg-white/90 backdrop-blur-lg border border-gray-200 shadow-2xl shadow-gray-400/20";
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 mt-0 md:mt-8 md:py-12 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#00C2A8]/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00E0B8]/10 rounded-full blur-3xl"
        />
      </div>

      <FormProvider {...methods}>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-6xl flex relative z-10"
        >
          {/* Form Container - مقسم إلى نصفين */}
          <div
            className={`w-full md:w-3/4 mx-auto rounded-3xl overflow-hidden flex flex-col md:flex-row ${getContainerClasses()}`}
          >
            {/* القسم الأيسر - النموذج */}
            <div className="w-full md:w-1/2 px-4 md:px-6 py-6 md:py-8">
              {/* Header */}
              <div className="pb-4 md:pb-6 border-b border-white/10">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Welcome Back
                </motion.h2>
              </div>

              {/* Form Content */}
              <div className="py-6 md:py-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 md:space-y-8"
                >
                  {/* Email Field */}
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 md:mb-3 ${getLabelClasses()}`}
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        {...register("email")}
                        type="email"
                        className={getInputClasses()}
                        placeholder="you@example.com"
                      />
                      {!errors.email && watchedFields.email && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#00C2A8]" />
                        </motion.div>
                      )}
                    </div>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-400 text-xs md:text-sm mt-1"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 md:mb-3 ${getLabelClasses()}`}
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        {...register("password")}
                        type={showPassword ? "text" : "password"}
                        className={getInputClasses()}
                        placeholder="••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className={`absolute right-10 top-1/2 transform -translate-y-1/2 ${
                          isDark
                            ? "text-gray-400 hover:text-gray-300"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4 md:w-5 md:h-5" />
                        ) : (
                          <Eye className="w-4 h-4 md:w-5 md:h-5" />
                        )}
                      </button>
                      <Lock
                        className={`w-4 h-4 md:w-5 md:h-5 absolute right-3 top-1/2 transform -translate-y-1/2 ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                    </div>
                    {errors.password && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-400 text-xs md:text-sm mt-1"
                      >
                        {errors.password.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#00C2A8] focus:ring-[#00C2A8]"
                      />
                      <span className="ml-2 text-sm">
                        Remember me
                      </span>
                    </label>
                    <Link
                      href="/forgot-password"
                      className={`text-sm transition-colors ${
                        isDark
                          ? "text-[#00C2A8] hover:text-[#00E0B8]"
                          : "text-[#00C2A8] hover:text-[#008E76]"
                      }`}
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 md:py-4 rounded-xl bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] hover:from-[#00E0B8] hover:to-[#00C2A8] transition-all duration-300 shadow-lg shadow-[#00C2A8]/20 text-white font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </>
                    )}
                  </motion.button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="relative flex justify-center text-sm">
                      <span
                        className="px-2"
                      >
                        Or continue with
                      </span>
                    </div>
                  </div>

                  {/* Social Login */}
                  <div className="grid grid-cols-1 gap-3">
                    <button
                      type="button"
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 ${
                        isDark
                          ? "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                          : "bg-gray-50 border-gray-300 hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <span className="text-sm">Google</span>
                    </button>
                  </div>

                  {/* Sign Up Link */}
                  <div className="text-center text-sm ">
                    Don't have an account?{" "}
                    <Link
                      href="/Register"
                      className={`font-semibold transition-colors ${
                        isDark
                          ? "text-[#00C2A8] hover:text-[#00E0B8]"
                          : "text-[#00C2A8] hover:text-[#008E76]"
                      }`}
                    >
                      Sign up
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* القسم الأيمن - الأنيميشن (يظهر فقط على الشاشات المتوسطة فما فوق) */}
            <div className="hidden md:flex md:w-1/2 items-center bg-gradient-to-br from-[#00C2A8]/10 to-70% border-l border-white/10 p-6 flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center items-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="mb-6 flex justify-center flex-col items-center"
                >
                  {/* الحاوية الرئيسية مع تأثير التبديل */}
                  <div className="h-80 w-80 relative">
                    {/* الأنيميشن */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: showAnimation ? 1 : 0,
                        scale: showAnimation ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                      <DotLottieReact
                        src="/animations/register.lottie"
                        loop
                        autoplay
                      />
                    </motion.div>

                    {/* الشعار */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: showAnimation ? 0 : 1,
                        scale: showAnimation ? 0.8 : 1,
                      }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                      <div className="text-center">
                        <div className="w-48 h-48 mx-auto  flex items-center justify-center">
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
                      </div>
                    </motion.div>
                  </div>

                  {/* النص مع تأثير التبديل */}
                  <motion.div
                    key={showAnimation ? "animation-text" : "logo-text"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4"
                  >
                    <motion.h3
                      className="text-2xl font-bold"
                    >
                      {showAnimation ? "Welcome Back!" : "AI-Vora Platform"}
                    </motion.h3>
                    <motion.p className="mt-2">
                      {showAnimation
                        ? "Access your AI-Vora dashboard and continue your medical journey."
                        : "Advanced AI solutions for modern healthcare challenges."}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.form>
      </FormProvider>
    </div>
  );
}
