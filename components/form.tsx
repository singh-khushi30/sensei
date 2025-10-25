import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] });

export default function Form() {
  return (
    <form className="w-full max-w-[370px] flex flex-col gap-6 md:gap-8">
      {/* Full Name */}
      <div className="flex flex-col items-stretch gap-2">
        <label
          className={`${inter.className} self-stretch text-[14px] font-normal leading-[127%]`}
          style={{ color: "var(--Grey-HSL-70, #B3B3B3)" }}
          htmlFor="full-name"
        >
          Full Name
        </label>
        <div className="relative">
          <input
            id="full-name"
            name="fullName"
            type="text"
            placeholder="Enter your full name here"
            className="h-[48px] w-full rounded-[8px] border border-[#4D4D4D] bg-transparent text-[#F5E7BC] outline-none pl-[10px] placeholder-[#4D4D4D] text-[16px] leading-[127%]"
            autoComplete="off"
          />
        </div>
      </div>

      {/* Birth Date and Birth Hour */}
      <div className="grid grid-cols-2 gap-6 md:gap-8">
        {/* Birth Date */}
        <div className="flex flex-col items-stretch gap-2">
          <label
            className={`${inter.className} self-stretch text-[14px] font-normal leading-[127%]`}
            style={{ color: "var(--Grey-HSL-70, #B3B3B3)" }}
            htmlFor="birth-date"
          >
            Birth Date
          </label>
          <div className="relative">
            <input
              id="birth-date"
              name="birthDate"
              type="text"
              placeholder="MM/DD/YYYY"
              className="h-[48px] w-full rounded-[8px] border border-[#4D4D4D] bg-transparent text-[#F5E7BC] outline-none pl-[10px] placeholder-[#4D4D4D] text-[16px] leading-[127%]"
              autoComplete="off"
            />
          </div>
        </div>
        {/* Birth Hour */}
        <div className="flex flex-col items-stretch gap-2">
          <label
            className={`${inter.className} self-stretch text-[14px] font-normal leading-[127%]`}
            style={{ color: "var(--Grey-HSL-70, #B3B3B3)" }}
            htmlFor="birth-hour"
          >
            Birth Hour
          </label>
          <div className="relative">
            <input
              id="birth-hour"
              name="birthHour"
              type="text"
              placeholder="12:00 AM"
              className="h-[48px] w-full rounded-[8px] border border-[#4D4D4D] bg-transparent text-[#F5E7BC] outline-none pl-[10px] placeholder-[#4D4D4D] text-[16px] leading-[127%]"
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="flex flex-col items-stretch gap-2">
        <label
          className={`${inter.className} self-stretch text-[14px] font-normal leading-[127%]`}
          style={{ color: "var(--Grey-HSL-70, #B3B3B3)" }}
          htmlFor="location"
        >
          Location
        </label>
        <div className="relative">
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Enter your location here"
            className="h-[48px] w-full rounded-[8px] border border-[#4D4D4D] bg-transparent text-[#F5E7BC] outline-none pl-[10px] placeholder-[#4D4D4D] text-[16px] leading-[127%]"
            autoComplete="off"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-2">
        <button
          type="button"
          className={`${montserrat.className} flex w-full md:w-[361px] h-[48px] p-3 justify-center items-center gap-2 shrink-0 rounded-[72px] border border-[#3A3D4A] bg-black [box-shadow:0_2px_2.8px_0_rgba(0,0,0,0.31)] text-[16px] font-medium leading-[100%]`}
          style={{ color: "var(--Gold-HSL-85---Text, #F5E7BC)" }}
        >
          Reveal My Natal Chart
        </button>
      </div>
    </form>
  );
}
