"use client";

import { motion } from "framer-motion";

export function WhatIsInternetSection() {
  return (
    <section
      id="section-1"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Section Number and Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">
            01 / INTERNET
          </div>
          <h2 className="text-5xl font-bold text-foreground">
            What is the Internet?
          </h2>
        </motion.div>

        {/* Main Comparison */}
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Real Life Side */}
          <motion.div
            className="bg-card border-2 border-border rounded-3xl p-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Real Life:
            </h3>
            
            {/* Houses connected */}
            <div className="relative h-64 flex items-center justify-center mb-8">
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <line x1="25%" y1="30%" x2="75%" y2="30%" stroke="currentColor" strokeWidth="3" className="text-primary" />
                <line x1="25%" y1="30%" x2="25%" y2="70%" stroke="currentColor" strokeWidth="3" className="text-primary" />
                <line x1="75%" y1="30%" x2="75%" y2="70%" stroke="currentColor" strokeWidth="3" className="text-primary" />
                <line x1="25%" y1="70%" x2="75%" y2="70%" stroke="currentColor" strokeWidth="3" className="text-primary" />
              </svg>
              
              {/* Houses */}
              <div className="relative grid grid-cols-2 gap-24 w-full">
                <div className="flex flex-col items-center gap-2">
                  <div className="text-6xl">🏠</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-6xl">🏠</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-6xl">🏠</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-6xl">🏠</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <p className="text-xl text-muted-foreground">
                Roads connecting houses
              </p>
              <div className="text-4xl font-bold text-foreground py-4">
                = A CITY
              </div>
              <p className="text-lg text-muted-foreground italic">
                Not one big building,<br />but many connected!
              </p>
            </div>
          </motion.div>

          {/* Internet Side */}
          <motion.div
            className="bg-card border-2 border-primary rounded-3xl p-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Internet:
            </h3>
            
            {/* Computers connected */}
            <div className="relative h-64 flex items-center justify-center mb-8">
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <motion.line 
                  x1="25%" y1="30%" x2="75%" y2="30%" 
                  stroke="#38BDF8" 
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.line 
                  x1="25%" y1="30%" x2="25%" y2="70%" 
                  stroke="#38BDF8" 
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
                <motion.line 
                  x1="75%" y1="30%" x2="75%" y2="70%" 
                  stroke="#38BDF8" 
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
                <motion.line 
                  x1="25%" y1="70%" x2="75%" y2="70%" 
                  stroke="#38BDF8" 
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />
              </svg>
              
              {/* Computers */}
              <div className="relative grid grid-cols-2 gap-24 w-full">
                <motion.div 
                  className="flex flex-col items-center gap-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  <div className="text-6xl">💻</div>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center gap-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  <div className="text-6xl">💻</div>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center gap-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  <div className="text-6xl">💻</div>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center gap-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, type: "spring" }}
                >
                  <div className="text-6xl">💻</div>
                </motion.div>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <p className="text-xl text-muted-foreground">
                Cables/WiFi connecting computers
              </p>
              <div className="text-4xl font-bold text-primary py-4">
                = THE INTERNET
              </div>
              <p className="text-lg text-muted-foreground italic">
                Not one big computer,<br />but many connected!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Takeaway */}
        <motion.div
          className="bg-primary/10 border-2 border-primary rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-2xl font-bold text-foreground">
            Think of your city with houses and roads.<br />
            The Internet is like that, but with computers and cables!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
