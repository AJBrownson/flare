"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import RouletteWheel from "@/components/tempi";

export default function GameOn() {
  return (
    <>
      <main className="bg-[url('../public/assets/particles.png')] xl:w-full min-h-screen flex justify-center bg-cover bg-center bg-no-repeat font-space">
        <section className="xl:bg-[url('../public/assets/challenger.png')] bg-[url('../public/assets/challenger-mobile.png')] bg-cover bg-no-repeat xl:border-l-[1px] xl:border-r-[1px] xl:border-x-blue-500 xl:shadow-glow-sides w-full max-w-full xl:max-w-[820px] px-4">
          <NavBar />
          <RouletteWheel />
          <Footer />
        </section>
      </main>
    </>
  );
}
