"use client";

import Link from "next/link";
import Image from "next/image";
import { slots, tiers, contact } from "@/data/commissions";
import { QueueList } from "@/components/QueueList";
import { motion, type Variants } from "framer-motion";

// Pick 3-6 of your best SFW pieces for the homepage.
// NSFW stays behind the age-gate in the gallery — homepage is your storefront window.
const featured = [
  { src: "/featured/Mox.png", alt: "Character render 1" },
  { src: "/featured/river2.png", alt: "Character render 2" },
  { src: "/featured/Valentines.png", alt: "Character render 3" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0, 0, 0.58, 1] },
  }),
};

export default function HomePage() {
  const slotsOpen = slots.total - slots.taken;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Full-bleed background render */}
        <Image
          src="/bghero.png"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-40"
        />
        {/* Gradient wash so text always reads */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-transparent to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 to-transparent" />

<motion.div
  initial="hidden"
  animate="show"
  className="relative z-10 text-center px-6 max-w-3xl pt-32"
>
          <motion.h1
            custom={0}
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl font-bold tracking-tight"
          >
          <span className="text-blue-500">Nest.</span>
          </motion.h1>
          <motion.p
            custom={1}
            variants={fadeUp}
            className="mt-4 text-lg md:text-xl text-zinc-300"
          >
            3D furry art &amp; character renders — SFW and beyond.
          </motion.p>

          {/* Live slot status badge */}
          <motion.div custom={2} variants={fadeUp} className="mt-6 flex justify-center">
            <span
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold border ${
                slotsOpen > 0
                  ? "border-green-500/40 bg-green-500/10 text-green-400"
                  : "border-red-500/40 bg-red-500/10 text-red-400"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  slotsOpen > 0 ? "bg-green-400 animate-pulse" : "bg-red-400"
                }`}
              />
              {slotsOpen > 0
                ? `Commissions open — ${slotsOpen} slot${slotsOpen === 1 ? "" : "s"} left`
                : "Commissions closed"}
            </span>
          </motion.div>

<         section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-2">Current Queue</h2>
            <p className="text-zinc-400 mb-6">
            Live status of active commissions. Updated whenever real progress happens.
            </p>
              <QueueList/>
          </section>

          <motion.div
            custom={3}
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/commissions"
              className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 font-bold transition-colors shadow-lg shadow-purple-900/40"
            >
              Commission Me
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 font-bold transition-colors"
            >
              View Gallery
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FEATURED WORK ────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-2">Featured Work</h2>
        <p className="text-zinc-400 mb-10">A taste of recent renders.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((piece, i) => (
            <motion.div
              key={piece.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900"
            >
              <Image
                src={piece.src}
                alt={piece.alt}
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
          >
            See the full gallery →
          </Link>
        </div>
      </section>

      {/* ── PRICING TEASER ───────────────────────────── */}
      <section className="bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-2">Commission Tiers</h2>
          <p className="text-zinc-400 mb-10">
            Starting prices — full details, ToS, and my will/won&apos;t list on the commissions page.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {tiers.slice(0, 4).map((tier) => (
              <Link
                key={tier.name}
                href="/commissions"
                className="rounded-2xl border border-zinc-800 hover:border-purple-600/60 bg-zinc-950 p-6 transition-colors"
              >
                <h3 className="font-bold text-lg">{tier.name}</h3>
                <p className="text-purple-400 text-2xl font-bold mt-2">
                  from ${tier.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────── */}
      <footer className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold">Got an idea for your character?</h2>
        <p className="text-zinc-400 mt-2 mb-6">
          DM me — Discord <span className="text-zinc-200">{contact.discord}</span> or
          Telegram <span className="text-zinc-200">@{contact.telegram}</span>
        </p>
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Nest · 18+ content behind age verification
        </p>
      </footer>
    </main>
  );
}