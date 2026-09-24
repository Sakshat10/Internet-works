"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function InternetComponentsSection() {
  const [selectedComponent, setSelectedComponent] = useState<number | null>(null);

  const components = [
    {
      id: 0,
      name: "YOU",
      subtitle: "(Home)",
      emoji: "🏠",
      analogy: "Your house",
      description: "Where your message starts",
      detail: "This is your computer, phone, or tablet",
    },
    {
      id: 1,
      name: "ROUTER",
      subtitle: "(Postman)",
      emoji: "📬",
      analogy: "Postman",
      description: "Picks up your message",
      detail: "Forwards data from your device to the Internet",
    },
    {
      id: 2,
      name: "ISP",
      subtitle: "(Post Office)",
      emoji: "🏢",
      analogy: "Post office",
      description: "Sends to right city",
      detail: "Examples: Jio, Airtel, BSNL, ACT",
    },
    {
      id: 3,
      name: "INTERNET",
      subtitle: "(Highway)",
      emoji: "🛣️",
      analogy: "Highway",
      description: "Fast road between cities",
      detail: "Global network connecting everything",
    },
    {
      id: 4,
      name: "SERVER",
      subtitle: "(Shop)",
      emoji: "🏪",
      analogy: "Shop/Store",
      description: "Where info is stored",
      detail: "Stores websites, apps, and data",
    },
  ];

  return (
    <section
      id="section-4"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Section Number and Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">
            03 / COMPONENTS
          </div>
          <h2 className="text-5xl font-bold text-foreground">
            Who Helps Your Message Travel?
          </h2>
        </motion.div>

        {/* Horizontal Flow */}
        <motion.div
          className="bg-card border-2 border-border rounded-3xl p-12 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Horizontal Components */}
          <div className="relative flex items-center justify-between gap-4 mb-8">
            {components.map((component, idx) => (
              <div key={idx} className="flex items-center flex-1">
                {/* Component Box */}
                <motion.button
                  onClick={() => setSelectedComponent(selectedComponent === idx ? null : idx)}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all w-full ${
                    selectedComponent === idx
                      ? "bg-primary/20 border-primary scale-105"
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-6xl">{component.emoji}</div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-foreground">{component.name}</div>
                    <div className="text-sm text-muted-foreground">{component.subtitle}</div>
                  </div>
                </motion.button>

                {/* Arrow */}
                {idx < components.length - 1 && (
                  <motion.div
                    className="px-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <motion.div
                      className="text-primary text-4xl"
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
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
            className="text-center text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            Click each to learn more
          </motion.p>
        </motion.div>

        {/* Details Panel */}
        <AnimatePresence mode="wait">
          {selectedComponent !== null && (
            <motion.div
              key={selectedComponent}
              className="bg-primary/10 border-2 border-primary rounded-3xl p-8"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
                {/* Icon */}
                <motion.div
                  className="text-9xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {components[selectedComponent].emoji}
                </motion.div>

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-4xl font-bold text-foreground mb-2">
                      {components[selectedComponent].name}
                    </h3>
                    <p className="text-2xl text-primary font-semibold">
                      Like: {components[selectedComponent].analogy}
                    </p>
                  </div>
                  <div className="h-1 w-20 bg-primary rounded-full" />
                  <p className="text-2xl text-foreground">
                    {components[selectedComponent].description}
                  </p>
                  <p className="text-xl text-muted-foreground">
                    {components[selectedComponent].detail}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Key Takeaway */}
        <motion.div
          className="mt-8 bg-card border border-border rounded-2xl p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-2xl font-bold text-foreground">
            Like sending mail: <span className="text-primary">You → Postman → Post Office → Highway → Shop!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
