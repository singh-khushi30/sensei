import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative w-[209px] h-[295px] shrink-0 md:w-[445px] md:h-[626px]" style={{ aspectRatio: "209 / 295" }}>
      <Image src="/Avatar.png" alt="Avatar" width={445} height={626} className="w-full h-full object-contain relative z-10" priority />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[140px] md:bottom-[300px] w-[394.167px] h-[33.928px] shrink-0 rounded-[394.167px] opacity-50 bg-[#E5CF97] blur-[43.583px] md:w-[790px] md:h-[68px] md:rounded-[790px] md:blur-[87.3499984741211px] z-0" />
    </div>
  );
}


