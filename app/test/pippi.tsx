"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfilePic from "@/public/assets/icons/basic-wheel.png";
import Medal from "@/public/assets/icons/medal-07.png";
import Timer from "@/public/assets/icons/timer-02.png";

interface UserDetails {
  id: number;
  userRank: number;
  walletAddress: string;
  walletState: string;
}

export default function Profile({ params }: { params: { userRank: number } }) {
  const { userRank } = params;
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  // Dummy data
  const dummyData: UserDetails[] = [
    {
      id: 1,
      userRank: 100,
      walletAddress: "0xc574...A578",
      walletState: "Connected",
    },
    {
      id: 2,
      userRank: 243,
      walletAddress: "0x82A9...B24C",
      walletState: "Disconnected",
    },
    {
      id: 3,
      userRank: 758,
      walletAddress: "0xD10A...7A81",
      walletState: "Connected",
    },
    {
      id: 4,
      userRank: 762,
      walletAddress: "0x1E32...5D09",
      walletState: "Connected",
    },
    {
      id: 5,
      userRank: 601,
      walletAddress: "0x9B87...F1A5",
      walletState: "Connected",
    },
  ];
  
  useEffect(() => {
    // const userRankNumber = parseInt(userRank, 10);
    const user = dummyData.find((user) => user.userRank === userRank);
    setUserDetails(user || null);
  }, [userRank]);

  const rankSuffix = (number: number) => {
    const lastDigit = number % 10;
    if (number >= 11 && number <= 13) {
      return "th";
    }
    switch (lastDigit) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <>
      {userDetails ? (
        <div className="bg-[#10100E] text-[#FFFFE3] px-6 xl:px-12 font-space">
          {/* user info */}
          <section className="py-6 flex justify-center items-center">
            <div className="bg-[#191815] w-full flex flex-col justify-center items-center max-w-[325px] border border-[#30302B] rounded-lg">
              <Image
                src={ProfilePic}
                alt="user profile picture"
                className="py-6"
              />
              <div className="p-4 flex justify-between items-center border-t border-[#30302B] w-full">
                <span className="flex justify-between items-center gap-1">
                  <Image src={Medal} alt="Medal icon" />
                  <p>Player&apos;s Rank</p>
                </span>
                <p className="border border-[#30302B] rounded-full text-center w-24 text-sm py-1 text-transparent font-bold bg-clip-text bg-gradient-to-b from-[#FFFE89] from-10% to-[#C65E34] to-100%">
                  {userDetails.userRank}
                  {rankSuffix(userDetails.userRank)}
                </p>
              </div>
              <div className="p-4 flex justify-between items-center border-t border-[#30302B] w-full">
                <span className="flex justify-between items-center gap-1">
                  <Image src={Medal} alt="Medal icon" />
                  <p>{userDetails.walletAddress}</p>
                </span>
                <p className="border border-[#30302B] rounded-full text-center w-24 text-sm py-1 text-transparent font-bold bg-clip-text bg-[#87E8B4]">
                  {userDetails.walletState}
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="mb-4 py-6 bg-[#191815] border border-[#30302B] w-full rounded-lg px-4">
              <p className="mb-6 border border-[#30302B] rounded-lg text-center w-36 text-sm py-2 font-medium">
                Airdrop Allocation
              </p>
              <h1 className="font-extrabold text-xl mb-3 font-montserrat">
                Sorry, you’re not eligible
              </h1>
              <p className="text-[#8E8E8E] text-sm mb-3">
                You haven&apos;t received an airdrop allocation yet. Don&apos;t
                miss out—take action to meet the requirements and secure your
                spot for the airdrop!
              </p>
              <button className="text-sm rounded-lg bg-[#30302B] hover:bg-[#000] py-3 w-28 border border-[#30302B]">
                Check How
              </button>
            </div>
            <div className="py-6 bg-[#191815] border border-[#30302B] w-full rounded-lg px-4">
              <span className="bg-[#DC1FFF] flex items-center justify-center gap-2 w-28 mb-6 border border-[#30302B] rounded-lg text-center p-2 text-sm font-bold">
                <Image src={Timer} alt="Timer icon" className="w-5 h-5" />
                <p>40 days</p>
              </span>
              <h1 className="font-extrabold text-xl mb-3 font-montserrat">
                Join us and grab a share of 10,000,000 $SOLGACY!
              </h1>
              <p className="text-[#8E8E8E] text-sm mb-3">
                Climb to the top of the leaderboard to become a top player and
                claim your share of SOLGACY!
              </p>
              <button className="text-sm rounded-lg bg-[#30302B] hover:bg-[#000] py-3 w-28 border border-[#30302B]">
                Spin & Win
              </button>
            </div>
          </section>
        </div>
      ) : (
        <div className="text-center p-6">
          <p>User not found</p>
        </div>
      )}
    </>
  );
}
