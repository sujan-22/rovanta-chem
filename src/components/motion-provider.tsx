"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

/*
 * `reducedMotion="user"` lets Motion honour the OS setting internally: it drops
 * transform animations and keeps opacity. Doing it here rather than branching
 * on `useReducedMotion()` inside each component matters, because that hook
 * resolves differently on the server and on the client, which made every
 * animated element hydrate with mismatched inline styles for anyone browsing
 * with Reduce Motion switched on.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
