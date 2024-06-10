"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import GoldCup from "@/public/assets/icons/gold-cup.png";
import Empty from "@/public/assets/icons/empty.png";
import Close from "@/public/assets/menu-close.png";
import useSWR from "swr";
import { useWallet } from "@solana/wallet-adapter-react";
import { prizesKey, fetcher, cn } from "@/lib/utils";
import { Game, CLAIMED } from "@prisma/client";
import WalletConnectionModal from "./walletConnectModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClaimPageModal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { connected, publicKey } = useWallet();

  const { data, isLoading, mutate } = useSWR(
    connected && publicKey ? `${prizesKey(publicKey.toBase58())}` : null,
    fetcher
  );

  const [prizeLoader, setPrizeLoader] = useState(false);
  const [prizeId, setPrizeId] = useState("");

  const claimPrize = async (prize: Game) => {
    setPrizeLoader(true);
    setPrizeId(prize.id);
    try {
      const response = await fetch("/api/prize", {
        method: "post",
        body: JSON.stringify(prize),
      });

      if (response.status === 200) {
        const updatedData = data?.data?.map((item: Game) => {
          if (item.id === prize.id) {
            return {
              ...item,
              claimed: CLAIMED.YES,
            };
          }
          return item;
        });

        if (updatedData) {
          mutate({ data: updatedData }, false);
        }
      }
    } catch (error) {
      console.error("Error claiming prize:", error);
    } finally {
      setPrizeLoader(false);
      setPrizeId("");
    }
  };

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

  if (!connected || !publicKey) {
    return <WalletConnectionModal isOpen={isOpen} onClose={onClose} />;
  }

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="relative xl:px-16">
        <button
          onClick={onClose}
          className="absolute xl:top-10 right-0 xl:right-4 border border-[#FFFFE3] p-1 rounded"
        >
          <Image src={Close} alt="Close" />
        </button>

        <div className="font-space w-[330px] xl:max-w-[340px] h-[551px] bg-[#191815] rounded-2xl mt-10 pb-8 text-[#FFFFE3]">
          <div className="bg-[#30302B] flex items-center justify-center py-3 rounded-tl-2xl rounded-tr-2xl">
            <Image src={GoldCup} alt="Gold Cup" className="mr-2" />
            <h1 className="text-[#FFFFE3] text-xs font-montserrat">
              Your Prize
            </h1>
          </div>
          {isLoading || !data ? (
            <div className="text-center text-white mt-4">loading...</div>
          ) : data && data.data && data.data.length > 0 ? (
            <div className="mt-2 space-y-4">
              {data.data.map((wins: Game, i: number) =>
                wins.claimed === CLAIMED.YES ? (
                  <div
                    className="flex items-center justify-between px-3"
                    key={i}
                  >
                    <p className="text-white/50">{wins.name}</p>
                    <button
                      className="p-2 rounded-lg text-sm text-white/60 w-32 border-white/60 border bg-transparent"
                      disabled
                    >
                      Claimed
                    </button>
                  </div>
                ) : (
                  <div
                    className="flex items-center justify-between px-3"
                    key={i}
                  >
                    <p className="text-white/50">{wins.name}</p>
                    <button
                      className={cn(
                        `py-2 px-6 rounded-lg text-sm text-white border-white border bg-transparent w-32`,
                        prizeLoader &&
                          prizeId === wins.id &&
                          "text-white/60 border-white/60"
                      )}
                      onClick={() => claimPrize(wins)}
                      disabled={prizeLoader && prizeId === wins.id}
                    >
                      {prizeLoader && prizeId === wins.id ? "Pending" : "Claim"}
                    </button>
                  </div>
                )
              )}
            </div>
          ) : (
            <section className="mt-10 flex flex-col justify-center items-center">
              <Image src={Empty} alt="Empty" />
              <span className="mt-10 text-center flex flex-col justify-center">
                <p className="text-[#FFFFE3] text-sm">
                  You haven&apos;t won anything yet.
                </p>
                <h1 className="font-montserrat font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFE89] from-35% to-[#C65E34] to-100%">
                  SPIN
                </h1>
                <p className="text-[#FFFFE3] text-sm">
                  for a chance to win cool prizes!
                </p>
              </span>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
