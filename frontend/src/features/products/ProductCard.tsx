import type { Product } from "../../types";
import { useSystemBuilder } from "../../context/SystemBuilderContext";
import { formatCurrency } from "../../lib/format";
import { VariantSwatches } from "./VariantSwatches";
import { QuantityStepper } from "./QuantityStepper";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const { activeVariant, quantities, setActiveVariant, setQuantity } = useSystemBuilder();

  const activeVariantId = activeVariant[product.id] ?? product.variants[0].id;
  const activeVariantData =
    product.variants.find((variant) => variant.id === activeVariantId) ?? product.variants[0];
  const quantity = quantities[activeVariantId] ?? 0;
  const isSelected = quantity > 0;

  return (
    <div
      className={`flex gap-4 rounded-card border bg-white p-3 xl:flex-col ${
        isSelected ? "border-brand-600" : "border-white"
      }`}
    >
      <div className="flex flex-col items-start gap-2 xl:w-full">
        {product.badge && (
          <span className="rounded-pill bg-badge px-[6px] py-0.5 text-[11px] font-semibold text-white">
            {product.badge}
          </span>
        )}
        <div className="xl:flex xl:w-full xl:justify-center">
          <ProductImage category={product.category} image={product.image} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-[12px] font-semibold text-product-title md:text-[16px] xl:text-[18px]">
            {product.name}
          </h3>
          <p className="text-[10px] text-ink-500 md:text-[12px] xl:text-[14px]">
            {product.description}
          </p>
          {product.learnMoreUrl && (
            <a
              href={product.learnMoreUrl}
              className="text-[10px] font-medium text-link underline md:text-[12px] xl:text-[14px]"
            >
              Learn More
            </a>
          )}
        </div>

        <VariantSwatches
          variants={product.variants}
          activeVariantId={activeVariantId}
          onSelect={(variantId) => setActiveVariant(product.id, variantId)}
        />

        <div className="flex items-center justify-between">
          <QuantityStepper
            quantity={quantity}
            onChange={(next) => setQuantity(activeVariantId, next)}
            min={product.required ? 1 : 0}
            disabled={activeVariantData.price === 0}
          />
          <div className="text-right xl:flex xl:items-baseline xl:gap-2">
            {activeVariantData.originalPrice && (
              <div className="text-[16px] text-price-strike-step line-through">
                {formatCurrency(activeVariantData.originalPrice)}
              </div>
            )}
            <div className="text-[16px] font-semibold text-price-actual-step">
              {activeVariantData.price === 0 ? "FREE" : formatCurrency(activeVariantData.price)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
