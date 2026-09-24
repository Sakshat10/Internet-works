"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, RotateCcw, ChevronRight, Pause } from "lucide-react";

export function GoogleJourneySection() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      id: 0,
      title: "You Type",
      description: "Your browser needs to find where Google is located",
      icon: "💻",
    },
    {
      id: 1,
      title: "DNS Lookup",
      description: "DNS translates 'google.com' into an IP address",
      icon: "📖",
      detail: "DNS is like the Internet's phonebook",
    },
    {
      id: 2,
      title: "Router",
      description: "Request goes through your home router",
      icon: "📡",
    },
    {
      id: 3,
      title: "ISP",
      description: "Your provider forwards the request",
      icon: "🏢",
    },
    {
      id: 4,
      title: "Internet",
      description: "Data travels through multiple networks",
      icon: "🌐",
    },
    {
      id: 5,
      title: "Google Server",
      description: "Google receives and processes your request",
      icon: "🖥️",
    },
    {
      id: 6,
      title: "Response Returns",
      description: "The webpage travels back to you",
      icon: "📦",
    },
    {
      id: 7,
      title: "Page Loads",
      description: "Your browser displays Google",
      icon: "✓",
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

  return (
    <section
      id="section-6"
      className="presentation-section"
    >
      <div className="presentation-content">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label mb-4">04 / WEBSITE REQUEST</div>
          <h2 className="section-title mb-8">
            What Happens When You Type
          </h2>
          
          {/* Search Bar */}
          <motion.div
            className="max-w-xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#0F172A]/60 backdrop-blur-sm rounded-full p-4 border border-primary/20 flex items-center gap-4 shadow-lg">
              <span className="text-2xl ml-2">🔍</span>
              <input
                type="text"
                value="google.com"
                readOnly
                className="flex-1 bg-transparent text-foreground text-lg outline-none font-medium"
              />
              <button
                onClick={handlePlay}
                disabled={isPlaying}
                className="btn-primary text-sm px-6 py-2 disabled:opacity-50"
              >
                GO
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Horizontal Progress Steps */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex items-center justify-center gap-3 min-w-max px-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center">
                <motion.button
                  className={`network-node ${
                    currentStep === idx
                      ? "network-node--active"
                      : currentStep > idx
                      ? ""
                      : "network-node--inactive"
                  }`}
                  style={{ cursor: 'pointer' }}
                  animate={{
                    opacity: currentStep >= idx || currentStep === -1 ? 1 : 0.3,
                  }}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentStep(idx);
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div className="network-node__icon" style={{ width: '70px', height: '70px', fontSize: '2rem' }}>
                    <span>{step.icon}</span>
                  </div>
                  <div className="network-node__label">
                    <div className="text-xs font-semibold uppercase tracking-wide">
                      {step.title}
                    </div>
                  </div>
                </motion.button>

                {idx < steps.length - 1 && (
                  <motion.div
                    className="flex items-center mx-2"
                    animate={{
                      opacity: currentStep > idx ? 1 : 0.2,
                    }}
                  >
                    <div
                      className={`connection-line w-12 ${
                        currentStep > idx ? "connection-line--active" : ""
                      }`}
                    >
                      <div className="connection-line__packet" />
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Explanation */}
        <AnimatePresence mode="wait">
          {currentStep >= 0 && (
            <motion.div
              key={currentStep}
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-[#0F172A]/95 backdrop-blur-xl border border-primary/20 rounded-2xl p-8">
                {/* Accent */}
                <div className="absolute top-0 left-8 w-16 h-1 bg-primary rounded-full" />
                
                <div className="flex items-start gap-6">
                  <motion.div
                    className="text-6xl flex-shrink-0"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {steps[currentStep].icon}
                  </motion.div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-primary">
                        STEP {currentStep + 1}
                      </span>
                      <div className="h-px flex-1 bg-primary/20" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {steps[currentStep].title}
                    </h3>
                    <p className="explanation-text">
                      {steps[currentStep].description}
                    </p>
                    {steps[currentStep].detail && (
                      <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <p className="text-sm text-primary font-medium">
                          💡 {steps[currentStep].detail}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center gap-3 flex-wrap">
          {!isPlaying ? (
            <button
              onClick={handlePlay}
              className="btn-primary"
            >
              <Play className="w-4 h-4" />
              {currentStep === -1 ? "Start Animation" : "Play"}
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="btn-primary"
            >
              <Pause className="w-4 h-4" />
              Pause
            </button>
          )}
          
          {currentStep >= 0 && (
            <>
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="btn-secondary disabled:opacity-30"
              >
                Previous
              </button>
              
              <button
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
                className="btn-secondary disabled:opacity-30"
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          <button 
            onClick={handleReset} 
            className="btn-secondary"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

