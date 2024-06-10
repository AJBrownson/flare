"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";

import { replaceStrPath, solToLamports } from "@/utils/solUtils";
import SgySol from "@/components/sgySol";

import SpinWheelChallanger, {
  SpinWheelChallengerHandle,
} from "@/components/challangerWheel";
import { stringify } from "querystring";
import { registerChallanger, getTime } from "@/lib/api/userService";
import { toast } from "react-toastify";
import { sendSolTransaction } from "@/utils/sendSol";

function Challanger() {
  const [item, setItem] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const spinWheelRef = useRef<SpinWheelChallengerHandle>(null);

  useEffect(() => {
    initializeArray();
    fetchTargetEndTime();
  }, []);

  const fetchTargetEndTime = async () => {
    const response = await getTime();
    console.log(response);
    const targetTime = new Date(response).getTime();
    console.log(targetTime);
    if (!isNaN(targetTime)) {
      updateCountdown(targetTime);
    }
  };

  const updateCountdown = (targetTime: number) => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    const newIntervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance < 0) {
        clearInterval(newIntervalId);
        setTimeLeft(0);
        handleTimeEnd();
        return;
      }

      setTimeLeft(distance);
    }, 1000);

    setIntervalId(newIntervalId);
  };

  const handleTimeEnd = () => {
    alert("Time is up!");
    // Here, you would trigger the spin wheel of prize logic
    spinWheelRef.current?.spin();

    // after spiner wheel reset the coutdown
    fetchTargetEndTime();
  };

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Initialize the array with a value at the first index
  const initializeArray = () => {
    const initialArray = new Array(12).fill("");
    initialArray[0] = "ndihwnfnscakjjwijacjnsfgfgfh";
    setItem(initialArray);
  };

  const beforeSpin = async () => {
    console.log("before spining the wheel");

    // Add your logic here (e.g., async operations)
    return new Promise<void>((resolve) => setTimeout(resolve, 2000)); // Simulate async operation
  };

  const addItem = (item: any) => {
    setItem((prevItems) => {
      const newItems = [...prevItems];
      const firstEmptyIndex = newItems.findIndex((value) => value === "");

      if (firstEmptyIndex !== -1) {
        newItems[firstEmptyIndex] = item;
      } else {
        newItems.push(item);
      }

      return newItems;
    });
  };

  const regChall = async () => {
    try {
      const user = registerChallanger(publicKey, 0.15);
      addItem(publicKey);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSpin = async () => {
    await beforeSpin();

    if (spinWheelRef.current) {
      spinWheelRef.current.spin();
    }
  };

  const handleJoin = useCallback(async () => {
    if (!publicKey) {
      toast.info("Connect Wallet");
      return;
    }
    try {
      const recipientPubkey = new PublicKey(
        "CCCj4vfUwEGsG9aUSrzLBkBR5F5HEgbKYzz6wYmE1UyC"
      );
      const lamports = solToLamports(0.15);

      toast.info("Signing transaction...");
      const signature = await sendSolTransaction(
        connection,
        publicKey,
        recipientPubkey,
        lamports,
        sendTransaction
      );

      toast.success(`Transaction successful with signature!`, {
        position: "bottom-left",
      });
      console.log("Executing additional logic after transaction...");

      regChall();
    } catch (error) {
      toast.error("Transaction failed");
      console.log("Transaction failed");
    }
  }, []);

  return (
    <>
      {/* <div className="container px-16 mx-auto relative">
        <div className="flex items-center justify-between w-full">
          <button className="px-4 py-2 bg-gradient-to-r from-[#FFFE89] to-[#935327] text-black text-sm rounded-md">
            Recent winners
          </button>

          <SgySol />
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <SpinWheelChallanger items={item} sol={0.15} onJoin={handleJoin} />

          <div className="bg-[#10100E] w-[35%] border-[1.3px] border-[#30302B] px-3 py-2 rounded-lg space-y-2">
            <div className="w-full rounded-lg bg-[#320554] px-5 py-2 grid place-content-center">
              <div className="flex gap-x-2 items-center">
                <img
                  src="/timer.png"
                  alt=""
                  className="obejct-contain w-5 h-5"
                />
                <p className="text-3xl font-bold text-[#FFFFE3]">
                  {timeLeft !== null ? formatTime(timeLeft) : "Wait"}
                </p>
              </div>
            </div>

            <div className="w-full grid grid-cols-4 gap-x-1">
              <div className="px-2 py-2 border-[1.3px] border-[#30302B] bg-[#10100E] flex flex-col gap-y-1 items-center rounded-lg">
                <div className="uppercase text-[#8E8E8E] text-[9px]">
                  Stakes
                </div>
                <div className="font-semibold text-[#DC1FFF] text-xs">
                  0.15 SOL
                </div>
              </div>
              <div className="px-2 py-2 border-[1.3px] border-[#30302B] bg-[#10100E] flex flex-col gap-y-1 items-center rounded-lg">
                <div className="uppercase text-[#8E8E8E] text-[9px]">
                  Prize Pool
                </div>
                <div className="font-semibold text-[#DC1FFF] text-xs">
                  1.80 SOL
                </div>
              </div>
              <div className="px-2 py-2 border-[1.3px] border-[#30302B] bg-[#10100E] flex flex-col gap-y-1 items-center rounded-lg">
                <div className="uppercase text-[#8E8E8E] text-[9px]">
                  Entries
                </div>
                <div className="font-semibold text-[#DC1FFF] text-xs">
                  {item.filter((item) => item !== "").length}/12
                </div>
              </div>
              <div className="px-2 py-2 border-[1.3px] border-[#30302B] bg-[#10100E] flex flex-col gap-y-1 items-center rounded-lg">
                <div className="uppercase text-[#8E8E8E] text-[9px]">
                  Slot no
                </div>
                <div className="font-semibold text-[#DC1FFF] text-xs">-</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Challanger;
