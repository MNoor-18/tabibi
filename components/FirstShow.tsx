import Image from "next/image"

const FirstShow = () => {
  return (
    <section className="relative h-svh w-full overflow-hidden flex flex-col justify-end bg-linear-to-b from-primary to-white">
        <div className="absolute inset-0 z-50 w-full h-full flex justify-center items-center">
            <h1 className="h-28 py-4 text-8xl font-bold bg-linear-to-l from-primary to-[#4F82DB] bg-clip-text text-transparent">
              طبيبي
            </h1>
        </div>

        <div className="relative w-lg h-128 -bottom-26 left-3">
           <Image src="/images/addBg.png" alt="heartbeat" fill className="object-cover" />
        </div>
    </section>
  )
}

export default FirstShow
