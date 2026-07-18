import type { Product, ProductCategory } from "../../types";

export type ReviewLine = {
  variantId: string;
  productId: string;
  label: string;
  category: ProductCategory;
  image?: string;
  quantity: number;
  price: number;
  originalPrice?: number;
  required?: boolean;
};

export function reviewLinesFor(
  products: Product[],
  quantities: Record<string, number>,
): ReviewLine[] {
  const lines: ReviewLine[] = [];

  products.forEach((product) => {
    product.variants.forEach((variant) => {
      const quantity = quantities[variant.id] ?? 0;
      if (quantity <= 0) return;
      const label =
        product.variants.length > 1 ? `${product.name} (${variant.label})` : product.name;
      lines.push({
        variantId: variant.id,
        productId: product.id,
        label,
        category: product.category,
        image: product.image,
        quantity,
        price: variant.price,
        originalPrice: variant.originalPrice,
        required: product.required,
      });
    });
  });

  return lines;
}

export function lineTotal(lines: ReviewLine[]) {
  return lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
}

export function lineOriginalTotal(lines: ReviewLine[]) {
  return lines.reduce((sum, line) => sum + (line.originalPrice ?? line.price) * line.quantity, 0);
}
