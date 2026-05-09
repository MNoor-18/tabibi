import { ArrowLeft } from "lucide-react";

export default function SectionTitle({ title, onClick, more }: { title: string; onClick: () => void; more: string }) {
  return (
    <div className="mt-7 flex items-center justify-between">
      <h2 className="text-lg font-black">{title}</h2>
      <button onClick={onClick} type="button" className="text-sm font-bold text-primary flex items-center gap-1">
        {more}
        <ArrowLeft size={14}/>
      </button>
    </div>
  );
}
