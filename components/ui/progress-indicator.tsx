"use client";

import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="fixed top-6 right-6 z-40 flex items-center gap-3 bg-[#0F172A]/80 backdrop-blur-xl border border-white/5 rounded-full px-4 py-2 shadow-lg">
      <div className="text-xs font-semibold text-muted-foreground tracking-wider">
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: total }).map((_, idx) => (
          <motion.div
            key={idx}
            className={`h-1 rounded-full transition-all duration-300 ${
              idx < current
                ? 'w-6 bg-primary'
                : idx === current
                ? 'w-8 bg-primary'
                : 'w-4 bg-border'
            }`}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
