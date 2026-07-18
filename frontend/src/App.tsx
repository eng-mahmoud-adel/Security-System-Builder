import { ProductsProvider } from "./context/ProductsContext";
import { SystemBuilderProvider } from "./context/SystemBuilderContext";
import { CamerasStep } from "./features/cameras/CamerasStep";
import { PlanStep } from "./features/plan/PlanStep";
import { SensorsStep } from "./features/sensors/SensorsStep";
import { ProtectionStep } from "./features/protection/ProtectionStep";
import { ReviewPanel } from "./features/review/ReviewPanel";

function App() {
  return (
    <ProductsProvider>
      <SystemBuilderProvider>
        <div className="mx-auto flex max-w-6xl flex-col gap-8 p-4 lg:flex-row lg:items-start lg:p-8 xl:max-w-7xl xl:flex-col">
          <div className="flex-1 overflow-hidden xl:w-full">
            <CamerasStep />
            <PlanStep />
            <SensorsStep />
            <ProtectionStep />
          </div>
          <div className="w-full lg:sticky lg:top-8 lg:w-96 xl:static xl:w-full">
            <ReviewPanel />
          </div>
        </div>
      </SystemBuilderProvider>
    </ProductsProvider>
  );
}

export default App;
