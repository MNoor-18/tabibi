import type { ReactNode } from "react";

export function Metric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 items-center text-center">
      <div className="mx-auto grid h-10.5 w-10.5 place-items-center rounded-full bg-white/10">{icon}</div>
      <div className="text-sm font-semibold">{value}</div>
      <div className="text-[10px] text-white">{label}</div>
    </div>
  );
}

export function InfoTile({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-border bg-canvas p-4">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <span className="text-xs font-black">{label}</span>
      </div>
      <p className="mt-3 text-sm font-black">{value}</p>
    </div>
  );
}
