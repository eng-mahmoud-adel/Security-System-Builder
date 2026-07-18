import { useProducts } from "../../context/ProductsContext";
import { useSystemBuilder } from "../../context/SystemBuilderContext";
import { AccordionStep } from "../accordion/AccordionStep";
import { ShieldIcon } from "../../icons/ShieldIcon";
import { PlanCard } from "./PlanCard";

export function PlanStep() {
  const { plans } = useProducts();
  const { openStep, toggleStep, planId, selectPlan } = useSystemBuilder();

  return (
    <AccordionStep
      stepId="plan"
      order={2}
      title="Choose your plan"
      icon={<ShieldIcon />}
      selectedLabel="1 selected"
      isOpen={openStep === "plan"}
      onToggle={toggleStep}
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isSelected={plan.id === planId}
            onSelect={selectPlan}
          />
        ))}
      </div>
    </AccordionStep>
  );
}
