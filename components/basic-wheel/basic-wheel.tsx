/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useRef, RefObject, useEffect } from "react";
import Image from "next/image";
import PointerHover from "/public/assets/pointer-hover.png";
import Pointer from "/public/assets/pointer.png";
import Group from "/public/assets/Group 2.png";
import Timer from "/public/assets/icons/timer-02.png";
import {
  WHEELZ,
  basicWheelzData,
  solWager,
  sgyWager,
  allWagers,
} from "./hgbdjbhjdvhjdvag";
import WheelzHeader from "./wheelz-header";
import { cn } from "@/lib/utils";
import {
  LAMPORTS_PER_SOL,
  Transaction,
  SystemProgram,
  PublicKey,
} from "@solana/web3.js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import * as bs58 from "bs58";
import { chargeAddress, paymentAddress } from "@/lib/utils";
import ModalDialog from "react-basic-modal-dialog";
import { GiCheckMark } from "react-icons/gi";
import Guide from "@/public/assets/icons/guide.png";



const segments = Array.from({ length: 12 });
const circles = Array.from({ length: 12 });

const numOfSpins = 360 * 20;
const counter = "hgfjhhgfghfjyfjyt";

const randomer = (num: number) => Math.random() * (num + 24 - num) + num;

const RouletteWheel = () => {
  const [wheelz, setWheelz] = useState<WHEELZ>(WHEELZ.o_one_five);
  const [count, setCount] = useState<number>(0);
  const [disable, setDisable] = useState<boolean>(false);

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const [spinner, setSpinner] = useState(
    numOfSpins + randomer(basicWheelzData[wheelz].out[count].code)
  );

  const [win, setWin] = useState<{ outcome: string; name: string }>({
    name: basicWheelzData[wheelz].out[count].name,
    outcome: basicWheelzData[wheelz].out[count].outcome,
  });

  const [prizeOpener, setPrizeOpener] = useState<boolean>(false);
  const [currentPrize, setCurrentPrize] = useState<{
    outcome: string;
    name: string;
  }>();

  const [isHovered, setIsHovered] = useState(false);

  const { sendTransaction, publicKey } = useWallet();
  const { connection } = useConnection();

  const wheelRef = useRef<HTMLDivElement>(null);

  const rouletteRingRef = useRef<HTMLDivElement>(null);

  const sendPayment = async () => {
    try {
      if (!publicKey) return null;
      if (
        wheelz === WHEELZ.o_one_five ||
        wheelz === WHEELZ.o_seven_five ||
        wheelz === WHEELZ.o_three_five ||
        wheelz === WHEELZ.one_six
      ) {
        let amount: number;
        switch (wheelz) {
          case WHEELZ.o_one_five:
            amount = 0.015;
            break;

          case WHEELZ.o_three_five:
            amount = 0.035;
            break;

          case WHEELZ.o_seven_five:
            amount = 0.075;
            break;

          case WHEELZ.one_six:
            amount = 0.16;
            break;

          default:
            amount = 0.015;
            break;
        }
        const tx = new Transaction();

        tx.add(
          SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: new PublicKey(bs58.decode(paymentAddress)),
            lamports: amount * LAMPORTS_PER_SOL,
          }),
          SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: new PublicKey(bs58.decode(chargeAddress)),
            lamports: 0.001 * LAMPORTS_PER_SOL,
          })
        );
        const data = await sendTransaction(tx, connection);
        console.log("transac data", data);
        return data;
      } else if (
        wheelz === WHEELZ.one_thousand ||
        wheelz === WHEELZ.one_thousand_five ||
        wheelz === WHEELZ.two_thousand ||
        wheelz === WHEELZ.max
      ) {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  const spinWheel = async () => {
    console.log("before", spinner);

    try {
      const spin_wheel = wheelRef.current;

      const transac = await sendPayment();

      if (spin_wheel && transac) {
        spin_wheel.classList.add("wheel-spinner-timer");

        // console.log('counter win', win);
        if (spinner >= Number.MAX_SAFE_INTEGER - 10000) {
          spin_wheel.style.removeProperty("transform");
          window.location.reload();
          return;
        }
        // console.log('before spinning', spinner);
        // const auds = new Audio("/audio/win-sound.mp3");
        spin_wheel.style.transform = `rotate(${spinner}deg)`;
        setDisable(true);
        // setCurrentPrize(win);
        // setTimeout(async () => {
        //   setDisable(false);
        //   setPrizeOpener(true);
        //   auds.play();
        //   try {
        //     const res = await fetch("/api/games", {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify({
        //         address: address.trim(),
        //         outcome: win.outcome,
        //         name: win.name,
        //         wager: wheelz,
        //         trans: transac,
        //       }),
        //     });

        //     if (res.status === 200) {
        //       await mutate(gamesKey);
        //       await mutate(prizesKey(address));
        //     }
        //   } catch (error) {}
        // }, 6300);

        setCount((prev) => {
          const next =
            prev >= basicWheelzData[wheelz].out.length - 1 ? 0 : prev + 1;
          localStorage.setItem(counter, next.toString());

          // setWin({
          //   name: AdaWheelz[wheelz].out[next].name,
          //   outcome: AdaWheelz[wheelz].out[next].outcome,
          // });

          setSpinner((prevSpinner) => {
            const remainder = prevSpinner % numOfSpins;
            prevSpinner = prevSpinner - remainder;

            const nextSpinner =
              numOfSpins + randomer(basicWheelzData[wheelz].out[next].code);

            return (prevSpinner += nextSpinner);
          });

          return next;
        });
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (window) {
      const leftof = localStorage.getItem(counter);
      if (leftof && Number(leftof) < basicWheelzData[wheelz].out.length) {
        setCount(Number(leftof) ?? 0);
        setSpinner(
          numOfSpins +
            randomer(basicWheelzData[wheelz].out[Number(leftof)].code)
        );
        // setWin({
        //   name: basicWheelzData[wheelz].out[Number(leftof)].name,
        //   outcome: basicWheelzData[wheelz].out[Number(leftof)].outcome,
        // });
      }
    }
  }, [wheelz]);


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
    <main className="px-4 sm:px-10 text-white  font-space min-h-screen conic-bg-grad ">
      <div className="h-14 py-4">
        <WheelzHeader />
      </div>

      <section className="relative flex flex-col items-center justify-center py-10 xl:py-0 px-2 w-full h-full">
        <div
          className="flex justify-center bg-transparent px-0 overflow-hidden z-10"
          style={{ clipPath: "circle(60%)" }}
        >
          <div
            className=" outline outline-4 outline-[#DC1FFF] p-[0.4rem]"
            style={{ borderRadius: "50%" }}
          >
            <div className="roulette-ring" ref={rouletteRingRef}>
              {/* {circles.map((_, index) => {
            const rect = rouletteRingRef.current?.getBoundingClientRect() || {
              width: 240,
            };
            return (
              <div
                key={index}
                className="z-20 absolute bg-gradient-to-r from-[#FFFE89] to-[#C65E34] w-2 h-2 rounded-full"
                style={{
                  top: `calc(50% + ${
                    Math.sin((index / circles.length) * 2 * Math.PI) *
                    rect.width
                  }px)`,
                  left: `calc(50% + ${
                    Math.cos((index / circles.length) * 2 * Math.PI) *
                    rect.width
                  }px)`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            );
          })} */}

              <Image
                onClick={spinWheel}
                src={isHovered ? PointerHover : Pointer}
                alt="Pointer"
                style={{ transform: "translate(-50%, -50%)}" }}
                className="cursor-pointer absolute z-10 inset-x-0 inset-y-0 m-auto transition-transform duration-300 ease-in-out roulette-spinner"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />

              <div className="roulette-container">
                <div ref={wheelRef} className="roulette-wheel">
                  {basicWheelzData[wheelz].wheel.map((item, i) => {
                    return (
                      <div
                        className={`roulette-spin`}
                        style={{
                          backgroundColor: item.background,
                          transform: `rotate(calc(${
                            360 / basicWheelzData[wheelz].wheel.length
                          }deg * ${i + 1}))`,
                        }}
                        key={i}
                      >
                        <span
                          style={{ color: item.textColor }}
                          className="transform rotate-45 w-full text-end 
                                                               pr-[1.55rem] sm:pr-[1.9rem]"
                        >
                          <p className="text-[0.77rem] sm:text-[0.86rem]">
                            {item.name}
                          </p>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=""> {/* -mt-5 */}
          <Image src={Group} alt="Wheel Stand" className="-mt-10 w-48 sm:w-56" />
        </div>

        <WheelzPicker
          wheelz={wheelz}
          setWheelz={setWheelz}
          setSpinner={setSpinner}
          wheelRef={wheelRef}
        />
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
                className="text-xs xl:text-sm w-full py-2 bg-[#FFFFE3] hover:bg-[#fff] text-black rounded-lg"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </ModalDialog>
    </main>
  );
};

export default RouletteWheel;



enum EWagers {
  solWager,
  sgyWager,
}

type WheelzPickerProps = {
  wheelz: WHEELZ;
  setWheelz: (wheelz: WHEELZ) => void;
  // setWin: ({ name, outcome }: { name: string; outcome: string }) => void;
  setSpinner: (spinner: (p: number) => number) => void;
  // setCount: (counter: number) => void;
  // setDisable: (disa: boolean) => void;
  wheelRef: RefObject<HTMLDivElement> | null;
};

const WheelzPicker = ({
  wheelRef,
  setWheelz,
  wheelz,
  setSpinner,
}: WheelzPickerProps) => {
  const [wager, setWager] = useState<EWagers>(EWagers.solWager);

  const changeWager = (wheel: WHEELZ) => {
    // setDisable(true);
    const DivWheel = wheelRef?.current;

    // setTimeout(() => {
    //   setDisable(false);
    // }, 500);

    if (DivWheel && window) {
      DivWheel.classList.remove("wheel-spinner-timer");

      // setCount(0)
      localStorage.removeItem(counter);
      setSpinner((prev) => {
        const remainder = prev % numOfSpins;
        prev = prev - remainder;
        // const turnto = 360 - remainder

        DivWheel.style.removeProperty("transform");

        return numOfSpins + randomer(basicWheelzData[wheel].out[0].code);
      });
      // setWin({
      //   name: AdaWheelz[wheel].out[0].name,
      //   outcome: AdaWheelz[wheel].out[0].outcome,
      // });
      setWheelz(wheel);
    }
  };

  return (
    <div className="bg-[#320554] rounded-lg border border-[#30302B] text-base text-black font-bold p-2 -mt-4 w-72 sm:w-[22rem]">
      <div className="bg-black grid grid-cols-2 gap-3 p-2 rounded-tr-lg rounded-tl-lg text-[#8E8E8E]">
        <button
          className={cn(
            "rounded-lg py-[6px] bg-gradient-to-r",
            wager == EWagers.solWager &&
              "from-[#FFFE89]  to-[#935327] text-black"
          )}
          onClick={() => setWager(EWagers.solWager)}
        >
          Wager SOL
        </button>
        <button
          className={cn(
            "rounded-lg py-[6px] bg-gradient-to-r",
            wager == EWagers.sgyWager &&
              "from-[#FFFE89]  to-[#935327] text-black"
          )}
          onClick={() => setWager(EWagers.sgyWager)}
        >
          Wager SGY
        </button>
      </div>
      <div
        className={cn(
          "grid grid-cols-4 gap-3 bg-[#560082] p-2 rounded-br-lg rounded-bl-lg relative",
          wager === EWagers.sgyWager && "hover:blur-sm"
        )}
      >
        {wager === EWagers.sgyWager && (
          <p className="text-white absolute inset-x-0 inset-y-0 m-auto">
            {" "}
            Not Available{" "}
          </p>
        )}

        {allWagers[wager].map((wage, i) => (
          <button
            className={cn(
              "bg-[#DC1FFF] rounded-lg py-2",
              wage.wheel === wheelz && "bg-[#F2A9FF]"
            )}
            onClick={() => changeWager(wage.wheel)}
            disabled={wager === EWagers.sgyWager}
            key={i}
          >
            {wage.name}
          </button>
        ))}
      </div>
    </div>
  );
};