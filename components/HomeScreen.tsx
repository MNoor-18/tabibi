"use client"

import { HomeHeader } from "./Headers"
import { doctors } from "@/constants";
import type { Doctor } from "@/types";
import { AvailableCard, DoctorMiniCard } from "./DoctorCards";
import Image from "next/image";
// import { ArrowLeft } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function HomeScreen({
  onOpenDoctor,
  onOpenSpecialists,
  onOpenAvailable,
}: {
  onOpenDoctor: (doctor: Doctor) => void;
  onOpenSpecialists: () => void;
  onOpenAvailable: () => void;
}) {
  return (
    <section className="min-h-screen bg-white px-5 pb-28 pt-6">
      <HomeHeader />

      <SectionTitle title="الأخصائيين" more="المزيد" onClick={() => onOpenSpecialists()} />
      <div className="-mx-5 mt-3 flex gap-3 overflow-x-scroll scroll-smooth no-scrollbar px-5 pb-2">
        {doctors.map((doctor) => (
          <DoctorMiniCard key={doctor.id} doctor={doctor} onClick={() => onOpenDoctor(doctor)} />
        ))}
      </div>

      <div className="relative h-24.5 mt-4 overflow-hidden rounded-lg bg-linear-to-r from-[#4F82DB] to-primary p-4 shadow-md">
        <div className="absolute h-full w-full top-0 left-0 bg-white opacity-55" />
        <Image
          src="/images/addBg.png"
          alt="خلفية"
          width={120}
          height={98}
          className="absolute opacity-41 right-0 -top-2 object-cover"
        />
        {/* <div className="absolute h-full w-full top-0 left-0 bg-white opacity-31" /> */}
        <div className="absolute top-0 right-8 h-full w-1/2 flex items-center">
          <h2 className="text-xl font-black flex flex-col items-start">
            <span className="text-white">احصل على التطعيم </span>
            <span className="text-primary">السنوي مجاناً</span>
          </h2>
        </div>

        <Image
          src="/images/f402fb1dbab163241c081d885bd79f5cd8669dee.png"
          alt="قارورة طبية"
          width={177}
          height={168}
          className="absolute left-1 -bottom-18 object-contain"
        />
      </div>

      <SectionTitle title="الأطباء المتاحون" more="المزيد" onClick={() => onOpenAvailable()} />
      <div dir="ltr" className="-mx-5 mt-3 flex gap-3 overflow-x-auto scroll-smooth no-scrollbar px-5 pb-2">
        <div className="w-fit flex gap-2.5 ">
          {doctors.map((d) => {
            if(d.available) {
              return (
                <AvailableCard doctor={d} key={d.name} onClick={() => onOpenDoctor(d)} />
              )
            }
          })}
          {/* <AvailableCard doctor={doctors[0]} onClick={() => onOpenDoctor(doctors[0])} />
          <AvailableCard doctor={doctors[0]} onClick={() => onOpenDoctor(doctors[0])} /> */}
        </div>
      </div>
    </section>
  );
}
