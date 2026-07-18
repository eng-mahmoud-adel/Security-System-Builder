import type { ProductCategory } from "../../types";
import { formatCurrency } from "../../lib/format";
import { QuantityStepper } from "../products/QuantityStepper";
import { ProductImage } from "../products/ProductImage";

type ReviewLineItemProps = {
  label: string;
  category: ProductCategory;
  image?: string;
  quantity: number;
  price: number;
  originalPrice?: number;
  onChangeQuantity?: (quantity: number) => void;
  minQuantity?: number;
};

export function ReviewLineItem({
  label,
  category,
  image,
  quantity,
  price,
  originalPrice,
  onChangeQuantity,
  minQuantity = 0,
}: ReviewLineItemProps) {
  return (
    <div className="flex items-center gap-2 py-1">
      <ProductImage category={category} image={image} size="thumbnail" />
      <span className="flex-1 text-sm text-ink-700">{label}</span>
      {onChangeQuantity && (
        <QuantityStepper
          quantity={quantity}
          onChange={onChangeQuantity}
          min={minQuantity}
          disabled={price === 0}
          variant="review"
        />
      )}
      <div className="w-20 text-right xl:flex xl:w-auto xl:items-baseline xl:gap-2">
        {originalPrice && originalPrice > price && (
          <div className="text-[14px] text-price-strike-review line-through">
            {formatCurrency(originalPrice * quantity)}
          </div>
        )}
        <div className="text-[14px] font-semibold text-price-actual-review">
          {price === 0 ? "FREE" : formatCurrency(price * quantity)}
        </div>
      </div>
    </div>
  );
}
