type QuantityStepperProps = {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  disabled?: boolean;
  variant?: "card" | "review";
};

const BUTTON_CLASS_BY_VARIANT = {
  card: "border-2 border-stepper-border bg-stepper-border text-ink-500 disabled:border-stepper-border-disabled disabled:bg-white disabled:text-ink-400",
  review:
    "border border-stepper-border-review bg-white text-ink-500 disabled:bg-stepper-bg-disabled-review disabled:text-ink-400",
};

export function QuantityStepper({
  quantity,
  onChange,
  min = 0,
  disabled,
  variant = "card",
}: QuantityStepperProps) {
  const buttonClass = `flex h-6 w-6 items-center justify-center rounded-button ${BUTTON_CLASS_BY_VARIANT[variant]}`;

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        disabled={disabled || quantity <= min}
        onClick={() => onChange(quantity - 1)}
        className={buttonClass}
      >
        −
      </button>
      <span className="w-4 text-center text-sm text-ink-900">{quantity}</span>
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange(quantity + 1)}
        className={buttonClass}
      >
        +
      </button>
    </div>
  );
}
