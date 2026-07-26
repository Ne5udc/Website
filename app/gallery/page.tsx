"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { artworks } from "@/data/gallery";
import { useAgeVerified, AgeGateModal } from "@/components/Agegate";

type Filter = "all" | "sfw" | "nsfw";

export default function GalleryPage() {
  const { verified, confirm } = useAgeVerified();
  const [filter, setFilter] = useState<Filter>("sfw");
  const [showGate, setShowGate] = useState(false);

  const requestFilter = (f: Filter) => {
    // Trying to see NSFW without verification? Gate pops up.
    if (f !== "sfw" && !verified) {
      setShowGate(true);
      return;
    }
    setFilter(f);
  };

  const visible = artworks.filter((a) => {
    if (filter === "sfw") return !a.nsfw;
    if (filter === "nsfw") return a.nsfw;
    return verified ? true : !a.nsfw; // "all" only includes NSFW if verified
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-16">
              <Link
  href="/"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cream-100 border border-cream-200 text-brand-700 font-semibold hover:bg-cream-200 hover:border-brand-400/40 transition-all"
>
  <span aria-hidden="true">←</span>
  Back to Home
</Link>
      {showGate && (
        <AgeGateModal
          onConfirm={() => {
            confirm();
            setShowGate(false);
            setFilter("nsfw");
          }}
          onDeny={() => setShowGate(false)}
        />
      )}

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="text-zinc-400 mt-2 mb-8">Renders, commissions, and personal work.</p>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-10">
          {(["sfw", "nsfw", "all"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => requestFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-colors ${
                filter === f
                  ? "bg-purple-600 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              {f === "nsfw" && !verified ? "🔞 NSFW" : f}
            </button>
          ))}
        </div>

        {/* Masonry via CSS columns — handles mixed aspect ratios natively */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {visible.map((piece, i) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 6) * 0.06, duration: 0.4 }}
              className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer"
              // onClick={() => openLightbox(piece)} ← wired up when we build the lightbox
            >
              <Image
                src={piece.src}
                alt={piece.alt}
                width={800}
                height={1000}
                unoptimized
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {piece.nsfw && (
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-red-600/90 text-xs font-bold text-white">
                  18+
                </span>
              )}
              {piece.title && (
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-semibold text-white">{piece.title}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-zinc-500 text-center py-20">Nothing here yet — check back soon!</p>
        )}
      </div>
    </main>
  );
}