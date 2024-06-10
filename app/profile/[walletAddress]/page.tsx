"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProfilePic from "@/public/assets/icons/basic-wheel.png";
import Close from "@/public/assets/menu-close.png";
import ModalDialog from "react-basic-modal-dialog";
import Medal from "@/public/assets/icons/medal-07.png";
import Timer from "@/public/assets/icons/timer-02.png";
import UserAirdropModal from "@/components/userComponent/userAirdropModal";
import Navbar from "@/components/Navbar";
import { useWallet } from "@solana/wallet-adapter-react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import BasicWheel from "@/public/assets/icons/basic-wheel.png";
import ChallengerWheel from "@/public/assets/icons/challenger-wheel.png";
import EliteWheel from "@/public/assets/icons/elite-wheel.png";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

export default function UserProfile({
  params,
}: {
  params: { walletAddress: string };
}) {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const openDialog = () => setIsDialogVisible(true);
  const closeDialog = () => setIsDialogVisible(false);

  const { walletAddress } = params;

  const walletState = "Connected";

  const { data } = useSWR(`/api/leaders?address=${walletAddress}`, fetcher);

  const userRank = data && data.data[0].rank;

  console.log(data && data.data[0].rank);

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
      <main className="bg-[url('../public/assets/particles.png')] w-full flex justify-center bg-cover bg-center bg-no-repeat font-space">
        <section className="bg-cover bg-no-repeat xl:border-l-[1px] xl:border-r-[1px] xl:border-x-blue-500 bg-[#191815] xl:shadow-glow-sides w-full max-w-full xl:max-w-[820px]">
          <Navbar />
          <div className="bg-[#10100E] text-[#FFFFE3] pb-4 px-6 xl:px-12 font-space">
            {/* user info */}
            <section className="py-6 flex justify-center items-center">
              <div className="bg-[#191815] flex flex-col justify-center items-center w-full lg:w-[325px] border border-[#30302B] rounded-lg">
                <Image src={ProfilePic} alt="wheel" className="py-6" />
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
                <h1 className="font-extrabold text-sm xl:text-xl mb-3 font-montserrat">
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
                <h1 className="font-extrabold text-sm xl:text-xl mb-3 font-montserrat">
                  Join us and grab a share of 10,000,000 $SOLGACY!
                </h1>
                <p className="text-[#8E8E8E] text-sm mb-3">
                  Climb to the top of the leaderboard to become a top player and
                  claim your share of SOLGACY!
                </p>
                <button
                  onClick={openDialog}
                  className="text-sm rounded-lg bg-[#30302B] hover:bg-[#000] py-3 w-28 border border-[#30302B]"
                >
                  Spin & Win
                </button>
              </div>
            </section>
          </div>
          <Footer />
        </section>
      </main>

      <UserAirdropModal isOpen={isModalOpen} onClose={closeModal} />

      {/* user's game choice dialog */}
      <ModalDialog
        isDialogVisible={isDialogVisible}
        closeDialog={closeDialog}
        dialogClassName="bg-transparent rounded-xl pt-10 xl:p-12 backdrop:bg-black/60"
        contentClassName="bg-[#161616] rounded-none p-6 gap-2 justify-between items-center"
      >
        <div>
          <Image
            onClick={closeDialog}
            src={Close}
            alt=""
            className="absolute cursor-pointer top-0 xl:top-12 right-1 xl:right-2 p-1 w-8 h-8 border hover:border-[#FFFFE3] rounded-lg"
          />
        </div>
        <div className="bg-[#161616] rounded-lg text-[#FFFFE3] pt-6 pb-8 px-4 xl:max-w-[460px] h-[550px] xl:max-h-[410px]">
          <h2 className="text-center text-lg font-montserrat">
            Select an arena for your game
          </h2>
          <p className="text-xs text-center">
            Step into your gaming arena of choice! Which one will it be?
          </p>

          <div className="mt-8 flex flex-col gap-[6px]">
            <Link href="/basic-wheel">
              <div className="p-[1px] rounded-xl border border-[#30302B] hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
                <div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 bg-[#161616] h-20 py-2 p-1 rounded-xl">
                  <Image
                    src={BasicWheel}
                    alt=""
                    className="w-8 h-8 lg:w-16 lg:h-16"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-medium mb-1">Basic Wheel</p>
                    <p className="text-xs text-[#8E8E8E]">
                      Play and earn extra rewards, and unlock in-game treasures!
                    </p>
                  </div>
                  <p className="text-xs bg-transparent border border-[#50C878] text-[#50C878] rounded-xl py-1 px-2">
                    Live
                  </p>
                </div>
              </div>
            </Link>

            <div className="p-[1px] rounded-xl border border-[#30302B] hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
              <div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 bg-[#161616] h-20 py-2 p-1 rounded-xl">
                <Image
                  src={ChallengerWheel}
                  alt=""
                  className="w-8 h-8 lg:w-16 lg:h-16"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-medium mb-1">Challenger Wheel</p>
                  <p className="text-xs text-[#8E8E8E]">
                    Everyone bets equally, and the winner takes it all
                  </p>
                </div>
                <p className="text-xs bg-[#560082] text-[#C6C6C6] rounded-xl py-1 px-2">
                  Soon
                </p>
              </div>
            </div>

            <div className="p-[1px] rounded-xl border border-[#30302B] hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
              <div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 bg-[#161616] h-20 py-2 p-1 rounded-xl">
                <Image
                  src={EliteWheel}
                  alt=""
                  className="w-8 h-8 lg:w-16 lg:h-16"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-medium mb-1">Elite Wheel</p>
                  <p className="text-xs text-[#8E8E8E]">
                    Players face off in a high-stakes challenge
                  </p>
                </div>
                <p className="text-xs bg-[#560082] text-[#C6C6C6] rounded-xl py-1 px-2">
                  Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </ModalDialog>
    </>
  );
}
