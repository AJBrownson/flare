"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Close from "@/public/assets/menu-close.png";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WalletConnectionModal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { connected } = useWallet();

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

          <section className="font-space text-center w-[330px] xl:w-[464px] rounded-lg bg-[#30302B] text-[#FFFFE3]">
            <div className="font-bold text-sm xl:text-base py-4">
              <h1>Wallet Connection Required</h1>
            </div>
            <div className="py-10 bg-[#000] text-[#FFFFE3] rounded-b-lg px-6">
              <p className="text-sm xl:text-base">
                Connect your wallet to unlock exciting rewards and dive into the
                action!
              </p>
              <div className="flex justify-center mt-12">
                {/* <button className="py-3 bg-[#FFFFE3] hover:bg-[#fff] rounded-lg w-64 text-[#000] text-xs xl:text-sm font-semibold">
                  Connect Wallet
                </button> */}
                <ConnectButton connected={connected} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function ConnectButton({ connected }: { connected: boolean }) {
  const [hydrate, setHydrate] = useState(false);

  useEffect(() => {
    setHydrate(true);
  }, []);

  if (!hydrate) return null;
  return (
    <div
      className={cn("flex", connected && "border border-[#8E8E8E] rounded-lg")}
    >
      <WalletMultiButton />
    </div>
  );
}
