export type Variant = {
  id: string;
  label: string;
  price: number;
  originalPrice?: number;
};

export type ProductCategory = "camera" | "sensor" | "protection";

export type Product = {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  image?: string;
  learnMoreUrl?: string;
  badge?: string;
  required?: boolean;
  variants: Variant[];
};

export type PlanOption = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
};

export type StepId = "cameras" | "plan" | "sensors" | "protection";

export type StepDefinition = {
  id: StepId;
  order: number;
  title: string;
};
