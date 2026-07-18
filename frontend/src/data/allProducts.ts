import { cameras } from "./cameras";
import { sensors } from "./sensors";
import { protection } from "./protection";
import type { Product } from "../types";

export const allProducts: Product[] = [...cameras, ...sensors, ...protection];
