"use client";
import Image from "next/image";
import Cup from "@/public/assets/icons/cup.png";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { formatNumberToKM } from "@/lib/utils";
import { useEffect, useState } from "react";
import RecentWinnersModal from "./recentWinnersModal";
import WalletConnectionModal from "../basic-wheel/walletConnectModal";

export default function WheelzHeader() {
  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();

  const [solBalance, setSolbalance] = useState<number | null>(null);
  const [sgyBalance, setSgybalance] = useState<number | null>(null);
  const [isRecentWinnersModalOpen, setRecentWinnersModalOpen] = useState(false);
  const [isWalletConnectModalOpen, setIsWalletConnectModalOpen] =
    useState(false);

  const openWalletConnectModal = () => {
    setIsWalletConnectModalOpen(true);
  };

  const closeWalletConnectModal = () => {
    setIsWalletConnectModalOpen(false);
  };

  useEffect(() => {
    (async () => {
      if (publicKey) {
        const balance =
          (await connection.getBalance(publicKey)) / LAMPORTS_PER_SOL;
        setSolbalance(balance);
      }
    })();
  }, [connected]);

  const handleRecentWinners = () => {
    if (!connected) {
      openWalletConnectModal();
      return;
    }

    if (connected) {
      setRecentWinnersModalOpen(true);
    }
  };

  return (
    <>
      <header className="font-space relative flex items-center justify-between text-black w-full">
        <div
          onClick={handleRecentWinners}
          className="absolute top-1/2 left-0 p-[2px] bg-gradient-to-r from-[#935327] to-[#FFFE89] overflow-hidden rounded-lg text-xs sm:text-sm"
        >
          <button className="bg-gradient-to-r from-[#FFFE89] to-[#D7BF65] hover:opacity-70 py-2 xl:py-[6px] px-5 rounded-lg flex items-center gap-2">
            <Image src={Cup} alt="" className="w-6 h-6 hidden xl:block" />
            <span>Recent Winners</span>
          </button>
        </div>

        <div className="absolute top-1/2 right-0 bg-[#10100E] border-2 border-[#30302B] py-2 text-white grid grid-cols-2 divide-x divide-[#8E8E8E] rounded-lg shadow-lg shadow-[#0091FF]">
          <div className="text-xs xl:text-sm py-[1px] px-2 xl:px-4">
            N/A SGY
          </div>
          <div className="text-xs xl:text-sm py-[1px] px-2 xl:px-4">
            {connected && solBalance !== null
              ? formatNumberToKM(solBalance, 2)
              : "N/A"}
            SOL
          </div>
        </div>
      </header>

      {/* Recent Winners modal */}
      <RecentWinnersModal
        isOpen={isRecentWinnersModalOpen}
        onClose={() => setRecentWinnersModalOpen(false)}
      />

      <WalletConnectionModal
        isOpen={isWalletConnectModalOpen}
        onClose={closeWalletConnectModal}
      />
    </>
  );
}
