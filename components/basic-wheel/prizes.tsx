"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Close from "@/public/assets/menu-close.png";
import Confetti from "@/public/assets/icons/confetti.svg";
import Winner from "@/public/assets/icons/winner.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrizeModal({ isOpen, onClose }: ModalProps) {
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
    <>
      <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div ref={modalRef} className="relative xl:px-16">
          <button
            onClick={onClose}
            className="absolute -top-10 xl:top-0 right-0 xl:right-4 border border-[#FFFFE3] p-1 rounded"
          >
            <Image src={Close} alt="" />
          </button>

          <section className="p-4 sm:p-10 bg-transparent relative">
          <Image
            src={Confetti}
            alt="confetti"
            fill
            className="absolute w-full"
          />
          <div className="text-white bg-gradient-to-r from-[#FFFE89] to-[#C65E34] p-1 rounded-lg whitespace-nowrap">
            <div className="font-space px-10 py-8 flex flex-col justify-center items-center text-center w-[330px] xl:w-[464px] rounded-lg bg-[#000000] text-[#FFFFE3]">
              <p className="py-4 font-extrabold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#FFFE89] from-30% to-[#C65E34] to-100% text-xl xl:text-3xl ">
                Jackpot!
              </p>
              <Image src={Winner} alt="" />
              <p className="pt-4 flex justify-center text-sm xl:text-base font-bold">
                You&apos;re a winner!
              </p>
              <p className="font-medium">
                Lady Luck is smiling upon you today!
              </p>
            </div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
}
