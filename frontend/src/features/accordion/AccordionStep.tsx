import type { ReactNode } from "react";
import { ChevronIcon } from "../../icons/ChevronIcon";
import type { StepId } from "../../types";

type AccordionStepProps = {
  stepId: StepId;
  order: number;
  title: string;
  icon: ReactNode;
  selectedLabel?: string;
  isOpen: boolean;
  onToggle: (stepId: StepId) => void;
  children: ReactNode;
};

export function AccordionStep({
  stepId,
  order,
  title,
  icon,
  selectedLabel,
  isOpen,
  onToggle,
  children,
}: AccordionStepProps) {
  return (
    <div className={`rounded-card ${isOpen ? "bg-surface-muted" : "bg-white"}`}>
      <button
        type="button"
        onClick={() => onToggle(stepId)}
        className="flex w-full flex-col items-start gap-1.5 py-2 text-left"
      >
        <span className="w-full px-4 text-[11px] font-medium uppercase tracking-wide text-step-label">
          Step {order} of 4
        </span>
        <span className="block h-0 w-full border-b border-step-divider" />
        <span className="flex w-full items-center gap-2 px-4">
          <span>{icon}</span>
          <span className="flex-1 text-base font-semibold text-section-title">{title}</span>
          {selectedLabel && (
            <span className="text-sm font-medium text-brand-600">{selectedLabel}</span>
          )}
          <ChevronIcon className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </span>
      </button>
      {isOpen && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
}
