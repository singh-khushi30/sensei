import { Montserrat } from "next/font/google";
import Image from "next/image";
import Form from "./form";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300"] });

export default function LeftSection() {
  return (
    <section className="w-full flex flex-col items-center md:items-start relative z-50 max-w-[375px] mx-auto md:max-w-none">
      <h2
        className={`${montserrat.className} text-center text-[42px] font-light leading-[125%]`}
        style={{ color: "var(--Gold-HSL-85---Text, #F5E7BC)" }}
      >
        What’s Written in
        <br className="hidden md:block" /> Your Stars?
      </h2>
      <div className="mt-5 w-[315px] md:w-[422px] shrink-0 mx-auto md:mx-0 md:-ml-[35px]">
        <Image
          src="/dotted_line.png"
          alt="Separator"
          width={422}
          height={1}
          className="w-full h-auto"
          priority
        />
      </div>
      <p
        className={`${montserrat.className} w-[311px] md:w-[431px] text-center text-[16px] md:text-[24px] font-light leading-[125%] mx-auto md:mx-0 md:-ml-[35px] mt-5`}
        style={{ color: "var(--Grey-HSL-55, #8C8C8C)" }}
      >
        Your natal chart is a snapshot of the sky at the moment you were born. a unique map of your soul.
      </p>
      
      {/* Mobile (md hidden): responsive zodiac + blur combined */}
      <div className="relative md:hidden -mt-[45px] w-screen aspect-square w-[600px] h-[600px]">
        <Image
          src="/zodiac_chart.png"
          alt="Zodiac wheel"
          width={1000}
          height={1000}
          className="block w-full h-full object-cover relative z-10"
        />
      </div>
      <div className="md:hidden -mt-[550px] w-[419px] h-[661px] shrink-0 rounded-[661px] bg-[#15161A] blur-[38.25px] -rotate-90 mx-auto pointer-events-none relative z-20"></div>

      {/* Desktop/tablet (md+): original separate elements, unchanged */}
      <div className="hidden md:block -mt-[2px] w-[555px] h-[555px] shrink-0 md:-ml-[100px]">
        <Image
          src="/zodiac_chart.png"
          alt="Zodiac wheel"
          width={405}
          height={405}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="hidden md:block md:mt-[-500px] w-[500px] h-[661px] shrink-0 rounded-[661px] bg-[#15161A] blur-[38.25px] -rotate-90 md:-ml-[35px] relative z-0"></div>

      <div className="relative z-20 -mt-[490px] md:-mt-[430px] w-full flex justify-center md:justify-start md:-ml-[5px]">
        <p
          className={`${montserrat.className} text-center md:text-left text-[20px] md:text-[24px] font-light leading-[127%]`}
          style={{ color: "var(--Gold-HSL-85---Text, #F5E7BC)" }}
        >
          Unlock your celestial blueprint.<br />Awaken your inner sensei.
        </p>
      </div>

      <div className="relative z-50 w-full mt-8 px-5 md:px-0 mx-auto md:ml-[-5px]">
        <Form />
      </div>
    </section>
  );
}


