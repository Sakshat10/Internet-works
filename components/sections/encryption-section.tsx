"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lock, Unlock } from "lucide-react";

export function EncryptionSection() {
  const [stage, setStage] = useState(0);

  const originalMessage = "HELLO 👋";
  const encryptedMessage = "X7#K92@$";

  const handleEncrypt = () => {
    setStage(1);
    setTimeout(() => setStage(2), 1500);
    setTimeout(() => setStage(3), 4000);
    setTimeout(() => setStage(4), 5500);
  };

  const handleReset = () => {
    setStage(0);
  };

  return (
    <section
      id="section-9"
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-black via-purple-900/10 to-black"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Encryption
        </motion.h2>

        <motion.p
          className="text-2xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Can other people read your message?
        </motion.p>

        {/* Main Visualization */}
        <div className="bg-gray-900/50 border border-neon-purple/30 rounded-3xl p-8 mb-8">
          <div className="max-w-4xl mx-auto">
            {/* Stage 0: Start */}
            {stage === 0 && (
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="mb-8">
                  <div className="text-7xl mb-4">👨‍💻</div>
                  <h3 className="text-3xl font-bold text-white mb-4">YOU</h3>
                  <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-6 rounded-2xl inline-block">
                    <p className="text-4xl font-bold text-white">{originalMessage}</p>
                  </div>
                </div>
                <Button
                  onClick={handleEncrypt}
                  variant="neon"
                  size="xl"
                  className="text-xl"
                >
                  Send Securely
                </Button>
              </motion.div>
            )}

            {/* Stage 1: Encrypting */}
            {stage === 1 && (
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-7xl mb-4">👨‍💻</div>
                <h3 className="text-3xl font-bold text-white mb-6">YOU</h3>
                
                <div className="bg-white/10 p-6 rounded-2xl mb-6">
                  <p className="text-3xl text-white">{originalMessage}</p>
                </div>

                <motion.div
                  className="text-6xl mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  🔐
                </motion.div>

                <p className="text-2xl text-neon-purple font-bold">ENCRYPTING...</p>
              </motion.div>
            )}

            {/* Stage 2: Traveling Encrypted */}
            {stage >= 2 && (
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Sender */}
                <div className="flex flex-col items-center">
                  <div className="text-6xl mb-2">👨‍💻</div>
                  <p className="text-xl text-gray-400">YOU</p>
                </div>

                {/* Encrypted Arrow Down */}
                <motion.div
                  className="flex flex-col items-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Lock className="w-12 h-12 text-neon-purple mb-2" />
                  <p className="text-sm text-gray-400">ENCRYPTED</p>
                  <div className="text-3xl text-neon-purple">↓</div>
                </motion.div>

                {/* Encrypted Message */}
                <div className="bg-gradient-to-r from-neon-purple to-neon-pink p-6 rounded-2xl text-center">
                  <Lock className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-4xl font-bold text-white font-mono">
                    {encryptedMessage}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">
                    Protected data traveling through the Internet
                  </p>
                </div>

                {/* Internet */}
                {stage >= 2 && (
                  <motion.div
                    className="flex justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="text-5xl">🌐</div>
                    <div className="text-5xl">📡</div>
                    <div className="text-5xl">🌐</div>
                  </motion.div>
                )}

                {/* Stage 3: Decrypting */}
                {stage >= 3 && (
                  <>
                    <motion.div
                      className="flex flex-col items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="text-3xl text-neon-green mb-2">↓</div>
                      <motion.div
                        className="text-6xl mb-2"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 1, repeat: stage === 3 ? Infinity : 0, ease: "linear" }}
                      >
                        🔓
                      </motion.div>
                      <p className="text-2xl text-neon-green font-bold">
                        {stage === 3 ? "DECRYPTING..." : "DECRYPTED"}
                      </p>
                    </motion.div>
                  </>
                )}

                {/* Stage 4: Received */}
                {stage >= 4 && (
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    <div className="bg-gradient-to-r from-neon-green to-neon-blue p-6 rounded-2xl mb-4">
                      <p className="text-4xl font-bold text-white">{originalMessage}</p>
                    </div>
                    <div className="text-6xl mb-2">👩‍💻</div>
                    <h3 className="text-3xl font-bold text-white">FRIEND</h3>
                    
                    <motion.p
                      className="text-2xl text-neon-green font-bold mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      ✓ Message Received Securely!
                    </motion.p>

                    <Button
                      onClick={handleReset}
                      variant="outline"
                      size="lg"
                      className="mt-6"
                    >
                      Watch Again
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Explanation */}
        <motion.div
          className="space-y-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 border border-neon-purple/50 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <Lock className="w-12 h-12 text-neon-purple flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  What is Encryption?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Encryption transforms readable information into protected data so
                  unauthorized people cannot easily understand it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/50 rounded-2xl p-6">
            <p className="text-lg text-gray-300 text-center">
              <span className="text-neon-pink font-bold">Without encryption:</span> Anyone
              can read your messages 👁️
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/50 rounded-2xl p-6">
            <p className="text-lg text-gray-300 text-center">
              <span className="text-neon-green font-bold">With encryption:</span> Only
              the intended recipient can read your messages 🔒
            </p>
          </div>

          <div className="bg-gray-800/50 border border-gray-600 rounded-2xl p-6">
            <p className="text-lg text-gray-400 text-center italic">
              Most modern websites and apps use encryption to protect your data!
              Look for "https://" in website URLs 🔐
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
