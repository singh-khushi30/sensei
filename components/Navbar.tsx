import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center p-4 md:justify-end">
      <div className="inline-flex items-center gap-4">
        <button className={`${montserrat.className} inline-flex px-4 py-3 justify-center items-center gap-2 rounded-[72px] border border-[#3A3D4A] bg-black text-[#F5E7BC] text-[14px] font-normal leading-[22px] md:font-medium md:leading-[14px] [box-shadow:0_2px_2.8px_0_rgba(0,0,0,0.31)] transition`}>
          Register
        </button>
        <button className={`${montserrat.className} inline-flex w-[100px] px-4 py-3 justify-center items-center gap-2 rounded-[72px] border border-[#3A3D4A] bg-black text-[#F5E7BC] text-[14px] font-normal leading-[22px] md:font-medium md:leading-[14px] [box-shadow:0_2px_2.8px_0_rgba(0,0,0,0.31)] transition`}>
          Login
        </button>
      </div>
    </nav>
  );
}


