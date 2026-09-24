"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
      className="presentation-section"
    >
      <div className="presentation-content">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label mb-4">07 / ADDRESSING</div>
          <h2 className="section-title">
            How Do Devices Find Each Other?
          </h2>
        </motion.div>

        {/* Analogy - Horizontal */}
        {stage < 2 && (
          <div className="grid md:grid-cols-2 gap-16 mb-16 max-w-5xl mx-auto">
            {/* Real World */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-9xl mb-6">🏠</div>
              <p className="text-2xl font-semibold text-foreground mb-6">House</p>
              <motion.div
                className="text-primary text-4xl mb-6"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.div>
              <div className="bg-[#0F172A]/60 backdrop-blur-sm border border-muted-foreground/20 rounded-2xl px-8 py-6 text-center">
                <p className="text-3xl font-bold text-foreground mb-1">123 Main St</p>
                <p className="text-base text-muted-foreground">City, Country</p>
              </div>
            </motion.div>

            {/* Digital World */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-9xl mb-6">💻</div>
              <p className="text-2xl font-semibold text-foreground mb-6">Computer</p>
              <motion.div
                className="text-primary text-4xl mb-6"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
              >
                ↓
              </motion.div>
              <div className="bg-primary/10 border border-primary/30 rounded-2xl px-8 py-6 text-center">
                <p className="text-3xl font-bold text-primary font-mono">192.168.1.10</p>
                <p className="text-base text-muted-foreground mt-1">IP Address</p>
              </div>
            </motion.div>
          </div>
        )}

        {/* Stage 2: Horizontal Data Transfer */}
        {stage === 2 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-12 max-w-6xl mx-auto">
              {/* Computer A */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-8xl mb-4">💻</div>
                <div className="bg-primary/10 border border-primary/30 rounded-xl px-6 py-3">
                  <p className="text-xl font-mono text-primary">192.168.1.10</p>
                </div>
              </motion.div>

              {/* Horizontal connection with traveling data */}
              <div className="flex-1 relative h-24 flex items-center max-w-md">
                <div className="w-full h-0.5 bg-primary/20" />
                <motion.div
                  className="absolute bg-primary/90 text-white px-6 py-3 rounded-xl text-2xl shadow-lg flex items-center gap-2"
                  initial={{ left: "0%" }}
                  animate={{ left: "calc(100% - 120px)" }}
                  transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                >
                  <span>📦</span>
                  <span className="font-semibold">Data</span>
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
                  className="text-8xl mb-4"
                  animate={{ scale: [1, 1, 1, 1.1, 1] }}
                  transition={{ duration: 2, delay: 2.5 }}
                >
                  💻
                </motion.div>
                <div className="bg-secondary/10 border border-secondary/30 rounded-xl px-6 py-3">
                  <p className="text-xl font-mono text-secondary">192.168.1.20</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Control Button */}
        <div className="text-center mb-12">
          {stage < 2 && (
            <button
              onClick={handleStart}
              disabled={stage === 1}
              className="btn-primary text-lg disabled:opacity-50"
            >
              {stage === 1 ? "Sending Data..." : "Send Data →"}
            </button>
          )}
          {stage === 2 && (
            <button
              onClick={handleReset}
              className="btn-secondary"
            >
              Watch Again
            </button>
          )}
        </div>

        {/* Explanation */}
        {stage === 2 ? (
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
          >
            <p className="text-xl text-foreground mb-2">
              <span className="text-primary font-semibold">IP Address</span> = Digital address for devices
            </p>
            <p className="text-base text-muted-foreground">
              Just like houses need street addresses, computers need IP addresses
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg text-muted-foreground">
              Every device on the Internet needs a unique address
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
