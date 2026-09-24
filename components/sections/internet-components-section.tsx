"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function InternetComponentsSection() {
  const [selectedComponent, setSelectedComponent] = useState<number | null>(null);

  const components = [
    {
      id: 0,
      name: "YOU",
      icon: "📱",
      analogy: "Your device",
      description: "Where your message starts",
      detail: "Your computer, phone, or tablet connects to the network",
    },
    {
      id: 1,
      name: "ROUTER",
      icon: "📡",
      analogy: "Traffic controller",
      description: "Directs data toward its destination",
      detail: "Your home router forwards data from your device to the Internet",
    },
    {
      id: 2,
      name: "ISP",
      icon: "🏢",
      analogy: "Internet provider",
      description: "Connects you to the world",
      detail: "Examples: Jio, Airtel, BSNL, ACT Fibernet",
    },
    {
      id: 3,
      name: "INTERNET",
      icon: "🌐",
      analogy: "Global network",
      description: "Worldwide connection system",
      detail: "Billions of connected computers, servers, and devices",
    },
    {
      id: 4,
      name: "SERVER",
      icon: "🖥️",
      analogy: "Data warehouse",
      description: "Where websites live",
      detail: "Powerful computers storing websites, apps, and data",
    },
  ];

  return (
    <section
      id="section-4"
      className="presentation-section"
    >
      <div className="presentation-content">
        {/* Section Label and Title */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label mb-4">03 / NETWORK</div>
          <h2 className="section-title">
            Who Helps Your Message Travel?
          </h2>
        </motion.div>

        {/* Horizontal Journey - NO BORDER CARD */}
        <div className="journey-container mb-12">
          {components.map((component, idx) => (
            <div key={idx} className="flex items-center">
              {/* Visual Node */}
              <motion.button
                onClick={() => setSelectedComponent(selectedComponent === idx ? null : idx)}
                className={`network-node journey-node ${
                  selectedComponent === idx
                    ? "network-node--active"
                    : selectedComponent !== null
                    ? "network-node--inactive"
                    : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                <div className="network-node__icon">
                  <span>{component.icon}</span>
                </div>
                <div className="network-node__label">
                  <div className="node-title">{component.name}</div>
                  <div className="node-subtitle mt-1">{component.analogy}</div>
                </div>
              </motion.button>

              {/* Connection Line */}
              {idx < components.length - 1 && (
                <motion.div
                  className="flex items-center mx-6"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                >
                  <div
                    className={`connection-line w-24 ${
                      selectedComponent === idx ? "connection-line--active" : ""
                    }`}
                  >
                    <div className="connection-line__packet" />
                  </div>
                  <motion.div
                    className={`text-2xl ml-2 ${
                      selectedComponent === idx ? "text-primary" : "text-muted-foreground/40"
                    }`}
                    animate={
                      selectedComponent === idx
                        ? { x: [0, 6, 0] }
                        : { x: 0 }
                    }
                    transition={{
                      duration: 1.5,
                      repeat: selectedComponent === idx ? Infinity : 0,
                    }}
                  >
                    →
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Instruction */}
        <motion.p
          className="text-center text-base text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          Click each component to learn more
        </motion.p>

        {/* Floating Explanation - appears near the active node */}
        <AnimatePresence mode="wait">
          {selectedComponent !== null && (
            <motion.div
              key={selectedComponent}
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-[#0F172A]/95 backdrop-blur-xl border border-primary/20 rounded-2xl p-8">
                {/* Accent line */}
                <div className="absolute top-0 left-8 w-16 h-1 bg-primary rounded-full" />
                
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl flex-shrink-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {components[selectedComponent].icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {components[selectedComponent].name}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {components[selectedComponent].description}
                    </p>
                    <p className="explanation-text text-sm">
                      {components[selectedComponent].detail}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Key Takeaway */}
        {selectedComponent === null && (
          <motion.div
            className="max-w-3xl mx-auto text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground">
              Your message doesn't magically jump from one device to another.
            </p>
            <p className="text-xl font-semibold text-foreground mt-2">
              It travels through this <span className="text-primary">entire chain</span>, step by step.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
