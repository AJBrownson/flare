"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import RouletteWheel from "@/components/basic-wheel/basic-wheel";
import Image from "next/image";

export default function GameOn() {
  return (
    <>
      <main className="bg-[url('../public/assets/particles.png')] w-full min-h-screen flex justify-center bg-cover bg-center bg-no-repeat font-space">
        <section className="bg-cover bg-no-repeat xl:border-l-[1px] xl:border-r-[1px] xl:border-x-blue-500 bg-[#191815] xl:shadow-glow-sides w-full max-w-full xl:max-w-[820px]">
          <NavBar />

          {/* buttons  */}
          <div className="absolute top-24 w-full max-w-full xl:max-w-[785px] flex items-center justify-between">
            <div className="p-[2px] w-[10rem] rounded-md bg-gradient-to-r from-[#935327] from-5% to-[#FFFE89] to-100%">
              <button 
                onClick={() => setWheelDetailsModalOpen(true)}
                className="flex items-center rounded-md justify-between w-[10rem] py-2 px-4 text-xs xl:text-sm bg-[#fffd89c9] hover:bg-[#fffd898a] text-black">
                <Image src={Catalogue} alt="" />
                Wheel Details
              </button>
            </div>

            <button className="text-[#FFFFE3] flex items-center justify-between py-3 px-4 text-xs bg-[#8e8e8e3f] shadow-md shadow-[#dd1fff8e] rounded-md border border-[#ffffe32d]">
              0.00 SGY | 100.00 SOL
            </button>
          </div>

          {/* roulette wheel */}
          <RouletteWheel />
          <Footer />
        </section>
      </main>
    </>
  );
}
