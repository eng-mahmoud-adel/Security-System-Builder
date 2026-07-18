import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { allProducts } from "../data/allProducts";
import type { StepId } from "../types";

const STORAGE_KEY = "security-system-builder";

type BuilderState = {
  quantities: Record<string, number>;
  activeVariant: Record<string, string>;
  planId: string;
};

function defaultState(): BuilderState {
  const activeVariant: Record<string, string> = {};
  allProducts.forEach((product) => {
    activeVariant[product.id] = product.variants[0].id;
  });

  return {
    quantities: {
      "cam-v4-white": 1,
      "cam-pan-v3-white": 2,
      "sense-motion-sensor-standard": 2,
      "sense-hub-standard": 1,
    },
    activeVariant,
    planId: "cam-unlimited",
  };
}

function loadSavedState(): BuilderState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as BuilderState) : null;
  } catch {
    return null;
  }
}

type SystemBuilderContextValue = {
  quantities: Record<string, number>;
  activeVariant: Record<string, string>;
  planId: string;
  openStep: StepId | null;
  setQuantity: (variantId: string, quantity: number) => void;
  setActiveVariant: (productId: string, variantId: string) => void;
  selectPlan: (planId: string) => void;
  toggleStep: (stepId: StepId) => void;
  saveSystem: () => void;
  justSaved: boolean;
};

const SystemBuilderContext = createContext<SystemBuilderContextValue | null>(null);

export function SystemBuilderProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BuilderState>(() => loadSavedState() ?? defaultState());
  const [openStep, setOpenStep] = useState<StepId | null>("cameras");
  const [justSaved, setJustSaved] = useState(false);

  function setQuantity(variantId: string, quantity: number) {
    setState((prev) => ({
      ...prev,
      quantities: { ...prev.quantities, [variantId]: Math.max(0, quantity) },
    }));
  }

  function setActiveVariant(productId: string, variantId: string) {
    setState((prev) => ({
      ...prev,
      activeVariant: { ...prev.activeVariant, [productId]: variantId },
    }));
  }

  function selectPlan(planId: string) {
    setState((prev) => ({ ...prev, planId }));
  }

  function toggleStep(stepId: StepId) {
    setOpenStep((prev) => (prev === stepId ? null : stepId));
  }

  function saveSystem() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    setJustSaved(true);
    window.setTimeout(() => setJustSaved(false), 2000);
  }

  const value = useMemo<SystemBuilderContextValue>(
    () => ({
      quantities: state.quantities,
      activeVariant: state.activeVariant,
      planId: state.planId,
      openStep,
      setQuantity,
      setActiveVariant,
      selectPlan,
      toggleStep,
      saveSystem,
      justSaved,
    }),
    [state, openStep, justSaved],
  );

  return <SystemBuilderContext.Provider value={value}>{children}</SystemBuilderContext.Provider>;
}

export function useSystemBuilder() {
  const ctx = useContext(SystemBuilderContext);
  if (!ctx) throw new Error("useSystemBuilder must be used within SystemBuilderProvider");
  return ctx;
}
