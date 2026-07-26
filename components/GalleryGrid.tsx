"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArtPiece } from "@/data/gallery";

export default function GalleryGrid({ items }: { items: ArtPiece[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {items.map((art, i) => (
        <motion.div
          key={art.src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.03 }}
          className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
        >
          <Image
            src={art.src}
            alt={art.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
            <p className="text-white font-semibold">{art.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}