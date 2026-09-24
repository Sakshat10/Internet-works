"use client";

import { motion } from "framer-motion";

export function WhatIsInternetSection() {
  return (
    <section
      id="section-1"
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
          <div className="section-label mb-4">01 / INTERNET</div>
          <h2 className="section-title">
            What is the Internet?
          </h2>
        </motion.div>

        {/* Main Comparison - Side by Side */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
          {/* Real Life Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-muted/5 rounded-3xl blur-xl" />
            <div className="relative bg-[#0F172A]/60 backdrop-blur-sm border border-muted-foreground/10 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Real Life
              </h3>
              
              {/* Network visual */}
              <div className="relative h-64 flex items-center justify-center mb-8">
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <line x1="25%" y1="30%" x2="75%" y2="30%" stroke="currentColor" strokeWidth="2" className="text-muted-foreground" />
                  <line x1="25%" y1="30%" x2="25%" y2="70%" stroke="currentColor" strokeWidth="2" className="text-muted-foreground" />
                  <line x1="75%" y1="30%" x2="75%" y2="70%" stroke="currentColor" strokeWidth="2" className="text-muted-foreground" />
                  <line x1="25%" y1="70%" x2="75%" y2="70%" stroke="currentColor" strokeWidth="2" className="text-muted-foreground" />
                </svg>
                
                <div className="relative grid grid-cols-2 gap-20 w-full">
                  {[...Array(4)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      className="flex flex-col items-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1, type: "spring" }}
                    >
                      <div className="text-5xl">🏠</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-center">
                <p className="text-base text-muted-foreground">
                  Roads connecting houses
                </p>
                <div className="text-3xl font-bold text-foreground py-2">
                  = A CITY
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Many buildings connected together
                </p>
              </div>
            </div>
          </motion.div>

          {/* Internet Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl" />
            <div className="relative bg-[#0F172A]/90 backdrop-blur-sm border border-primary/20 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Internet
              </h3>
              
              {/* Network visual */}
              <div className="relative h-64 flex items-center justify-center mb-8">
                <svg className="absolute inset-0 w-full h-full">
                  <motion.line 
                    x1="25%" y1="30%" x2="75%" y2="30%" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  />
                  <motion.line 
                    x1="25%" y1="30%" x2="25%" y2="70%" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  />
                  <motion.line 
                    x1="75%" y1="30%" x2="75%" y2="70%" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  />
                  <motion.line 
                    x1="25%" y1="70%" x2="75%" y2="70%" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  />
                </svg>
                
                <div className="relative grid grid-cols-2 gap-20 w-full">
                  {[...Array(4)].map((_, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex flex-col items-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + idx * 0.1, type: "spring" }}
                    >
                      <div className="text-5xl">💻</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-center">
                <p className="text-base text-muted-foreground">
                  Cables/WiFi connecting computers
                </p>
                <div className="text-3xl font-bold text-primary py-2">
                  = THE INTERNET
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Many computers connected together
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Takeaway */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-primary/5 border border-primary/20 rounded-2xl px-8 py-6">
            <p className="text-lg text-foreground">
              Think of your city with houses and roads.<br />
              The Internet is like that, but with <span className="text-primary font-semibold">computers and cables</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
