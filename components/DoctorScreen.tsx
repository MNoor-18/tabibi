import type { Doctor } from "@/types";
import { Metric } from "./DoctorInfo";
import { ArrowRight, Heart, Star, Crown } from "lucide-react";
import Image from "next/image";

export default function DoctorScreen({ doctor, onBack, onBook }: { doctor: Doctor; onBack: () => void; onBook: () => void }) {
  return (
    <section className="h-screen relative overflow-hidden">
      {/* HEAD SECTION */}
      <div className="relative h-89.25 overflow-hidden bg-linear-to-br from-primary to-[#4F82DB]  px-5 pt-6 text-white">
        {/* BACK BUTTON */}
        <button type="button" onClick={onBack} className="absolute top-5 right-5 h-6 w-6 " aria-label="العودة للصفحة السابقة">
          <ArrowRight size={20} />
        </button>

        <div className="mt-14 flex flex-col items-center">
          <div className="relative h-26 w-26 overflow-hidden rounded-full border-3 border-white bg-[#D9D9D9]">
            <Image src={doctor.image} alt={doctor.name} fill sizes="104px" className="object-contain" priority />
          </div>
        </div>

        <div className="mt-6 w-full flex justify-center  gap-12">
          <div className="w-61.5 flex justify-between">
            <Metric icon={<Heart size={18} fill="white" />} label="الحالة" value={doctor.patients} />
            <Metric icon={<Crown size={18} fill="white" />} label="خبرة" value={doctor.experience} />
            <Metric icon={<Star size={18} fill="white" />} label="التقييم" value={doctor.rating.toString()} />
          </div>
        </div>
      </div>

      {/* BODY SECTION */}
      <div className="relative h-150 w-full">
        <div className="absolute -top-7.5 right-0 rounded-t-[30px] bg-white h-150 w-full px-5 pb-15 sm:pb-2 ">
          <div className="h-fit w-fit mx-auto mt-15 sm:mt-6 mb-12 sm:mb-4 text-center">
            <h1 className="mt-4 text-xl font-black">{doctor.name}</h1>
            <p className="my-1 text-sm text-[#A9A6A6]">{doctor.specialty}</p>
            <div className="flex justify-center gap-2 text-amber-400">
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
            </div>
          </div>

          <div className="">
            <h2 className="text-lg font-black">عن الطبيب</h2>
            <p className="mt-3 text-sm text-muted">
              طبيب متخصص يقدم رعاية دقيقة وخطة علاج واضحة، مع متابعة مستمرة قبل الزيارة وبعدها لتجربة مريحة وسريعة.
            </p>
          </div>

          {/* BUTTON SECTION */}
          <div className="w-full h-6 fixed left-0 bottom-18 sm:bottom-2 flex justify-center">
            <button
              type="button"
              onClick={onBook}
              className="mx-auto h-11.25 w-91.5 rounded-md bg-primary text-sm font-black text-white"
            >
              حجز موعد مع الطبيب
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
