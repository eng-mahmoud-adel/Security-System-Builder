import { useProducts } from "../../context/ProductsContext";
import { useSystemBuilder } from "../../context/SystemBuilderContext";
import { AccordionStep } from "../accordion/AccordionStep";
import { CameraIcon } from "../../icons/CameraIcon";
import { ProductCard } from "../products/ProductCard";

export function CamerasStep() {
  const { cameras } = useProducts();
  const { openStep, toggleStep, activeVariant, quantities } = useSystemBuilder();

  const selectedCount = cameras.filter((product) => {
    const variantId = activeVariant[product.id];
    return (quantities[variantId] ?? 0) > 0;
  }).length;

  return (
    <AccordionStep
      stepId="cameras"
      order={1}
      title="Choose your cameras"
      icon={<CameraIcon />}
      selectedLabel={selectedCount > 0 ? `${selectedCount} selected` : undefined}
      isOpen={openStep === "cameras"}
      onToggle={toggleStep}
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
        {cameras.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </AccordionStep>
  );
}
