"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModalDialog from "react-basic-modal-dialog";
import Logo from "@/public/assets/logo11.png";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import Open from "@/public/assets/menu-bar.png";
import Close from "@/public/assets/menu-close.png";
import Home from "@/public/assets/icons/house-05.png";
import Game from "@/public/assets/icons/nintendo-switch.png";
import Solana from "@/public/assets/solana-icon.png";
import Wheelz from "@/public/assets/wheelz.png";
import Tournament from "@/public/assets/tournament.png";
import Games from "@/public/assets/games.png";
import NFT from "@/public/assets/nft.png";
import Dex from "@/public/assets/dex.png";
import BasicWheel from "@/public/assets/icons/basic-wheel.png";
import ChallengerWheel from "@/public/assets/icons/challenger-wheel.png";
import EliteWheel from "@/public/assets/icons/elite-wheel.png";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { cn } from "@/lib/utils";
import ClaimPageModal from "./basic-wheel/claimPageModal";

export default function NavBar({ showClaim }: { showClaim?: boolean }) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCaretUp, setIsCaretUp] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();
  const isOnHomePage = pathName === "/";

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const openDialog = () => setIsDialogVisible(true);
  const closeDialog = () => setIsDialogVisible(false);

  const { connected } = useWallet();

  const handleMenuClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const openModalDialog = () => {
    setIsDialogOpen(true);
    setIsCaretUp(true);
  };

  const closeModalDialog = () => {
    setIsDialogOpen(false);
    setIsCaretUp(false);
  };

  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);

  const openClaimModal = () => {
    setIsClaimModalOpen(true);
  };

  const closeClaimModal = () => {
    setIsClaimModalOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(event.target as Node)
    ) {
      closeModalDialog();
    }
  };

  useEffect(() => {
    if (isDialogOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDialogOpen]);

  return (
    <>
      <nav className="font-space">
        <div className="bg-[#10100E] border border-transparent border-b-[#2F3336] text-white px-2">
          <div className="hidden xl:flex justify-between items-center py-4">
            <ul
              className={`relative flex justify-center items-center gap-8 ${
                isOnHomePage ? "nav-item" : ""
              }`}
            >
              <Link href="/">
                <li className="flex justify-center items-center">
                  <Image src={Home} alt="" className="w-6 h-7 mr-2" /> Home
                </li>
              </Link>
              <button
                onClick={isDialogOpen ? closeModalDialog : openModalDialog}
                className="flex justify-center items-center border border-transparent hover:bg-[#191815] hover:border hover:border-[#2F3336] p-2 rounded-lg"
              >
                <Image src={Game} alt="" className="w-6 h-7 mr-2" /> GameOn{" "}
                {isCaretUp ? (
                  <PiCaretUp className="ml-2" />
                ) : (
                  <PiCaretDown className="ml-2" />
                )}
              </button>
            </ul>
            <div className="">
              <Image src={Logo} alt="" className="w-8 lg:w-12 rounded-full" />
            </div>

            <div className="flex items-center gap-2">
              {showClaim && (
                <button className="flex items-center gap-2 bg-[#1B874D] rounded-lg p-2">
                  <span>Claim</span>{" "}
                  <Image
                    src="/money-bag.svg"
                    alt="money-bag"
                    width={30}
                    height={30}
                  />
                </button>
              )}

              <ConnectButton connected={connected} />
            </div>
          </div>

          {/* mobile menu div */}
          <div className="flex xl:hidden items-center justify-between py-2">
            <div onClick={handleMenuClick} className="block xl:hidden">
              {openMobileMenu ? (
                <Image src={Close} alt="" />
              ) : (
                <Image src={Open} alt="" />
              )}
            </div>
            <Link href="/">
              <Image
                src={Logo}
                alt=""
                className="ml-12 w-11 h-11 rounded-full"
              />
            </Link>

            <div className="flex items-center gap-2">
              {showClaim && (
                <button
                  className="flex items-center gap-2 bg-[#1B874D] rounded-lg p-2"
                  onClick={openClaimModal}
                >
                  <span>Claim</span>{" "}
                  <Image
                    src="/money-bag.svg"
                    alt="money-bag"
                    width={30}
                    height={30}
                  />
                </button>
              )}

              <ConnectButton connected={connected} />
            </div>

            {/* Mobile menu dropdown */}
            {openMobileMenu && (
              <ul className="lg:hidden bg-[#000000] py-3 px-4 z-40 fixed left-0 top-16 w-full h-full">
                <div>
                  <h1 className="text-lg font-bold mb-3 font-montserrat">
                    GameOn
                  </h1>
                  <div className="grid grid-cols-2 gap-2">
                    <div
                      className="bg-[#191815] p-3 rounded-xl"
                      onClick={openDialog}
                    >
                      <Image src={Wheelz} alt="The Wheelz" />
                      <span className="flex justify-between items-center mt-3">
                        <p className="text-sm">The Wheelz</p>
                        <p className="text-xs bg-[#191815] text-[#191815] rounded-xl py-1 px-2">
                          Soon
                        </p>
                      </span>
                    </div>

                    <div className="hover-image p-[1px] rounded-xl hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
                      <div className="bg-[#191815] p-3 rounded-xl">
                        <Image src={Tournament} alt="Tournaments" />
                        <span className="flex justify-between items-center mt-3">
                          <p className="text-sm">Tournaments</p>
                          <p className="text-xs bg-[#560082] text-[#C6C6C6] rounded-xl py-1 px-2">
                            Soon
                          </p>
                        </span>
                      </div>
                    </div>

                    <div className="hover-image p-[1px] rounded-xl hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
                      <div className="bg-[#191815] p-3 rounded-xl">
                        <Image src={Games} alt="More Games" />
                        <span className="flex justify-between items-center mt-3">
                          <p className="text-sm">More Games</p>
                          <p className="text-xs bg-[#560082] text-[#C6C6C6] rounded-xl py-1 px-2">
                            Soon
                          </p>
                        </span>
                      </div>
                    </div>

                    <div className="hover-image p-[1px] rounded-xl hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
                      <div className="bg-[#191815] p-3 rounded-xl">
                        <Image src={NFT} alt="More Games" />
                        <span className="flex justify-between items-center mt-3">
                          <p className="text-sm">NFT Shop</p>
                          <p className="text-xs bg-[#560082] text-[#C6C6C6] rounded-xl py-1 px-2">
                            Soon
                          </p>
                        </span>
                      </div>
                    </div>

                    <div className="hover-image p-[1px] rounded-xl hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
                      <div className="bg-[#191815] p-3 rounded-xl">
                        <Image src={Dex} alt="More Games" />
                        <span className="flex justify-between items-center mt-3">
                          <p className="text-sm">DEX</p>
                          <p className="text-xs bg-[#560082] text-[#C6C6C6] rounded-xl py-1 px-2">
                            Soon
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            )}
          </div>
        </div>
      </nav>

      {/* Sliding Modal Dialog */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 transition-transform duration-500 ${
          isDialogOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          ref={dialogRef}
          className="bg-[#161616] border border-[#30302B] text-[#FFFFE3] w-full max-w-2xl mx-auto mt-20 p-6 rounded-lg shadow-lg"
        >
          <h1 className="text-lg font-bold mb-8 font-montserrat">GameOn</h1>
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-4 mb-1">
              <div
                onClick={openDialog}
                className="hover-image p-[1px] rounded-xl hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%"
              >
                <div className="bg-[#10100E] p-3 rounded-xl">
                  <Image src={Wheelz} alt="" />
                  <span className="flex justify-between items-center mt-3">
                    <p className="text-sm">The Wheelz</p>
                    <p className="text-xs bg-[#10100E] text-[#10100E] rounded-xl py-1 px-2">
                      Soon
                    </p>
                  </span>
                </div>
              </div>

              <div className="hover-image p-[1px] rounded-xl hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
                <div className="bg-[#10100E] p-3 rounded-xl">
                  <Image src={Tournament} alt="" />
                  <span className="flex justify-between items-center mt-3">
                    <p className="text-sm">Tournaments</p>
                    <p className="text-xs bg-[#560082] text-[#C6C6C6] rounded-xl py-1 px-2">
                      Soon
                    </p>
                  </span>
                </div>
              </div>

              <div className="hover-image p-[1px] rounded-xl hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
                <div className="bg-[#10100E] p-3 rounded-xl">
                  <Image src={Games} alt="" />
                  <span className="flex justify-between items-center mt-3">
                    <p className="text-sm">More Games</p>
                    <p className="text-xs bg-[#560082] text-[#C6C6C6] rounded-xl py-1 px-2">
                      Soon
                    </p>
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="hover-image p-[1px] rounded-xl hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
                <div className="bg-[#10100E] p-3 rounded-xl">
                  <Image src={NFT} alt="" />
                  <span className="flex justify-between items-center mt-3">
                    <p className="text-sm">NFT Shop</p>
                    <p className="text-xs bg-[#560082] text-[#C6C6C6] rounded-xl py-1 px-2">
                      Soon
                    </p>
                  </span>
                </div>
              </div>
              <div className="hover-image p-[1px] rounded-xl hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
                <div className="bg-[#10100E] p-3 rounded-xl">
                  <Image src={Dex} alt="" />
                  <span className="flex justify-between items-center mt-3">
                    <p className="text-sm">DEX</p>
                    <p className="text-xs bg-[#560082] text-[#C6C6C6] rounded-xl py-1 px-2">
                      Soon
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* user's game choice dialog */}
      <ModalDialog
        isDialogVisible={isDialogVisible}
        closeDialog={closeDialog}
        dialogClassName="bg-transparent rounded-xl pt-8 xl:p-12 backdrop:bg-black/60"
        contentClassName="bg-[#161616] rounded-none p-6 gap-2 justify-between items-center"
      >
        <div>
          <Image
            onClick={closeDialog}
            src={Close}
            alt=""
            className="absolute cursor-pointer top-0 xl:top-12 right-1 xl:right-2 p-1 w-8 h-8 border hover:border-[#FFFFE3] rounded-lg"
          />
        </div>
        <div className="bg-[#161616] rounded-lg text-[#FFFFE3] pt-6 pb-8 px-4 xl:max-w-[460px] h-[550px] xl:max-h-[375px]">
          <h2 className="text-center text-lg font-montserrat">
            Select an arena for your game
          </h2>
          <p className="text-xs text-center">
            Step into your gaming arena of choice! Which one will it be?
          </p>
          
          <div className="mt-8 flex flex-col gap-[6px]">
            <Link href="/basic">
              <div className="p-[1px] rounded-xl border border-[#30302B] hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
                <div className="flex items-center gap-4 bg-[#161616] p-1 rounded-xl">
                  <Image src={BasicWheel} alt="" />
                  <span className="flex flex-col">
                    <p className="text-sm font-medium font-montserrat mb-1">
                      Basic Wheel
                    </p>
                    <p className="text-xs text-[#8E8E8E]">
                      Play and earn extra rewards
                    </p>
                  </span>
                  <p className="py-1 px-2"></p>
                </div>
              </div>
            </Link>

            {/* <Link href="/game"> */}
            <div className="p-[1px] rounded-xl border border-[#30302B] hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
              <div className="flex justify-between items-center gap-4 bg-[#161616] p-1 rounded-xl">
                <Image src={ChallengerWheel} alt="" />
                <span className="flex flex-col">
                  <p className="text-sm font-montserrat mb-1">
                    Challenger Wheel
                  </p>
                  <p className=" text-xs text-[#8E8E8E]">
                    Everyone bets equally, and the winner takes it all
                  </p>
                </span>
                <p className="text-xs bg-[#560082] text-[#C6C6C6] rounded-xl py-1 px-2">
                  Soon
                </p>
              </div>
            </div>
            {/* </Link> */}

            <div className="p-[1px] rounded-xl border border-[#30302B] hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
              <div className="flex items-center gap-4 bg-[#161616] p-1 rounded-xl">
                <Image src={EliteWheel} alt="" />

                <div className="flex justify-between xl:gap-11 items-center">
                  <span className="flex flex-col">
                    <p className="text-sm font-montserrat mb-1">Elite Wheel</p>
                    <p className=" text-xs text-[#8E8E8E]">
                      Players face off in a high-stakes challenge
                    </p>
                  </span>
                  <p className="text-xs bg-[#560082] text-[#C6C6C6] rounded-xl py-1 px-2">
                    Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalDialog>
      {/* Claim Modal */}
      <ClaimPageModal isOpen={isClaimModalOpen} onClose={closeClaimModal} />
    </>
  );
}

function ConnectButton({ connected }: { connected: boolean }) {
  const [hydrate, setHydrate] = useState(false);

  useEffect(() => {
    setHydrate(true);
  }, []);

  if (!hydrate) return null;
  return (
    <div
      className={cn(
        "flex",
        connected && "border border-[#8E8E8E] rounded-lg"
      )}
    >
      {/* <button className="flex p-3 font-semibold rounded-lg items-center text-sm bg-[#0000FF] text-[#FFFFE3]">
    <Image src={Solana} alt="" className="w-4 h-4 mr-2" />
    Connect Wallet
  </button> */}

      <WalletMultiButton
        style={{
          backgroundColor: `${connected ? "transparent" : "#0000FF"}`,
          fontSize: ".9rem",
          padding: ".75rem",
          borderRadius: ".5rem",
        }}
        
        // onClick={() => {
        //   console.log("click wallet");
        // }}
        // endIcon={
        //   !connected ? (
        //     <Image
        //       src={Solana}
        //       alt="solana icon button"
        //       className="hidden"
        //     />
            
        //   ) : (
        //     <PiCaretDown className="ml-2" />
        //   )
        // }
      />

    </div>
  );
}
