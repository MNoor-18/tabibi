export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  workTime: {
    start: string;
    end: string;
  };
  available: boolean;
  image: string;
  patients: string;
  experience: string;
  nextSlot?: string;
  price?: string;
};

export type AppointmentBooking = {
  id: string;
  doctor: Doctor;
  date: number;
  dayName: DayName;
  monthName: string;
  time: string;
  createdAt: string;
};

export interface SpecialistsListCardProp {
  openDoctorPage: () => void;
  image: string;
  workTime: {
    start: string;
    end: string;
  };
  id: number;
  name: string;
  specialty: string;
}

export interface MessageCardProps {
  id: number;
  date: string;
  from: string;
  message: string;
}

type DayName =
  | "الأحد"
  | "الإثنين"
  | "الثلاثاء"
  | "الأربعاء"
  | "الخميس"
  | "الجمعة"
  | "السبت";

export interface Day {
  dayNumber: number;
  dayName: DayName;
};

export type Month = {
  monthName: "مايو";
  days: Day[];
};
