"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is AI-Vora?",
    answer:
      "AI-Vora is an intelligent medical platform that analyzes radiology images and generates diagnostic reports using advanced deep learning models, assisting doctors with accurate and efficient decision-making.",
  },
  {
    question: "Can AI-Vora replace doctors in diagnosis?",
    answer:
      "No, AI-Vora is designed to assist doctors, not replace them. It provides AI-generated insights and preliminary analysis while leaving the final decision to the medical professional.",
  },
  {
    question: "How does AI-Vora ensure patient data privacy?",
    answer:
      "All uploaded data is encrypted and processed securely. AI-Vora adheres to strict data privacy standards and does not store any identifiable patient information after processing.",
  },
  {
    question: "Which types of medical images does AI-Vora support?",
    answer:
      "AI-Vora currently supports X-ray, CT, and MRI scans, with ongoing updates to include additional imaging modalities in the future.",
  },
  {
    question: "Can AI-Vora integrate with hospital systems?",
    answer:
      "Yes. AI-Vora is fully compatible with common hospital information systems (HIS) and PACS through secure APIs, allowing smooth integration into existing workflows.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-20 px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00C2A8] to-[#00E0B8] bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-[#00C2A8]/20 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left px-6 py-4 focus:outline-none"
              >
                <span className="font-semibold text-base md:text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={22} className="text-[#00C2A8]" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-500 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
