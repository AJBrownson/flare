"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Close from "@/public/assets/menu-close.png";
import Loser from "@/public/assets/icons/loser.svg";
import Jackpot from "@/public/assets/icons/Jackpot!.svg";
import Confetti from "@/public/assets/icons/confetti.svg";
import Winner from "@/public/assets/icons/winner.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrizeModalModal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div ref={modalRef} className="relative xl:px-16">
          <button
            onClick={onClose}
            className="absolute -top-10 xl:top-0 right-0 xl:right-4 border border-[#FFFFE3] p-1 rounded"
          >
            <Image src={Close} alt="" />
          </button>




        </div>
      </div>
    </>
  );
}





{/* <div className="bg-black flex flex-col justify-center items-center gap-6 px-28 py-16 text-white">
<h1 className="text-6xl">OOPS!</h1>
<Image src="/loser.svg" alt="Jackpot" width={130} height={130} />

<h3>Luck didn't swing your way this time. Keep spinning</h3>
<h3>for that big win!</h3>
</div> */}


        // <div className="p-4 sm:p-10 bg-transparent relative">
        //   <Image
        //     src="/confetti.svg"
        //     alt="confetti"
        //     fill
        //     className="absolute w-full"
        //   />

        //   <div className="text-white bg-gradient-to-r from-[#FFFE89] to-[#C65E34] p-2 rounded-lg whitespace-nowrap">
        //     <div className="bg-black flex flex-col justify-center items-center gap-6 px-28 py-16">
        //       <Image
        //         src="/Jackpot!.svg"
        //         alt="Jackpot"
        //         width={150}
        //         height={150}
        //       />
        //       <Image src="/winner.svg" alt="Jackpot" width={130} height={130} />

        //       <h1 className="text-2xl">You're a winner!</h1>

        //       <h3>Lady Luck is smilling upon you today</h3>
        //     </div>
        //   </div>
        // </div>
