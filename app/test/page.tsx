"use client";
import { useState } from "react";
import InsufficientFundsModal from "@/components/basic-wheel/insufficientFundsModal"
import WalletConnectionModal from "@/components/basic-wheel/walletConnectModal";

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
      <InsufficientFundsModal isOpen={isModalOpen} onClose={closeModal} />
      {/* <WalletConnectionModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </>
  );
}
