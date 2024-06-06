"use client";
import { useState } from "react";
import Image from "next/image"
import InsufficientFundsModal from "@/components/basic-wheel/insufficientFundsModal"
import WalletConnectionModal from "@/components/basic-wheel/walletConnectModal";
import ClaimPageModal from "@/components/basic-wheel/claimPageModal";



export default function Testing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>CLICK ME</button>
      {/* <ClaimPageModal isOpen={isModalOpen} onClose={closeModal} /> */}
      {/* <PrizeModal isOpen={isModalOpen} onClose={closeModal} /> */}
      {/* <InsufficientFundsModal isOpen={isModalOpen} onClose={closeModal} /> */}
      {/* <div className="bg-black flex flex-col justify-center items-center gap-6 px-28 py-16 text-white">
          <h1 className="text-6xl">OOPS!</h1>
          <Image src="/loser.svg" alt="Jackpot" width={130} height={130} />

          <h3>Luck didn&apos;t swing your way this time. Keep spinning</h3>
          <h3>for that big win!</h3>
        </div> */}
    </>
  );
}
