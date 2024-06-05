"use client";
import { useState } from "react";
import { WHEELZ, basicWheelzData } from "./hgbdjbhjdvhjdvag";
type SelectionType = "Details" | "Recent";
import RecentSpin from "./recent-spin";

export default function WheelDetails({ wheelz }: { wheelz: WHEELZ }) {
  const [selection, setSelection] = useState("Details");

  const handleButtonClick = (selection: SelectionType) => {
    setSelection(selection);
  };

  const recentSpin = [
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

  const wheelDetails = basicWheelzData[wheelz].wheel;

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
          wheelDetails.map((deets, index) => (
            <div
              key={index}
              className={`px-5 ${
                index % 2 === 0 ? "bg-[#191815]" : "bg-[#10100E]"
              }`}
            >
              <p className="text-xs py-[6px]">{deets.name}</p>
            </div>
          ))}

        {selection === "Recent" && <RecentSpin />}
      </div>
    </main>
  );
}
