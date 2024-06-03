"use client";

import Image from "next/image";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { formatNumberToKM } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function WheelzHeader() {
  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();

  const [solBalance, setSolbalance] = useState<number | null>(null);
  const [sgyBalance, setSgybalance] = useState<number | null>(null);

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
    <header className="flex items-center justify-between text-black w-full">
      <div className="p-1 bg-gradient-to-r from-[#935327] to-[#FFFE89] overflow-hidden rounded-lg text-xs sm:text-sm">
        <button className="bg-gradient-to-r from-[#FFFE89] to-[#D7BF65] hover:opacity-70 py-2 px-5 rounded-lg flex items-center gap-2">
          <Image
            src="/assets/catalogue.svg"
            alt="logue"
            width={25}
            height={25}
          />
          <span>Wheel Details</span>
        </button>
      </div>

      <div className="bg-[#8E8E8E] text-white py-2 grid grid-cols-2 divide-x rounded-lg shadow-lg shadow-fuchsia-700">
        <div className="px-4">N/A SGY</div>
        <div className="px-4">
          {connected && solBalance ? formatNumberToKM(solBalance, 2) : "N/A"}{" "}
          SOL
        </div>
      </div>
    </header>
  );
}
