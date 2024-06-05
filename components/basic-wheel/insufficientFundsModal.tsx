"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Close from "@/public/assets/menu-close.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InsufficientFundsModal({ isOpen, onClose }: ModalProps) {
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

          <section className="text-center w-[330px] xl:w-[464px] rounded-lg bg-[#CFAEA0] text-[#000]">
            <div className="font-bold text-base py-4">
              <h1>Oops!</h1>
            </div>
            <div className="py-10 bg-[#000] text-[#FFFFE3] rounded-b-lg px-6">
              <p>
                Your balance is running low. Time to add some more to keep the
                fun rolling!
              </p>
              <div className="flex justify-center mt-12">
                <button
                  onClick={onClose}
                  className="py-3 bg-[#FFFFE3] hover:bg-[#fff] rounded-lg block w-64 text-[#000] text-xs xl:text-sm font-extrabold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
