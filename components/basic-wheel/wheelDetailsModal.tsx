"use client";
import { useRef } from "react"
import Image from "next/image"
import Close from "@/public/assets/menu-close.png"
import WheelDetails from "./wheelDetails"


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WheelDetailsModal({ isOpen, onClose } : ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div onClick={handleOutsideClick} className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="relative xl:px-16">
      <button onClick={onClose} className="absolute top-0 right-0 xl:top-10 xl:right-4 border border-[#FFFFE3] p-1 rounded">
          <Image src={Close} alt="" />
        </button>
        <WheelDetails />
      </div>
    </div>
  );
};

