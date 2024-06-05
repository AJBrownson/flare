"use client";
import { useState } from "react";

type SelectionType = "Details" | "Recent";

type RecentSpinData = {
  id: number;
  name: string;
  score: "WIN" | "LOSE";
  winnings: number;
}[];

type WheelData = {
  id: number;
  detail: string;
}[];

export default function WheelDetails() {
  const [selection, setSelection] = useState("Details");

  const handleButtonClick = (selection: SelectionType) => {
    setSelection(selection);
  };

  const recentSpin: RecentSpinData = [
    {
      id: 1,
      name: "0x45fg...A5qu",
      score: "WIN",
      winnings: 0.45,
    },
    {
      id: 2,
      name: "Crashed",
      score: "LOSE",
      winnings: 0.15,
    },
    {
      id: 3,
      name: "0x45fg...A5qu",
      score: "WIN",
      winnings: 1.85,
    },
    {
      id: 4,
      name: "0x45fg...A5qu",
      score: "WIN",
      winnings: 0.75,
    },
    {
      id: 5,
      name: "0x45fg...A5qu",
      score: "WIN",
      winnings: 0.45,
    },
    {
      id: 6,
      name: "0x45fg...A5qu",
      score: "WIN",
      winnings: 0.95,
    },
    {
      id: 7,
      name: "Crashed",
      score: "LOSE",
      winnings: 0.35,
    },
    {
      id: 8,
      name: "Crashed",
      score: "LOSE",
      winnings: 0.15,
    },
    {
      id: 9,
      name: "0x45fg...A5qu",
      score: "WIN",
      winnings: 0.75,
    },
  ];

  const wheelDetails0015: WheelData = [
    {
      id: 1,
      detail: "6000 $SGY",
    },
    {
      id: 2,
      detail: "0.075 SOL",
    },
    {
      id: 3,
      detail: "Crashed",
    },
    {
      id: 4,
      detail: "Whitelist",
    },
    {
      id: 5,
      detail: "Crashed",
    },
    {
      id: 6,
      detail: "1X SOL",
    },
    {
      id: 7,
      detail: "5X SOL",
    },
    {
      id: 8,
      detail: "1X Whitelist",
    },
    {
      id: 9,
      detail: "Crashed",
    },
    {
      id: 10,
      detail: "0.16 SOL",
    },
    {
      id: 11,
      detail: "3X SOL",
    },
    {
      id: 12,
      detail: "Crashed",
    },
  ];

  const wheelDetails0035: WheelData = [
    {
      id: 1,
      detail: "Crashed",
    },
    {
      id: 2,
      detail: "10X SOL",
    },
    {
      id: 3,
      detail: "Crashed",
    },
    {
      id: 4,
      detail: "1X SOL",
    },
    {
      id: 5,
      detail: "0.20 SOL",
    },
    {
      id: 6,
      detail: "0.16 SOL",
    },
    {
      id: 7,
      detail: "Crashed",
    },
    {
      id: 8,
      detail: "12000 $SGY",
    },
    {
      id: 9,
      detail: "3X SOL",
    },
    {
      id: 10,
      detail: "Crashed",
    },
    {
      id: 11,
      detail: "Whitelist",
    },
    {
      id: 12,
      detail: "2X SOL",
    },
  ];

  const wheelDetails0075: WheelData = [
    {
      id: 1,
      detail: "Crashed",
    },
    {
      id: 2,
      detail: "24000 $SGY",
    },
    {
      id: 3,
      detail: "0.16 SOL",
    },
    {
      id: 4,
      detail: "0.20 SOL",
    },
    {
      id: 5,
      detail: "0.23 SOL",
    },
    {
      id: 6,
      detail: "Crashed",
    },
    {
      id: 7,
      detail: "5X SOL",
    },
    {
      id: 8,
      detail: "Crashed",
    },
    {
      id: 9,
      detail: "3X SOL",
    },
    {
      id: 10,
      detail: "VIP Card",
    },
    {
      id: 11,
      detail: "Whitelist",
    },
    {
      id: 12,
      detail: "1X SOL",
    },
  ];

  const wheelDetails016: WheelData = [
    {
      id: 1,
      detail: "1X SOL",
    },
    {
      id: 2,
      detail: "Crashed",
    },
    {
      id: 3,
      detail: "36000 $SGY",
    },
    {
      id: 4,
      detail: "1X VIP Card",
    },
    {
      id: 5,
      detail: "0.23 SOL",
    },
    {
      id: 6,
      detail: "0.26 SOL",
    },
    {
      id: 7,
      detail: "Crashed",
    },
    {
      id: 8,
      detail: "10X SOL",
    },
    {
      id: 9,
      detail: "VIP Card",
    },
    {
      id: 10,
      detail: "Crashed",
    },
    {
      id: 11,
      detail: "5X SOL",
    },
    {
      id: 12,
      detail: "Whitelist",
    },
  ];

  return (
    <main className="flex justify-center">
      <div className="font-space w-[320px] h-[470px] xl:max-w-[380px] bg-[#191815] rounded-2xl mt-10 pb-8 text-[#FFFFE3]">
        {/* buttons */}
        <div className="bg-[#30302B] flex items-center justify-center px-8 py-3 rounded-tl-2xl rounded-tr-2xl">
          <div className="flex gap-1 justify-between px-6">
            <div
              onClick={() => handleButtonClick("Details")}
              className={`text-xs font-montserrat font-medium rounded-md p-[1px] ${
                selection === "Details"
                  ? "bg-gradient-to-r from-[#C65E34] to-[#FFFE89] text-[#FFFFE3]"
                  : "bg-transparent text-[#8E8E8E] hover:text-[#FFFFE3]"
              }`}
            >
              <button
                className={`text-xs font-montserrat font-medium rounded-md w-[8.5rem] py-2 ${
                  selection === "Details"
                    ? "bg-[#10100E] border border-[#30302B] text-[#FFFFE3]"
                    : "bg-[#30302B] border border-[#30302B] text-[#8E8E8E] hover:text-[#FFFFE3]"
                }`}
              >
                Details
              </button>
            </div>

            <div
              onClick={() => handleButtonClick("Recent")}
              className={`text-xs font-montserrat font-medium rounded-md p-[1px] ${
                selection === "Recent"
                  ? "bg-gradient-to-r from-[#C65E34] to-[#FFFE89] text-[#FFFFE3]"
                  : "bg-transparent text-[#8E8E8E] hover:text-[#FFFFE3]"
              }`}
            >
              <button
                className={`text-xs font-montserrat font-medium rounded-md w-[8.5rem] py-2 ${
                  selection === "Recent"
                    ? "bg-[#10100E] border border-[#30302B] text-[#FFFFE3]"
                    : "bg-[#30302B] border border-[#30302B] text-[#8E8E8E] hover:text-[#FFFFE3]"
                }`}
              >
                Recent Spin
              </button>
            </div>
          </div>
        </div>

        {/* data */}
        {selection === "Details" &&
          wheelDetails0015.map((deets, index) => (
            <div
              key={deets.id}
              className={`px-5 ${
                index % 2 === 0 ? "bg-[#191815]" : "bg-[#10100E]"
              }`}
            >
              <p className="text-xs py-[6px]">{deets.detail}</p>
            </div>
          ))}

        {selection === "Recent" &&
          recentSpin.map((winnings, index) => (
            <div
              key={winnings.id}
              className={`px-5 pb-1 ${
                index % 2 === 0 ? "bg-[#10100E]" : "bg-[#191815]"
              }`}
            >
              <div className="flex justify-between items-center w-full py-2 rounded-md">
                <p className="text-xs text-white w-1/3">{winnings.name}</p>

                <div className="px-5 border border-transparent border-x-[#30302B] flex items-center gap-1">
                  <p
                    className={`text-xs font-semibold text-center rounded-3xl ${
                      winnings.score === "WIN"
                        ? "bg-[#8DD6AF] text-[#1B874D] py-[2px] px-3 w-16"
                        : "bg-[#FFD6C5] text-[#FF4E00] py-[2px] px-3 w-16"
                    }`}
                  >
                    {winnings.score}
                  </p>
                </div>

                <p className="ml-4 text-xs text-white">
                  {winnings.winnings} SOL
                </p>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
