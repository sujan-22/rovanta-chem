"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

/*
 * Reduced motion is handled globally by `MotionProvider`, not by a hook here:
 * `useReducedMotion()` resolves differently on the server and the client, so
 * branching on it made the initial inline styles mismatch during hydration.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
    return (
        <motion.div
            className={cn(className)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
