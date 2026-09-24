"use client";

import { motion } from "framer-motion";

export function HistoryTimelineSection() {
  return (
    <section
      id="section-2"
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
            02 / HISTORY
          </div>
          <h2 className="text-5xl font-bold text-foreground">
            How Did It Start?
          </h2>
        </motion.div>

        {/* Main Visual Timeline */}
        <motion.div
          className="bg-card border-2 border-border rounded-3xl p-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Timeline Points */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-32 left-0 right-0 h-2 bg-primary/20 rounded-full" />
            <motion.div
              className="absolute top-32 left-0 h-2 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.4 }}
            />

            <div className="grid grid-cols-5 gap-6 relative">
              {/* 1969 - ARPANET begins */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-2xl font-bold text-primary mb-4">1969</div>
                <motion.div
                  className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-4xl mb-6 relative z-10"
                  whileInView={{ scale: [1, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  🖥️
                </motion.div>
                <div className="text-lg font-semibold text-foreground text-center mb-2">
                  ARPANET begins
                </div>
                <div className="text-base text-muted-foreground text-center">
                  4 computers
                </div>
              </motion.div>

              {/* 1970s - Networks connecting */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <div className="text-2xl font-bold text-primary mb-4">1970s</div>
                <motion.div
                  className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-4xl mb-6 relative z-10"
                  whileInView={{ scale: [1, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  🌐
                </motion.div>
                <div className="text-lg font-semibold text-foreground text-center mb-2">
                  More networks
                </div>
                <div className="text-base text-muted-foreground text-center">
                  start connecting
                </div>
              </motion.div>

              {/* 1983 - TCP/IP */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-2xl font-bold text-primary mb-4">1983</div>
                <motion.div
                  className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-4xl mb-6 relative z-10"
                  whileInView={{ scale: [1, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  🔗
                </motion.div>
                <div className="text-lg font-semibold text-foreground text-center mb-2">
                  TCP/IP
                </div>
                <div className="text-base text-muted-foreground text-center">
                  ARPANET's standard
                </div>
              </motion.div>

              {/* 1989-91 - World Wide Web */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <div className="text-2xl font-bold text-primary mb-4">1989–91</div>
                <motion.div
                  className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-4xl mb-6 relative z-10"
                  whileInView={{ scale: [1, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  🌍
                </motion.div>
                <div className="text-lg font-semibold text-foreground text-center mb-2">
                  WEB invented
                </div>
                <div className="text-base text-muted-foreground text-center">
                  by Tim Berners-Lee
                </div>
              </motion.div>

              {/* TODAY */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
              >
                <div className="text-2xl font-bold text-primary mb-4">TODAY</div>
                <motion.div
                  className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl mb-6 relative z-10"
                  whileInView={{ scale: [1, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  📱💻
                </motion.div>
                <div className="text-lg font-semibold text-foreground text-center mb-2">
                  Billions
                </div>
                <div className="text-base text-muted-foreground text-center">
                  connected
                </div>
              </motion.div>
            </div>
          </div>

          {/* Key Message */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6 }}
          >
            <div className="text-4xl font-bold text-foreground mb-4">
              From 4 computers → to Billions!
            </div>
            <div className="text-xl text-muted-foreground">
              1969: ARPANET connected 4 computers<br />
              1970s: More networks started connecting<br />
              1983: TCP/IP became ARPANET's standard<br />
              1989–91: Tim Berners-Lee invented the World Wide Web<br />
              Today: Billions of devices connected worldwide!
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
