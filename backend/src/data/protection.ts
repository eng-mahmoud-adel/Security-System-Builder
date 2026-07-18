import type { Product } from "../types";

export const protection: Product[] = [
  {
    id: "protection-plan",
    name: "2-Year Protection Plan",
    description: "Covers accidental damage and defects for two years.",
    category: "protection",
    learnMoreUrl: "#",
    variants: [{ id: "protection-plan-standard", label: "Standard", price: 19.99 }],
  },
  {
    id: "4-year-protection-plan",
    name: "4-Year Protection Plan",
    description: "Covers accidental damage and defects for four years.",
    category: "protection",
    learnMoreUrl: "#",
    variants: [
      {
        id: "4-year-protection-plan-standard",
        label: "Standard",
        price: 34.99,
      },
    ],
  },
];
