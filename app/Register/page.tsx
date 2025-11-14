"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { DarkModeContext } from "../context/DarkModeeContext";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import {
  User,
  Mail,
  Lock,
  Calendar,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  gender: string;
}

// Schemas لكل خطوة
const step1Schema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
});

const step2Schema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

const step3Schema = Yup.object({
  birthDate: Yup.string().required("Birth date is required"),
  gender: Yup.string().required("Gender is required"),
});

const combinedSchema = step1Schema.concat(step2Schema).concat(step3Schema);

export default function RegisterPage() {
  const { dark } = useContext(DarkModeContext);
  const [isDark, setIsDark] = useState(false);
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
 
  const methods = useForm<FormData>({
    resolver: yupResolver(combinedSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: "",
      gender: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    getValues,
    watch,
  } = methods;

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 3;
  const [step3Touched, setStep3Touched] = useState(false);

  const nextStep = async () => {
    let valid = false;
    if (step === 1) valid = await trigger(["firstName", "lastName"]);
    if (step === 2)
      valid = await trigger(["email", "password", "confirmPassword"]);
    if (step === 3) {
      setStep3Touched(true);
      valid = await trigger(["birthDate", "gender"]);
    }

    if (valid) setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.body.classList.contains("darkMode"));
    }
  }, [dark]);

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // محاكاة عملية الإرسال
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Register data:", data);
    setIsSubmitting(false);
    // إرسال البيانات للباك اند هنا
  };

  const progressPercentage = (step / totalSteps) * 100;
  const watchedFields = watch();

  // حساب العمر من تاريخ الميلاد
  const calculateAge = (birthDate: string) => {
    if (!birthDate) return null;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  // ألوان الحقول حسب الوضع
  const getInputClasses = () => {
    return isDark
      ? "w-full p-3 md:p-4 rounded-xl bg-white/5 border border-white/20 focus:border-[#00C2A8] focus:ring-2 focus:ring-[#00C2A8]/20 transition-all duration-300 text-white placeholder-gray-400"
      : "w-full p-3 md:p-4 rounded-xl bg-white border border-gray-300 focus:border-[#00C2A8] focus:ring-2 focus:ring-[#00C2A8]/20 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-sm";
  };

  const getTextClasses = () => {
    return isDark ? "text-gray-300" : "text-gray-700";
  };

  const getLabelClasses = () => {
    return isDark ? "text-gray-300" : "text-gray-700";
  };

  const getContainerClasses = () => {
    return isDark
      ? "bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-[#00C2A8]/10"
      : "bg-white/90 backdrop-blur-lg border border-gray-200 shadow-2xl shadow-gray-400/20";
  };

  const getGenderOptionClasses = (isSelected: boolean) => {
    if (isDark) {
      return isSelected
        ? "border-[#00C2A8] bg-[#00C2A8]/10 text-white"
        : "border-white/20 bg-white/5 hover:border-white/40 text-gray-300";
    } else {
      return isSelected
        ? "border-[#00C2A8] bg-[#00C2A8]/10 text-gray-800"
        : "border-gray-300 bg-white hover:border-gray-400 text-gray-700 shadow-sm";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 md:py-12 px-4 mt-0 md:mt-6 relative overflow-hidden">
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
            className={`w-full md:w-3/4  mx-auto rounded-3xl overflow-hidden flex flex-col md:flex-row ${getContainerClasses()}`}
          >
            {/* القسم الأيسر - النموذج */}
            <div className="w-full md:w-1/2 px-4 md:px-6 py-4 md:py-6">
              {/* Progress Header */}
              <div className="pb-4 md:pb-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <motion.h2
                    className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C2A8] to-[#00E0B8]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Join AI-Vora
                  </motion.h2>
                  <div className={`text-xs md:text-sm ${getTextClasses()}`}>
                    Step {step} of {totalSteps}
                  </div>
                </div>

                {/* Enhanced Progress Bar */}
                <div className="w-full h-2 md:h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-2 md:h-3 bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] rounded-full relative"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Form Content */}
              <div className="py-4 md:py-6">
                <AnimatePresence mode="wait">
                  {/* Step 1 - الاسم الشخصي */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 md:space-y-6"
                    >
                      <div className="text-center mb-4 md:mb-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1, type: "spring" }}
                          className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-[#00C2A8] to-[#00E0B8] rounded-2xl flex items-center justify-center mb-3 md:mb-4"
                        >
                          <User className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </motion.div>
                        <h3
                          className={`text-lg md:text-xl font-semibold ${getTextClasses()}`}
                        >
                          Personal Information
                        </h3>
                        <p
                          className={`mt-1 md:mt-2 text-sm ${getTextClasses()}`}
                        >
                          Tell us about yourself
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        <div>
                          <label
                            className={`block text-sm font-medium mb-1 md:mb-2 ${getLabelClasses()}`}
                          >
                            First Name
                          </label>
                          <div className="relative">
                            <input
                              {...register("firstName")}
                              className={getInputClasses()}
                              placeholder="John"
                            />
                            {!errors.firstName && watchedFields.firstName && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                              >
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#00C2A8]" />
                              </motion.div>
                            )}
                          </div>
                          {errors.firstName && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-red-400 text-xs md:text-sm mt-1"
                            >
                              {errors.firstName.message}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label
                            className={`block text-sm font-medium mb-1 md:mb-2 ${getLabelClasses()}`}
                          >
                            Last Name
                          </label>
                          <div className="relative">
                            <input
                              {...register("lastName")}
                              className={getInputClasses()}
                              placeholder="Doe"
                            />
                            {!errors.lastName && watchedFields.lastName && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                              >
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#00C2A8]" />
                              </motion.div>
                            )}
                          </div>
                          {errors.lastName && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-red-400 text-xs md:text-sm mt-1"
                            >
                              {errors.lastName.message}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2 - البريد الإلكتروني وكلمة المرور */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 md:space-y-6"
                    >
                      <div className="text-center mb-4 md:mb-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1, type: "spring" }}
                          className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-[#00C2A8] to-[#00E0B8] rounded-2xl flex items-center justify-center mb-3 md:mb-4"
                        >
                          <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </motion.div>
                        <h3
                          className={`text-lg md:text-xl font-semibold ${getTextClasses()}`}
                        >
                          Account Details
                        </h3>
                      </div>

                      <div>
                        <label
                          className={`block text-sm font-medium mb-1 md:mb-2 ${getLabelClasses()}`}
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {/* Password */}
                        <div>
                          <label
                            className={`block text-sm font-medium mb-1 md:mb-2 ${getLabelClasses()}`}
                          >
                            Password
                          </label>
                          <div className="relative">
                            <input
                              {...register("password")}
                              type="password"
                              className={getInputClasses()}
                              placeholder="••••••"
                            />
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

                        {/* Confirm Password */}
                        <div>
                          <label
                            className={`block text-sm font-medium mb-1 md:mb-2 ${getLabelClasses()}`}
                          >
                            Confirm Password
                          </label>
                          <div className="relative">
                            <input
                              {...register("confirmPassword")}
                              type="password"
                              className={getInputClasses()}
                              placeholder="••••••"
                            />
                            <Lock
                              className={`w-4 h-4 md:w-5 md:h-5 absolute right-3 top-1/2 transform -translate-y-1/2 ${
                                isDark ? "text-gray-400" : "text-gray-500"
                              }`}
                            />
                          </div>
                          {errors.confirmPassword && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-red-400 text-xs md:text-sm mt-1"
                            >
                              {errors.confirmPassword.message}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3 - المعلومات الشخصية الإضافية */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 md:space-y-6"
                    >
                      <div className="text-center mb-4 md:mb-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1, type: "spring" }}
                          className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-[#00C2A8] to-[#00E0B8] rounded-2xl flex items-center justify-center mb-3 md:mb-4"
                        >
                          <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </motion.div>
                        <h3
                          className={`text-lg md:text-xl font-semibold ${getTextClasses()}`}
                        >
                          Additional Information
                        </h3>
                      </div>

                      <div>
                        <label
                          className={`block text-sm font-medium mb-1 md:mb-2 ${getLabelClasses()}`}
                        >
                          Birth Date
                        </label>
                        <div className="relative">
                          <input
                            {...register("birthDate")}
                            type="date"
                            className={getInputClasses()}
                            max={new Date().toISOString().split("T")[0]}
                          />
                        </div>
                        {watchedFields.birthDate && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[#00C2A8] text-xs md:text-sm mt-1"
                          >
                            Age: {calculateAge(watchedFields.birthDate)} years
                          </motion.p>
                        )}
                        {errors.birthDate && step3Touched && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-400 text-xs md:text-sm mt-1"
                          >
                            {errors.birthDate.message}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <label
                          className={`block text-sm font-medium mb-1 md:mb-2 ${getLabelClasses()}`}
                        >
                          Gender
                        </label>
                        <div className="grid grid-cols-2 gap-2 md:gap-3">
                          {[
                            { value: "male", label: "Male", icon: "♂" },
                            { value: "female", label: "Female", icon: "♀" },
                          ].map((option) => (
                            <motion.label
                              key={option.value}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`relative flex flex-col items-center p-2 md:p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 text-sm ${getGenderOptionClasses(
                                watchedFields.gender === option.value
                              )}`}
                            >
                              <input
                                type="radio"
                                {...register("gender")}
                                value={option.value}
                                className="absolute opacity-0"
                              />
                              <span className="text-lg md:text-xl mb-1">
                                {option.icon}
                              </span>
                              <span className="text-xs font-medium">
                                {option.label}
                              </span>
                            </motion.label>
                          ))}
                        </div>

                        {/* عرض الخطأ فقط بعد محاولة الانتقال للخطوة */}
                        {errors.gender && step3Touched && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-400 text-xs md:text-sm mt-1"
                          >
                            {errors.gender.message}
                          </motion.p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10">
                  {step > 1 ? (
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl border transition-all duration-300 ${
                        isDark
                          ? "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                          : "bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-700"
                      }`}
                    >
                      <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="text-sm">Back</span>
                    </motion.button>
                  ) : (
                    <div></div>
                  )}

                  {step < totalSteps ? (
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] hover:from-[#00E0B8] hover:to-[#00C2A8] transition-all duration-300 shadow-lg shadow-[#00C2A8]/20 text-white"
                    >
                      <span className="text-sm">Next</span>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] hover:from-[#00E0B8] hover:to-[#00C2A8] transition-all duration-300 shadow-lg shadow-[#00C2A8]/20 text-white disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <span className="text-sm">Complete Registration</span>
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                        </>
                      )}
                    </motion.button>
                  )}
                </div>
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
                    <motion.h3 className="text-2xl font-bold">
                      {showAnimation ? "Welcome !" : "AI-Vora Platform"}
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
