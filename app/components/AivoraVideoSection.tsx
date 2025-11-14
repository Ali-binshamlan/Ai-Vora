"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";

export default function AivoraVideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollY } = useViewportScroll();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setElementHeight(rect.height);
    }
  }, []);

  useEffect(() => {
    return scrollY.onChange((latest) => setScrollPosition(latest));
  }, [scrollY]);

  // تكبير الفيديو حسب موقعه (يمكنك تعديل القيم حسب رغبتك)
  const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const sectionCenter = elementTop + elementHeight / 2;
  const screenCenter = scrollPosition + viewportHeight / 2;
  const distance = Math.abs(screenCenter - sectionCenter);
  const maxDistance = viewportHeight / 2 + elementHeight / 2;
  const scale = 1 - (distance / maxDistance) * 0.2;

  // تشغيل الفيديو والصوت عند دخول الشاشة
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play();
              videoRef.current.muted = false; // صوت يعمل تلقائي
              setIsMuted(false);
            } else {
              videoRef.current.pause();
              videoRef.current.muted = true; // صوت يتوقف
              setIsMuted(true);
            }
          }
        });
      },
      { threshold: 0.5 } // الفيديو يعتبر داخل الشاشة إذا كان 50% ظاهر
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="w-full flex items-center justify-center py-20 relative"
    >
      <div className="w-full max-w-6xl flex justify-center">
        <motion.video
          ref={videoRef}
          src="/videos/AI-Vora_Intelligent_Future.mp4"
          className="w-full max-w-5xl shadow-2xl rounded-xl"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          style={{ scale }}
        />
      </div>
    </section>
  );
}
