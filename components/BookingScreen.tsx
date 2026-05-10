import type { Doctor } from "@/types";
import { Metric } from "./DoctorInfo";
import { DateCard, TimeCard } from "./BookingComponents";
import { ArrowRight, Heart, Star, Crown } from "lucide-react";
import Image from "next/image";
import { may, times } from '@/constants';

export default function BookingScreen({
  doctor,
  selectedDate,
  selectedTime,
  onBack,
  onSelectDate,
  onSelectTime,
  onConfirm,
}: {
  doctor: Doctor;
  selectedDate: number;
  selectedTime: string;
  onBack: () => void;
  onSelectDate: (date: number) => void;
  onSelectTime: (time: string) => void;
  onConfirm: () => void;
}) {

  return (
    <section className="h-screen relative overflow-hidden">
      {/* HEAD SECTION */}
      <div className="relative h-89.25 overflow-hidden bg-linear-to-br from-primary to-[#4F82DB]  px-5 pt-6 text-white">
        {/* BACK BUTTON */}
        <button type="button" onClick={onBack} className="absolute top-5 right-5 h-6 w-6 " aria-label="العودة للطبيب">
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
        <div className="absolute -top-7.5 right-0 rounded-t-[30px] bg-white h-150 w-full pt-20 pb-20 sm:pt-6 sm:pb-2 ">
          
          <div className="h-75 w-full overflow-hidden flex flex-col justify-between sm:justify-start sm:gap-3 ">
            {/* FIRST CONTAINER */}
            <div className="w-full">
              <h4 className="px-5 text-[16px] font-semibold text-[#2D3E50]">{may.monthName}</h4>

              {/* DATE CARDS CONTAINER */}
              <div className="w-full h-12 mt-3 px-5 overflow-x-auto no-scrollbar">
                  {/* DATE CARD */}
                  <div className="w-fit h-full flex items-start gap-3.25">
                    {may.days.map((day) => {
                      return (
                        <DateCard
                          dayName={day.dayName}
                          dayNumber={day.dayNumber}
                          key={day.dayNumber}
                          active={selectedDate === day.dayNumber}
                          onClick={() => onSelectDate(day.dayNumber)}
                         />
                      )
                    })}
                  </div>

              </div>
            </div>


            {/* SECOND CONTAINER */}
            <div className="w-full">
              <h4 className="px-5 text-[16px] font-semibold text-[#2D3E50]">الفترة الصباحية</h4>

              {/* TIME { AM } CARDS CONTAINER */}
              <div className="min-w-full w-fit h-12 mt-3 px-5 overflow-x-auto flex items-start justify-center gap-3.25">
                  {/* TIME { AM } CARD */}
                  {times.am.map((time) => (
                    <TimeCard
                      time={time}
                      key={time}
                      active={selectedTime === time}
                      onClick={() => onSelectTime(time)}
                    />
                  ))}
              </div>
            </div>
            
            {/* THREED CONTAINER */}
            <div className="w-full">
              <h4 className="px-5 text-[16px] font-semibold text-[#2D3E50]">الفترة المسائية</h4>

              {/* DATE CARDS CONTAINER */}
              <div className="min-w-full w-fit h-12 mt-3 px-5 overflow-x-auto flex items-start justify-center gap-3.25">
                  {/* TIME { PM } CARD */}
                  {times.pm.map((time) => (
                    <TimeCard
                      time={time}
                      key={time}
                      active={selectedTime === time}
                      onClick={() => onSelectTime(time)}
                    />
                  ))}
              </div>
            </div>

          </div>

          {/* BUTTON SECTION */}
          <div className="w-full h-6 fixed left-0 bottom-18 sm:bottom-0 flex justify-center">
            <button
              type="button"
              onClick={onConfirm}
              className="mx-auto h-11.25 w-91.5 rounded-md bg-primary text-sm font-black text-white"
            >
              تأكيد الحجز
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
