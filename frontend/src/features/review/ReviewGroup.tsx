import type { ReactNode } from "react";

export function ReviewGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="last-of-type:border-b-0 border-b border-stepper-border-review py-0.5">
      <span className="text-[11px] font-medium uppercase tracking-wide text-ink-400">{label}</span>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
