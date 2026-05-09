"use client"
import Image from "next/image";
import { Bell, ChevronDown, ArrowRight } from "lucide-react";


export function HomeHeader() {
  return (
    <header className="flex items-center justify-between">
      <div className="mt-5 sm:mt-2 flex items-center gap-3">
        <Image src="/images/profile.jpg" alt="صورة المستخدم" width={52} height={52} className="h-21 w-21 rounded-full object-cover" />
        
        <div>
          <h3 className="text-sm font-bold text-black">يحيى محمد</h3>
          <div className="flex gap-1 items-center text-xs font-bold text-muted">
            <p className="">515 شارع الوليد بن طلال ، المعادي</p>
            <ChevronDown />
          </div>
        </div>
      </div>

      <button type="button" className="relative w-6 h-6 flex items-center justify-center" aria-label="الإشعارات">
        <span className="absolute right-0.75 top-2.25 h-1.5 w-1.5 rounded-full border border-white bg-red-500" />
        <Bell size={19} />
      </button>
    </header>
  );
}

export function ListsHeader({onBack, title}: {onBack: () => void, title?: string}) {
  return (
    <div className="w-full h-14 sm:h-10 flex items-center text-[#2D3E50]">
      <button type="button" onClick={onBack} >
        <ArrowRight size={24} />
      </button>

      <div className="w-fit mx-auto">
        {title ? (
          <span className="text-sm text-gray-500 flex gap-1 items-center">
          {title}
          <ChevronDown className="text-muted" />
        </span>
        ) : ("")
      }
      </div>
    </div>
  );
}