"use client";

import { ListsHeader } from "./Headers"
import { SpecialistsListCard } from "./DoctorCards"
import { Search, SlidersHorizontal } from "lucide-react";
import { doctors, specialties, times } from "@/constants";
import { Doctor } from "@/types";
import { useMemo, useState } from "react"

export default function SearchScreen({
  filterOpen,
  onFilterToggle,
  onSpecialty,
  onTime,
  activeSpecialty,
  activeTime,
  onOpenDoctor,
  onCloseFilter,
  onBack,
}: {
  filterOpen: boolean;
  onFilterToggle: () => void;
  onSpecialty: (specialty: string) => void;
  onTime: (times: string) => void;
  activeSpecialty: string;
  activeTime: string;
  onOpenDoctor: (doctor: Doctor) => void;
  onCloseFilter: () => void;
  onBack: () => void;
}) {
  const [query, setQuery] = useState('');

  const cancelFiltering = () => {
    onTime("");
    onSpecialty("");
    onCloseFilter()
  }

  const filteredDoctors = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return doctors.filter((doctor) => {
      const matchesQuery =
        !normalizedQuery ||
        doctor.name.toLowerCase().includes(normalizedQuery) ||
        doctor.specialty.toLowerCase().includes(normalizedQuery);

      const matchesSpecialty =
        !activeSpecialty ||
        doctor.specialty.includes(activeSpecialty);

      const matchesTims =
        !activeTime ||
        doctor.workTime.start.includes(activeTime);

      return matchesQuery && matchesSpecialty && matchesTims;
    });
  }, [query, activeSpecialty, activeTime]);

  return (
    <section className="h-screen w-full overflow-hidden bg-white px-5 pb-28 pt-6">
      <ListsHeader onBack={onBack}/>
      {/* SEARCH  */}
      <div
          // onClick={onSearch}
          className="mt-6 shadow-lg shadow-[#64AE891F] flex h-12 w-full items-center justify-between gap-3 rounded-lg bg-surface px-4 text-right text-sm text-muted"
        >{}
          <Search size={25} className="text-muted" />
          <input
            className="flex-1 text-base outline-none text-[#2D3E50] px-0.5 py-px"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="بحث..."
          />

          <div onClick={onFilterToggle} className="w-9 h-9 rounded-lg bg-primary p-1.5 text-white">
            <SlidersHorizontal className="w-full h-full rotate-90" />
          </div>
      </div>
    
      <h1 className="text-xl font-black mt-4 mb-3">نتيجة البحث</h1>
      <main className="w-full h-full overflow-y-auto no-scrollbar py-3 gap-4">
        <div className="h-fit w-full flex flex-col gap-2 pb-6 sm:pb-20">
          {filteredDoctors.length === 0 ? (
            <div className="text-center text-sm text-muted">لا توجد نتائج لطلب البحث الحالي.</div>
          ) : (
            filteredDoctors.map((doctor) => (
              <SpecialistsListCard
                name={doctor.name}
                id={doctor.id}
                openDoctorPage={() => onOpenDoctor(doctor)}
                specialty={doctor.specialty}
                image={doctor.image}
                workTime={doctor.workTime}
                key={doctor.id}
              />
            ))
          )}
        </div>
      </main>

      {filterOpen && (
        <div className="absolute h-screen w-full inset-0 z-50 flex items-end bg-black/30">
          <div className="relative w-full h-112">
            <div className={`h-full w-full rounded-t-[22px] bg-[#E9F8F0] py-5 px-8 [transition:1s] ${filterOpen ? "top-0" : "-bottom-full"}`}>
              <div className="rounded-full w-10 mx-auto border-3 border-[#000000] opacity-20" />

              <div className="w-full mb-2">
                <h4 className="text-[16px] font-semibold text-[#2D3E50]">التصنيف</h4>

                {/* Specialty { AM } CARDS CONTAINER */}
                <div className="min-w-full w-fit h-12 mt-3 overflow-x-auto flex items-start gap-3.25">
                    {/* Specialty { AM } CARD */}
                    {specialties.map((sp) => (
                      <div
                        key={sp}
                        onClick={() => {
                          if (activeSpecialty === sp) {
                            onSpecialty("");
                            return;
                          }

                          onSpecialty(sp);
                        }}
                        className={`w-28.75 h-8.5 flex flex-col items-center justify-center rounded-md ${activeSpecialty === sp ? "text-white bg-primary" : "bg-white text-primary"}`}
                      >
                        <p className="w-fit text-xs ">
                          {sp}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              <div className="w-full mb-3">
                <h4 className="text-[16px] font-semibold text-[#2D3E50]">الفترة الصباحية</h4>

                {/* TIME { AM } CARDS CONTAINER */}
                <div className="min-w-full w-fit h-12 mt-3 overflow-x-auto flex items-start gap-3.25">
                    {/* TIME { AM } CARD */}
                  {times.am.map((t) => (
                    <div
                        key={t}
                        onClick={() => {
                          if (activeTime === t) {
                            onTime("");
                            return;
                          }

                          onTime(t);
                        }}
                        className={`w-28.75 h-8.5 flex flex-col items-center justify-center rounded-md ${activeTime === t ? "text-white bg-primary" : "bg-white text-primary"}`}
                      >
                      <p className="w-fit text-xs ">
                        {t}
                      </p>
                    </div>
                  ))}

                </div>
              </div>

              <div className="w-full mb-3">
                <h4 className="text-[16px] font-semibold text-[#2D3E50]">الفترة المسائية</h4>

                {/* TIME { PM } CARDS CONTAINER */}
                <div className="min-w-full w-fit h-12 mt-3 overflow-x-auto flex items-start gap-3.25">
                  {/* TIME { PM } CARD */}
                  {times.pm.map((t) => (
                  <div
                      key={t}
                      onClick={() => {
                        if (activeTime === t) {
                          onTime("");
                          return;
                        }

                        onTime(t);
                      }}
                      className={`w-28.75 h-8.5 flex flex-col items-center justify-center rounded-md ${activeTime === t ? "text-white bg-primary" : "bg-white text-primary"}`}
                    >
                    <p className="w-fit text-xs ">
                      {t}
                    </p>
                  </div>
                  ))}

                </div>
              </div>

              <button
                type="button"
                onClick={onCloseFilter}
                className="mb-2 h-12 w-full rounded-md bg-primary text-sm font-black text-white"
                >
                تنفيذ
              </button>

              <button
                type="button"
                onClick={cancelFiltering}
                className=" h-8 w-full rounded-md text-sm font-black text-primary"
                >
                مسح الترتيب
              </button>
            </div>
          </div>
        </div>
      )}
            
    </section>
  );
}


