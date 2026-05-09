"use client"

import { ListsHeader } from "./Headers"
import { SpecialistsListCard } from "./DoctorCards"
import { Search, SlidersHorizontal } from "lucide-react";
import { doctors } from "@/constants";
import { Doctor } from '@/types';


export default function SpecialistsScreen({ onBack, openDoctorPage, onSearch }: {onBack: () => void, onSearch: () => void; openDoctorPage: (doctor: Doctor) => void }) {
  return (
    <section className="h-screen w-full overflow-hidden bg-white px-5 pb-28 pt-6">
      <ListsHeader onBack={onBack} title="اختر المكان"/>
      {/* SEARCH  */}
      <button
          type="button"
          onClick={onSearch}
          className="mt-6 shadow-lg shadow-[#64AE891F] flex h-12 w-full items-center justify-between gap-3 rounded-lg bg-surface px-4 text-right text-sm text-muted"
        >
          <div className="flex gap-3">
            <Search size={18} className="text-primary" />
            <span>بحث...</span>
          </div>

          <div className="w-9 h-9 rounded-lg bg-primary p-1.5 text-white">
            <SlidersHorizontal className="w-full h-full rotate-90" />
          </div>
      </button>

      <h1 className="text-xl font-black mt-4 mb-3">الأخصائيين</h1>
      <main className="w-full h-full overflow-y-auto no-scrollbar py-3 gap-4">
        <div className="h-fit w-full flex flex-col gap-2 pb-6 sm:pb-20">
        {doctors.map((doctor) => (
          <SpecialistsListCard 
            name={doctor.name}
            id={doctor.id}
            specialty={doctor.specialty}
            image={doctor.image}
            workTime={doctor.workTime}
            key={doctor.id}
            openDoctorPage={() => openDoctorPage(doctor)}
             />
            ))}
        </div>
      </main>
        
    </section>
  );
}
