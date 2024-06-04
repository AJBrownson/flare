"use client";

import Image from "next/image";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { formatNumberToKM } from "@/lib/utils";
import { useEffect, useState } from "react";
import WheelDetailsModal from "./wheelDetailsModal";

export default function WheelzHeader() {
  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();

  const [solBalance, setSolbalance] = useState<number | null>(null);
  const [sgyBalance, setSgybalance] = useState<number | null>(null);
  const [isWheelDetailsModalOpen, setWheelDetailsModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      if (publicKey) {
        const balance =
          (await connection.getBalance(publicKey)) / LAMPORTS_PER_SOL;
        setSolbalance(balance);
      }
    })();
  }, [connected]);

  return (
    <>
      <header className="font-space relative flex items-center justify-between text-black w-full">
        <div
          onClick={() => setWheelDetailsModalOpen(true)}
          className="absolute top-1/2 left-0 p-[2px] bg-gradient-to-r from-[#935327] to-[#FFFE89] overflow-hidden rounded-lg text-xs sm:text-sm"
        >
          <button className="bg-gradient-to-r from-[#FFFE89] to-[#D7BF65] hover:opacity-70 py-2 xl:py-[6px] px-5 rounded-lg flex items-center gap-2">
            <Image
              src="/assets/catalogue.svg"
              alt="logue"
              width={25}
              height={25}
              className="hidden xl:block"
            />
            <span>Wheel Details</span>
          </button>
        </div>

        <div className="absolute top-1/2 right-0 bg-[#8E8E8E] text-white py-2 grid grid-cols-2 divide-x rounded-lg shadow-lg shadow-fuchsia-700">
          <div className="text-sm px-2 xl:px-4">N/A SGY</div>
          <div className="text-sm px-2 xl:px-4">
            {connected && solBalance ? formatNumberToKM(solBalance, 2) : "N/A"}{" "}
            SOL
          </div>
        </div>
      </header>

      {/* Wheel details modal */}
      <WheelDetailsModal
        isOpen={isWheelDetailsModalOpen}
        onClose={() => setWheelDetailsModalOpen(false)}
      />
    </>
  );
}
