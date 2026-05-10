import type { Doctor } from "@/types";
import { may } from "@/constants";
import { Metric } from "./DoctorInfo";
import { Heart, Star, Crown } from "lucide-react";
import Image from "next/image";

export default function SuccessScreen({
  doctor,
  date,
  time,
  onHome,
}: {
  doctor: Doctor;
  date: number;
  time: string;
  onHome: () => void;
}) {

  const theDate = may.days.find((day) => day.dayNumber === date) ?? may.days[0];

  return (
    <section className="h-screen relative overflow-hidden">
      {/* HEAD SECTION */}
      <div className="relative h-89.25 overflow-hidden bg-linear-to-br from-primary to-[#4F82DB]  px-5 pt-6 text-white">

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
        <div className="absolute -top-7.5 right-0 rounded-t-[30px] bg-white h-150 w-full py-8 ">
          
          <div className="h-full w-full flex flex-col items-center sm:justify-start gap-3 ">
            <div className="flex flex-col items-center gap-3">
              <div className="w-17.5 h-17.5 relative rounded-full bg-primary flex items-center justify-center">
                <Image src="/images/like.png" alt="like" width={35} height={35} priority />
              </div>
              <p className="text-primary text-lg font-semibold">شكراً لك</p>
            </div>

            <div className="text-center">
              <p className="text-sm text-[#C8C8C8]">
                تم حجز موعدك يوم
              </p>

              <p dir="ltr" className="text-base text-[#2D3E50]">{`${time} - ${may.monthName} ${theDate.dayNumber} ${theDate.dayName}`}</p>
            </div>
          </div>

          {/* BUTTON SECTION */}
          <div className="w-full h-24 fixed left-0 bottom-18 sm:bottom-2 flex flex-col items-center">
            <button
              type="button"
              onClick={onHome}
              className="mx-auto h-11.25 w-91.5 rounded-md bg-primary text-sm font-black text-white"
            >
              العودة للرئيسية
            </button>

            <button
              type="button"
              onClick={onHome}
              className="mx-auto mt-3 h-11.25 w-91.5 rounded-md bg-white text-sm font-black text-primary"
            >
              العودة للرئيسية
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
