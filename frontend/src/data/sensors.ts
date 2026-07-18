import type { Product } from "../types";
import senseMotionSensorImg from "../assets/sense-motion-sensor.webp";
import senseHubImg from "../assets/sense-hub.webp";

export const sensors: Product[] = [
  {
    id: "sense-motion-sensor",
    name: "Wyze Sense Motion Sensor",
    description: "Detects movement and triggers your cameras and alerts.",
    category: "sensor",
    image: senseMotionSensorImg,
    learnMoreUrl: "#",
    variants: [{ id: "sense-motion-sensor-standard", label: "Standard", price: 29.99 }],
  },
  {
    id: "sense-hub",
    name: "Wyze Sense Hub (Required)",
    description: "Connects your sensors to the Wyze app and monitoring service.",
    category: "sensor",
    image: senseHubImg,
    learnMoreUrl: "#",
    required: true,
    variants: [
      {
        id: "sense-hub-standard",
        label: "Standard",
        price: 0,
        originalPrice: 29.92,
      },
    ],
  },
];
