"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, ChevronRight, Pause } from "lucide-react";

export function GoogleJourneySection() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      id: 0,
      title: "You Type google.com",
      description: "Your browser needs to find where Google is located on the Internet.",
      visual: "browser",
      emoji: "💻",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 1,
      title: "DNS Lookup",
      description: "Your computer asks the DNS (Domain Name System) to translate 'google.com' into an IP address.",
      visual: "dns",
      emoji: "📖",
      color: "from-purple-500 to-pink-500",
      detail: "DNS is like the Internet's phonebook - it converts human-readable names into IP addresses!",
    },
    {
      id: 2,
      title: "Through Your Router",
      description: "The request goes through your home router.",
      visual: "router",
      emoji: "📡",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "To Your ISP",
      description: "Your Internet Service Provider forwards the request to the Internet.",
      visual: "isp",
      emoji: "🏢",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 4,
      title: "Across the Internet",
      description: "Data travels through multiple routers and networks to reach Google's servers.",
      visual: "internet",
      emoji: "🌐",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 5,
      title: "Google's Server",
      description: "Google's server receives your request and prepares the response.",
      visual: "server",
      emoji: "🖥️",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Response Travels Back",
      description: "The response travels back through the Internet to your computer.",
      visual: "response",
      emoji: "📦",
      color: "from-green-500 to-blue-500",
    },
    {
      id: 7,
      title: "Google Loads!",
      description: "Your browser displays the Google homepage.",
      visual: "complete",
      emoji: "🎉",
      color: "from-neon-green to-neon-blue",
    },
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, steps.length]);

  const handlePlay = () => {
    if (currentStep === -1) {
      setCurrentStep(0);
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(-1);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === " ") {
        e.preventDefault();
        if (isPlaying) {
          handlePause();
        } else {
          handlePlay();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep, isPlaying]);

  return (
    <section
      id="section-6"
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-black via-green-900/10 to-black"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Happens When You Type google.com?
        </motion.h2>

        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-800 rounded-full p-4 border-2 border-neon-blue shadow-lg shadow-neon-blue/50 flex items-center gap-4">
            <span className="text-2xl ml-2">🔍</span>
            <input
              type="text"
              value="google.com"
              readOnly
              className="flex-1 bg-transparent text-white text-xl outline-none"
            />
            <Button
              onClick={handlePlay}
              disabled={isPlaying}
              variant="neon"
              className="rounded-full"
            >
              GO
            </Button>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mb-8 bg-gray-900/50 rounded-2xl p-6 border border-neon-blue/30">
          <div className="flex items-center justify-between overflow-x-auto gap-2">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center">
                <motion.div
                  className={`flex flex-col items-center min-w-[80px] cursor-pointer`}
                  animate={{
                    scale: currentStep === idx ? 1.1 : 1,
                    opacity: currentStep >= idx ? 1 : 0.4,
                  }}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentStep(idx);
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      currentStep >= idx
                        ? `bg-gradient-to-r ${step.color}`
                        : "bg-gray-700"
                    }`}
                  >
                    <span className="text-2xl">{step.emoji}</span>
                  </div>
                  <p className="text-xs text-center text-gray-400">
                    {idx + 1}. {step.title.split(" ")[0]}
                  </p>
                </motion.div>
                {idx < steps.length - 1 && (
                  <motion.div
                    className="w-8 h-1 mx-1 rounded"
                    animate={{
                      backgroundColor:
                        currentStep > idx ? "#00f0ff" : "#4b5563",
                    }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Visualization */}
        <AnimatePresence mode="wait">
          {currentStep >= 0 && (
            <motion.div
              key={currentStep}
              className={`bg-gradient-to-br ${steps[currentStep].color} rounded-3xl p-8 mb-8 shadow-2xl`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  className="text-9xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {steps[currentStep].emoji}
                </motion.div>

                <div className="flex-1 text-white">
                  <motion.h3
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Step {currentStep + 1}: {steps[currentStep].title}
                  </motion.h3>
                  <motion.p
                    className="text-xl mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {steps[currentStep].description}
                  </motion.p>
                  {steps[currentStep].detail && (
                    <motion.div
                      className="bg-white/20 rounded-xl p-4 backdrop-blur"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-lg">{steps[currentStep].detail}</p>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Visual Flow */}
              {currentStep === 4 && (
                <motion.div
                  className="mt-8 flex items-center justify-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-4xl">💻</div>
                  <motion.div
                    className="text-4xl"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                  <div className="text-4xl">📡</div>
                  <motion.div
                    className="text-4xl"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                  >
                    →
                  </motion.div>
                  <div className="text-4xl">📡</div>
                  <motion.div
                    className="text-4xl"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
                  >
                    →
                  </motion.div>
                  <div className="text-4xl">📡</div>
                  <motion.div
                    className="text-4xl"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.6 }}
                  >
                    →
                  </motion.div>
                  <div className="text-4xl">🖥️</div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center gap-4 flex-wrap">
          {!isPlaying ? (
            <Button
              onClick={handlePlay}
              variant="neon"
              size="lg"
            >
              <Play className="mr-2" />
              Play Animation
            </Button>
          ) : (
            <Button
              onClick={handlePause}
              variant="neon"
              size="lg"
            >
              <Pause className="mr-2" />
              Pause
            </Button>
          )}
          
          {currentStep >= 0 && (
            <>
              <Button
                onClick={handlePrev}
                disabled={currentStep === 0}
                variant="outline"
                size="lg"
              >
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
                variant="outline"
                size="lg"
              >
                Next Step <ChevronRight className="ml-2" />
              </Button>
            </>
          )}

          <Button onClick={handleReset} variant="outline" size="lg">
            <RotateCcw className="mr-2" />
            Reset
          </Button>
        </div>
      </div>
    </section>
  );
}

