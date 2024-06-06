"use client";
import { useState } from "react";
import UserAirdropModal from "@/components/userComponent/userAirdropModal";

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
      <UserAirdropModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
