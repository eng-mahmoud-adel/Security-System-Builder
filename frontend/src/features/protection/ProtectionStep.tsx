import { useProducts } from "../../context/ProductsContext";
import { useSystemBuilder } from "../../context/SystemBuilderContext";
import { AccordionStep } from "../accordion/AccordionStep";
import { ProtectionIcon } from "../../icons/ProtectionIcon";
import { ProductCard } from "../products/ProductCard";

export function ProtectionStep() {
  const { protection } = useProducts();
  const { openStep, toggleStep, activeVariant, quantities } = useSystemBuilder();

  const selectedCount = protection.filter((product) => {
    const variantId = activeVariant[product.id];
    return (quantities[variantId] ?? 0) > 0;
  }).length;

  return (
    <AccordionStep
      stepId="protection"
      order={4}
      title="Add extra protection"
      icon={<ProtectionIcon />}
      selectedLabel={selectedCount > 0 ? `${selectedCount} selected` : undefined}
      isOpen={openStep === "protection"}
      onToggle={toggleStep}
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {protection.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </AccordionStep>
  );
}
