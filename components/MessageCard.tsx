import { MessageCardProps } from "@/types";

export default function MessageCard( message: MessageCardProps) {
  return (
    <div className="h-15 flex items-center justify-between bg-white">

      <div className="flex items-center gap-2">
        {/* Right: Avatar */}
        <div className="w-16 h-20">
          <div className="w-15 h-15 bg-[#C4C4C4] rounded-full"/>
        </div>

        {/* Center: Info */}
        <div className="flex-1 px-3 text-right">
          <h3 className="font-semibold text-base ">{message.from}</h3>
          <p className="text-sm text-[#C7CDCA]">{message.message}</p>

        </div>
      </div>

      {/* Left: Date */}
      <div className="text-sm text-[#C7CDCA]">{message.date}</div>
    </div>
  );
}