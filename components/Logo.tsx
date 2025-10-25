import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-[34.353px] w-[292px] h-[292.521px] shrink-0 md:w-[554.028px] md:h-[555.016px] md:gap-[65.179px]">
      <Image
        src="/Logo.png"
        alt="Logo"
        width={554}
        height={555}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}


