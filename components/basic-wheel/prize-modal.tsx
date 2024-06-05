import { createPortal } from "react-dom";
import { OUTCOME } from "./hgbdjbhjdvhjdvag";
import { memo } from "react";

import ModalDialog from "react-basic-modal-dialog";
import Image from "next/image";

type Props = {
  opener: boolean;
  outcome: OUTCOME | undefined;
  won: string | undefined;
  setOpener: (open: boolean) => void;
};

export default memo(function PrizeModal({ opener, setOpener, outcome }: Props) {
  console.log();

  return (
    <ModalDialog
      isDialogVisible={opener}
      closeDialog={() => setOpener(false)}
      dialogClassName="min-w-md rounded-lg p-0 bg-transparent backdrop:bg-black/60 outline-none border-none"
      contentClassName="bg-[#10100E] rounded-none p-6 gap-2 justify-between items-center text-white"
    >
      {outcome === OUTCOME.WIN ? (
        <div className="p-4 sm:p-10 bg-transparent relative">
          <Image
            src="/confetti.svg"
            alt="confetti"
            fill
            className="absolute w-full"
          />

          <div className="text-white bg-gradient-to-r from-[#FFFE89] to-[#C65E34] p-2 rounded-lg  whitespace-nowrap">
            <div className="bg-black flex flex-col justify-center items-center gap-6 px-28 py-16">
              <Image
                src="/Jackpot!.svg"
                alt="Jackpot"
                width={150}
                height={150}
              />
              <Image src="/winner.svg" alt="Jackpot" width={130} height={130} />

              <h1 className="text-2xl">You're a winner!</h1>

              <h3>Lady Luck is smilling upon you today</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black flex flex-col justify-center items-center gap-6 px-28 py-16 text-white">
          <h1 className="text-6xl">OOPS!</h1>
          <Image src="/loser.svg" alt="Jackpot" width={130} height={130} />

          <h3>Luck didn't swing your way this time. Keep spinning</h3>
          <h3>for that big win!</h3>
        </div>
      )}
    </ModalDialog>
  );
});
