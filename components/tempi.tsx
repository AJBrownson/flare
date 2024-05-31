"use client";
import { useState } from "react";
import Image from "next/image";
import Chat from "@/public/assets/chat btn.png";
import Pointer from "@/public/assets/join-default.png";
import PointerHover from "@/public/assets/join-hover.png";
import Group from "@/public/assets/Group 2.png";
import Timer from "@/public/assets/icons/timer-02.png";
import ChatWidget from "./chatWidget";

const segments = Array.from({ length: 12 });
const circles = Array.from({ length: 12 });

const RouletteWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [chats, setChats] = useState(false);

  const handleChats = () => {
    setChats(!chats);
  }

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const newRotation = rotation + 360 * 5 + Math.floor(Math.random() * 360);
    setRotation(newRotation);
    setTimeout(() => setIsSpinning(false), 5000);
  };

  return (
    <main className="mt-20 xl:mt-10 flex flex-col justify-center items-center text-white font-space relative">
      <section className="overflow-hidden flex flex-col items-center h-96 xl:h-[30rem] relative">
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
                    Math.sin((index / circles.length) * 2 * Math.PI) * 150
                  }px)`,
                  left: `calc(50% + ${
                    Math.cos((index / circles.length) * 2 * Math.PI) * 150
                  }px)`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            {/* Pointer */}
            <Image
              onClick={spin}
              src={isHovered ? Pointer : PointerHover}
              alt="Pointer"
              className="cursor-pointer z-10 w-20 lg:w-[120px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>

          {/* Wheel base */}
          <Image
            src={Group}
            alt="Wheel Stand"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          />
        </div>
      </section>

      {/* Table for statistics */}
      <div className="block bg-[#10100E] p-2 border border-[#30302B] rounded-lg text-center w-full max-w-[476px] max-h-[157] relative -mt-3">
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

      {/* widget for chat */}
      <div onClick={handleChats} className="absolute bottom-40 xl:bottom-40 right-0 z-10">
          {chats ? <Image src={Chat} alt="" className="cursor-pointer w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20" /> : <Image src={Chat} alt="" className="cursor-pointer w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20" />}
          </div>
          <div className={chats ? `z-40 fixed bottom-0 ease-in-out duration-1000`: `ease-in-out duration-1000 z-40 fixed -bottom-[100%]`}>
          <ChatWidget />
          </div>
    </main>
  );
};

export default RouletteWheel;
