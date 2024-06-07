"use client";
import { useState } from "react";
import Image from "next/image";
import ProfilePic from "@/public/assets/icons/basic-wheel.png";
import Medal from "@/public/assets/icons/medal-07.png";
import Timer from "@/public/assets/icons/timer-02.png";
import UserAirdropModal from "@/components/userComponent/userAirdropModal";
import Navbar from "@/components/Navbar";
import { useWallet } from "@solana/wallet-adapter-react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

export default function ProductDetails({
  params,
}: {
  params: { walletAddress: string };
}) {
  const { walletAddress } = params;
  const userRank = "1";
  const walletState = "Connected";

  console.log(params);

  const { connected } = useWallet();

  const rankSuffix = (number: number) => {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return "th";
    }
    if (lastDigit === 1) {
      return "st";
    }
    if (lastDigit === 2) {
      return "nd";
    }
    if (lastDigit === 3) {
      return "rd";
    }
    return "th";
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <main className="bg-[url('../public/assets/particles.png')] w-full  flex justify-center bg-cover bg-center bg-no-repeat font-space">
        <section className="bg-cover bg-no-repeat xl:border-l-[1px] xl:border-r-[1px] xl:border-x-blue-500 bg-[#191815] xl:shadow-glow-sides w-full max-w-full xl:max-w-[820px]">
          <Navbar />

          <div className="bg-[#10100E] text-[#FFFFE3] px-6 xl:px-12 font-space">
            {/* user info */}
            <section className="py-6 flex justify-center items-center">
              <div className="bg-[#191815] w-full flex flex-col justify-center items-center max-w-[325px] border border-[#30302B] rounded-lg">
                <Image
                  src={ProfilePic}
                  alt="wheel"
                  className="py-6"
                />
                <div className="p-4 flex justify-between items-center border-t border-[#30302B] w-full">
                  <span className="flex justify-between items-center gap-1">
                    <Image src={Medal} alt="" />
                    <p className="text-xs xl:text-sm">Player&apos;s Rank</p>
                  </span>
                  <p className="rounded-full text-center w-28 text-sm border border-[#30302B] py-1 text-transparent font-bold bg-clip-text bg-gradient-to-b from-[#FFFE89] from-10% to-[#C65E34] to-100%">
                    {userRank}
                    {rankSuffix(parseInt(userRank))}
                  </p>
                </div>
                <div className="p-4 flex justify-between items-center border-t border-[#30302B] w-full">
                  <span className="flex justify-between items-center gap-1 ">
                    <Image src={Medal} alt="" />
                    <p className="text-xs xl:text-sm">
                      {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
                    </p>
                  </span>
                  <p
                    className={cn(
                      "border border-[#30302B] rounded-full text-center w-28 text-sm py-1 text-transparent font-bold bg-clip-text whitespace-nowrap",
                      connected ? "bg-[#87E8B4]" : "bg-red-500"
                    )}
                  >
                    {connected ? "Connected" : "Disconnected"}
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
                  You haven&apos;t received an airdrop allocation yet.
                  Don&apos;t miss out—take action to meet the requirements and
                  secure your spot for the airdrop!
                </p>
                <button
                  onClick={openModal}
                  className="text-sm rounded-lg bg-[#30302B] hover:bg-[#000] py-3 w-28 border border-[#30302B]"
                >
                  Check How
                </button>
              </div>

              <div className="py-6 bg-[#191815] border border-[#30302B] w-full rounded-lg px-4">
                <span className="bg-[#DC1FFF] flex items-center justify-center gap-2 w-28 mb-6 border border-[#30302B] rounded-lg text-center p-2 text-sm font-bold">
                  <Image src={Timer} alt="" className="w-5 h-5" />
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
          <Footer />
        </section>
      </main>

      <UserAirdropModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
