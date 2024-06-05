"use client";

import { useState, useEffect } from "react";
import NavBar from "@/components/Navbar";

import RouletteWheel from "@/components/basic-wheel/basic-wheel";
import Image from "next/image";

import Footer from "@/components/Footer";
import ModalDialog from "react-basic-modal-dialog";
import Guide from "@/public/assets/icons/guide.png";
import Catalogue from "@/public/assets/icons/catalogue.png";
import { GiCheckMark } from "react-icons/gi";

export default function GameOn() {
  return (
    <>
      <main className="bg-[url('../public/assets/particles.png')] w-full min-h-screen flex justify-center bg-cover bg-center bg-no-repeat font-space">
        <section className="bg-cover bg-no-repeat xl:border-l-[1px] xl:border-r-[1px] xl:border-x-blue-500 bg-[#191815] xl:shadow-glow-sides w-full max-w-full xl:max-w-[820px]">
          <NavBar />
          <RouletteWheel />
          <Footer />
        </section>
      </main>
    </>
  );
}
