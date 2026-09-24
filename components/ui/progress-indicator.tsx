"use client";

import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="fixed top-8 right-8 z-40 flex items-center gap-3">
      <div className="text-sm font-semibold text-muted-foreground">
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: total }).map((_, idx) => (
          <motion.div
            key={idx}
            className={`h-1 rounded-full transition-all ${
              idx < current
                ? 'w-8 bg-primary'
                : idx === current
                ? 'w-12 bg-primary'
                : 'w-6 bg-border'
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: idx * 0.05 }}
          />
        ))}
      </div>
    </div>
  );
}
