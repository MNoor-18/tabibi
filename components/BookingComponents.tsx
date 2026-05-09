

export const DateCard = ({ dayName, dayNumber, active, onClick }: { dayName:string; dayNumber: number; active: boolean, onClick: () => void }) => {
  return (
    <div onClick={onClick} className={`w-10.5 h-10.5 flex flex-col items-center justify-center rounded-xl ${active ? "text-white bg-primary" : "bg-white text-primary"} shadow-[#0000000D] shadow-lg`}>
        <p className={`h-3 w-full text-xs ${active ? "" : "text-[#2D3E50]"} flex items-start justify-center`}>
          {dayName}
        </p>
        <p className={`h-full w-full text-lg ${active ? "" : "text-[#A9A6A6]"}  flex items-cneter justify-center`}>
          {dayNumber}
        </p>
      </div>
  )
}


export const TimeCard = ({ className, time, active, onClick }: {className?: string, time: string, active: boolean, onClick: () => void}) => {
  return (
    <div onClick={onClick} className={`w-28.75 h-8.5 flex flex-col items-center justify-center rounded-md ${active ? "text-white bg-primary" : "bg-white text-primary"} ${className} shadow-[#0000000D] shadow-lg`}>
        <p className="w-fit text-xs ">
          {time}
        </p>
    </div>
  )
}
