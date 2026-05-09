import { Doctor, MessageCardProps, Month } from "@/types";

export const specialties = ["جراح", "أحصائي", "طبيب"];

export const times = {
  am: [ "8:30 AM", "9:30 AM", "10:30 AM"],
  pm: ["10:30 PM", "12:30 PM", "11:30 PM"]
};

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "د. أحمد علي",
    specialty: "جراح",
    rating: 4.8,
    workTime: {
      start: times.am[0],
      end: times.pm[0],
    },
    available: true,
    image: "/images/doctor-1.png",
    patients: "1.2k",
    experience: "8 سنوات",
  },
  {
    id: 2,
    name: "د. محمد نور",
    specialty: "طبيب",
    rating: 4.6,
    workTime: {
      start: times.am[1],
      end: times.pm[1],
    },
    available: false,
    image: "/images/doctor-2.png",
    patients: "980",
    experience: "5 سنوات",
  },
  {
    id: 3,
    name: "د. خالد إبراهيم",
    specialty: "أحصائي",
    rating: 4.9,
    workTime: {
      start: times.am[2],
      end: times.pm[2],
    },
    available: true,
    image: "/images/doctor-3.png",
    patients: "2k",
    experience: "11 سنة",
  },
  {
    id: 4,
    name: "د. يوسف حسن",
    specialty: "جراح",
    rating: 4.5,
    workTime: {
      start: times.am[0],
      end: times.pm[1],
    },
    available: true,
    image: "/images/doctor-1.png",
    patients: "760",
    experience: "4 سنوات",
  },
  {
    id: 5,
    name: "د. عبد الرحمن سعد",
    specialty: "طبيب",
    rating: 4.7,
    workTime: {
      start: times.am[1],
      end: times.pm[2],
    },
    available: false,
    image: "/images/doctor-2.png",
    patients: "1.4k",
    experience: "9 سنوات",
  },
  {
    id: 6,
    name: "د. أنس محمود",
    specialty: "أحصائي",
    rating: 4.3,
    workTime: {
      start: times.am[2],
      end: times.pm[0],
    },
    available: true,
    image: "/images/doctor-3.png",
    patients: "640",
    experience: "3 سنوات",
  },
  {
    id: 7,
    name: "د. إبراهيم زيد",
    specialty: "جراح",
    rating: 4.9,
    workTime: {
      start: times.pm[0],
      end: times.am[1],
    },
    available: true,
    image: "/images/doctor-1.png",
    patients: "2.3k",
    experience: "13 سنة",
  },
  {
    id: 8,
    name: "د. طارق فهد",
    specialty: "طبيب",
    rating: 4.4,
    workTime: {
      start: times.pm[2],
      end: times.am[0],
    },
    available: false,
    image: "/images/doctor-2.png",
    patients: "870",
    experience: "6 سنوات",
  },
  {
    id: 9,
    name: "د. سليم عمر",
    specialty: "أحصائي",
    rating: 4.8,
    workTime: {
      start: times.pm[1],
      end: times.am[2],
    },
    available: true,
    image: "/images/doctor-3.png",
    patients: "1.8k",
    experience: "10 سنوات",
  },
  {
    id: 10,
    name: "د. معاذ ياسر",
    specialty: "جراح",
    rating: 4.2,
    workTime: {
      start: times.pm[1],
      end: times.am[1],
    },
    available: false,
    image: "/images/doctor-1.png",
    patients: "520",
    experience: "2 سنوات",
  },
  {
    id: 11,
    name: "د. كريم نبيل",
    specialty: "طبيب",
    rating: 4.7,
    workTime: {
      start: times.pm[0],
      end: times.am[0],
    },
    available: true,
    image: "/images/doctor-2.png",
    patients: "1.1k",
    experience: "7 سنوات",
  },
  {
    id: 12,
    name: "د. رائد سمير",
    specialty: "أحصائي",
    rating: 5.0,
    workTime: {
      start: times.pm[2],
      end: times.am[2],
    },
    available: true,
    image: "/images/doctor-3.png",
    patients: "3k",
    experience: "15 سنة",
  },
];

export const may: Month = {
  monthName: "مايو",
  days: [
    { dayNumber: 1, dayName: "الأربعاء" },
    { dayNumber: 2, dayName: "الخميس" },
    { dayNumber: 3, dayName: "الجمعة" },
    { dayNumber: 4, dayName: "السبت" },
    { dayNumber: 5, dayName: "الأحد" },
    { dayNumber: 6, dayName: "الإثنين" },
    { dayNumber: 7, dayName: "الثلاثاء" },
    { dayNumber: 8, dayName: "الأربعاء" },
    { dayNumber: 9, dayName: "الخميس" },
    { dayNumber: 10, dayName: "الجمعة" },
    { dayNumber: 11, dayName: "السبت" },
    { dayNumber: 12, dayName: "الأحد" },
    { dayNumber: 13, dayName: "الإثنين" },
    { dayNumber: 14, dayName: "الثلاثاء" },
    { dayNumber: 15, dayName: "الأربعاء" },
    { dayNumber: 16, dayName: "الخميس" },
    { dayNumber: 17, dayName: "الجمعة" },
    { dayNumber: 18, dayName: "السبت" },
    { dayNumber: 19, dayName: "الأحد" },
    { dayNumber: 20, dayName: "الإثنين" },
    { dayNumber: 21, dayName: "الثلاثاء" },
    { dayNumber: 22, dayName: "الأربعاء" },
    { dayNumber: 23, dayName: "الخميس" },
    { dayNumber: 24, dayName: "الجمعة" },
    { dayNumber: 25, dayName: "السبت" },
    { dayNumber: 26, dayName: "الأحد" },
    { dayNumber: 27, dayName: "الإثنين" },
    { dayNumber: 28, dayName: "الثلاثاء" },
    { dayNumber: 29, dayName: "الأربعاء" },
    { dayNumber: 30, dayName: "الخميس" },
    { dayNumber: 31, dayName: "الجمعة" }
  ]
};

export const messages: MessageCardProps[] = [
  {
    id: 1,
    from: "د. علي حسن",
    date: "4:00 AM",
    message: "مرحبا بك حسن نذكرك بموعدك مع طبيبك..."
    
  },
  {
    id: 2,
    from: "د. سامر يوسف",
    date: "4:00 AM",
    message: "مرحبا بك حسن نذكرك بموعدك مع طبيبك..."
    
  },
  {
    id: 3,
    from: "د. علي حسن",
    date: "4:00 AM",
    message: "مرحبا بك حسن نذكرك بموعدك مع طبيبك..."
    
  },
]
