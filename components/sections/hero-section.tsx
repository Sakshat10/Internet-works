"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToNext = () => {
    document.getElementById("section-1")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="section-0"
      className="min-h-screen flex items-center justify-center relative px-6 py-20"
    >
      {/* Top navigation bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E1A]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-lg">🌐</span>
            </div>
            <span className="font-semibold text-base tracking-tight">Internet 101</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full mt-16">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-foreground tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How Does the Internet Work?
        </motion.h1>

        {/* Horizontal Journey - No Card Border */}
        <motion.div
          className="mb-16 relative py-12 overflow-x-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-8 min-w-max px-8">
            {/* User sending */}
            <motion.div
              className="network-node"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="network-node__icon">
                <span className="text-7xl">👨‍💻</span>
              </div>
              <div className="network-node__label">
                <div className="node-title text-foreground">YOU</div>
              </div>
            </motion.div>

            {/* Connection line 1 */}
            <motion.div
              className="flex items-center gap-0 relative"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="w-20 h-0.5 bg-gradient-to-r from-primary/40 to-primary/20 relative">
                <motion.div
                  className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
                  animate={{ 
                    left: ["0%", "100%"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ transform: "translateY(-50%)" }}
                />
              </div>
              <motion.div
                className="text-primary/60 text-2xl ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.div>

            {/* Message packet */}
            <motion.div
              className="relative flex flex-col items-center gap-3 px-8 py-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl border border-primary/20" />
              <div className="relative text-5xl mb-1">📱</div>
              <div className="relative text-base font-medium text-foreground whitespace-nowrap">
                "Hello!"
              </div>
            </motion.div>

            {/* Connection line 2 */}
            <motion.div
              className="flex items-center gap-0 relative"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <motion.div
                className="text-primary/60 text-2xl mr-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                →
              </motion.div>
              <div className="w-20 h-0.5 bg-gradient-to-r from-primary/20 to-muted-foreground/10" />
            </motion.div>

            {/* The mystery box */}
            <motion.div
              className="relative flex flex-col items-center gap-3 px-10 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="absolute inset-0 bg-muted/10 rounded-2xl border-2 border-dashed border-muted-foreground/30" />
              <div className="relative text-6xl">❓</div>
              <div className="relative text-lg font-semibold text-muted-foreground whitespace-nowrap">
                What happens?
              </div>
            </motion.div>

            {/* Connection line 3 */}
            <motion.div
              className="flex items-center gap-0 relative"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <div className="w-20 h-0.5 bg-gradient-to-r from-muted-foreground/10 to-accent/20 relative">
                <motion.div
                  className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50"
                  animate={{ 
                    left: ["0%", "100%"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  style={{ transform: "translateY(-50%)" }}
                />
              </div>
              <motion.div
                className="text-accent/60 text-2xl ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
              >
                →
              </motion.div>
            </motion.div>

            {/* Friend receiving */}
            <motion.div
              className="network-node"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="network-node__icon">
                <span className="text-7xl">👩‍💻</span>
              </div>
              <div className="network-node__label">
                <div className="node-title text-foreground">FRIEND</div>
                <motion.div
                  className="flex items-center gap-2 mt-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.8, type: "spring" }}
                >
                  <div className="text-xl">✓</div>
                  <div className="text-sm font-semibold text-accent">Received</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <button
            onClick={scrollToNext}
            className="btn-primary text-lg px-8 py-4"
          >
            Let's Find Out 
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
