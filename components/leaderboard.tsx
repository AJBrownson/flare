"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Medal01 from "@/public/assets/icons/medal-first-place.png";
import Medal02 from "@/public/assets/icons/medal-second-place.png";
import Medal03 from "@/public/assets/icons/medal-third-place.png";
import Medal06 from "@/public/assets/icons/medal-06.png";
import Medal07 from "@/public/assets/icons/medal-07.png"

// Define the Player type
interface Player {
  wallet: string;
  rank: number;
  number: string;
}

const Leaderboard = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  // Placeholder wallet addresses
  const placeholderData: Player[] = [
    { number: "01", wallet: "0x5xdge...789", rank: 1 },
    { number: "02", wallet: "0x5xdge...544", rank: 2 },
    { number: "03", wallet: "0x5xdge...857", rank: 3 },
    { number: "04", wallet: "0x5xdge...233", rank: 4 },
    { number: "05", wallet: "0x5xdge...098", rank: 5 },
    { number: "06", wallet: "0x5xdge...134", rank: 6 },
    { number: "07", wallet: "0x5xdge...374", rank: 7 },
    { number: "08", wallet: "0x5xdge...238", rank: 8 },
    { number: "09", wallet: "0x5xdge...148", rank: 9 },
    { number: "10", wallet: "0x5xdge...843", rank: 10 },
  ];

  useEffect(() => {
    // Simulate fetching data from backend
    // Replace with actual data fetching logic
    setPlayers(placeholderData);
  }, []);

  const getMedalIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Image src={Medal01} alt="" className="w-7 h-7" />;
      case 2:
        return <Image src={Medal02} alt="" className="w-7 h-7" />;
      case 3:
        return <Image src={Medal03} alt="" className="w-7 h-7" />;
      default:
        return <Image src={Medal06} alt="" className="w-7 h-7" />;
    }
  };

  return (
    <>
    
    <div className="text-[#FFFFE3] container mx-auto font-space">
    <div className="flex items-center gap-5 mb-6 xl:mb-8">
      <h1 className="font-montserrat font-bold text-xl xl:text-2xl">Top Players</h1>
      <p className="py-2 px-3 text-sm text-[#8E8E8E] bg-[#191815] border border-[#30302B] flex items-center rounded-xl">Weekly Stats <Image src={Medal07} alt="" className="ml-2 w-5 h-5 xl:w-6 xl:h-6" /></p>
    </div>
      {/* Table heading for smaller screens */}
      <div className="flex justify-between lg:hidden mb-2">
        <p className="text-left font-montserrat font-bold">Players</p>
        <p className="text-right font-montserrat font-bold">Rank</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
        {[0, 1].map((tableIndex) => (
          <div key={tableIndex} className="">
            {/* table heading for larger screens*/}
            <div className="justify-between hidden lg:flex mb-2">
              <p className="text-left font-montserrat font-bold">Players</p>
              <p className="text-right font-montserrat font-bold">Rank</p>
            </div>
            <table className="min-w-full">
              {/* <thead>
                <tr className="flex justify-between w-full">
                  <p className="py-2 text-left">Player</p>
                  <p className="py-2 text-right">Rank</p>
                </tr>
              </thead> */}
              <tbody className="xl:border-b border-t border-[#30302B] ">
                {players
                  .slice(tableIndex * 5, (tableIndex + 1) * 5)
                  .map((player) => (
                    <tr
                      key={player.wallet}
                      className="border-b border-[#30302B] flex justify-between "
                    >
                      <td className="flex items-center gap-4 py-2">
                        <p className="text-[#8E8E8E] font-semibold">{player.number}</p>
                        <p className="font-medium text-[13px] xl:text-sm">{player.wallet}</p>
                      </td>
                      <td className="py-2">{getMedalIcon(player.rank)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Leaderboard;
