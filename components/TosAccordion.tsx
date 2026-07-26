"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tosItems } from "@/data/commissions";

export default function TosAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto space-y-2">
      {tosItems.map((item, i) => (
        <div key={item.title} className="bg-zinc-900 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-white hover:bg-zinc-800 transition-colors"
          >
            {item.title}
            <span className={`transition-transform ${open === i ? "rotate-180" : ""}`}>▾</span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="p-4 pt-0 text-zinc-400">{item.body}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}