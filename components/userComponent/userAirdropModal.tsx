"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Guide from "@/public/assets/icons/guide.png";
import Close from "@/public/assets/menu-close.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserAirdropModal({ isOpen, onClose }: ModalProps) {
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
            className="absolute xl:top-10 right-0 xl:right-4 border border-[#FFFFE3] p-1 rounded"
          >
            <Image src={Close} alt="" />
          </button>

          <div className="font-space w-[330px] xl:w-[416px] h-[526px] bg-[#191815] rounded-2xl mt-10 pb-8 text-[#FFFFE3]">
            <div className="bg-[#30302B] flex items-center justify-center py-4 rounded-tl-2xl rounded-tr-2xl">
              <h1 className="text-[#FFFFE3] text-sm xl:text-base font-montserrat">
                How does it work?
              </h1>
            </div>

            <section className="mt-5 flex flex-col justify-center items-center px-4">
              <Image src={Guide} alt="" />
              <span className="mt-5 text-left flex flex-col justify-center">
                <p className="font-medium text-xs xl:text-sm">
                  <span className="font-bold">Join the Community</span>: Get
                  involved in our Discord server&apos;s chats and events.
                </p>
                <p className="py-2 font-medium text-xs xl:text-sm">
                  <span className="font-bold">Level Up</span>: Earn different
                  roles that show off your skills and experience. These roles
                  might unlock exclusive areas and perks.
                </p>
                <p className="py-2 font-medium text-xs xl:text-sm">
                  <span className="font-bold">Discord Challenges</span>: Take
                  part in fun contests and games with fellow members to win cool
                  rewards.
                </p>
                <p className="py-2 font-medium text-xs xl:text-sm">
                  <span className="font-bold">The Wheelz</span>: Try your luck
                  on the “Challenger Wheel” and compete with others for prizes
                  and fame.
                </p>
                <p className="font-medium text-xs xl:text-sm">
                  Earn ranks based on how well you do in challenges. Keep
                  climbing to show off your gaming prowess!
                </p>
              </span>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
