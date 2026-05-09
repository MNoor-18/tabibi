import type { ReactNode } from "react";
import { Bell, Home, MessageSquareTextIcon } from "lucide-react";
import Image from "next/image";

export type MainView = "home" | "messages" | "notification" | "profile";

export default function BottomNav({
  current,
  onChange,
}: {
  current: MainView;
  onChange: (view: MainView) => void;
}) {
  const items: { view: MainView; label: string; icon?: ReactNode}[] = [
    { view: "home", label: "الرئيسية", icon: <Home size={20} /> },
    { view: "messages", label: "الرسائل", icon: <MessageSquareTextIcon size={20} /> },
    { view: "notification", label: "الإشعارات", icon: <Bell size={20} /> },
    { view: "profile", label: "حسابي"},
  ];

  return (
    <nav className="max-w-md fixed bottom-0 sm:mx-auto bg-white z-30 w-full h-18">
      <div className="h-full w-full relative bg-primary flex justify-evenly items-center  px-2 text-white">
        {items.map((item) => {
          const active = item.view === current;
          return (
            <button
              key={item.view}
              type="button"
              onClick={() => onChange(item.view)}
              className="relative transition-transform bottom-0 flex flex-col items-center justify-center gap-1 text-xs font-bold"
            >
              {active && 
                <div className="absolute -top-11.25 w-15 h-15">
                  <Image 
                  src="/images/ellipse.png" 
                  alt="whight bg"
                  fill
                  className="absolute" 
                  />
                </div>}
              {item.icon ? (
                <span className={`relative z-10  ${active ? "text-primary-dark -top-5" : "text-white/82"}`}>{item.icon}</span>
              ) : (
                <div className={`relative z-10 rounded-full overflow-hidden left-0 h-6 w-6 ${active ? "-top-5" : "text-white/82"}`}>
                  <Image 
                  src="/images/profile.jpg" 
                  alt="whight bg"
                  fill
                  className="absolute object-contain" 
                  />
                </div>
              )}
              <span className={`relative z-10 ${active ? "text-white" : "text-white/74"}`}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
