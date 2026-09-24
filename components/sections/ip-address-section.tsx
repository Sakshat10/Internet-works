"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function IPAddressSection() {
  const [stage, setStage] = useState(0);

  const handleStart = () => {
    setStage(1);
    setTimeout(() => setStage(2), 2500);
  };

  const handleReset = () => {
    setStage(0);
  };

  return (
    <section
      id="section-5"
      className="min-h-screen flex items-center justify-center py-12 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How do devices find each other?
        </motion.h2>

        {/* Stage 0 & 1: Analogy First */}
        {stage < 2 && (
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Real World: House Address */}
            <motion.div
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[12rem] leading-none mb-8">🏠</div>
              <div className="text-center">
                <p className="text-3xl text-white font-bold mb-6">House</p>
                <motion.div
                  className="text-[#38BDF8] text-6xl mb-6"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.div>
                <div className="bg-white/5 border-2 border-white/20 rounded-2xl p-6">
                  <p className="text-5xl font-bold text-white mb-2">123 Main St</p>
                  <p className="text-xl text-white/60">City, Country</p>
                </div>
              </div>
            </motion.div>

            {/* Digital World: IP Address */}
            <motion.div
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-[12rem] leading-none mb-8">💻</div>
              <div className="text-center">
                <p className="text-3xl text-white font-bold mb-6">Computer</p>
                <motion.div
                  className="text-[#38BDF8] text-6xl mb-6"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                >
                  ↓
                </motion.div>
                <div className="bg-[#38BDF8]/10 border-2 border-[#38BDF8] rounded-2xl p-6">
                  <p className="text-5xl font-bold text-[#38BDF8] font-mono">192.168.1.10</p>
                  <p className="text-xl text-white/60 mt-2">IP Address</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Stage 2: Demonstration */}
        {stage === 2 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              {/* Computer A */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-[10rem] leading-none mb-4">💻</div>
                <div className="bg-[#38BDF8]/10 border-2 border-[#38BDF8] rounded-xl px-6 py-4">
                  <p className="text-3xl font-mono text-[#38BDF8]">192.168.1.10</p>
                </div>
              </motion.div>

              {/* Animated Arrow with Data */}
              <div className="flex-1 mx-12 relative h-32 flex items-center">
                <motion.div
                  className="absolute left-0 right-0 h-2 bg-[#38BDF8]/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.div
                  className="absolute"
                  initial={{ left: "0%" }}
                  animate={{ left: "90%" }}
                  transition={{ duration: 2, delay: 1, ease: "linear" }}
                >
                  <div className="bg-[#38BDF8] text-white px-8 py-4 rounded-xl text-4xl shadow-lg shadow-[#38BDF8]/50">
                    📦 Data
                  </div>
                </motion.div>
              </div>

              {/* Computer B */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="text-[10rem] leading-none mb-4"
                  animate={{ scale: [1, 1, 1, 1.15, 1] }}
                  transition={{ duration: 2, delay: 2.5 }}
                >
                  💻
                </motion.div>
                <div className="bg-purple-500/10 border-2 border-purple-500 rounded-xl px-6 py-4">
                  <p className="text-3xl font-mono text-purple-400">192.168.1.20</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Control Button */}
        <div className="text-center mb-12">
          {stage < 2 && (
            <Button
              onClick={handleStart}
              disabled={stage === 1}
              className="bg-[#38BDF8] hover:bg-[#38BDF8]/80 text-white text-2xl px-12 py-8 rounded-2xl font-bold"
              size="lg"
            >
              {stage === 1 ? "Sending Data..." : "Send Data →"}
            </Button>
          )}
          {stage === 2 && (
            <Button
              onClick={handleReset}
              className="bg-white/10 hover:bg-white/20 text-white text-2xl px-12 py-8 rounded-2xl font-bold border-2 border-white/20"
              size="lg"
            >
              Watch Again
            </Button>
          )}
        </div>

        {/* Simple Explanation - Only after demo */}
        {stage === 2 && (
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
          >
            <p className="text-3xl text-white/80 leading-relaxed">
              <span className="text-[#38BDF8] font-bold">IP Address</span> = Digital address for devices
            </p>
            <p className="text-2xl text-white/60 mt-4">
              Just like houses need street addresses, computers need IP addresses!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
