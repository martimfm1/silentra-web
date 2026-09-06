"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const INTRO_DURATION = 2100;

export function IntroAnimation() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), INTRO_DURATION);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050505]"
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 0.82, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute h-24 w-24 overflow-hidden rounded-[26px] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.55)] sm:h-28 sm:w-28 sm:rounded-[30px]"
          >
            <Image
              src="/silentra-logo.png"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="112px"
            />
          </motion.div>

          <motion.div
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-40 flex flex-col items-center sm:mt-44"
          >
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.46,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block font-sans text-sm font-semibold tracking-[0.34em] text-white sm:text-base"
              >
                SILENTRA
              </motion.span>
            </div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{
                duration: 0.65,
                delay: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 h-px bg-white/25"
            />

            <motion.span
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.96, ease: "easeOut" }}
              className="mt-3 text-[9px] uppercase tracking-[0.32em] text-[#6f6f6f]"
            >
              Websites · Software · Digital
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-10 left-1/2 h-px w-28 -translate-x-1/2 origin-left bg-white/10 sm:bottom-12 sm:w-36"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
