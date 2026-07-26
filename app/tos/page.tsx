import Link from "next/link";
import { tosSections, tosVersion, tosUpdated } from "@/data/tos-full";

export const metadata = {
  title: "Terms of Service",
  description: "Full commission terms of service.",
};

export default function TosPage() {
  return (
    <main className="min-h-screen bg-cream-50 text-white-950 px-6 py-16">
        <Link
  href="/commissions"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cream-100 border border-cream-200 text-brand-700 font-semibold hover:bg-cream-200 hover:border-brand-400/40 transition-all"
>
  <span aria-hidden="true">←</span>
  Back to commissions
</Link>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[220px_1fr] gap-12">
        {/* ── Table of contents (desktop) ── */}
        <nav className="hidden lg:block">
          <div className="sticky top-24 space-y-1 text-sm">
            <p className="font-bold text-white-900 mb-3 uppercase tracking-wide">Contents</p>
            {tosSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block py-1 text-white-700 hover:text-blue-950 transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </nav>
        

        {/* ── Document ── */}
        <article className="space-y-10">
          <header className="border-b border-white-200 pb-6">
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="mt-2 text-white-700">
              Version {tosVersion} · Last updated {tosUpdated}
            </p>
            <p className="mt-4 text-pink-800 leading-relaxed">
              These Terms govern every commission. By paying an invoice, you agree
              to the version of these Terms in force on the invoice date.
            </p>
          </header>

          {tosSections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 space-y-3">
              <h2 className="text-2xl font-bold text-pink-900">{s.title}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-white-950/90">
                  {p}
                </p>
              ))}
            </section>
          ))}
<Link
  href="/commissions"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cream-100 border border-cream-200 text-brand-700 font-semibold hover:bg-cream-200 hover:border-brand-400/40 transition-all"
>
  <span aria-hidden="true">←</span>
  Back to Comissions
</Link>
          <footer className="pt-8 border-t border-blue-200 text-sm text-pink-700">
            Questions about these terms?{" "}
            <Link href="/commissions" className="underline hover:text-pink-950">
              Contact me before commissioning.
            </Link>
          </footer>
        </article>
      </div>
    </main>
  );
}