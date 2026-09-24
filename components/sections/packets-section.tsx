"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function PacketsSection() {
  const [stage, setStage] = useState(0);

  const message = "HELLO HOW ARE YOU?";
  const packets = ["HELLO", "HOW", "ARE", "YOU?"];

  const handleBreakIntoPackets = () => {
    setStage(1);
    setTimeout(() => setStage(2), 1500);
    setTimeout(() => setStage(3), 4000);
  };

  const handleReset = () => {
    setStage(0);
  };

  return (
    <section
      id="section-8"
      className="presentation-section"
    >
      <div className="presentation-content">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label mb-4">06 / DATA PACKETS</div>
          <h2 className="section-title mb-6">
            What Are Packets?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data doesn't travel as one big chunk—it breaks into smaller pieces
          </p>
        </motion.div>

        {/* Main Visualization */}
        <div className="min-h-[400px] flex items-center justify-center mb-12">
          {/* Stage 0: Original Message */}
          {stage === 0 && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="inline-block relative mb-8">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl" />
                <div className="relative bg-primary/10 border-2 border-primary/30 rounded-2xl px-12 py-8">
                  <p className="text-4xl font-bold text-foreground tracking-wide">{message}</p>
                </div>
              </div>
              <div className="mt-8">
                <button
                  onClick={handleBreakIntoPackets}
                  className="btn-primary text-lg"
                >
                  Break Into Packets
                </button>
              </div>
            </motion.div>
          )}

          {/* Stage 1: Breaking Apart - Horizontal */}
          {stage === 1 && (
            <motion.div
              className="flex items-center justify-center gap-6 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {packets.map((packet, idx) => (
                <motion.div
                  key={idx}
                  className="relative"
                  initial={{ scale: 1, x: 0, y: 0, opacity: 1 }}
                  animate={{
                    scale: [1, 1.1, 1],
                    x: (idx - 1.5) * 100,
                    y: Math.sin(idx) * 30,
                  }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg" />
                  <div className="relative bg-[#0F172A]/90 border-2 border-primary rounded-2xl px-8 py-6 backdrop-blur-sm">
                    <div className="text-3xl mb-2">📦</div>
                    <p className="text-2xl font-bold text-foreground">{packet}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Stage 2: Traveling - Horizontal Paths */}
          {stage === 2 && (
            <div className="w-full max-w-5xl">
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                Packets Travel Through Different Routes
              </h3>
              
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                {/* Start and End markers */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 text-5xl z-10">
                  📱
                </div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-5xl z-10">
                  📱
                </div>
                
                {/* Middle routers - horizontal */}
                <div className="absolute left-1/3 top-1/4 text-3xl opacity-40">
                  📡
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl opacity-40">
                  🌐
                </div>
                <div className="absolute left-2/3 top-3/4 text-3xl opacity-40">
                  📡
                </div>

                {/* Animated packets taking horizontal routes */}
                {packets.map((packet, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute bg-primary/90 text-white px-4 py-2 rounded-lg font-bold shadow-lg text-sm whitespace-nowrap z-20"
                    initial={{ left: "8%", top: "50%" }}
                    animate={{
                      left: ["8%", "45%", "92%"],
                      top: [
                        "50%",
                        idx % 2 === 0 ? "25%" : "75%",
                        "50%",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      delay: idx * 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    📦 {packet}
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-muted-foreground mt-6">
                Each packet can take a different path through the network
              </p>
            </div>
          )}

          {/* Stage 3: Reassembling - Horizontal */}
          {stage === 3 && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Reassembling at Destination
              </h3>

              {/* Packets coming together horizontally */}
              <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
                {packets.map((packet, idx) => (
                  <motion.div
                    key={idx}
                    className="relative"
                    initial={{
                      x: (idx - 1.5) * 100,
                      y: Math.sin(idx) * 50,
                      scale: 0.8,
                      opacity: 0.5,
                    }}
                    animate={{
                      x: 0,
                      y: 0,
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.2,
                    }}
                  >
                    <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-md" />
                    <div className="relative bg-[#0F172A]/90 border-2 border-accent rounded-2xl px-6 py-4 backdrop-blur-sm">
                      <div className="text-2xl mb-1">📦</div>
                      <p className="text-lg font-bold text-foreground">{packet}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-accent text-4xl mb-6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                ↓
              </motion.div>

              {/* Final reassembled message */}
              <motion.div
                className="inline-block relative"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
              >
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl" />
                <div className="relative bg-accent/10 border-2 border-accent rounded-2xl px-12 py-8">
                  <p className="text-4xl font-bold text-foreground tracking-wide">{message}</p>
                </div>
              </motion.div>

              <motion.p
                className="text-xl text-accent font-semibold mt-8 flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <span className="text-2xl">✓</span>
                Message Reassembled Successfully
              </motion.p>

              <button
                onClick={handleReset}
                className="btn-secondary mt-8"
              >
                Watch Again
              </button>
            </motion.div>
          )}
        </div>

        {/* Why Use Packets */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#0F172A]/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Why Use Packets?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0">📦</div>
                <div>
                  <p className="font-semibold text-foreground">Efficiency</p>
                  <p className="text-sm text-muted-foreground">Smaller chunks are easier to manage</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0">🔄</div>
                <div>
                  <p className="font-semibold text-foreground">Reliability</p>
                  <p className="text-sm text-muted-foreground">Only failed packets need resending</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0">🛣️</div>
                <div>
                  <p className="font-semibold text-foreground">Multiple Paths</p>
                  <p className="text-sm text-muted-foreground">Different routes avoid congestion</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0">⚡</div>
                <div>
                  <p className="font-semibold text-foreground">Speed</p>
                  <p className="text-sm text-muted-foreground">Packets travel simultaneously</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
