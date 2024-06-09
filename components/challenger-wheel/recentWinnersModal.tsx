"use client";
import { useRef, useEffect } from "react";
import Image from "next/image"
import Close from "@/public/assets/menu-close.png"
import RecentWinners from "./recentWinners";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecentWinnersModal({ isOpen, onClose } : ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="relative xl:px-16">
      <button onClick={onClose} className="absolute top-0 right-0 xl:top-10 xl:right-4 border border-[#FFFFE3] p-1 rounded">
          <Image src={Close} alt="" />
        </button>

        <RecentWinners />
      </div>
    </div>
  );
};

