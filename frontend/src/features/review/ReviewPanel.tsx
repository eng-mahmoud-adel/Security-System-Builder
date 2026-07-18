import { useProducts } from "../../context/ProductsContext";
import { useSystemBuilder } from "../../context/SystemBuilderContext";
import { formatCurrency } from "../../lib/format";
import { CamUnlimitedIcon } from "../../icons/CamUnlimitedIcon";
import { FastShippingIcon } from "../../icons/FastShippingIcon";
import guaranteeBadge from "../../assets/guarantee-badge.png";
import { ReviewGroup } from "./ReviewGroup";
import { ReviewLineItem } from "./ReviewLineItem";
import { lineOriginalTotal, lineTotal, reviewLinesFor } from "./useReviewLines";

const SHIPPING_ORIGINAL_PRICE = 5.99;

export function ReviewPanel() {
  const { cameras, sensors, protection, plans } = useProducts();
  const { quantities, planId, setQuantity, saveSystem, justSaved } = useSystemBuilder();

  const cameraLines = reviewLinesFor(cameras, quantities);
  const sensorLines = reviewLinesFor(sensors, quantities);
  const protectionLines = reviewLinesFor(protection, quantities);

  const plan = plans.find((option) => option.id === planId) ?? plans[0];

  const oneTimeLines = [...cameraLines, ...sensorLines, ...protectionLines];
  const oneTimeTotal = lineTotal(oneTimeLines);
  const originalOneTimeTotal =
    lineOriginalTotal(oneTimeLines) + SHIPPING_ORIGINAL_PRICE + (plan.originalPrice ?? plan.price);
  const grandTotal = oneTimeTotal + plan.price;
  const savings = originalOneTimeTotal - grandTotal;
  const financingEstimate = grandTotal / 12;

  return (
    <div className="rounded-card bg-surface-muted px-[20px] py-[15px]">
      <div className="flex flex-col xl:flex-row xl:items-start xl:gap-8">
        <div className="flex flex-1 flex-col gap-1.5">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-wide text-ink-400 xl:hidden">
              Review
            </span>
            <h2 className="text-[18px] font-semibold text-ink-900 md:text-[22px] xl:text-[28px]">
              Your security system
            </h2>
            <p className="text-xs text-ink-500">
              Review your personalized protection system designed to keep what matters most safe.
            </p>
          </div>

          <div className="flex flex-col gap-1.5 border-t border-stepper-border-review">
            {cameraLines.length > 0 && (
              <ReviewGroup label="Cameras">
                {cameraLines.map((line) => (
                  <ReviewLineItem
                    key={line.variantId}
                    label={line.label}
                    category={line.category}
                    image={line.image}
                    quantity={line.quantity}
                    price={line.price}
                    originalPrice={line.originalPrice}
                    onChangeQuantity={(next) => setQuantity(line.variantId, next)}
                  />
                ))}
              </ReviewGroup>
            )}

            {sensorLines.length > 0 && (
              <ReviewGroup label="Sensors">
                {sensorLines.map((line) => (
                  <ReviewLineItem
                    key={line.variantId}
                    label={line.label}
                    category={line.category}
                    image={line.image}
                    quantity={line.quantity}
                    price={line.price}
                    originalPrice={line.originalPrice}
                    onChangeQuantity={(next) => setQuantity(line.variantId, next)}
                    minQuantity={line.required ? 1 : 0}
                  />
                ))}
              </ReviewGroup>
            )}

            {protectionLines.length > 0 && (
              <ReviewGroup label="Extra Protection">
                {protectionLines.map((line) => (
                  <ReviewLineItem
                    key={line.variantId}
                    label={line.label}
                    category={line.category}
                    image={line.image}
                    quantity={line.quantity}
                    price={line.price}
                    originalPrice={line.originalPrice}
                    onChangeQuantity={(next) => setQuantity(line.variantId, next)}
                  />
                ))}
              </ReviewGroup>
            )}

            <ReviewGroup label="Plan">
              <div className="flex items-center justify-between py-1">
                <span className="flex items-center gap-[3px] text-sm text-ink-700">
                  <CamUnlimitedIcon />
                  {plan.name}
                </span>
                <div className="text-right xl:flex xl:items-baseline xl:gap-2">
                  {plan.originalPrice && (
                    <div className="text-[14px] text-price-strike-review line-through">
                      {formatCurrency(plan.originalPrice)}/mo
                    </div>
                  )}
                  <div className="text-[14px] font-semibold text-price-actual-review">
                    {plan.price === 0 ? "FREE" : `${formatCurrency(plan.price)}/mo`}
                  </div>
                </div>
              </div>
            </ReviewGroup>

            <ReviewGroup label="">
              <div className="flex items-center justify-between py-1">
                <span className="flex items-center gap-[12px] text-sm text-ink-700">
                  <FastShippingIcon />
                  Fast Shipping
                </span>
                <div className="text-right xl:flex xl:items-baseline xl:gap-2">
                  <div className="text-[14px] text-price-strike-review line-through">
                    {formatCurrency(SHIPPING_ORIGINAL_PRICE)}
                  </div>
                  <div className="text-[14px] font-semibold text-price-actual-review">FREE</div>
                </div>
              </div>
            </ReviewGroup>
          </div>
        </div>

        <div className="mt-1.5 flex flex-col gap-1 xl:mt-0 xl:flex-1">
          <div className="flex items-center justify-between gap-3">
            <img
              src={guaranteeBadge}
              alt="100% Wyze satisfaction guarantee"
              className="h-auto w-24"
            />
            <div className="flex flex-col items-end gap-1">
              <span className="rounded-pill bg-badge px-2 py-0.5 text-[11px] font-semibold text-white">
                as low as {formatCurrency(financingEstimate)}/mo
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[18px] text-price-strike-review line-through">
                  {formatCurrency(originalOneTimeTotal)}
                </span>
                <span className="text-[24px] font-bold text-price-actual-review">
                  {formatCurrency(grandTotal)}
                </span>
              </div>
            </div>
          </div>
          {savings > 0 && (
            <p className="text-center text-xs font-medium text-success">
              Congrats! You're saving {formatCurrency(savings)} on your security bundle!
            </p>
          )}

          <div className="flex flex-col gap-2 pb-[15px] pt-1">
            <button
              type="button"
              className="w-full rounded-button bg-brand-600 py-3 text-sm font-semibold text-white"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={saveSystem}
              className="text-center text-xs font-medium italic text-ink-500 underline"
            >
              {justSaved ? "Saved!" : "Save my system for later"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
