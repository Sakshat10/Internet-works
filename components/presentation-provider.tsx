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
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
          isPresentationMode
            ? "bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30"
            : "bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30"
        } backdrop-blur-sm`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Presentation className="w-4 h-4" />
        {isPresentationMode ? "Exit" : "Present"}
      </motion.button>

      {/* Presentation Mode Navigation - Minimal Bottom Bar */}
      <AnimatePresence>
        {isPresentationMode && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="presentation-controls"
          >
            <button
              onClick={prevSection}
              disabled={currentSection === 0}
              className="presentation-controls__button"
              aria-label="Previous section"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="presentation-controls__progress">
              {String(currentSection + 1).padStart(2, '0')} / {String(totalSections).padStart(2, '0')}
            </div>

            <button
              onClick={nextSection}
              disabled={currentSection === totalSections - 1}
              className="presentation-controls__button"
              aria-label="Next section"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PresentationContext.Provider>
  );
}
