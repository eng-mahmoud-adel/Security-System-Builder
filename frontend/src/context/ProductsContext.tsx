import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { PlanOption, Product } from "../types";
import { cameras as localCameras } from "../data/cameras";
import { sensors as localSensors } from "../data/sensors";
import { protection as localProtection } from "../data/protection";
import { plans as localPlans } from "../data/plans";
import { fetchJson } from "../lib/api";

type ProductsState = {
  cameras: Product[];
  sensors: Product[];
  protection: Product[];
  plans: PlanOption[];
};

const defaultProducts: ProductsState = {
  cameras: localCameras,
  sensors: localSensors,
  protection: localProtection,
  plans: localPlans,
};

const ProductsContext = createContext<ProductsState>(defaultProducts);

function withLocalImages(products: Product[], localProducts: Product[]): Product[] {
  const imageById = new Map(localProducts.map((product) => [product.id, product.image]));
  return products.map((product) => ({
    ...product,
    image: product.image ?? imageById.get(product.id),
  }));
}

async function loadCategory<T>(path: string, fallback: T): Promise<T> {
  try {
    return await fetchJson<T>(path);
  } catch {
    return fallback;
  }
}

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductsState>(defaultProducts);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const [cameras, sensors, protection, plans] = await Promise.all([
        loadCategory<Product[]>("/api/cameras", localCameras),
        loadCategory<Product[]>("/api/sensors", localSensors),
        loadCategory<Product[]>("/api/protection", localProtection),
        loadCategory<PlanOption[]>("/api/plans", localPlans),
      ]);

      if (cancelled) return;

      setProducts({
        cameras: withLocalImages(cameras, localCameras),
        sensors: withLocalImages(sensors, localSensors),
        protection: withLocalImages(protection, localProtection),
        plans,
      });
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>;
}

export function useProducts() {
  return useContext(ProductsContext);
}
