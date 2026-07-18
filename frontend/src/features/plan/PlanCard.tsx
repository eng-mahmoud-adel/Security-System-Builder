import type { PlanOption } from "../../types";
import { formatCurrency } from "../../lib/format";

type PlanCardProps = {
  plan: PlanOption;
  isSelected: boolean;
  onSelect: (planId: string) => void;
};

export function PlanCard({ plan, isSelected, onSelect }: PlanCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(plan.id)}
      className={`flex flex-col gap-2 rounded-card border bg-white p-4 text-left ${
        isSelected ? "border-brand-600" : "border-white"
      }`}
    >
      <h3 className="text-[12px] font-semibold text-product-title md:text-[16px] xl:text-[18px]">
        {plan.name}
      </h3>
      <p className="text-[10px] text-ink-500 md:text-[12px] xl:text-[14px]">{plan.description}</p>
      <div>
        {plan.originalPrice && (
          <div className="text-[16px] text-price-strike-step line-through">
            {formatCurrency(plan.originalPrice)}/mo
          </div>
        )}
        <div className="text-[16px] font-semibold text-price-actual-step">
          {plan.price === 0 ? "FREE" : `${formatCurrency(plan.price)}/mo`}
        </div>
      </div>
    </button>
  );
}
