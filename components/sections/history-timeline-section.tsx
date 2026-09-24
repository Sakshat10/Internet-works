"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function HistoryTimelineSection() {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  const milestones = [
    {
      year: "1969",
      title: "ARPANET",
      icon: "🖥️",
      description: "The beginning",
      detail: "ARPANET connected 4 computers at universities, creating the first network",
    },
    {
      year: "1970s",
      title: "Networks Grow",
      icon: "🌐",
      description: "More connections",
      detail: "Additional networks started connecting, expanding the early Internet",
    },
    {
      year: "1983",
      title: "TCP/IP",
      icon: "🔗",
      description: "Standard protocol",
      detail: "TCP/IP became the standard, allowing different networks to communicate",
    },
    {
      year: "1989–91",
      title: "World Wide Web",
      icon: "🌍",
      description: "Web invented",
      detail: "Tim Berners-Lee created the World Wide Web at CERN",
    },
    {
      year: "TODAY",
      title: "Global Network",
      icon: "📱",
      description: "Billions connected",
      detail: "Over 5 billion people and countless devices connected worldwide",
    },
  ];

  return (
    <section
      id="section-2"
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
          <div className="section-label mb-4">02 / HISTORY</div>
          <h2 className="section-title">
            How Did the Internet Begin?
          </h2>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative mb-16">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-muted-foreground/10 hidden md:block" />
          <motion.div
            className="absolute top-16 left-0 h-0.5 bg-primary hidden md:block"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3 }}
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative">
            {milestones.map((milestone, idx) => (
              <motion.button
                key={idx}
                className={`flex flex-col items-center transition-all ${
                  activeYear === idx
                    ? ""
                    : activeYear !== null
                    ? "opacity-40"
                    : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                onClick={() => setActiveYear(activeYear === idx ? null : idx)}
                whileHover={{ y: -4 }}
              >
                {/* Year Label */}
                <div className={`text-lg font-semibold mb-4 transition-colors ${
                  activeYear === idx ? "text-primary" : "text-muted-foreground"
                }`}>
                  {milestone.year}
                </div>

                {/* Icon Node */}
                <motion.div
                  className={`relative w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 transition-all ${
                    activeYear === idx
                      ? "bg-primary/20 shadow-lg shadow-primary/30"
                      : "bg-muted/20"
                  }`}
                  animate={
                    activeYear === idx
                      ? { scale: [1, 1.1, 1] }
                      : { scale: 1 }
                  }
                  transition={{
                    duration: 0.5,
                    repeat: activeYear === idx ? Infinity : 0,
                    repeatDelay: 1,
                  }}
                >
                  <span>{milestone.icon}</span>
                  {activeYear === idx && (
                    <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" />
                  )}
                </motion.div>

                {/* Labels */}
                <div className={`text-center transition-colors ${
                  activeYear === idx ? "text-foreground" : "text-muted-foreground"
                }`}>
                  <div className="text-sm font-semibold mb-1">
                    {milestone.title}
                  </div>
                  <div className="text-xs">
                    {milestone.description}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Contextual Explanation */}
        {activeYear !== null ? (
          <motion.div
            key={activeYear}
            className="max-w-2xl mx-auto"
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
                  {milestones[activeYear].icon}
                </motion.div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-primary">
                      {milestones[activeYear].year}
                    </span>
                    <div className="h-px flex-1 bg-primary/20" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {milestones[activeYear].title}
                  </h3>
                  <p className="explanation-text">
                    {milestones[activeYear].detail}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-lg text-muted-foreground mb-3">
              Click any milestone to learn more
            </p>
            <div className="inline-block bg-[#0F172A]/60 backdrop-blur-sm border border-primary/10 rounded-xl px-6 py-4">
              <p className="text-xl font-semibold text-foreground">
                From <span className="text-primary">4 computers</span> in 1969 →
                to <span className="text-primary">billions</span> today
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
