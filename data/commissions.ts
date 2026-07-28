export const slots = {
  total: 5,
  taken: 4, // update this as you fill slots
};

export type Tier = {
  name: string;
  price: string;
  description: string;
  example: string; // path to example render
  includes: string[];
};
export const contact = {
  discord: "kaspernest",          // your Discord username
  discordServer: "none currently",              // optional: invite link if you have a server
  telegram: "HeyImNest",         // without the @
};
export type QueueStatus = "waiting" | "in-progress" | "rendering" | "delivered";

export type QueueEntry = {
  id: string;
  client: string;        // display name or "Anonymous"
  tier: string;          // "Full Scene", "Single Character", etc.
  progress: number;      // 0–100
  status: QueueStatus;
  nsfw?: boolean;        // optional badge, purely informational
};

export const queue: QueueEntry[] = [
  { id: "q1", client: "KnuffelFratz", tier: "Full Scene 2x", progress: 65, status: "in-progress" },
  { id: "q2", client: "Varah Fox", tier: "Full scene 2x", progress: 55, status: "in-progress", nsfw: true },
  { id: "q3", client: "Pasomind", tier: "Full Scene", progress: 30, status: "in-progress" }
];

export const tiers: Tier[] = [
  {
    name: "Bust Render",
    price: "$15+",
    description: "Head & shoulders, posed and lit, single character.",
    example: "/renders/Nemrod.png",
    includes: ["1 character", "Simple background", "4K render", "1 revision round"],
  },
  {
    name: "Full Body",
    price: "$20+",
    description: "Full character render with pose and expression of choice.",
    example: "/renders/RiverCutie.png",
    includes: ["1 / multiple characters", "Themed background", "4K render", "2 revision rounds"],
  },
  {
    name: "Full Scene",
    price: "$100+",
    description: "Multi/Single-character scene with full environment.",
    example: "/renders/GIGI2.png",
    includes: ["up to 6 characters", "Custom environment", "4K render", "3 revision rounds"],
  },
  {
    name: "Animations",
    price: "---",
    description: "Coming Soon egzample by blammyshmoozled ( go check em out )",
    example: "/renders/example_scene.gif",
    includes: ["Coming Soon"],
  },
];

export const kinklist = {
  will: [
    "SFW & NSFW of all kinds",
    "Anthro , Human",
    "Facesitting, watersports, musk",
    "Paw play, trampling, macro/micro",
    "Non-con / dub-con scenarios (fictional characters)",
    "Bondage, BDSM, size difference",
    "Vore ( hard soft ), gore",
    "if what you want to comission me for is not on this list but doesn't appear on won't do list either, reach out and ask :)"
  ],
  wont: [
    "Anything involving minors or cub — instant decline, no exceptions",
    "Real people",
    "Hate symbols or political content",
  ],
};

export const tosItems = [
  {
    title: "Payment & Verification",
    body: "Payment is due in full upfront via direct bank transfer. Before payment, you will receive a formal invoice detailing the exact amount, the scope of work, and the artist's identity. To ensure transparency and security, the invoice includes the artist's full government name, region of residence, phone number, and email, allowing for full legal recourse should any terms of this agreement be violated.",
  },
  {
    title: "Turnaround & Communication",
    body: "Work begins once payment clears. Typical turnaround: 1–2 business days (Bust), 3–5 (Full Body), 5–7 (Full Scene). I will provide periodic updates to ensure the vision is aligned. However, if communication from the commissioner ceases for more than 72 hours, the current state of the work is considered approved and finalized. Any further changes after this period will incur additional billing.",
  },
  {
    title: "Revisions & Billing",
    body: "Minor adjustments to lighting, camera angles, and slight avatar positioning are included. A 'Revision' is defined as any structural change to the scene or composition; these are not free. Any request falling outside of minor tweaks will be billed as additional work.",
  },
  {
    title: "Asset Requirements",
    body: "You must own the models and textures provided for the render. Each additional accessory added to the model is billed at $5 per asset. Please note: final render quality is dependent on the quality of provided assets; I am not responsible for artifacts or errors caused by poorly optimized or corrupted files.",
  },
  {
    title: "Ownership & Credit",
    body: "I retain full ownership of the created artwork. You must tag/credit me as the artist on every post. Personal use includes sharing on social media, using as a profile picture, or using as a template for personal items (e.g., a single t-shirt for yourself). These items may not be sold, distributed, or used for any commercial gain.",
  },
  {
    title: "Legal & Conduct",
    body: "Commissioners are fully permitted to take legal action if the artist misconducts on any of the articles stated in the invoice or these terms. I reserve the right to decline any commission for any reason.",
  },
];