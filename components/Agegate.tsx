"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "age-verified";

export function useAgeVerified() {
  const [verified, setVerified] = useState<boolean | null>(null); // null = not decided yet

  useEffect(() => {
    setVerified(localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  const confirm = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVerified(true);
  };

  return { verified, confirm };
}

export function AgeGateModal({
  onConfirm,
  onDeny,
}: {
  onConfirm: () => void;
  onDeny: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 backdrop-blur-sm px-6"
      >
        <motion.div
          initial={{ scale: 0.95, y: 12 }}
          animate={{ scale: 1, y: 0 }}
          className="max-w-md w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white">Adult Content Ahead</h2>
          <p className="mt-3 text-zinc-400">
            This section contains explicit artwork intended for adults only.
            By continuing you confirm you are <span className="text-zinc-200 font-semibold">18 or older</span> and
            it&apos;s legal to view this content where you live.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <button
              onClick={onConfirm}
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 font-bold text-white transition-colors"
            >
              I&apos;m 18+ — Enter
            </button>
            <button
              onClick={onDeny}
              className="px-6 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-800 font-bold text-zinc-300 transition-colors"
            >
              Take me back
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}