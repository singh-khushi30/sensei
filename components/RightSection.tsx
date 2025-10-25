import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "500", "700"] });

export default function RightSection() {
  return (
    <section className="flex flex-col items-center mt-67px md:mt-70 w-[311px] md:w-[437px] md:shrink-0">
      <h2
        className={`${montserrat.className} w-full text-center text-[32px] md:text-[42px] mt-20 font-light leading-[125%]`}
        style={{ color: "var(--Gold-HSL-85---Text, #F5E7BC)" }}
      >
        Today’s energy has a
        <br className="hidden md:block" /> message for you.
      </h2>
      {/* Mobile-only separator line */}
      <div className="md:hidden mt-5 w-[314px] h-0 shrink-0">
        <Image
          src="/dotted_line.png"
          alt="Separator"
          width={314}
          height={1}
          className="w-full h-auto"
          priority
        />
      </div>
      
      {/* Desktop-only separator line */}
      <div className="hidden md:block mt-5 w-[422px] h-0 shrink-0">
        <Image
          src="/dotted_line.png"
          alt="Separator"
          width={422}
          height={1}
          className="w-full h-auto"
          priority
        />
      </div>
      
      {/* Supporting paragraph (mobile + desktop) */}
      <div className="mt-6">
        <p
          className={`${montserrat.className} text-center text-[16px] md:text-[24px] font-light leading-[125%]`}
          style={{ color: "var(--Grey-HSL-55, #8C8C8C)" }}
        >
          Your horoscope is written in real-time based on your personal chart — not just your sun sign.
        </p>
      </div>
      <div className="mt-10 flex items-center gap-3 md:gap-4">
        <Image
          src="/moon-quat-wax.svg"
          alt="Icon"
          width={50}
          height={50}
          className="w-[49.623px] h-[49.623px] shrink-0 opacity-70"
          priority
        />
        <p
          className={`${montserrat.className} text-center text-[16px]  font-light leading-[125%]`}
          style={{ color: "var(--Grey-HSL-55, #8C8C8C)" }}
        >
          11/7/25
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3 md:gap-4">
        <Image
          src="/Moon-cres-wax.svg"
          alt="Icon"
          width={84}
          height={84}
          className="w-[83.295px] h-[83.295px] shrink-0 opacity-75"
          priority
        />
        <p
          className={`${montserrat.className} text-center text-[16px] font-light leading-[125%]`}
          style={{ color: "var(--Grey-HSL-55, #8C8C8C)" }}
        >
          12/7/25
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3 md:gap-4">
        <Image
          src="/moon.png"
          alt="Icon"
          width={124}
          height={124}
          className="w-[124.057px] h-[124.057px] shrink-0"
          priority
        />
        <div className="flex flex-col">
          <p
            className={`${montserrat.className} text-center text-[16px] font-bold leading-[125%]`}
            style={{ color: "var(--Grey-HSL-55, #8C8C8C)" }}
          >
            Today’s Horoscope
          </p>
          <p
            className={`${montserrat.className}  text-[16px] font-bold leading-[125%]`}
            style={{ color: "var(--Grey-HSL-55, #8C8C8C)" }}
          >
            13/7/25
          </p>
        </div>
       
      </div>
      <div className="mt-4 flex items-center gap-3 md:gap-4">
        <Image
          src="/Moon-cres-wan.svg"
          alt="Icon"
          width={84}
          height={84}
          className="w-[83.295px] h-[83.295px] shrink-0 opacity-75"
          priority
        />
        <p
          className={`${montserrat.className} text-center text-[16px] font-light leading-[125%]`}
          style={{ color: "var(--Grey-HSL-55, #8C8C8C)" }}
        >
          14/7/25
        </p>
      </div>
      <div className="mt-10 flex items-center gap-3 md:gap-4">
        <Image
          src="/moon-quat-wax-1.svg"
          alt="Icon"
          width={50}
          height={50}
          className="w-[49.623px] h-[49.623px] shrink-0 opacity-70"
          priority
        />
        <p
          className={`${montserrat.className} text-center text-[16px]  font-light leading-[125%]`}
          style={{ color: "var(--Grey-HSL-55, #8C8C8C)" }}
        >
          15/7/25
        </p>
      </div>

      <div className="mt-6">
        <button
          type="button"
          className={`${montserrat.className} flex w-[361px] h-[48px] p-3 justify-center items-center gap-2 shrink-0 rounded-[72px] border border-[#3A3D4A] bg-black [box-shadow:0_2px_2.8px_0_rgba(0,0,0,0.31)] text-[16px] font-medium leading-[100%]`}
          style={{ color: "var(--Gold-HSL-85---Text, #F5E7BC)" }}
        >
          View Today’s Horoscope
        </button>
      </div>
    </section>
  );
}
