import { Bell, User, CreditCard, Bookmark, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function ProfileScreen() {
  return (
    // <section className="min-h-screen pb-28">
    //   <div className="bg-[linear-gradient(145deg,#61b887,#4d8ee6)] px-5 pb-12 pt-8 text-center text-white">
    //     <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white/70">
    //       <Image  width={96} height={96} className="h-full w-full object-cover" />
    //     </div>
    //     <h1 className="mt-4 text-xl font-black">يحيى محمد</h1>
    //     <p className="mt-1 text-sm text-white/80">515 شارع الوليد بن طلال</p>
    //   </div>

    //   <div className="-mt-7 rounded-t-[34px] bg-canvas px-5 pt-7">
    //     <div className="space-y-3">
    //       {items.map((item) => (
    //         <button
    //           key={item.label}
    //           type="button"
    //           className="flex h-15 w-full items-center justify-between rounded-[22px] bg-surface px-4 text-sm font-black shadow-soft"
    //         >
    //           <span className="flex items-center gap-3">
    //             <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-soft text-primary">{item.icon}</span>
    //             {item.label}
    //           </span>
    //           <ChevronLeft size={18} className="text-muted" />
    //         </button>
    //       ))}
    //     </div>
    //   </div>
    // </section>


    <section className="h-screen relative overflow-hidden">
      {/* HEAD SECTION */}
      <div className="relative h-89.25 overflow-hidden bg-linear-to-br from-primary to-[#4F82DB]  px-5 pt-6 text-white">

        <div className="mt-14 flex flex-col items-center">
          <div className="relative h-26 w-26 overflow-hidden rounded-full ">
            <Image src="/images/profile.jpg" alt="يحيى محمد" fill sizes="104px" className="object-contain" priority />
          </div>
        </div>

        <div className="mt-6 w-full flex flex-col items-center gap-px text-white">
          <h5 className="text-base font-bold ">يحيى محمد</h5>
          <p className="text-sm ">مهندس معماري</p>
        </div>
      </div>

      {/* BODY SECTION */}
      <div className="relative h-150 w-full">
        <div className="absolute -top-7.5 right-0 rounded-t-[30px] bg-white h-150 w-full py-20 sm:py-6 flex ">
          
          {/* PROFILE OPTIONS CONTAINER */}
          <div className="min-w-48 min-h-60 h-fit px-5 *:mt-5">

            <div className="h-8 w-fit full flex items-center gap-2 px-px">
              <User size={26} />
              <div className="h-full">
                <h5 className="text-sm text-[#2D3E50]">الحساب</h5>
                <p className="text-xs text-[#A9A6A6]">تعديل بيانات حساب الشخصي</p>
              </div>
            </div>

            <div className="h-8 w-fit full flex items-center gap-2 px-px">
              <Bell size={26} />
              <div className="h-full">
                <h5 className="text-sm text-[#2D3E50]">الإشعارات</h5>
                <p className="text-xs text-[#A9A6A6]">التحكم في استقبال الاشعارات التطبيق</p>
              </div>
            </div>

            <div className="h-8 w-fit full flex items-center gap-2 px-px">
              <CreditCard size={26} />
              <div className="h-full">
                <h5 className="text-sm text-[#2D3E50]">الدفع</h5>
                <p className="text-xs text-[#A9A6A6]">تعديل وإضافة وسيلة دفع</p>
              </div>
            </div>

            <div className="h-8 w-fit full flex items-center gap-2 px-px">
              <Bookmark size={26} />
              <div className="h-full">
                <h5 className="text-sm text-[#2D3E50]">المفضلة</h5>
                <p className="text-xs text-[#A9A6A6]">اضافة وازالة الحجوزات من المفضلة</p>
              </div>
            </div>

            <div className="h-8 w-fit full flex items-center gap-2 px-px">
              <ShieldCheck size={26} />
              <div className="h-full">
                <h5 className="text-sm text-[#2D3E50]">سياسة الخصوصية</h5>
                <p className="text-xs text-[#A9A6A6]">سياسة الخصوصية الخاصة بالتطبيق</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
