"use client";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouletteWheel from "@/components/challenger-wheel/challenger-wheel";

export default function GameOn() {
  return (
    <>
      <main className="bg-[url('../public/assets/particles.png')] w-full min-h-screen flex justify-center bg-cover bg-center bg-no-repeat font-space">
        <section className="bg-cover bg-no-repeat xl:border-l-[1px] xl:border-r-[1px] xl:border-x-blue-500 bg-[#191815] xl:shadow-glow-sides w-full max-w-full xl:max-w-[820px]">
          <div className="px-0 md:px-4">
            <NavBar showClaim />
          </div>
          <RouletteWheel />
          <Footer />
        </section>
      </main>
    </>
  );
}
