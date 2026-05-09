import type { Doctor, SpecialistsListCardProp } from "@/types";
import { ChevronLeft, Star, Plus } from "lucide-react";
import Image from "next/image";

export function DoctorMiniCard({ doctor, onClick }: { doctor: Doctor; onClick: () => void }) {
  return (
    <div className="min-w-34.5 h-47.5 overflow-hidden rounded-xl bg-sky-soft flex flex-col justify-between text-right">
      <div className="p-1">
        <div className="relative h-24 overflow-hidden rounded-[10px] bg-linear-to-t to-primary from-[#4F82DB]">
          <Image src={doctor.image} alt={doctor.name} fill sizes="118px" className="object-contain object-bottom" />
        </div>

        <div className="">
          <div className="flex justify-between">
            <h3 className="mt-3 text-sm font-bold">{doctor.name}</h3>
            <div className="mt-2 flex items-center gap-2 text-xs font-bold ">
              {doctor.rating}
              <Star size={13} fill="currentColor" className="text-amber-400" />
            </div>
          </div>
          <h4 className="mt-1 truncate text-xs text-[#2D3E50]">{doctor.specialty}</h4>
        </div>
      </div>

      <button
        type="button"
        onClick={onClick}
        className="h-7.5 w-full bg-linear-to-r to-primary from-[#4F82DB] text-white font-bold flex items-center justify-center gap-2"
      >
        احجز الآن
        
      </button>
    </div>
  );
}

export function AvailableCard({ doctor, onClick }: { doctor: Doctor, onClick: () => void }) {

  return (
    <div dir="rtl" className="w-80.5 h-41.25 rounded-[20px] px-4 overflow-hidden bg-primary pt-4 text-white shadow-md">
      <div className="h-full flex items-center gap-4 justify-between">
        <div className="w-fit h-full flex flex-col items-start justify-between pb-4">
          <div>
            <h3 className="text-xl font-bold">{doctor.name}</h3>
            <p className="mt-1 text-sm ">{doctor.specialty}</p>
          </div>

          <div className="flex flex-col items-start gap-1 text-xs">
            {doctor.rating}
            <div className="flex gap-1">
              <Star className="text-amber-400" size={14} fill="currentColor" />
              <Star className="text-amber-400" size={14} fill="currentColor" />
              <Star className="text-amber-400" size={14} fill="currentColor" />
              <Star className="text-amber-400" size={14} fill="currentColor" />
            </div>
          </div>

          <button 
            type="button"
            onClick={onClick}
            className="w-27.75 h-6.5 rounded-md border border-white bg-linear-to-r to-primary from-[#4F82DB] text-[10px] shadow-md"
          >
            <span>احجز الآن</span>
          </button>
        </div>

        <div className="relative h-36.75 w-27.25">
          <Image src={doctor.image} alt={doctor.name} fill sizes="96px" className="bottom-0 object-cover object-bottom" />
        </div>
      </div>
    </div>
  );
}

export function DoctorRow({
  doctor,
  onClick,
  compact = false,
}: {
  doctor: Doctor;
  onClick: () => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-[22px] bg-surface text-right ${
        compact ? "p-0 shadow-none" : "p-3 shadow-soft"
      }`}
    >
      <div className="relative h-17 w-17 shrink-0 overflow-hidden rounded-2xl bg-primary-soft">
        <Image src={doctor.image} alt={doctor.name} fill sizes="68px" className="object-cover object-top" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-black">{doctor.name}</h3>
        <p className="mt-1 truncate text-xs text-muted">{doctor.specialty}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold text-muted">
          <span className="flex items-center gap-1 text-amber-500">
            <Star size={12} fill="currentColor" />
            {doctor.rating}
          </span>
          <span>{doctor.nextSlot}</span>
          <span>{doctor.price}</span>
        </div>
      </div>
      {!compact && <ChevronLeft size={18} className="text-muted" />}
    </button>
  );
}


export function SpecialistsListCard( doctor: SpecialistsListCardProp) {
  return (
    <div className="h-22.75 p-3 pt-0 flex items-end justify-between bg-white shadow-xl shadow-[#00000008]">

      {/* Right: Image */}
      <div className="relative w-16 h-20 overflow-hidden rounded-ee-[20px]">
        <div className="absolute bottom-0 w-16 h-16 bg-primary rounded-[20px] rounded-es-none"/>
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center: Info */}
      <div className="flex-1 px-3 text-right">
        <h3 className="font-semibold text-base ">{doctor.name}</h3>
        <p className="text-sm text-[#C7CDCA]">{doctor.specialty}</p>

        <span className="inline-block mt-2 p-1 text-xs bg-[#EBFFF5] text-[#64AE89] rounded-sm">
          {`${doctor.workTime.start} = ${doctor.workTime.end}`}
        </span>
      </div>

      {/* Left: Add Button */}
      <button
        type="button"
        onClick={doctor.openDoctorPage}
        className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-4xl"
        aria-label={`فتح صفحة ${doctor.name}`}
      >
        <Plus size={18} />
      </button>
    </div>
  );
}
