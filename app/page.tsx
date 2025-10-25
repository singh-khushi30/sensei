import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import Avatar from "../components/Avatar";
import Image from "next/image";
import LeftSection from "../components/LeftSection";
import RightSection from "@/components/RightSection";
import Cloudbg from "../components/Cloudbg";

export default function Home() {
  return (
    <main className="min-h-dvh w-screen flex justify-center items-start overflow-x-hidden">
      <div className="relative bg-[url('/layer.png')] bg-repeat bg-top bg-size-[395px_395px] w-full max-w-[1440px] min-h-[2414px] md:bg-size-[512px_512px] shrink-0 pb-10 md:pb-16">
        <Navbar />
        <Cloudbg />
        <div className="w-full flex justify-center mt-2 md:mt-6">
          <div className="relative flex flex-col items-center">
            <div className="z-10 -translate-x-[6px] md:-translate-x-[10px]">
              <Logo />
            </div>
            <div className="-mt-27 md:-mt-57 z-20 ml-0 md:ml-0">
              <Avatar />
            </div>
            <div className="z-30 -mt-[100px] w-[525px] h-[183px] shrink-0 rounded-[525px] bg-[#15161A] blur-[39.7px] md:-mt-[250px] md:w-[1051px] md:h-[357px] md:rounded-[1051px] md:blur-[79.9px]" />
            <div className="hidden md:block relative z-40 -mt-[150px] md:-mt-[100px]">
              <Image src="/text_2.png" alt="Wisdom From a Sensei" width={417} height={41} className="ml-[10px] md:ml-[18px]" />
              <Image src="/text_1.png" alt="Guidance From the Stars," width={333} height={28} className="absolute left-[42px] -top-[32px] md:-left-[80px] md:-top-[32px] " />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1051px] mx-auto px-4 -mt-[50px] md:mt-50">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
            <LeftSection />
            <RightSection />
          </div>
        </div>
      </div>
    </main>
  );
}


