"use client";

import { onboarding } from "@/components/Onboarding";
import {
    AppointmentsScreen,
    BookingScreen,
    BottomNav,
    DoctorScreen,
    Onboarding,
    HomeScreen,
    ProfileScreen,
    SearchScreen,
    SuccessScreen,
    SpecialistsScreen,
    AvailableScreen,
    MessagesScreen,
} from "@/components"
import type { MainView } from "@/components/BottomNav";

import { doctors, times, may } from "@/constants";
import type { AppointmentBooking, Doctor } from "@/types";
import { useEffect, useState } from "react";

type View = MainView | "onboarding" | "doctor" | "booking" | "success" | "specialistsScreen" | "search" | "available";
type DoctorReturnView = Exclude<View, "onboarding" | "doctor" | "booking" | "success">;

const mainViews: MainView[] = ["home", "messages", "notification", "profile"];
const doctorReturnViews: DoctorReturnView[] = ["home", "messages", "notification", "profile", "specialistsScreen", "search", "available"];
const appointmentsStorageKey = "tabibi:appointments";

function isMainView(view: View): view is MainView {
  return mainViews.includes(view as MainView);
}

function isDoctorReturnView(view: View): view is DoctorReturnView {
  return doctorReturnViews.includes(view as DoctorReturnView);
}

export default function HomePage() {
  const [view, setView] = useState<View>("onboarding");
  const [onboardingIndex, setOnboardingIndex] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(doctors[0]);
  const [doctorReturnView, setDoctorReturnView] = useState<DoctorReturnView>("home");
  const [appointments, setAppointments] = useState<AppointmentBooking[]>([]);
  const [activeSpecialty, setActiveSpecialty] = useState("");
  const [activeTime, setActiveTime] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(may.days[3].dayNumber);
  const [selectedTime, setSelectedTime] = useState(times.am[2]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      try {
        const savedAppointments = window.localStorage.getItem(appointmentsStorageKey);

        if (!savedAppointments) {
          return;
        }

        const parsedAppointments = JSON.parse(savedAppointments);

        if (Array.isArray(parsedAppointments)) {
          setAppointments(parsedAppointments);
        }
      } catch {
        setAppointments([]);
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const openDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);

    if (isDoctorReturnView(view)) {
      setDoctorReturnView(view);
    }

    setView("doctor");
  };

  const openSpecialties = () => {
    setView("specialistsScreen");
  };

  const openAvailable = () => {
    setView("available");
  };

  const goMain = (nextView: View) => {
    setFilterOpen(false);
    setView(nextView);
  };

  const backHome = () => {
    goMain("home")
  };

  const backFromDoctor = () => {
    goMain(doctorReturnView);
  };

  const confirmBooking = () => {
    const bookingDay = may.days.find((day) => day.dayNumber === selectedDate) ?? may.days[0];
    const nextAppointments: AppointmentBooking[] = [
      {
        id: `${selectedDoctor.id}-${selectedDate}-${selectedTime}-${Date.now()}`,
        doctor: selectedDoctor,
        date: selectedDate,
        dayName: bookingDay.dayName,
        monthName: may.monthName,
        time: selectedTime,
        createdAt: new Date().toISOString(),
      },
      ...appointments,
    ];

    setAppointments(nextAppointments);
    window.localStorage.setItem(appointmentsStorageKey, JSON.stringify(nextAppointments));
    goMain("success");
  };



  return (
    <main className="min-h-screen  h-full w-full bg-canvas text-ink">
      {view === "onboarding" && (
        <Onboarding
          index={onboardingIndex}
          onBack={() => setOnboardingIndex((current) => Math.max(0, current - 1))}
          onNext={() => {
            if (onboardingIndex === onboarding.length - 1) {
              setView("home");
              return;
            }
            setOnboardingIndex((current) => current + 1);
          }}
          onSkip={() => setView("home")}
        />
      )}

      {view === "home" && <HomeScreen onOpenDoctor={openDoctor} onOpenSpecialists={openSpecialties} onOpenAvailable={openAvailable} />}

      {view === "specialistsScreen" && <SpecialistsScreen onBack={backHome} onSearch={() => setView("search")} openDoctorPage={openDoctor}  />}

      {view === "available" && <AvailableScreen onBack={backHome} openDoctorPage={openDoctor} />}

      {view === "search" && (
        <SearchScreen
          onOpenDoctor={openDoctor}
          onBack={openSpecialties}
          activeSpecialty={activeSpecialty}
          activeTime={activeTime}
          filterOpen={filterOpen}
          onFilterToggle={() => setFilterOpen((open) => !open)}
          onSpecialty={setActiveSpecialty}
          onTime={setActiveTime}
          onCloseFilter={() => setFilterOpen(false)}
        />
      )}

      {view === "messages" && (
        <MessagesScreen />
      )}
      

      {view === "notification" && <AppointmentsScreen appointments={appointments} onOpenDoctor={openDoctor} />}

      {view === "profile" && <ProfileScreen />}

      {view === "doctor" && (
        <DoctorScreen doctor={selectedDoctor} onBack={backFromDoctor} onBook={() => goMain("booking")} />
      )}

      {view === "booking" && (
        <BookingScreen
          doctor={selectedDoctor}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onBack={() => goMain("doctor")}
          onSelectDate={setSelectedDate}
          onSelectTime={setSelectedTime}
          onConfirm={confirmBooking}
        />
      )}

      {view === "success" && (
        <SuccessScreen
          showAppointment={() => goMain("notification")}
          doctor={selectedDoctor}
          date={selectedDate}
          time={selectedTime}
          onHome={() => goMain("home")}
        />
      )}

      {isMainView(view) && <BottomNav current={view} onChange={goMain} />}
    </main>
  );
}
