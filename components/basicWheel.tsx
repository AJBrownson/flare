"use client";
import { useState } from "react";
import Image from "next/image";
import PointerHover from "@/public/assets/pointer-hover.png";
import Pointer from "@/public/assets/pointer.png";
import Group from "../public/assets/Group 2.png";
import Timer from "../public/assets/icons/timer-02.png";


const segments = Array.from({ length: 12 });
const circles = Array.from({ length: 12 });
const colors = ["#931892", "#000000", "#0861F4", "#058E16", "#B71122", "#931892", "#000000", "#0861F4", "#058E16", "#B71122"];

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


  const [selectedWager, setSelectedWager] = useState(null);

  const handleButtonClick = (wager) => {
    setSelectedWager(wager);
  };

  const getWagerAmount = () => {
    if (selectedWager === "SOL") {
      return {
        stakes: "0.15 SOL",
        pricePool: "1.80 SOL",
      };
    } else if (selectedWager === "SGY") {
      return {
        stakes: "0.20 SGY",
        pricePool: "2.50 SGY",
      };
    } else {
      return {
        stakes: "-",
        pricePool: "-",
      };
    }
  };

  const wagerAmount = getWagerAmount();




  return (
    <main className="mt-20 xl:mt-10 flex flex-col justify-center items-center text-white font-space">
      <section className="overflow-hidden xl:flex xl:items-center h-full">
        <div className="flex justify-center bg-black rounded-full px-0">
          <div className="z-10 relative px-4 rounded-full outline outline-4 outline-[#DC1FFF]">
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
                  className="border-l border-[#FFFE89] transform overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]"
                  style={{
                    backgroundColor: colors[index % colors.length],
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
              <Image
                onClick={spin}
                src={isHovered ? PointerHover : Pointer}
                alt="Pointer"
                className="cursor-pointer z-10 w-20 lg:w-[120px] absolute bottom-28 lg:bottom-[9rem] transition-transform duration-300 ease-in-out"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
          </div>
          {/* wheel base */}
          <div className="xl:flex items-center">
            <Image
              src={Group}
              alt="Wheel Stand"
              className="bottom-40 left-20 xl:bottom-16 xl:left-[35.5rem] absolute"
            />
          </div>
        </div>
      </section>

      {/* table for wagers */}
      <div className="hidden xl:block bg-[#10100E] p-2 border border-[#30302B] rounded-lg text-center w-full max-w-[380px] max-h-[136px] mt-12 z-20 font-space">
      <div className="flex gap-4 justify-between px-2">
        <button
          onClick={() => handleButtonClick("SOL")}
          className={`text-sm font-montserrat font-medium rounded-md w-full py-3 ${
            selectedWager === "SOL"
              ? "bg-gradient-to-r from-[#C65E34] to-[#FFFE89] text-black"
              : "bg-[#10100E] text-[#8E8E8E] hover:text-[#FFFFE3]"
          }`}
        >
          Wager SOL
        </button>
        <button
          onClick={() => handleButtonClick("SGY")}
          className={`text-sm font-montserrat font-medium rounded-md w-full py-3 ${
            selectedWager === "SGY"
              ? "bg-gradient-to-r from-[#C65E34] to-[#FFFE89] text-black"
              : "bg-[#10100E] text-[#8E8E8E] hover:text-[#FFFFE3]"
          }`}
        >
          Wager SGY
        </button>
      </div>

      {/* Wager amount */}
      <div className="grid grid-cols-4 gap-1 mt-1 px-2">
        <div className="py-3 flex flex-col bg-[#DC1FFF] hover:bg-[#F2A9FF] border border-[#30302B] rounded-lg">
          <p className="text-sm text-[#000000] font-semibold">{wagerAmount.stakes}</p>
        </div>
        <div className="py-3 flex flex-col bg-[#DC1FFF] hover:bg-[#F2A9FF] border border-[#30302B] rounded-lg ">
        <p className="text-sm text-[#000000] font-semibold">{wagerAmount.pricePool}</p>
        </div>
        <div className="py-3 flex flex-col bg-[#DC1FFF] hover:bg-[#F2A9FF] border border-[#30302B] rounded-lg">
          <p className="text-sm text-[#000000] font-semibold">{wagerAmount.stakes}</p>
        </div>
        <div className="py-3 flex flex-col bg-[#DC1FFF] hover:bg-[#F2A9FF] border border-[#30302B] rounded-lg ">
        <p className="text-sm text-[#000000] font-semibold">{wagerAmount.pricePool}</p>
        </div>
      </div>
    </div>
    </main>
  );
};

export default RouletteWheel;
