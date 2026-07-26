import Image from "next/image";
import Link from "next/link";
import SlotCounter from "@/components/SlotCounter";
import KinkList from "@/components/KinkList";
import TosAccordion from "@/components/TosAccordion";
import { tiers, contact } from "@/data/commissions";

export default function CommissionsPage() {
  return (
    <main className="space-y-16 py-12 px-4">
      <Link
  href="/"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cream-100 border border-cream-200 text-brand-700 font-semibold hover:bg-cream-200 hover:border-brand-400/40 transition-all"
>
  <span aria-hidden="true">←</span>
  Back to Home
</Link>
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">Commissions</h1>
        <SlotCounter />
      </section>

      <section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((tier) => (
          <div key={tier.name} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-600/50 transition-colors">
            <div className="relative aspect-square">
              <Image src={tier.example} alt={tier.name} fill unoptimized className="object-cover" sizes="33vw" />
            </div>
            <div className="p-5 space-y-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <span className="text-purple-400 font-bold text-lg">{tier.price}</span>
              </div>
              <p className="text-zinc-400 text-sm">{tier.description}</p>
              <ul className="text-sm text-zinc-300 space-y-1">
                {tier.includes.map((inc) => (
                  <li key={inc}>· {inc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">Will / Won't Do</h2>
        <KinkList />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">Terms of Service</h2>
        <TosAccordion />
        <p className="text-center text-sm text-blue-700 mt-4">
  Quick summary above —{" "}
  <Link href="/tos" className="underline font-semibold hover:text-blue-950">
    read the full Terms of Service
  </Link>
</p>
      </section>

      <section className="text-center space-y-6">
  <h2 className="text-2xl font-bold text-white">Ready to commission?</h2>
  <p className="text-zinc-400 max-w-md mx-auto">
    DM me on Discord or Telegram with your idea and reference sheets.
    Please read the ToS above before reaching out.
  </p>
  <div className="flex flex-wrap gap-4 justify-center">
    {/* Discord */}
    <a
      href={`https://discord.com/users/1007773922479050763`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 bg-[#5865F2] hover:bg-[#4752c4] rounded-xl text-white font-bold transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
      {contact.discord}
    </a>

    {/* Telegram */}
    <a
      href={`https://t.me/${contact.telegram}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 bg-[#26A5E4] hover:bg-[#1e8dc4] rounded-xl text-white font-bold transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
      @{contact.telegram}
    </a>
  </div>
  <p className="text-zinc-500 text-sm">
    Copy my Discord handle: <code className="bg-zinc-800 px-2 py-1 rounded text-zinc-300 select-all">{contact.discord}</code>
  </p>
</section>

    </main>
  );
}