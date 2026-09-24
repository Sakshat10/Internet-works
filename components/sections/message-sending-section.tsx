"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function MessageSendingSection() {
  const [currentNode, setCurrentNode] = useState(-1);

  const nodes = [
    { icon: "👨‍💻", label: "YOU" },
    { icon: "📡", label: "Router" },
    { icon: "🏢", label: "ISP" },
    { icon: "🌐", label: "Internet" },
    { icon: "🖥️", label: "Server" },
    { icon: "🌐", label: "Internet" },
    { icon: "🏢", label: "ISP" },
    { icon: "📡", label: "Router" },
    { icon: "👩‍💻", label: "FRIEND" },
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
      className="presentation-section"
    >
      <div className="presentation-content">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label mb-4">05 / MESSAGE JOURNEY</div>
          <h2 className="section-title">
            Sending a Message to Your Friend
          </h2>
        </motion.div>

        {/* Two Phones - Top */}
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Sender Phone - Left */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-7xl mb-3">👨‍💻</div>
            <p className="text-lg font-semibold text-foreground mb-4">YOU</p>
            <div className="w-full bg-primary/5 border border-primary/30 rounded-2xl px-6 py-6">
              <p className="text-2xl text-foreground text-center">Hello 👋</p>
            </div>
          </motion.div>

          {/* Receiver Phone - Right */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-7xl mb-3"
              animate={
                currentNode === nodes.length - 1
                  ? { scale: [1, 1.1, 1] }
                  : { scale: 1 }
              }
              transition={{ duration: 0.5 }}
            >
              👩‍💻
            </motion.div>
            <p className="text-lg font-semibold text-foreground mb-4">FRIEND</p>
            <div className="w-full bg-secondary/5 border border-secondary/30 rounded-2xl px-6 py-6 min-h-[80px] flex items-center justify-center">
              {currentNode === nodes.length - 1 && (
                <motion.p
                  className="text-2xl text-foreground text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  Hello 👋
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Horizontal Journey - Full Width with Scroll */}
        <div className="relative mb-12">
          <div className="overflow-x-auto pb-6 -mx-6 px-6">
            <div className="flex items-center justify-center gap-2 min-w-max">
              {nodes.map((node, idx) => (
                <div key={idx} className="flex items-center flex-shrink-0">
                  <motion.div
                    className={`network-node ${
                      currentNode >= idx
                        ? "network-node--active"
                        : "network-node--inactive"
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: currentNode >= idx || currentNode === -1 ? 1 : 0.25,
                      scale: currentNode === idx ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="network-node__icon" style={{ width: '70px', height: '70px', fontSize: '2.25rem' }}>
                      <span>{node.icon}</span>
                    </div>
                    <div className="network-node__label">
                      <div className="text-xs font-semibold uppercase tracking-wide">
                        {node.label}
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow between nodes */}
                  {idx < nodes.length - 1 && (
                    <motion.div
                      className="flex items-center mx-2"
                      animate={{
                        opacity: currentNode > idx ? 1 : 0.2,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`connection-line w-8 ${
                          currentNode > idx ? "connection-line--active" : ""
                        }`}
                      >
                        <div className="connection-line__packet" />
                      </div>
                      <motion.div
                        className={`text-xl ml-1 ${
                          currentNode > idx ? "text-primary" : "text-muted-foreground/30"
                        }`}
                        animate={
                          currentNode === idx
                            ? { x: [0, 4, 0] }
                            : { x: 0 }
                        }
                        transition={{
                          duration: 0.5,
                          repeat: currentNode === idx ? Infinity : 0,
                        }}
                      >
                        →
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll hint */}
          {currentNode === -1 && (
            <motion.div
              className="text-center text-xs text-muted-foreground mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              ← Scroll to see full journey →
            </motion.div>
          )}
        </div>

        {/* Control Button */}
        <div className="text-center mb-12">
          {currentNode < nodes.length - 1 ? (
            <button
              onClick={handleSendMessage}
              disabled={currentNode >= 0 && currentNode < nodes.length - 1}
              className="btn-primary text-lg disabled:opacity-50"
            >
              {currentNode >= 0 && currentNode < nodes.length - 1 ? "Sending..." : "Send Message →"}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="btn-secondary text-base"
            >
              Send Another Message
            </button>
          )}
        </div>

        {/* Simple Explanation */}
        {currentNode === nodes.length - 1 && (
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl text-muted-foreground">
              Your message travels through <span className="text-primary font-semibold">{nodes.length} steps</span> in milliseconds
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
