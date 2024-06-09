/* eslint-disable react/no-unescaped-entities */
import { createPortal } from "react-dom";
import { OUTCOME } from "../basic-wheel/hgbdjbhjdvhjdvag";
import { memo } from "react";

import ModalDialog from "react-basic-modal-dialog";
import Image from "next/image";
import Loser from "@/public/assets/icons/loser.svg";
import Confetti from "@/public/assets/icons/confetti.svg";
import Winner from "@/public/assets/icons/winner.svg";

type Props = {
  opener: boolean;
  outcome: OUTCOME | undefined;
  won: string | undefined;
  setOpener: (open: boolean) => void;
};

export default memo(function PrizeModal({ opener, setOpener, outcome }: Props) {
  return (
    <ModalDialog
      isDialogVisible={opener}
      closeDialog={() => setOpener(false)}
      dialogClassName="min-w-md rounded-lg p-0 bg-transparent backdrop:bg-black/60 outline-none border-none"
      contentClassName="bg-[#10100E] rounded-none p-6 gap-2 justify-between items-center text-white"
    >
      {outcome === OUTCOME.WIN ? (
        <section className="p-4 sm:p-10 bg-transparent relative">
          <Image
            src={Confetti}
            alt="confetti"
            fill
            className="absolute w-full"
          />
          <div className="text-white bg-gradient-to-r from-[#FFFE89] to-[#C65E34] p-1 rounded-lg whitespace-nowrap">
            <div className="font-space px-10 py-8 flex flex-col justify-center items-center text-center w-[330px] xl:w-[464px] rounded-lg bg-[#000000] text-[#FFFFE3]">
              <p className="py-4 font-extrabold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#FFFE89] from-30% to-[#C65E34] to-100% text-xl xl:text-3xl ">
                Jackpot!
              </p>
              <Image src={Winner} alt="" />
              <p className="pt-4 flex justify-center text-sm xl:text-base font-bold">
                You&apos;re a winner!
              </p>
              <p className="font-medium">
                Lady Luck is smiling upon you today!
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="font-space px-10 py-8 flex flex-col justify-center items-center text-center w-[330px] xl:w-[464px] rounded-lg bg-[#000000] text-[#FFFFE3]">
          <h1 className="py-4 font-montserrat font-black text-xl xl:text-3xl">
            Oops!
          </h1>
          <Image src={Loser} alt="" />
          <p className="py-4 flex justify-center text-sm xl:text-base">
            Luck didn&apos;t swing your way this time. Keep spinning for that
            big win!
          </p>
        </section>
      )}
    </ModalDialog>
  );
});
