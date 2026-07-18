import { useProducts } from "../../context/ProductsContext";
import { useSystemBuilder } from "../../context/SystemBuilderContext";
import { AccordionStep } from "../accordion/AccordionStep";
import { SensorIcon } from "../../icons/SensorIcon";
import { ProductCard } from "../products/ProductCard";

export function SensorsStep() {
  const { sensors } = useProducts();
  const { openStep, toggleStep, activeVariant, quantities } = useSystemBuilder();

  const selectedCount = sensors.filter((product) => {
    const variantId = activeVariant[product.id];
    return (quantities[variantId] ?? 0) > 0;
  }).length;

  return (
    <AccordionStep
      stepId="sensors"
      order={3}
      title="Choose your sensors"
      icon={<SensorIcon />}
      selectedLabel={selectedCount > 0 ? `${selectedCount} selected` : undefined}
      isOpen={openStep === "sensors"}
      onToggle={toggleStep}
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {sensors.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </AccordionStep>
  );
}
