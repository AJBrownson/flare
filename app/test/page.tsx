"use client";
import { useState } from "react";
import UserAirdropModal from "@/components/userComponent/userAirdropModal";
// import ChatWidget from "@/components/basic-wheel/chatWidget";
// import Widget from "@/components/basic-wheel/widget";

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
      {/* <UserAirdropModal isOpen={isModalOpen} onClose={closeModal} /> */}
      {/* <ChatWidget /> */}
      {/* <Widget isOpen={isModalOpen} onClose={closeModal} /> */}
    </>
  );
}
