"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function WorldNetworkSection() {
  const [packets, setPackets] = useState<Array<{ id: number; from: string; to: string }>>([]);

  const locations = [
    { name: "🇮🇳 India", x: 70, y: 45, flag: "🇮🇳" },
    { name: "🇺🇸 USA", x: 20, y: 35, flag: "🇺🇸" },
    { name: "🇬🇧 UK", x: 48, y: 28, flag: "🇬🇧" },
    { name: "🇯🇵 Japan", x: 85, y: 35, flag: "🇯🇵" },
  ];

  const connections = [
    { from: 0, to: 1 }, // India to USA
    { from: 0, to: 2 }, // India to UK
    { from: 1, to: 2 }, // USA to UK
    { from: 2, to: 3 }, // UK to Japan
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomConnection = connections[Math.floor(Math.random() * connections.length)];
      const newPacket = {
        id: Date.now(),
        from: locations[randomConnection.from].name,
        to: locations[randomConnection.to].name,
      };
      setPackets((prev) => [...prev, newPacket]);

      setTimeout(() => {
        setPackets((prev) => prev.filter((p) => p.id !== newPacket.id));
      }, 3000);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="section-3"
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-black via-green-900/10 to-black"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How Does the Internet Connect Us?
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Watch data packets travel around the world in real-time!
        </motion.p>

        {/* World Network Visualization */}
        <div className="bg-gray-900/50 border border-neon-green/30 rounded-3xl p-8 mb-12">
          <div className="relative w-full h-[500px] bg-black/30 rounded-2xl overflow-hidden">
            {/* Globe in center */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              🌍
            </motion.div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
              {connections.map((conn, idx) => {
                const from = locations[conn.from];
                const to = locations[conn.to];
                return (
                  <g key={idx}>
                    <motion.line
                      x1={`${from.x}%`}
                      y1={`${from.y}%`}
                      x2={`${to.x}%`}
                      y2={`${to.y}%`}
                      stroke="#00ff88"
                      strokeWidth="2"
                      opacity="0.3"
                      strokeDasharray="8 4"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="12"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </motion.line>
                  </g>
                );
              })}
            </svg>

            {/* Animated Packets */}
            {packets.map((packet) => {
              const fromLoc = locations.find((l) => l.name === packet.from);
              const toLoc = locations.find((l) => l.name === packet.to);
              if (!fromLoc || !toLoc) return null;

              return (
                <motion.div
                  key={packet.id}
                  className="absolute w-4 h-4 bg-neon-blue rounded-full shadow-lg shadow-neon-blue"
                  initial={{
                    left: `${fromLoc.x}%`,
                    top: `${fromLoc.y}%`,
                  }}
                  animate={{
                    left: `${toLoc.x}%`,
                    top: `${toLoc.y}%`,
                  }}
                  transition={{
                    duration: 3,
                    ease: "linear",
                  }}
                />
              );
            })}

            {/* Location Nodes */}
            {locations.map((location, idx) => (
              <motion.div
                key={idx}
                className="absolute"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-neon-green to-neon-blue p-4 rounded-full shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(0, 255, 136, 0.5)",
                      "0 0 40px rgba(0, 255, 136, 0.8)",
                      "0 0 20px rgba(0, 255, 136, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-3xl">{location.flag}</div>
                </motion.div>
                <div className="text-white text-sm font-semibold mt-2 text-center whitespace-nowrap">
                  {location.name.replace(location.flag + " ", "")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Messages */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-red-500/10 to-red-500/5 border border-red-500/50 rounded-2xl p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              ❌ The Internet is NOT one giant computer
            </h3>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-neon-green/10 to-neon-blue/10 border border-neon-green/50 rounded-2xl p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              ✅ It is millions of networks connected together
            </h3>
            <p className="text-gray-300 text-lg">
              Data travels across multiple networks and countries to reach its destination!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
