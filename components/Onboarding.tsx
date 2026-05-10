"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import FirstShow from "./FirstShow";
import { useState, useEffect } from "react";

export const onboarding = [
  {
    title: "اختار طبيبك بسهولة",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها . إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة ",
    image: "/images/medicalTeam.png",
    bgImage: "/images/bg0.png",
  },
  {
    title: "تابع زياراتك الطبية",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها . إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة ",
    image: "/images/doctor-3.png",
    bgImage: "/images/bg1.png"
  },
  {
    title: "احجز في الوقت المناسب",
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها . إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة ",
    image: "/images/doctor-2.png",
    bgImage: "/images/bg2.png",
  }
];
    
export default function Onboarding({
  index,
  onBack,
  onNext,
  onSkip,
}: {
  index: number;
  onBack: () => void;
  onNext: () => void;
  onSkip: () => void;
}) {

  const [showFirstInterface, setShowFirstInterface] = useState(true);
  
  const slide = onboarding[index];
  const progressPercent = ((index + 1) / onboarding.length) * 100;

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShowFirstInterface(false);
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section className="h-svh w-full overflow-hidden">
      {
      showFirstInterface? (
        <FirstShow />
      ) : (
        <>
        {/* HEADER BAR */}
        <div className="h-11 w-full px-4 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            disabled={index === 0}
            className="h-6 w-6 place-items-center disabled:opacity-35"
            aria-label="السابق"
          >
            <ChevronRight size={20} />
          </button>

          <button type="button" onClick={onSkip} className="text-sm font-bold">
            تخطي
          </button>
        </div>

          {/* MAIN */}
        <div className="mt-11.75 h-full flex flex-col justify-between pb-5">
          {/* ONBOARDING INFO AND IMAGE */}
          <div className="flex flex-col items-center gap-10 ">
            {/* ONBOARDING IMAGE CONTAINER */}
            <div className={`w-81.5 h-85.5 px-1.5 pt-3 ${index === 1 ? "relative" : ""}`}>
              <div className={`${index !== 1 ? "relative" : "static"} h-full w-full shadow-lg bg-[#63b889] rounded-[40px]`}>
                {/* THE SIMPLE BACKGROUND IMAGE */}
                <Image
                  src={slide.bgImage}
                  alt={slide.title}
                  width={272}
                  height={102}
                  className={`absolute mx-auto rounded-[40px] object-cover top-9 ${index === 1 ? "-right-5 " : " -left-5 "} `}
                />

                {/* DOCTOR IMAGE */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className={`mx-auto rounded-[40px] z-10 ${index === 2 ? "object-contain" : "object-cover"} `}
                />
              </div>
            </div>
      
              {/* TITLE AND DESCRIPTION */}
            <div className="self-start w-full px-10.5">
              <h1 className="text-xl font-bold">{slide.title}</h1>
              <p className="mt-2 text-xs text-muted">{slide.text}</p>
            </div>

          </div>

            {/* I HAVE EDITING THIS ITTEM */}
          <div className="flex justify-center w-full h-38">
            <div className="relative flex h-15 w-15 items-center justify-center">
              <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="29" fill="none" stroke="#ffffff" strokeWidth="4" />
                <circle
                  cy="32"
                  cx="32"
                  r="29"
                  fill="none"
                  stroke="#57a77e"
                  strokeWidth="4"
                  strokeLinecap="round"
                  pathLength={100}
                  strokeDasharray={`${progressPercent} 100`}
                  className="transition-[stroke-dasharray] duration-300 ease-out"
                />
              </svg>
              <button
                type="button"
                onClick={onNext}
                className="relative flex h-13 w-13 items-center justify-center rounded-full bg-primary text-white"
              >
                  <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
        </>
      )
    }
    </section>
  );
}
