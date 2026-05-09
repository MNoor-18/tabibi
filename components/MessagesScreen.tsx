"use client"

import MessageCard from "./MessageCard"
import { Search } from "lucide-react";
import { messages } from "@/constants";


export default function MessagesScreen() {
  return (
    <section className="h-screen w-full overflow-hidden bg-white px-5 pb-28 pt-6">
      <h1 className="text-xl font-bold mt-4 mb-3">الرسائل</h1>

      {/* SEARCH  */}
      <button
          type="button"
          // onClick={onSearch}
          className="mt-6 shadow-lg shadow-[#64AE891F] flex h-12 w-full items-center justify-between gap-3 rounded-lg bg-surface px-4 text-right text-sm text-muted"
        >
          <div className="flex gap-3">
            <Search size={18} className="text-primary" />
            <span>بحث...</span>
          </div>

      </button>
      <main className="w-full h-full mt-4 overflow-y-auto no-scrollbar flex flex-col py-3 gap-4">
        {messages.map((message) => (
          <MessageCard from={message.from} id={message.id} message={message.message} date={message.date} key={message.id}  />
        ))}
      </main>
        
    </section>
  );
}
