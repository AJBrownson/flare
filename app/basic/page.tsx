/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import RouletteWheel from "@/components/basicWheel";
import ModalDialog from "react-basic-modal-dialog";
import Guide from "@/public/assets/icons/guide.png";
import Catalogue from "@/public/assets/icons/catalogue.png";
import { GiCheckMark } from "react-icons/gi";
import WheelDetailsModal from "@/components/basicModals/wheelDetailsModal";


export default function GameOn() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isWheelDetailsModalOpen, setWheelDetailsModalOpen] = useState(false);

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

  return (
    <>
      <main className="bg-[url('../public/assets/particles.png')] xl:w-full min-h-screen flex justify-center bg-cover bg-center bg-no-repeat font-space">
        <section className="xl:bg-[url('../public/assets/basic.png')] bg-[url('../public/assets/basic-mobile.png')] bg-cover bg-no-repeat xl:border-l-[1px] xl:border-r-[1px] xl:border-x-blue-500 xl:shadow-glow-sides w-full max-w-full xl:max-w-[820px] px-4">
          <NavBar />

          {/* buttons  */}
          <div className="absolute top-24 w-full max-w-full xl:max-w-[785px] flex items-center justify-between">
            <div className="p-[2px] w-[10rem] rounded-md bg-gradient-to-r from-[#935327] from-5% to-[#FFFE89] to-100%">
              <button 
                onClick={() => setWheelDetailsModalOpen(true)}
                className="flex items-center rounded-md justify-between w-[10rem] py-2 px-4 text-xs xl:text-sm bg-[#fffd89c9] hover:bg-[#fffd898a] text-black">
                <Image src={Catalogue} alt="" />
                Wheel Details
              </button>
            </div>

            <button className="text-[#FFFFE3] flex items-center justify-between py-3 px-4 text-xs bg-[#8e8e8e3f] shadow-md shadow-[#dd1fff8e] rounded-md border border-[#ffffe32d]">
              0.00 SGY | 100.00 SOL
            </button>
          </div>

          {/* roulette wheel */}
          <RouletteWheel />
          <Footer />
        </section>
      </main>

      {/* Wheel details modal */}
      <WheelDetailsModal isOpen={isWheelDetailsModalOpen} onClose={() => setWheelDetailsModalOpen(false)} />

      {/* user's game preference dialog */}
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
                className="text-xs xl:text-sm w-full py-2 bg-[#FFFFE3] hover:bg-[#fff] text-black rounded-lg"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </ModalDialog>
    </>
  );
}
