import Image from "next/image";
import GoldCup from "@/public/assets/icons/gold-cup.png";
import { HiMiniUserGroup } from "react-icons/hi2";


export default function RecentWinners() {
  const gamesData = [
    {
      id: 1,
      name: "0x45fg...A5qu",
      score: "WIN",
      participants: 6,
      winnings: 0.45,
    },
    {
      id: 2,
      name: "Crashed",
      score: "LOSE",
      participants: 4,
      winnings: 0.15,
    },
    {
      id: 3,
      name: "0x45fg...A5qu",
      score: "WIN",
      participants: 12,
      winnings: 1.85,
    },
    {
      id: 4,
      name: "0x45fg...A5qu",
      score: "WIN",
      participants: 8,
      winnings: 0.75,
    },
    {
      id: 5,
      name: "0x45fg...A5qu",
      score: "WIN",
      participants: 6,
      winnings: 0.45,
    },
    {
      id: 6,
      name: "0x45fg...A5qu",
      score: "WIN",
      participants: 9,
      winnings: 0.95,
    },
    {
      id: 7,
      name: "Crashed",
      score: "LOSE",
      participants: 5,
      winnings: 0.35,
    },
    {
      id: 8,
      name: "Crashed",
      score: "LOSE",
      participants: 1,
      winnings: 0.15,
    },
    {
      id: 9,
      name: "0x45fg...A5qu",
      score: "WIN",
      participants: 6,
      winnings: 0.75,
    },
  ];

  return (
    <>
      <div className="font-space w-[330px] xl:max-w-[340px] bg-[#191815] rounded-2xl mt-10 pb-8 text-[#FFFFE3]">
        <div className="bg-[#30302B] flex items-center justify-center py-3 rounded-tl-2xl rounded-tr-2xl">
          <Image src={GoldCup} alt="" className="mr-2" />
          <h1 className="text-[#FFFFE3] text-xs font-montserrat">
            Recent Winners
          </h1>
        </div>

          {gamesData.map((winnings) => (
            <div key={winnings.id} className="px-5 pb-1">
              <div className="flex justify-between items-center bg-[#1C1C1C] w-full py-2 rounded-md">

                <p className="text-xs text-white w-1/3">{winnings.name}</p>

                <div className="border border-transparent px-2 border-x-[#30302B] flex items-center gap-1">
                  <p
                    className={`text-xs font-semibold text-center rounded-3xl ${
                      winnings.score === "WIN"
                        ? "bg-[#8DD6AF] text-[#1B874D] py-[2px] px-1 w-12"
                        : "bg-[#FFD6C5] text-[#FF4E00] py-[2px] px-1 w-12"
                    }`}
                  >
                    {winnings.score}
                  </p>

                  <div className="border border-[#ffffff9c] rounded-full py-[2px] p-1 pr-2 flex items-center text-xs text-white">
                    <span className="bg-[#333] rounded-full px-1 mr-1">
                    <HiMiniUserGroup  size={16} className="text-gray-300" />
                    </span>
                    {winnings.participants < 10
                      ? `0${winnings.participants}`
                      : winnings.participants}
                  </div>
                </div>

                <p className="ml-4 text-xs text-white">{winnings.winnings} SOL</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
