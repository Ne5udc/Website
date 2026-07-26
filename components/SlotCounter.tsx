"use client";
import { motion } from "framer-motion";
import { slots } from "@/data/commissions";

export default function SlotCounter() {
  const open = slots.total - slots.taken;
  const pct = (slots.taken / slots.total) * 100;

  return (
    <div className="max-w-md mx-auto space-y-2">
      <div className="flex justify-between text-sm">
        <span className={open > 0 ? "text-green-400 font-semibold" : "text-red-400 font-semibold"}>
          {open > 0 ? `${open} slot${open === 1 ? "" : "s"} open` : "Slots full — waitlist open"}
        </span>
        <span className="text-zinc-400">{slots.taken}/{slots.total} taken</span>
      </div>
      <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
        />
      </div>
    </div>
  );
}