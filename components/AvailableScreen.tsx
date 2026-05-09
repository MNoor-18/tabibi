"use client"

import { ListsHeader } from "./Headers"
import { SpecialistsListCard } from "./DoctorCards"
import { doctors } from "@/constants";
import type { Doctor } from "@/types";


export default function AvailableScreen({
  onBack,
  openDoctorPage,
}: {
  onBack: () => void;
  openDoctorPage: (doctor: Doctor) => void;
}) {
  return (
    <section className="h-screen w-full overflow-hidden bg-white px-5 pb-28 pt-6">
      <ListsHeader onBack={onBack} title="515 شارع الوليد بن طلال ، المعادي" />
      {/* SEARCH  */}

      <h1 className="text-xl font-black mt-4 mb-3">الأطباء المتاحين</h1>
      <main className="w-full h-full overflow-y-auto no-scrollbar py-3 gap-4">
        <div className="h-fit w-full flex flex-col"></div>
        {doctors.map((doctor) => {
            if(doctor.available) {
                return(
                    <SpecialistsListCard
                        name={doctor.name}
                        id={doctor.id}
                        specialty={doctor.specialty}
                        image={doctor.image}
                        workTime={doctor.workTime}
                        key={doctor.id}
                        openDoctorPage={() => openDoctorPage(doctor)}
                        />
                )
            }
        })}
      </main>
        
    </section>
  );
}
