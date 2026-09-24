"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CompleteJourneySection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);

  const steps = [
    { emoji: "👨‍💻", label: "YOU" },
    { emoji: "📡", label: "ROUTER" },
    { emoji: "🏢", label: "ISP" },
    { emoji: "📖", label: "DNS" },
    { emoji: "🌐", label: "INTERNET" },
    { emoji: "📦", label: "PACKETS" },
    { emoji: "🖥️", label: "SERVER" },
    { emoji: "📦", label: "PACKETS" },
    { emoji: "🌐", label: "INTERNET" },
    { emoji: "📡", label: "ROUTER" },
    { emoji: "👩‍💻", label: "FRIEND" },
  ];

  const handlePlay = () => {
    setIsPlaying(true);
    setCurrentStep(0);

    steps.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        if (index === steps.length - 1) {
          setIsPlaying(false);
        }
      }, index * 700);
    });
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(-1);
  };

  return (
    <section
      id="section-10"
      className="min-h-screen flex items-center justify-center py-12 px-4 bg-[#050816]"
    >
      <div className="max-w-[1600px] mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Complete Journey
        </motion.h2>

        {/* Horizontal Flow - Scrollable on small screens */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="min-w-max px-4 mx-auto flex justify-center">
            <div className="flex items-center gap-1 md:gap-2">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: currentStep >= idx ? 1 : 0.3,
                      scale: currentStep === idx ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Node */}
                    <div
                      className={`rounded-full flex items-center justify-center mb-1 transition-all ${
                        currentStep >= idx
                          ? "bg-[#38BDF8] shadow-lg shadow-[#38BDF8]/50 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                          : "bg-white/10 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
                      }`}
                    >
                      <span className={`${currentStep >= idx ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-2xl lg:text-3xl"}`}>
                        {step.emoji}
                      </span>
                    </div>
                    <p className={`text-[10px] md:text-xs font-bold text-center whitespace-nowrap ${
                      currentStep >= idx ? "text-white" : "text-white/40"
                    }`}>
                      {step.label}
                    </p>
                  </motion.div>

                  {/* Arrow */}
                  {idx < steps.length - 1 && (
                    <motion.div
                      className="text-lg md:text-2xl lg:text-3xl mx-0.5 md:mx-1"
                      animate={{
                        color: currentStep > idx ? "#38BDF8" : "rgba(255,255,255,0.2)",
                        scale: currentStep === idx ? [1, 1.3, 1] : 1,
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: currentStep === idx ? Infinity : 0,
                      }}
                    >
                      →
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-8">
          {currentStep < steps.length - 1 ? (
            <Button
              onClick={handlePlay}
              disabled={isPlaying}
              className="bg-[#38BDF8] hover:bg-[#38BDF8]/80 text-white text-lg md:text-xl lg:text-2xl px-8 md:px-10 py-4 md:py-6 lg:py-8 rounded-xl md:rounded-2xl font-bold"
              size="lg"
            >
              {isPlaying ? "Playing..." : "▶ Play Animation"}
            </Button>
          ) : (
            <Button
              onClick={handleReset}
              className="bg-white/10 hover:bg-white/20 text-white text-lg md:text-xl lg:text-2xl px-8 md:px-10 py-4 md:py-6 lg:py-8 rounded-xl md:rounded-2xl font-bold border-2 border-white/20"
              size="lg"
            >
              ↻ Watch Again
            </Button>
          )}
        </div>

        {/* Completion Message */}
        {currentStep === steps.length - 1 && (
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 md:mb-4">
              🎉 Journey Complete! 🎉
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/80">
              All this happens in <span className="text-[#38BDF8] font-bold">milliseconds</span>!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
