import type { AppointmentBooking, Doctor } from "@/types";
import { DoctorRow } from "./DoctorCards";

export default function AppointmentsScreen({
  appointments,
  onOpenDoctor,
}: {
  appointments: AppointmentBooking[];
  onOpenDoctor: (doctor: Doctor) => void;
}) {
  return (
    <section className="min-h-full px-5 pb-28 pt-6">
      <h1 className="text-2xl font-black">الإشعارات</h1>

      <h2 className="mt-6 text-lg font-black">مواعيدي</h2>
      {appointments.length > 0 ? (
        <div className="mt-3 space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="rounded-[28px] bg-surface p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary-soft px-4 py-2 text-xs font-black text-primary-dark">قادم</span>
                <span className="text-xs font-bold text-muted">
                  {appointment.time} - {appointment.monthName} {appointment.date} {appointment.dayName}
                </span>
              </div>
              <div className="mt-4">
                <DoctorRow doctor={appointment.doctor} onClick={() => onOpenDoctor(appointment.doctor)} compact />
              </div>
              <button type="button" className="mt-5 h-11 w-full rounded-2xl border border-border text-sm font-black text-primary">
                تواصل مع العيادة
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-3 rounded-[24px] border border-dashed border-border bg-surface/70 p-6 text-center text-sm text-muted">
          لا توجد حجوزات محفوظة بعد
        </div>
      )}

      <h2 className="mt-8 text-lg font-black">زيارات سابقة</h2>
      <div className="mt-3 rounded-[24px] border border-dashed border-border bg-surface/70 p-6 text-center text-sm text-muted">
        لا توجد زيارات سابقة بعد
      </div>
    </section>
  );
}
