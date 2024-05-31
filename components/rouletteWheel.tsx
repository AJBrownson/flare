"use client";
import { useState } from "react";
import Image from "next/image";
import Chat from "@/public/assets/chat btn.png";
import Pointer from "@/public/assets/join-default.png";
import PointerHover from "@/public/assets/join-hover.png";
import Group from "@/public/assets/Group 2.png";
import Timer from "@/public/assets/icons/timer-02.png";

const segments = Array.from({ length: 12 });
const circles = Array.from({ length: 12 });

const RouletteWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const newRotation = rotation + 360 * 5 + Math.floor(Math.random() * 360);
    setRotation(newRotation);
    setTimeout(() => setIsSpinning(false), 5000);
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="relative mt-20 xl:mt-10 flex flex-col justify-center items-center text-white font-space">
      <Image src={Chat} alt="" className=" w-16 h-16" />
      <section className="overflow-hidden xl:flex xl:items-center h-full">
        <div className="flex justify-center bg-black rounded-full px-0">
          <div className="z-10 relative px-4 rounded-full outline outline-4 outline-[#0091FF]">
            <ul
              className="z-10 relative w-72 xl:w-[23rem] h-72 xl:h-[23rem] border-[5px] border-[#FFFE89] border-solid mx-auto my-4 rounded-full overflow-hidden p-0"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: isSpinning
                  ? "transform 5s cubic-bezier(0.33, 1, 0.68, 1)"
                  : "none",
              }}
            >
              {segments.map((_, index) => (
                <li
                  key={index}
                  className="bg-[#090719] border-l border-[#FFFE89] transform overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]"
                  style={{
                    transform: `rotate(${index * 30}deg) skewY(-60deg)`,
                  }}
                >
                  <div className="absolute -left-[100%] w-[200%] h-[200%] flex items-center justify-center">
                    {index + 1}
                  </div>
                </li>
              ))}
            </ul>

            {/* Small circles around the wheel */}
            {circles.map((_, index) => (
              <div
                key={index}
                className="z-20 absolute bg-gradient-to-r from-[#FFFE89] to-[#C65E34] w-2 h-2 rounded-full"
                style={{
                  top: `calc(50% + ${
                    Math.sin((index / circles.length) * 2 * Math.PI) * 190
                  }px)`,
                  left: `calc(50% + ${
                    Math.cos((index / circles.length) * 2 * Math.PI) * 190
                  }px)`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            {/* div for logo */}
            <div className="flex items-center justify-center">
              {/* <Image
                onClick={spin}
                src={Pointer}
                alt="Pointer"
                className="cursor-pointer z-10 w-20 lg:w-[120px] absolute bottom-28 lg:bottom-[9rem]"
              /> */}
              <Image
                onClick={spin}
                src={isHovered ? PointerHover : Pointer}
                alt="Pointer"
                className="cursor-pointer z-10 w-20 lg:w-[120px] absolute bottom-28 lg:bottom-[9rem] transition-transform duration-300 ease-in-out"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
            {/* wheel base */}
            <div className="xl:flex items-center">
              <Image
                src={Group}
                alt="Wheel Stand"
                className="bottom-40 left-20 xl:bottom-0 xl:left-[35.5rem] absolute"
              />
            </div>
          </div>
        </div>
      </section>

      {/* table for shiits max-w-lg */}
      <div className="hidden xl:block bg-[#10100E] p-2 border border-[#30302B] rounded-lg text-center w-full max-w-[476px] max-h-[157] mt-12 z-20 font-space">
        <div className="flex justify-center items-center px-3 py-2 text-3xl bg-[#320554]">
          <Image src={Timer} alt="" className="mr-2" />
          <span className="text-white font-montserrat font-bold text-5xl">
            10
          </span>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-1">
          <div className="py-2 flex flex-col bg-[#10100E] border border-[#30302B] rounded-lg">
            <p className="text-xs text-[#8E8E8E]">STAKES</p>
            <span className="text-sm text-[#DC1FFF] font-montserrat font-semibold">
              0.15 SOL
            </span>
          </div>
          <div className="py-2 flex flex-col bg-[#10100E] border border-[#30302B] rounded-lg">
            <p className="text-xs text-[#8E8E8E]">PRICE POOL</p>
            <span className="text-sm text-[#4CC9A0] font-montserrat font-semibold">
              1.80 SOL
            </span>
          </div>
          <div className="py-2 flex flex-col bg-[#10100E] border border-[#30302B] rounded-lg">
            <p className="text-xs text-[#8E8E8E]">ENTRIES</p>
            <span className="text-sm font-semibold font-montserrat">0/12</span>
          </div>
          <div className="py-2 flex flex-col bg-[#10100E] border border-[#30302B] rounded-lg">
            <p className="text-xs text-[#8E8E8E]">SLOT</p>
            <span className="text-sm font-semibold font-montserrat"> - </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RouletteWheel;
