"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Calendar, ChevronLeft, MapPin } from "lucide-react";

/**
 * Interface for the Doctor data structure
 */
export interface Doctor {
  name: string;
  specialty: string;
  evaluation: number;
  image: string;
  availability?: string;
  location?: string;
}

/**
 * AvailableHeroDoctorCardProps Interface
 */
interface AvailableHeroDoctorCardProps {
  doctor: Doctor;
}

/**
 * AvailableHeroDoctorCard Component
 * 
 * @description A premium horizontal hero card for featured available doctors.
 * Designed to WOW the user with smooth animations and a clean aesthetic.
 * 
 * Specs provided:
 * - width: 322px
 * - height: 165px
 * - border-radius: 20px
 * - gap: 15px
 * - padding: 16px
 * - background: #64AE89
 * 
 * @param {AvailableHeroDoctorCardProps} props - The component props
 * @returns {JSX.Element} The rendered component
 */
const AvailableHeroDoctorCard: React.FC<AvailableHeroDoctorCardProps> = ({ doctor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className="relative flex items-center shadow-xl overflow-hidden cursor-pointer group"
      style={{
        width: "322px",
        height: "165px",
        borderRadius: "20px",
        background: "#64AE89",
        padding: "16px",
        gap: "15px",
      }}
    >
      {/* Decorative Premium Background Elements */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:bg-white/20 transition-all duration-500" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/5 rounded-full blur-2xl pointer-events-none" />

      {/* Doctor Image Wrapper */}
      <div className="relative w-[110px] h-[133px] rounded-[15px] overflow-hidden bg-white/30 flex-shrink-0 shadow-lg border border-white/20">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          sizes="110px"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          priority
        />
        {/* Availability indicator */}
        <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 border-2 border-white rounded-full shadow-sm" />
      </div>

      {/* Information Section (RTL Friendly) */}
      <div className="flex flex-col justify-between h-full flex-grow py-0.5 text-white overflow-hidden">
        <div className="space-y-1">
          {/* Header: Badge & Rating */}
          <div className="flex items-center justify-between">
            <span className="bg-white/20 text-[9px] px-2 py-0.5 rounded-full font-bold backdrop-blur-md border border-white/10 uppercase tracking-tight">
              متوفر حالياً
            </span>
            <div className="flex items-center gap-1 bg-black/10 px-1.5 py-0.5 rounded-lg border border-white/5">
              <Star size={10} className="fill-yellow-400 text-yellow-400" />
              <span className="text-[10px] font-black">{doctor.evaluation}</span>
            </div>
          </div>

          {/* Name & Specialty */}
          <h3 className="text-[17px] font-bold leading-tight truncate drop-shadow-sm">
            {doctor.name}
          </h3>
          <p className="text-white/90 text-[11px] font-medium truncate opacity-90">
            {doctor.specialty}
          </p>
          
          {/* Location if available */}
          {doctor.location && (
            <div className="flex items-center gap-1 text-white/70 text-[9px] mt-0.5">
              <MapPin size={10} />
              <span className="truncate">{doctor.location}</span>
            </div>
          )}
        </div>

        {/* Action Button - High Contrast */}
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "#ffffff" }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-white/95 text-[#64AE89] py-2 rounded-xl text-[11px] font-black flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow-md active:shadow-inner"
        >
          <Calendar size={13} strokeWidth={3} />
          <span>احجز الآن</span>
          <ChevronLeft size={13} strokeWidth={3} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AvailableHeroDoctorCard;