"use client";
import { useState } from "react";
import Image from "next/image"
import InsufficientFundsModal from "@/components/basic-wheel/insufficientFundsModal"
import WalletConnectionModal from "@/components/basic-wheel/walletConnectModal";
import ClaimPageModal from "@/components/basic-wheel/claimPageModal";
import PrizeModal from "@/components/basic-wheel/prizes";


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
      <ClaimPageModal isOpen={isModalOpen} onClose={closeModal} />
      {/* <PrizeModal isOpen={isModalOpen} onClose={closeModal} /> */}
      {/* <InsufficientFundsModal isOpen={isModalOpen} onClose={closeModal} /> */}
     {/* <WalletConnectionModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </>
  );
}
