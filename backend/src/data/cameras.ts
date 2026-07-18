import type { Product } from "../types";

export const cameras: Product[] = [
  {
    id: "cam-v4",
    name: "Wyze Cam v4",
    description: "The clearest Wyze Cam ever made.",
    category: "camera",
    learnMoreUrl: "#",
    badge: "Save 22%",
    variants: [
      {
        id: "cam-v4-white",
        label: "White",
        price: 27.98,
        originalPrice: 35.98,
      },
      { id: "cam-v4-grey", label: "Grey", price: 27.98, originalPrice: 35.98 },
      {
        id: "cam-v4-black",
        label: "Black",
        price: 27.98,
        originalPrice: 35.98,
      },
    ],
  },
  {
    id: "cam-pan-v3",
    name: "Wyze Cam Pan v3",
    description: "360° pan and 180° tilt security camera.",
    category: "camera",
    learnMoreUrl: "#",
    badge: "Save 12%",
    variants: [
      {
        id: "cam-pan-v3-white",
        label: "White",
        price: 34.98,
        originalPrice: 39.98,
      },
      {
        id: "cam-pan-v3-black",
        label: "Black",
        price: 34.98,
        originalPrice: 39.98,
      },
    ],
  },
  {
    id: "cam-floodlight-v2",
    name: "Wyze Cam Floodlight v2",
    description: "A 2K HDR floodlight camera with a 160° wide-angle view for your garage.",
    category: "camera",
    learnMoreUrl: "#",
    badge: "Save 22%",
    variants: [
      {
        id: "cam-floodlight-v2-white",
        label: "White",
        price: 69.98,
        originalPrice: 89.98,
      },
      {
        id: "cam-floodlight-v2-black",
        label: "Black",
        price: 69.98,
        originalPrice: 89.98,
      },
    ],
  },
  {
    id: "duo-cam-doorbell",
    name: "Wyze Duo Cam Doorbell",
    description: "Two cameras. Two views. Double the porch protection.",
    category: "camera",
    learnMoreUrl: "#",
    variants: [{ id: "duo-cam-doorbell-standard", label: "Standard", price: 69.98 }],
  },
  {
    id: "battery-cam-pro",
    name: "Wyze Battery Cam Pro",
    description:
      "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.",
    category: "camera",
    learnMoreUrl: "#",
    variants: [
      { id: "battery-cam-pro-white", label: "White", price: 89.98 },
      { id: "battery-cam-pro-black", label: "Black", price: 89.98 },
    ],
  },
];
