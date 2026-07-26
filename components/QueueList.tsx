"use client";

import { motion } from "framer-motion";
import { queue, type QueueStatus } from "@/data/commissions";

const statusStyles: Record<QueueStatus, { label: string; className: string }> = {
  waiting: { label: "Waiting", className: "bg-zinc-800 text-zinc-400" },
  "in-progress": { label: "In Progress", className: "bg-purple-600/20 text-purple-400 border border-purple-600/40" },
  rendering: { label: "Rendering", className: "bg-amber-600/20 text-amber-400 border border-amber-600/40" },
  delivered: { label: "Delivered", className: "bg-emerald-600/20 text-emerald-400 border border-emerald-600/40" },
};

export function QueueList() {
  // Delivered pieces drop to the bottom, everything else keeps your array order
  const sorted = [...queue].sort(
    (a, b) => Number(a.status === "delivered") - Number(b.status === "delivered")
  );

  return (
    <div className="space-y-3">
      {sorted.map((entry, i) => {
        const status = statusStyles[entry.status];
        return (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                {/* Position number */}
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-400">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-white truncate">
                    {entry.client}
                    {entry.nsfw && (
                      <span className="ml-2 text-xs font-bold text-red-500 align-middle">18+</span>
                    )}
                  </p>
                  <p className="text-sm text-zinc-500">{entry.tier}</p>
                </div>
              </div>
              <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold ${status.className}`}>
                {status.label}
              </span>
            </div>

            {/* Progress bar */}
            <div className="mt-3 flex items-center gap-3">
              <div className="flex-1 h-2 rounded-full bg-zinc-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${entry.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.8, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    entry.status === "delivered" ? "bg-emerald-500" : "bg-purple-500"
                  }`}
                />
              </div>
              <span className="text-sm font-bold text-zinc-400 w-10 text-right">
                {entry.progress}%
              </span>
            </div>
          </motion.div>
        );
      })}

      {queue.length === 0 && (
        <p className="text-zinc-500 text-center py-10">Queue is empty — slots are open! 🎉</p>
      )}
    </div>
  );
}