"use client";
import { useState } from "react";
import Image from "next/image";
import ProfilePic from "@/public/assets/icons/basic-wheel.png";
import Medal from "@/public/assets/icons/medal-07.png";
import Timer from "@/public/assets/icons/timer-02.png";

export default function Users() {
  const userRank = "100";
  const [rank, setRank] = useState(userRank);
  const walletAddress = "0xc574...A578";
  const walletState = "Connected";

  const rankSuffix = (number: number) => {
    const lastDigit = number % 10;
    if (lastDigit === 1 && number == 11) {
      return "st";
    } else if (lastDigit === 2 && number == 12) {
      return "nd";
    } else if (lastDigit === 3 && number == 13) {
      return "rd";
    } else {
      return "th";
    }
  };
  return (
    <>
      <div className="bg-[#10100E] text-[#FFFFE3] px-6 xl:px-12 font-space">
        {/* user info */}
        <section className="py-6 flex justify-center items-center">
          <div className="bg-[#191815] w-full flex flex-col justify-center items-center max-w-[325px] border border-[#30302B] rounded-lg">
            <Image src={ProfilePic} alt="user profile picture" className="py-6" />
            <div className="p-4 flex justify-between items-center border border-[#30302B] w-full">
              <span className="flex justify-between items-center gap-1">
                <Image src={Medal} alt="" />
                <p>Player&apos;s Rank</p>
              </span>
              <p className="border border-[#30302B] rounded-full text-center w-24 text-sm py-1 text-transparent font-bold bg-clip-text bg-gradient-to-b from-[#FFFE89] from-10% to-[#C65E34] to-100%">
                {rank}
                {rankSuffix(parseInt(rank))}
              </p>
            </div>
            <div className="p-4 flex justify-between items-center border border-[#30302B] w-full">
              <span className="flex justify-between items-center gap-1">
                <Image src={Medal} alt="" />
                <p>{walletAddress}</p>
              </span>
              <p className="border border-[#30302B] rounded-full text-center w-24 text-sm py-1 text-transparent font-bold bg-clip-text bg-[#87E8B4]">
                {walletState}
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 py-6 bg-[#191815] border border-[#30302B] w-full rounded-lg px-4">
            <p className="mb-6 border border-[#30302B] rounded-lg text-center w-36 text-sm py-2 font-bold">
              Airdrop Allocation
            </p>
            <h1 className="font-extrabold text-xl mb-3 font-montserrat">
              Sorry, you’re not eligible
            </h1>
            <p className="text-[#8E8E8E] text-sm mb-3">
              You haven&apos;t received an airdrop allocation yet. Don&apos;t
              miss out—take action to meet the requirements and secure your spot
              for the airdrop!
            </p>
            <button className="rounded-lg bg-[#30302B] hover:bg-[#000] py-2 w-28 border border-[#30302B]">
              Check How
            </button>
          </div>

          <div className="py-6 bg-[#191815] border border-[#30302B] w-full rounded-lg px-4">
            <span className="bg-[#DC1FFF] flex items-center justify-center gap-2 w-28 mb-6 border border-[#30302B] rounded-lg text-center p-2 text-sm font-bold">
              <Image src={Timer} alt="" className="w-6 h-6" />
              <p>30 days</p>
            </span>
            <h1 className="font-extrabold text-xl mb-3 font-montserrat">
              Join us and grab a share of 10,000,000 $SOLGACY!
            </h1>
            <p className="text-[#8E8E8E] text-sm mb-3">
              Climb to the top of the leaderboard to become a top player and
              claim your share of SOLGACY!
            </p>
            <button className="rounded-lg bg-[#30302B] hover:bg-[#000] py-2 w-28 border border-[#30302B]">
              Spin & Win
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
