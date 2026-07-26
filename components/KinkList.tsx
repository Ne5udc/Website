import { kinklist } from "@/data/commissions";

export default function KinkList() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <div className="bg-zinc-900 rounded-2xl p-6 border border-green-900/40">
        <h3 className="text-green-400 font-bold text-lg mb-4">✓ Will do</h3>
        <ul className="space-y-2 text-zinc-300">
          {kinklist.will.map((k) => (
            <li key={k} className="flex gap-2"><span className="text-green-500">•</span>{k}</li>
          ))}
        </ul>
      </div>
      <div className="bg-zinc-900 rounded-2xl p-6 border border-red-900/40">
        <h3 className="text-red-400 font-bold text-lg mb-4">✗ Won't do</h3>
        <ul className="space-y-2 text-zinc-300">
          {kinklist.wont.map((k) => (
            <li key={k} className="flex gap-2"><span className="text-red-500">•</span>{k}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}