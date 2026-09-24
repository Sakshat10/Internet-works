"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-black via-blue-900/10 to-black"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Are Packets?
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Data doesn't travel as one big chunk - it breaks into smaller pieces!
        </motion.p>

        {/* Main Visualization */}
        <div className="bg-gray-900/50 border border-neon-blue/30 rounded-3xl p-8 mb-8">
          {/* Stage 0: Original Message */}
          {stage === 0 && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-8 rounded-2xl mb-8 inline-block">
                <p className="text-5xl font-bold text-white">{message}</p>
              </div>
              <Button
                onClick={handleBreakIntoPackets}
                variant="neon"
                size="xl"
                className="text-xl"
              >
                Break Into Packets
              </Button>
            </motion.div>
          )}

          {/* Stage 1: Breaking Apart */}
          {stage === 1 && (
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {packets.map((packet, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl p-6 border-4 border-white shadow-2xl"
                  initial={{ scale: 1, x: 0, y: 0 }}
                  animate={{
                    scale: [1, 1.1, 1],
                    x: [(idx - 1.5) * 0, (idx - 1.5) * 80],
                    y: [0, Math.sin(idx) * 40],
                  }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                >
                  <div className="text-2xl mb-2">📦</div>
                  <p className="text-3xl font-bold text-white">{packet}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Stage 2: Traveling Through Network */}
          {stage === 2 && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                Packets Taking Different Routes
              </h3>
              
              <div className="relative h-[400px] bg-black/30 rounded-2xl overflow-hidden">
                {/* Network nodes */}
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-5xl">
                  📱
                </div>
                <div className="absolute top-1/2 right-8 transform -translate-y-1/2 text-5xl">
                  📱
                </div>
                
                {/* Middle routers */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-4xl">
                  📡
                </div>
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 text-4xl">
                  📡
                </div>

                {/* Animated packets taking different routes */}
                {packets.map((packet, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute bg-neon-blue text-white px-4 py-2 rounded-lg font-bold shadow-lg shadow-neon-blue"
                    initial={{ left: "8%", top: "50%" }}
                    animate={{
                      left: ["8%", "48%", "92%"],
                      top: [
                        "50%",
                        idx % 2 === 0 ? "25%" : "75%",
                        "50%",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      delay: idx * 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    📦 {packet}
                  </motion.div>
                ))}
              </div>

              <p className="text-xl text-gray-300 text-center">
                Each packet can take a different path through the network!
              </p>
            </div>
          )}

          {/* Stage 3: Reassembling */}
          {stage === 3 && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                Reassembling at Destination
              </h3>

              <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
                {packets.map((packet, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gradient-to-br from-neon-green to-neon-blue rounded-2xl p-4 border-2 border-white"
                    initial={{
                      x: (idx - 1.5) * 100,
                      y: Math.sin(idx) * 50,
                      scale: 0.8,
                    }}
                    animate={{
                      x: 0,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.2,
                    }}
                  >
                    <div className="text-xl mb-1">📦</div>
                    <p className="text-xl font-bold text-white">{packet}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-neon-green text-5xl mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                ↓
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-neon-green to-neon-blue p-8 rounded-2xl inline-block"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, type: "spring" }}
              >
                <p className="text-5xl font-bold text-white">{message}</p>
              </motion.div>

              <motion.p
                className="text-2xl text-neon-green font-bold mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                ✓ Message Reassembled Successfully!
              </motion.p>

              <Button
                onClick={handleReset}
                variant="outline"
                size="lg"
                className="mt-8"
              >
                Watch Again
              </Button>
            </motion.div>
          )}
        </div>

        {/* Explanation */}
        <motion.div
          className="bg-gradient-to-r from-neon-blue/10 to-neon-green/10 border border-neon-blue/50 rounded-2xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Why Use Packets?
          </h3>
          <div className="space-y-3 text-lg text-gray-300">
            <p>
              📦 <strong className="text-neon-blue">Efficiency:</strong> Smaller chunks
              are easier to send and manage
            </p>
            <p>
              🔄 <strong className="text-neon-blue">Reliability:</strong> If one packet
              fails, only that packet needs to be resent
            </p>
            <p>
              🛣️ <strong className="text-neon-blue">Multiple Paths:</strong> Packets can
              take different routes to avoid congestion
            </p>
            <p>
              ⚡ <strong className="text-neon-blue">Speed:</strong> Multiple packets can
              travel simultaneously
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
