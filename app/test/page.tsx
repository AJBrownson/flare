"use client"
import React, { useState } from 'react';
import CountdownModal from '@/components/challenger-wheel/countDownModal';

export default function Testing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={openModal} className="bg-green-500 text-white px-4 py-2 rounded">
        Open Modal
      </button>
      <CountdownModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
