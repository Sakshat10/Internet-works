"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function MessageSendingSection() {
  const [currentNode, setCurrentNode] = useState(-1);

  const nodes = [
    { emoji: "👨‍💻", label: "YOU" },
    { emoji: "📡", label: "Router" },
    { emoji: "🏢", label: "ISP" },
    { emoji: "🌐", label: "Internet" },
    { emoji: "🖥️", label: "Server" },
    { emoji: "🌐", label: "Internet" },
    { emoji: "🏢", label: "ISP" },
    { emoji: "📡", label: "Router" },
    { emoji: "👩‍💻", label: "FRIEND" },
  ];

  const handleSendMessage = () => {
    setCurrentNode(0);
    nodes.forEach((_, index) => {
      setTimeout(() => {
        setCurrentNode(index);
      }, index * 500);
    });
  };

  const handleReset = () => {
    setCurrentNode(-1);
  };

  return (
    <section
      id="section-7"
      className="min-h-screen flex items-center justify-center py-12 px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sending a Message to Your Friend
        </motion.h2>

        {/* Horizontal Journey Flow */}
        <div className="relative mb-20">
          {/* Horizontal line connecting all nodes */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 hidden md:block" />
          
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-4 relative">
            {nodes.map((node, idx) => (
              <div key={idx} className="flex items-center">
                <motion.div
                  className="flex flex-col items-center relative z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: currentNode >= idx ? 1 : 0.3,
                    scale: currentNode === idx ? 1.3 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Node Circle */}
                  <div
                    className={`rounded-full flex items-center justify-center mb-3 transition-all ${
                      currentNode >= idx
                        ? "bg-[#38BDF8] shadow-lg shadow-[#38BDF8]/50 w-20 h-20 md:w-24 md:h-24"
                        : "bg-white/10 w-16 h-16 md:w-20 md:h-20"
                    }`}
                  >
                    <span className={`${currentNode >= idx ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"}`}>
                      {node.emoji}
                    </span>
                  </div>
                  <p className={`text-sm md:text-base font-bold text-center whitespace-nowrap ${
                    currentNode >= idx ? "text-white" : "text-white/40"
                  }`}>
                    {node.label}
                  </p>
                </motion.div>

                {/* Arrow between nodes */}
                {idx < nodes.length - 1 && (
                  <motion.div
                    className="text-2xl md:text-4xl mx-1 md:mx-2"
                    animate={{
                      color: currentNode > idx ? "#38BDF8" : "rgba(255,255,255,0.2)",
                      scale: currentNode === idx ? [1, 1.3, 1] : 1,
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: currentNode === idx ? Infinity : 0,
                    }}
                  >
                    →
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Message Box Display */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
          {/* Sender */}
          <div className="flex flex-col items-center">
            <div className="text-[8rem] leading-none mb-4">👨‍💻</div>
            <p className="text-3xl text-white font-bold mb-6">YOU</p>
            <div className="bg-[#38BDF8]/10 border-2 border-[#38BDF8] rounded-2xl px-8 py-6 w-full">
              <p className="text-4xl text-white text-center">Hello 👋</p>
            </div>
          </div>

          {/* Receiver */}
          <div className="flex flex-col items-center">
            <motion.div
              className="text-[8rem] leading-none mb-4"
              animate={
                currentNode === nodes.length - 1
                  ? { scale: [1, 1.15, 1] }
                  : {}
              }
              transition={{ duration: 0.5 }}
            >
              👩‍💻
            </motion.div>
            <p className="text-3xl text-white font-bold mb-6">FRIEND</p>
            <div className="bg-purple-500/10 border-2 border-purple-500 rounded-2xl px-8 py-6 w-full min-h-[100px] flex items-center justify-center">
              {currentNode === nodes.length - 1 && (
                <motion.p
                  className="text-4xl text-white text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                >
                  Hello 👋
                </motion.p>
              )}
            </div>
          </div>
        </div>

        {/* Control Button */}
        <div className="text-center mb-12">
          {currentNode < nodes.length - 1 ? (
            <Button
              onClick={handleSendMessage}
              disabled={currentNode >= 0 && currentNode < nodes.length - 1}
              className="bg-[#38BDF8] hover:bg-[#38BDF8]/80 text-white text-2xl px-12 py-8 rounded-2xl font-bold"
              size="lg"
            >
              {currentNode >= 0 && currentNode < nodes.length - 1 ? "Sending..." : "Send Message →"}
            </Button>
          ) : (
            <Button
              onClick={handleReset}
              className="bg-white/10 hover:bg-white/20 text-white text-2xl px-12 py-8 rounded-2xl font-bold border-2 border-white/20"
              size="lg"
            >
              Send Another Message
            </Button>
          )}
        </div>

        {/* Simple Explanation */}
        {currentNode === nodes.length - 1 && (
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-3xl text-white/80">
              Your message travels through <span className="text-[#38BDF8] font-bold">9 steps</span> in milliseconds! ⚡
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
