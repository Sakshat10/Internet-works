"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  layout?: "default" | "full" | "two-column";
}

export function SectionWrapper({
  id,
  number,
  title,
  subtitle,
  children,
  layout = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className="presentation-section relative"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {layout === "two-column" ? (
          <div className="grid lg:grid-cols-[35%_65%] gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                className="section-number"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {number}
              </motion.div>
              <motion.h2
                className="text-section text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {title}
              </motion.h2>
              {subtitle && (
                <motion.p
                  className="text-body-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
            <div>{children}</div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <motion.div
                className="section-number"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {number}
              </motion.div>
              <motion.h2
                className="text-section text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {title}
              </motion.h2>
              {subtitle && (
                <motion.p
                  className="text-body-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
            <div>{children}</div>
          </div>
        )}
      </div>
    </section>
  );
}
