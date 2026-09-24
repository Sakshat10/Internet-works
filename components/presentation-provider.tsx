"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Presentation, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PresentationContextType {
  isPresentationMode: boolean;
  togglePresentationMode: () => void;
  currentSection: number;
  setCurrentSection: (section: number) => void;
  totalSections: number;
  nextSection: () => void;
  prevSection: () => void;
}

const PresentationContext = createContext<PresentationContextType | undefined>(
  undefined
);

export function usePresentationMode() {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error(
      "usePresentationMode must be used within PresentationProvider"
    );
  }
  return context;
}

export function PresentationProvider({
  children,
  totalSections = 13,
}: {
  children: React.ReactNode;
  totalSections?: number;
}) {
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const togglePresentationMode = () => {
    setIsPresentationMode(!isPresentationMode);
  };

  const nextSection = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
      scrollToSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      scrollToSection(currentSection - 1);
    }
  };

  const scrollToSection = (section: number) => {
    const element = document.getElementById(`section-${section}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isPresentationMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSection();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSection();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPresentationMode, currentSection]);

  return (
    <PresentationContext.Provider
      value={{
        isPresentationMode,
        togglePresentationMode,
        currentSection,
        setCurrentSection,
        totalSections,
        nextSection,
        prevSection,
      }}
    >
      {children}

      {/* Presentation Mode Toggle Button */}
      <motion.button
        onClick={togglePresentationMode}
        className={`fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
          isPresentationMode
            ? "bg-neon-pink text-white shadow-lg shadow-neon-pink/50"
            : "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/50"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Presentation className="w-5 h-5" />
        {isPresentationMode ? "Exit Presentation" : "Presentation Mode"}
      </motion.button>

      {/* Presentation Mode Navigation */}
      <AnimatePresence>
        {isPresentationMode && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 bg-black/80 backdrop-blur-lg border border-neon-blue/50 rounded-full px-6 py-3 shadow-lg shadow-neon-blue/30"
          >
            <button
              onClick={prevSection}
              disabled={currentSection === 0}
              className="p-2 rounded-full bg-neon-blue/20 hover:bg-neon-blue/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-neon-blue" />
            </button>

            <div className="text-white font-semibold px-4">
              {currentSection + 1} / {totalSections}
            </div>

            <button
              onClick={nextSection}
              disabled={currentSection === totalSections - 1}
              className="p-2 rounded-full bg-neon-blue/20 hover:bg-neon-blue/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-6 h-6 text-neon-blue" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PresentationContext.Provider>
  );
}
