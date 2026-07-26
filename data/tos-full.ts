export const tosVersion = "1.0";
export const tosUpdated = "July 25, 2026";

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
      "\"Artist\" refers to the operator of this website. \"Commissioner\" or \"Client\" refers to any person purchasing artwork. \"Work\" refers to the 3D render(s) produced under a commission. \"Assets\" refers to all models, textures, accessories, and files provided by the Commissioner for use in the Work.",
      "By submitting payment for a commission, the Commissioner confirms they have read, understood, and agreed to these Terms in full.",
    ],
  },
  {
    id: "eligibility",
    title: "2. Eligibility & Content",
    paragraphs: [
      "Commissioners must be 18 years of age or older to purchase any commission, and must confirm this before work begins. All characters depicted in any Work are adults.",
      "The Artist reserves the unconditional right to decline any commission, at any stage prior to payment, for any reason.",
    ],
  },
  {
    id: "payment",
    title: "3. Payment & Invoicing",
    paragraphs: [
      "Payment is due in full, upfront, via direct bank transfer. No other payment methods are accepted. Work begins only once payment has cleared and is visible in the Artist's account.",
      "Before any transfer details are provided, the Commissioner will receive a formal invoice stating: the exact amount due, a precise description of what is being purchased, and the identity of the seller.",
      "For transparency and the Commissioner's legal protection, every invoice includes the Artist's full government name, region of residence (e.g., \"Simon Smith, Paris, France\"), phone number, and email address. This information enables the Commissioner to pursue legal action or damages should the Artist fail to honor any article of these Terms or the invoice.",
    ],
  },
  {
    id: "turnaround",
    title: "4. Turnaround & Communication",
    paragraphs: [
      "Typical turnaround after payment clears: 1–2 business days for a Bust, 3–5 business days for a Full Body, 5–7 business days for a Full Scene. Unusually complex requests may take longer; the Commissioner will be informed before work begins.",
      "The Artist will provide periodic progress updates to ensure the Work matches the Commissioner's vision.",
      "If the Commissioner ceases communication for a period longer than 72 hours, the Work in its current state is deemed approved and finalized. Any changes requested after this point are billed as additional work at the Artist's discretion.",
    ],
  },
  {
    id: "revisions",
    title: "5. Revisions",
    paragraphs: [
      "Minor adjustments — lighting position, camera angles, and slight avatar positioning — are included at no charge during active work.",
      "A \"Revision\" is defined as any change relating to the scene itself: composition changes, background changes, pose overhauls, model swaps, or structural alterations of any kind. Revisions are not included and are billed as additional work, quoted before execution.",
    ],
  },
  {
    id: "assets",
    title: "6. Assets & Requirements",
    paragraphs: [
      "The Commissioner must legally own, or hold a valid license for, every model and texture submitted for use in the Work. Proof of ownership may be requested before work begins. The Commissioner bears sole responsibility for the legality of all Assets provided.",
      "Each additional accessory added onto the model or avatar must be owned by the Commissioner and is billed at up to $5 (USD) per asset, depending on complexity.",
      "Final render quality is directly dependent on the quality of the Assets provided. The Artist is not responsible for artifacts, errors, or quality deficiencies resulting from poorly optimized, low-quality, or corrupted Assets supplied by the Commissioner.",
    ],
  },
  {
    id: "ownership",
    title: "7. Ownership & License",
    paragraphs: [
      "The Artist retains full ownership and all rights to every Work created, including the right to display it in their portfolio and promotional material.",
      "The Commissioner receives a personal, non-commercial, non-transferable license to the Work. Personal use extends to: sharing the artwork online, using it as a profile picture or banner on social media, and using it as a template for personal, non-commercial items (for example, a t-shirt printed for the Commissioner's own use).",
      "The Work may not be sold, given away, redistributed as merchandise, used in advertising, minted, used to train AI models, or exploited for any commercial gain. Commercial licensing is available only by separate written agreement.",
    ],
  },
  {
    id: "credit",
    title: "8. Credit",
    paragraphs: [
      "The Commissioner must credit and tag the Artist on every post featuring the Work, on every platform where it is shared. Failure to credit constitutes a violation of these Terms and may result in refusal of future commissions.",
    ],
  },
  {
    id: "conduct",
    title: "9. Artist Conduct & Legal Recourse",
    paragraphs: [
      "The Commissioner is fully entitled to pursue legal action or demand damages if the Artist fails to deliver, or otherwise breaches any article stated in these Terms or on the issued invoice. The identifying information on the invoice (Section 3) exists precisely to guarantee this recourse.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to These Terms",
    paragraphs: [
      "These Terms may be updated at any time. The version number and date at the top of this page identify the current Terms. A commission is governed by the version of the Terms in force on the date of its invoice.",
    ],
  },
];