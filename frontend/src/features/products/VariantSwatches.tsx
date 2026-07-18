import type { Variant } from "../../types";

type VariantSwatchesProps = {
  variants: Variant[];
  activeVariantId: string;
  onSelect: (variantId: string) => void;
};

export function VariantSwatches({ variants, activeVariantId, onSelect }: VariantSwatchesProps) {
  if (variants.length <= 1) return null;

  return (
    <div className="flex gap-1.5">
      {variants.map((variant) => (
        <button
          key={variant.id}
          type="button"
          onClick={() => onSelect(variant.id)}
          className={`rounded-md border px-2 py-1 text-xs ${
            variant.id === activeVariantId
              ? "border-success text-success"
              : "border-border text-ink-500"
          }`}
        >
          {variant.label}
        </button>
      ))}
    </div>
  );
}
