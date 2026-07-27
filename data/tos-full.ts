export const tosVersion = "1.3";
export const tosUpdated = "July 27, 2026";

export type TosSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const tosSections: TosSection[] = [
  {
    id: "definitions",
    title: "1. Definitions",
    paragraphs: [
      "\"Artist\" refers to the creator and seller of the commissioned artwork. \"Commissioner\" or \"Client\" refers to the individual purchasing the commission. \"Work\" refers to the final rendered image(s) delivered to the Commissioner. \"Project Files\" refers to Blender (.blend) files, scene files, render setups, node trees, intermediate renders, and any other production files used to create the Work. \"Assets\" refers to all models, textures, accessories, references, or other files supplied by the Commissioner for use in the Work. \"Business Day\" refers to Monday through Friday, excluding public holidays observed in Poland. \"Revision Round\" refers to one complete message from the Commissioner containing all requested changes.",
      "By paying an issued invoice, the Commissioner confirms that they have read, understood, and agreed to these Terms in full.",
    ],
  },

  {
    id: "eligibility",
    title: "2. Eligibility & Content",
    paragraphs: [
      "The Commissioner must be at least eighteen (18) years of age to purchase a commission and confirms this upon payment. All characters depicted in any Work are represented as adults.",
      "The Artist reserves the right, at their sole discretion, to refuse or decline any commission before payment for any lawful reason.",
    ],
  },

  {
    id: "payment",
    title: "3. Payment & Invoicing",
    paragraphs: [
      "Payment is required in full before work begins. The Artist accepts payment exclusively via direct bank transfer unless otherwise agreed in writing. Work begins only after payment has fully cleared and is visible in the Artist's account.",
      "Before requesting payment, the Artist will provide an invoice containing the exact amount due, a description of the commissioned service, the Artist's legal identity, contact information, and applicable commission details.",
      "Unless otherwise agreed, any bank transfer fees, intermediary fees, or currency conversion costs are the responsibility of the Commissioner.",
      "Custom agreements regarding discounts, additional revisions, deadlines, commercial rights, or other commission-specific conditions may be made. Such agreements must be confirmed in writing and apply only to the specific commission concerned.",
    ],
  },

  {
    id: "turnaround",
    title: "4. Turnaround & Communication",
    paragraphs: [
      "Estimated turnaround times after payment clears are: Bust (1–2 Business Days), Full Body (3–5 Business Days), and Full Scene (5–7 Business Days). These are estimates and are not guaranteed deadlines.",
      "Complex commissions, technical difficulties, illness, hardware failures, or other unforeseen circumstances may require additional time. The Artist will notify the Commissioner if a significant delay occurs.",
      "All deadlines and response periods are calculated using the Artist's local time zone in Poland (CET/CEST).",
      "The Artist will provide reasonable progress updates throughout the commission.",
      "The Commissioner agrees to respond to progress updates or requests for information within seventy-two (72) hours whenever reasonably possible. If the Commissioner becomes unresponsive for longer than seventy-two (72) hours without prior notice, the Artist may continue and complete the Work using professional judgment. Any changes requested afterward may be billed as additional work.",
    ],
  },

  {
    id: "revisions",
    title: "5. Revisions",
    paragraphs: [
      "Up to three (3) Revision Rounds of minor adjustments are included while the commission is actively in progress.",
      "Minor revisions include adjustments such as lighting changes, camera adjustments, facial expression changes, slight pose adjustments, or minor object placement.",
      "A Revision Round consists of one message from the Commissioner containing all requested changes. Multiple adjustments listed within the same message count as one Revision Round.",
      "Major revisions, including character changes, model swaps, outfit changes, pose overhauls, composition changes, background replacements, structural scene changes, or any request requiring substantial reworking, are not included and will be quoted separately before execution.",
      "Any request that materially changes the agreed scope of the commission after work has begun may be treated as additional paid work or a new commission.",
    ],
  },

  {
    id: "refunds",
    title: "6. Cancellation & Refunds",
    paragraphs: [
      "The Commissioner may cancel the commission before work begins and receive a full refund.",
      "If cancellation occurs after work has begun but before the rendering stage, the Commissioner may receive a partial refund of up to fifty percent (50%) of the commission price, minus any non-refundable banking or transaction fees.",
      "Once the commission has entered the rendering stage, refunds are generally unavailable except at the Artist's discretion.",
      "If the Artist becomes unable or unwilling to complete the commission, the Commissioner will receive either a full refund if no meaningful work has been completed, or a partial refund proportional to the unfinished portion.",
    ],
  },

  {
    id: "assets",
    title: "7. Assets & Requirements",
    paragraphs: [
      "The Commissioner confirms that they legally own or possess a valid license for every Asset supplied. Proof of ownership may be requested before work begins.",
      "The Commissioner bears sole responsibility for the legality of all submitted Assets and agrees to indemnify and protect the Artist against claims arising from Assets provided by the Commissioner.",
      "The Artist does not claim ownership of third-party Assets supplied by the Commissioner. Ownership rights of such Assets remain with their respective creators.",
      "Additional accessories added onto a model or avatar may incur an additional fee of up to $5 (USD) per accessory depending on complexity.",
      "Final render quality depends directly on the quality of supplied Assets. The Artist is not responsible for artifacts, errors, or quality issues caused by low-quality, corrupted, damaged, or poorly optimized Assets.",
    ],
  },

  {
    id: "delivery",
    title: "8. Delivery",
    paragraphs: [
      "Delivery is considered complete once the final Work has been sent through the agreed delivery method.",
      "Unless the Commissioner reports a technical delivery issue within seven (7) days, the Work will be considered successfully delivered and accepted.",
      "The Artist may retain finished renders and project materials indefinitely for archival purposes unless the Artist chooses to remove them. The Commissioner may request deletion of stored materials, and the Artist will consider such requests where reasonably possible.",
    ],
  },

  {
    id: "ownership",
    title: "9. Ownership & License",
    paragraphs: [
      "Except for third-party Assets supplied by the Commissioner, the Artist retains all copyrights and intellectual property rights in the original creative elements of the Work.",
      "The Commissioner receives a personal, non-exclusive, non-commercial, and non-transferable license to use the delivered Work.",
      "Personal use includes sharing the Work online, using it as a profile picture or banner, using it as wallpaper, and printing it for personal non-commercial use.",
      "The Commissioner may request that a Work remain private and not be displayed publicly. Such requests must be made before or during the commission process.",
      "The Work may not be sold, redistributed, claimed as the Commissioner's own creation, used for advertising, merchandise, NFTs, commercial purposes, datasets, AI systems, or machine learning without explicit written permission from the Artist.",
    ],
  },

  {
    id: "ai-policy",
    title: "10. AI & Machine Learning Restrictions",
    paragraphs: [
      "The Work may not be uploaded, submitted, processed, modified, or used with any artificial intelligence or machine learning system without explicit written permission from the Artist.",
      "This includes AI image generators, training datasets, model fine-tuning, style training, image-to-image generation, automated enhancement systems, and similar technologies.",
      "This restriction applies to commercial, free, private, and publicly available AI systems.",
    ],
  },

  {
    id: "source-files",
    title: "11. Source Files",
    paragraphs: [
      "Only the final rendered image(s) are included unless explicitly stated otherwise on the invoice.",
      "Project Files, Blender files, node setups, render configurations, and production files remain the property of the Artist.",
      "Project Files may be purchased separately if the Artist agrees. Pricing depends on project complexity, production time, included Assets, and intended usage.",
    ],
  },

  {
    id: "commercial-license",
    title: "12. Commercial Licensing",
    paragraphs: [
      "Commercial use of the Work is prohibited unless a separate written Commercial License Agreement has been purchased.",
      "Commercial licensing terms, pricing, permitted usage, duration, territory, exclusivity, and additional rights are determined individually depending on the intended use.",
      "Commercial licenses may include advertising, branding, merchandise, promotional materials, monetized content, business use, or resale-related activities.",
      "Purchasing a commercial license does not transfer copyright ownership unless explicitly agreed in writing.",
    ],
  },

  {
    id: "credit",
    title: "13. Credit",
    paragraphs: [
      "When publicly sharing the Work on platforms that reasonably support attribution, the Commissioner agrees to credit the Artist.",
      "Failure to provide credit after reasonable notice may result in suspension of permission to use the Work and refusal of future commissions.",
    ],
  },

  {
    id: "liability",
    title: "14. Limitation of Liability",
    paragraphs: [
      "The Artist shall not be liable for indirect, incidental, consequential, or special damages arising from the commission.",
      "The Artist's total liability for any claim related to the commission shall not exceed the total amount paid by the Commissioner for that commission.",
    ],
  },

  {
    id: "force-majeure",
    title: "15. Force Majeure",
    paragraphs: [
      "The Artist shall not be considered in breach of these Terms for delays caused by circumstances beyond reasonable control, including illness, injury, hardware failure, software failure, internet outages, power outages, natural disasters, government actions, or other unforeseen events.",
      "The Artist will notify the Commissioner as soon as reasonably possible if such circumstances materially affect the commission.",
    ],
  },

  {
    id: "governing-law",
    title: "16. Governing Law",
    paragraphs: [
      "These Terms shall be governed by and interpreted according to the laws of Poland.",
      "Any disputes arising from these Terms shall be handled according to applicable Polish law.",
    ],
  },

  {
    id: "legal",
    title: "17. Legal Recourse",
    paragraphs: [
      "Nothing in these Terms limits the Commissioner's legal rights under applicable law.",
      "The identifying information provided on the invoice exists to allow the Commissioner to contact the Artist and pursue available legal remedies should the Artist materially breach these Terms or fail to deliver the commissioned Work.",
    ],
  },

  {
    id: "agreement",
    title: "18. Entire Agreement",
    paragraphs: [
      "These Terms, together with the issued invoice and any written agreements specifically made for the commission, constitute the complete agreement between the Artist and Commissioner.",
      "Messages or discussions that modify the scope, price, deadline, or conditions of a commission may become part of the agreement when explicitly confirmed by both parties in writing.",
    ],
  },

  {
    id: "severability",
    title: "19. Severability",
    paragraphs: [
      "If any provision of these Terms is found invalid, unlawful, or unenforceable, that provision shall be modified or removed only to the minimum extent necessary. All remaining provisions shall continue to remain valid and enforceable.",
    ],
  },

  {
    id: "changes",
    title: "20. Changes to These Terms",
    paragraphs: [
      "The Artist may update these Terms at any time. The version number and date displayed on this page identify the current version.",
      "Each commission is governed exclusively by the version of these Terms in effect on the invoice date. Later revisions do not apply retroactively to previously accepted commissions.",
    ],
  },
];