import Image from "next/image"
import HeroDoctorCard from "./doctor/HeroDoctorCard";
import AvailableHeroDoctorCard from "./doctor/AvailableHeroDoctorCard";


const Hero = () => {

    const doctor = {
        name: "علي حسن", 
        evaluation: 4.5, 
        specialty: "طبيب أسنان", 
        image: "/images/doctor1.png"
    }
    return (
        <div dir="rtl" className="min-h-screen bg-white pt-12">
            {/* USER DATA */}
            <div className="base-x-padding flex justify-between items-center">
                <div className="flex items-center gap-2 ">
                    {/* PROFILE IMAGE */}
                    <div className="">
                        <Image src="/images/profile.jpg" alt="profile" width={85} height={85} className="rounded-full" />
                    </div>

                    {/* USER NAME AND LOCATION */}
                    <div className="h-full flex flex-col gap-1.25 justify-center">
                        <h1 className="text-sm font-bold">يحيى محمد</h1>
                        <div className="flex gap-0.75 text-gray-300 font-medium text-xs">
                            <p >515 شارع الوليد بن طلال ، المعادي</p>
                            <p>^</p>
                        </div>
                    </div>
                </div>

                {/* BELL */}
                <div className="ml-4">
                    <Image src="/images/bell.png" alt="bell" width={24} height={24} />
                </div>
            </div>

            {/* SPECIALISTS */}
            <div className="base-x-padding h-fit min-w-screen w-fit mt-8 overflow-auto flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-black font-bold text-sm">الأخصائيين</h2>
                    <p className="text-gray-600 text-xs">المزيد</p>
                </div>

                {/* SPECIALISTS CARDS CONTINER */}
                <div className="flex flex-col gap-4">
                    <AvailableHeroDoctorCard doctor={doctor} />
                    <div className="flex gap-4">
                        <HeroDoctorCard doctor={doctor} />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Hero