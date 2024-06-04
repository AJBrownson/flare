/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import RouletteWheel from "@/components/challengerWheel";
import ModalDialog from "react-basic-modal-dialog";
import Guide from "@/public/assets/icons/guide.png";
import Cup from "@/public/assets/icons/cup.png";
import { GiCheckMark } from "react-icons/gi";
import RecentWinnersModal from "@/components/challengerModals/recentWinnersModal";



export default function GameOn() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isRecentWinnersModalOpen, setRecentWinnersModalOpen] = useState(false);

  useEffect(() => {
    const shouldShowPopupModal =
      localStorage.getItem("showPopupModal") !== "false";
    if (shouldShowPopupModal) {
      setTimeout(() => {
        setIsDialogVisible(true);
      }, 1000);
    }
  }, []);

  const closeDialog = () => {
    if (checked) {
      localStorage.setItem("showPopupModal", "false");
    }
    setIsDialogVisible(false);
  };

  return (
    <>
      <main className="bg-[url('../public/assets/particles.png')] xl:w-full min-h-screen flex justify-center bg-cover bg-center bg-no-repeat font-space">
        <section className="xl:bg-[url('../public/assets/challenger.png')] bg-[url('../public/assets/challenger-mobile.png')] bg-cover bg-no-repeat xl:border-l-[1px] xl:border-r-[1px] xl:border-x-blue-500 xl:shadow-glow-sides w-full max-w-full xl:max-w-[820px] px-4">
          <NavBar />

          {/* buttons  */}
          <div className="absolute top-24 w-full max-w-full xl:max-w-[785px] flex items-center justify-between">
            <div className="p-[2px] w-[11rem] rounded-md bg-gradient-to-r from-[#935327] from-5% to-[#FFFE89] to-100%">
              <button
                onClick={() => setRecentWinnersModalOpen(true)}
                className="flex items-center rounded-md justify-between w-[11rem] py-2 px-4 text-xs xl:text-sm bg-[#fffd89c9] hover:bg-[#fffd898a] text-black"
              >
                <Image src={Cup} alt="" />
                Recent Winners
              </button>
            </div>

            <button className="text-[#FFFFE3] flex items-center justify-between py-3 px-4 text-xs bg-[#8e8e8e3f] shadow-md shadow-[#0091ff8e] rounded-md border border-[#ffffe32d]">
              0.00 SGY | 100.00 SOL
            </button>
          </div>

          <RouletteWheel />
          <Footer />
        </section>
      </main>

      {/* user's game preference dialog */}
      <ModalDialog
        isDialogVisible={isDialogVisible}
        closeDialog={closeDialog}
        dialogClassName="xl:max-w-md rounded-lg p-0 bg-[#10100E] backdrop:bg-black/60"
        contentClassName="bg-[#10100E] rounded-none p-6 gap-2 justify-between items-center"
      >
        <div className="text-[#FFFFE3]">
          <div className="text-center p-4 bg-[#30302B]">
            <h1 className="font-montserrat text-sm">Gameplay Guide</h1>
          </div>
          <div className="px-4">
            <span className="my-6 flex flex-col items-center">
              <Image src={Guide} alt="Gameplay Guide" />
            </span>
            <ul className="flex flex-col gap-4 text-white list-disc text-xs pl-6">
              <li>
                Jump into the action! Every player puts in the same bet and hit
                “Join” for a shot at the prize. Just make sure you've got enough
                in your wallet to join.
              </li>
              <li>
                Winners scoop up the entire prize pool for each round. But don't
                wait too long - only 12 spots open up every 49secs, and they
                fill fast!
              </li>
              <li>
                When the time runs out and not all spots are filled, crashed
                players jump in to fill the gaps, adding a surprise twist to the
                game!
              </li>
              <li>
                It's fair play for everyone, but only the winner takes home the
                winnings. And get this: 90% of the prize pool goes to the
                winner, while 10% helps make the game even better.
              </li>
            </ul>
            <p className="ml-6 mt-4 font-medium text-transparent text-xs bg-clip-text bg-gradient-to-r from-[#FFFE89] from-90% to-[#C65E34] to-100%">
              Ready to play? Hit “continue” and let’s get started!
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

      {/* Recent Winners modal */}
      <RecentWinnersModal
        isOpen={isRecentWinnersModalOpen}
        onClose={() => setRecentWinnersModalOpen(false)}
      />
    </>
  );
}
