"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToNext = () => {
    document.getElementById("section-1")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="section-0"
      className="min-h-screen flex items-center justify-center relative px-6 py-20"
    >
      {/* Top navigation bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌐</span>
            <span className="font-semibold text-lg">Internet 101</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto w-full mt-16">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How Does the Internet Work?
        </motion.h1>

        {/* Large Visual - Horizontal */}
        <motion.div
          className="bg-card border-2 border-border rounded-3xl p-12 mb-12 relative overflow-x-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-6 min-w-max px-4">
            {/* User sending */}
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-8xl">👨‍💻</div>
              <div className="text-2xl font-bold text-foreground">YOU</div>
            </motion.div>

            {/* Arrow right */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-2 w-12 bg-primary rounded-full" />
              <motion.div
                className="text-primary text-4xl"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ▶
              </motion.div>
            </motion.div>

            {/* Message packet */}
            <motion.div
              className="bg-primary/10 border-4 border-primary rounded-2xl px-8 py-6 relative flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <div className="text-4xl mb-2">📱</div>
              <div className="text-xl font-semibold text-foreground whitespace-nowrap">
                Message: "Hello!"
              </div>
            </motion.div>

            {/* Arrow right */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <motion.div
                className="text-primary text-4xl"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                ▶
              </motion.div>
              <div className="h-2 w-12 bg-primary rounded-full" />
            </motion.div>

            {/* The mystery box */}
            <motion.div
              className="relative bg-muted/20 border-2 border-dashed border-muted-foreground/50 rounded-2xl px-10 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="text-6xl">❓</div>
                <div className="text-2xl font-bold text-muted-foreground whitespace-nowrap">
                  What happens here?
                </div>
              </div>
            </motion.div>

            {/* Arrow right */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <div className="h-2 w-12 bg-primary rounded-full" />
              <motion.div
                className="text-primary text-4xl"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
              >
                ▶
              </motion.div>
            </motion.div>

            {/* Friend receiving */}
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="text-8xl">👩‍💻</div>
              <div className="text-2xl font-bold text-foreground">FRIEND</div>
              <motion.div
                className="flex items-center gap-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8, type: "spring" }}
              >
                <div className="text-3xl">✅</div>
                <div className="text-xl text-accent font-semibold">Received!</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Corner decoration */}
          <div className="absolute top-6 right-6 text-6xl opacity-20">🌐</div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <Button
            onClick={scrollToNext}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-7 text-2xl rounded-2xl"
          >
            Let's Find Out <ArrowRight className="ml-3 w-7 h-7" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
