/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import PointerHover from "@/public/assets/join-hover.png";
import Pointer from "@/public/assets/join.png";
import Group from "/public/assets/Group 2.png";
import Timer from "@/public/assets/icons/timer-02.png";
import WheelzHeader from "./wheelz-header";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import ModalDialog from "react-basic-modal-dialog";
import { GiCheckMark } from "react-icons/gi";
import Guide from "@/public/assets/icons/guide.png";
import Chat from "@/public/assets/chat btn.png";
import Chathover from "@/public/assets/chat btn-hover.png";
import Close from "@/public/assets/menu-close.png";
import PrizeModal from "./prize-modal";
import InsufficientFundsModal from "../basic-wheel/insufficientFundsModal";
import WalletConnectionModal from "../basic-wheel/walletConnectModal";
import ChatWidget from "./chatWidget";
import CountdownModal from "./countDownModal";

const numberOfSegments = 12;
const backgroundColor = "#000000";

const RouletteWheel = () => {
  const [isInsufficientModalOpen, setIsInsufficientModalOpen] = useState(false);
  const [isWalletConnectModalOpen, setIsWalletConnectModalOpen] =
    useState(false);

  const closeModal = () => {
    setIsInsufficientModalOpen(false);
  };

  const openWalletConnectModal = () => {
    setIsWalletConnectModalOpen(true);
  };

  const closeWalletConnectModal = () => {
    setIsWalletConnectModalOpen(false);
  };

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const { connected } = useWallet();

  const wheelRef = useRef<HTMLDivElement>(null);
  const [isChatWidgetOpen, setIsChatWidgetOpen] = useState(false);

  const openChatWidget = () => {
    setIsChatWidgetOpen(true);
  };

  const closeChatWidget = () => {
    setIsChatWidgetOpen(false);
  };

  const handleChats = () => {
    if (!connected) {
      openWalletConnectModal();
      return;
    }

    if (connected) {
      openChatWidget();
    }
  };

  useEffect(() => {
    const shouldShowModal = localStorage.getItem("showModal") !== "false";
    if (shouldShowModal) {
      setTimeout(() => {
        setIsDialogVisible(true);
      }, 1000);
    }
  }, []);

  const closeDialog = () => {
    if (checked) {
      localStorage.setItem("showModal", "false");
    }
    setIsDialogVisible(false);
  };

  const [countdown, setCountdown] = useState(49);
  const [isCountdownModalOpen, setIsCountdownModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 4) {
          setIsCountdownModalOpen(true);
        }
        if (prevCountdown === 1) {
          setIsCountdownModalOpen(false);
        }
        return prevCountdown === 1 ? 49 : prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative px-4 pb-4 text-white font-space conic-bg-grad-challenger">
      <div className="h-14 py-4">
        <WheelzHeader />
      </div>

      <section className="relative flex flex-col items-center justify-center py-10 xl:py-0 px-2 w-full">
        <div
          className="flex justify-center bg-transparent px-0 overflow-hidden z-10"
          style={{ clipPath: "circle(60%)" }}
        >
          <div className="p-[0.4rem] relative" style={{ borderRadius: "50%" }}>
            <Image
              src="/challenger-arch.svg"
              alt="roulette"
              fill
              className="absolute z-10"
            />
            <div className="roulette-ring">
              <Image
                src={isHovered ? PointerHover : Pointer}
                alt="Pointer"
                style={{ transform: "translate(-50%, -50%)}" }}
                className="cursor-pointer absolute z-10 inset-x-0 inset-y-0 m-auto transition-transform duration-300 ease-in-out roulette-spinner"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              <div className="roulette-container">
                <div ref={wheelRef} className="roulette-wheel">
                  {[...Array(numberOfSegments)].map((_, i) => (
                    <div
                      className="roulette-spin"
                      style={{
                        backgroundColor: backgroundColor,
                        transform: `rotate(calc(${
                          360 / numberOfSegments
                        }deg * ${i + 1}))`,
                      }}
                      key={i}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={Group}
            alt="Wheel Stand"
            className="-mt-5 xl:-mt-10 w-48 sm:w-56"
          />
        </div>

        {/* widget for chat */}
        <div
          onClick={handleChats}
          className="absolute bottom-[32%] xl:bottom-40 right-5 z-10 transform translate-y-2 xl:-translate-y-6 translate-x-5 xl:translate-x-4"
        >
          <Image
            src={isChatWidgetOpen ? Chat : Chathover}
            alt="Chat Button"
            className="cursor-pointer w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
          />
        </div>
        <div
          className={
            isChatWidgetOpen
              ? `z-40 fixed bottom-0 right-40 ease-in-out duration-300`
              : `ease-in-out right-40 duration-300 z-40 fixed -bottom-[100%]`
          }
        >
          <button
            onClick={handleChats}
            className="lg:hidden absolute top-0 right-0 border border-[#FFFFE3] p-1 rounded"
          >
            <Image src={Close} alt="" />
          </button>
          <ChatWidget isOpen={isChatWidgetOpen} onClose={closeChatWidget} />
        </div>

        {/* wheel stand */}
        <div className="block bg-[#10100E] p-2 border border-[#30302B] rounded-lg text-center w-full max-w-[476px] max-h-[157] relative -mt-3">
          <div className="flex gap-2 justify-center items-center h-14 xl:h-[70px] px-3 py-2 text-3xl bg-[#320554] rounded-lg">
            <Image src={Timer} alt="" className="w-6 h-6 xl:w-8 xl:h-8" />
            {countdown <= 3 ? (
              <span className="text-white font-montserrat font-bold text-3xl xl:text-5xl w-[10%]">
                --
              </span>
            ) : (
              <span className="text-white font-montserrat font-bold text-3xl xl:text-5xl w-[10%]">
                {countdown < 10 ? `0${countdown}` : countdown}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2 mt-2">
            <div className="py-2 flex flex-col bg-[#10100E] border border-[#30302B] rounded-lg">
              <p className="text-[10px] xl:text-xs text-[#8E8E8E]">STAKES</p>
              <span className="text-sm xl:text-base text-[#DC1FFF] font-montserrat font-semibold">
                0.15 SOL
              </span>
            </div>
            <div className="py-2 flex flex-col bg-[#10100E] border border-[#30302B] rounded-lg">
              <p className="text-[10px] xl:text-xs text-[#8E8E8E]">
                PRICE POOL
              </p>
              <span className="text-sm xl:text-base text-[#4CC9A0] font-montserrat font-semibold">
                1.80 SOL
              </span>
            </div>
            <div className="py-2 flex flex-col bg-[#10100E] border border-[#30302B] rounded-lg">
              <p className="text-[10px] xl:text-xs text-[#8E8E8E]">ENTRIES</p>
              <span className="text-sm xl:text-base font-semibold font-montserrat">
                0/12
              </span>
            </div>
            <div className="py-2 flex flex-col bg-[#10100E] border border-[#30302B] rounded-lg">
              <p className="text-[10px] xl:text-xs text-[#8E8E8E]">SLOT</p>
              <span className="text-sm xl:text-base font-semibold font-montserrat">
                {" "}
                -{" "}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gameplay guide modal */}
      <ModalDialog
        isDialogVisible={isDialogVisible}
        closeDialog={closeDialog}
        dialogClassName="xl:max-w-md rounded-lg p-0 bg-[#10100E] backdrop:bg-black/60"
        contentClassName="bg-[#10100E] rounded-none p-6 gap-2 justify-between items-center"
      >
        <div className="text-[#FFFFE3]">
          <div className="text-center py-4 px-6 bg-[#30302B]">
            <h1 className="font-montserrat text-sm">Gameplay Guide</h1>
          </div>
          <div className="px-4">
            <span className="my-6 flex flex-col items-center">
              <Image src={Guide} alt="Gameplay Guide" />
            </span>
            <ul className="flex flex-col gap-4 text-white list-disc text-xs xl:text-sm pl-6">
              <li>
                Ready to win big? Pick your bet in sol and hit "spin" for a shot
                at the jackpot. Just ensure you've got enough in your wallet to
                join the fun.
              </li>
              <li>
                Winners take home the prize, while your bets fuel improvements
                to keep the excitement going.
              </li>
              <li>
                Fair for all players, but only the lucky winner walks away with
                the winnings.
              </li>
            </ul>
            <p className="ml-6 mt-4 font-medium text-transparent text-xs xl:text-sm bg-clip-text bg-gradient-to-r from-[#FFFE89] from-90% to-[#C65E34] to-100%">
              Feeling lucky? Tap "continue" and let's kick off the game!
            </p>
            <label className="ml-1 mt-4 flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <div
                className={`w-3 h-3 xl:w-5 xl:h-5 rounded-sm border border-[#8E8E8E] ${
                  checked ? "bg-white" : "bg-transparent"
                } flex items-center justify-center`}
              >
                {checked && (
                  <span className="text-black">
                    <GiCheckMark
                      color="black"
                      className="w-2 h-2 xl:w-3 xl:h-3"
                    />
                  </span>
                )}
              </div>
              <span className="ml-3 text-xs xl:text-sm text-[#FFFFE3]">
                Don't show again
              </span>
            </label>
            <div className="mt-8 mb-10 w-full">
              <button
                onClick={closeDialog}
                className="text-xs xl:text-sm font-extrabold w-full py-3 bg-[#FFFFE3] hover:bg-[#fff] text-black rounded-lg"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </ModalDialog>

      {/* Prize modal */}
      {/* <PrizeModal
        won={currentPrize?.name}
        outcome={currentPrize?.outcome}
        opener={prizeOpener}
        setOpener={setPrizeOpener}
      /> */}

      {/* INsufficient funds modal*/}
      <InsufficientFundsModal
        isOpen={isInsufficientModalOpen}
        onClose={closeModal}
      />

      <WalletConnectionModal
        isOpen={isWalletConnectModalOpen}
        onClose={closeWalletConnectModal}
      />

      {/* Countdown Modal */}
      <CountdownModal
        isOpen={isCountdownModalOpen}
        onClose={() => setIsCountdownModalOpen(false)}
      />
    </main>
  );
};

export default RouletteWheel;
