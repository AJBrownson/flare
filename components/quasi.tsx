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




export default function NavBar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCaretUp, setIsCaretUp] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();
  const isOnHomePage = pathName === "/";

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const openDialog = () => setIsDialogVisible(true);
  const closeDialog = () => setIsDialogVisible(false);

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
        <div className="bg-[#10100E] border border-transparent border-b-[#2F3336] text-white">
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
            <div className="hidden lg:flex">
              <button className="flex p-3 font-semibold rounded-lg items-center text-sm bg-[#0000FF] text-[#FFFFE3]">
                <Image src={Solana} alt="" className="w-4 h-4 mr-2" />
                Connect Wallet
              </button>
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
            <button className="flex p-3  rounded-lg items-center text-xs bg-[#0000FF] text-[#FFFFE3]">
              <Image src={Solana} alt="" className="w-3 h-3 mr-2" />
              Connect Wallet
            </button>

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


      <ModalDialog isVisible={isDialogVisible} onClose={closeDialog}>
        <div
          ref={dialogRef}
          className={`fixed z-50 flex justify-center w-full h-full transition-opacity duration-300 ${
            isDialogOpen ? "opacity-100" : "opacity-0 -translate-y-full"
          }`}
        >
          <div className="bg-[#10100E] border border-transparent border-[#2F3336] text-white rounded-lg p-4 w-[70%] md:w-[60%] lg:w-[40%] xl:w-[30%] mx-auto my-auto">
            <div className="text-right">
              <button onClick={closeModalDialog} className="text-xl">
                &times;
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Link href="/games">
                <div className="hover-image p-[1px] rounded-xl hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
                  <div className="bg-[#191815] p-3 rounded-xl">
                    <Image src={BasicWheel} alt="Basic Wheel" />
                    <p className="text-center mt-2">Basic Wheel</p>
                  </div>
                </div>
              </Link>
              <Link href="/challenger-wheel">
                <div className="hover-image p-[1px] rounded-xl hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
                  <div className="bg-[#191815] p-3 rounded-xl">
                    <Image src={ChallengerWheel} alt="Challenger Wheel" />
                    <p className="text-center mt-2">Challenger Wheel</p>
                  </div>
                </div>
              </Link>
              <Link href="/elite-wheel">
                <div className="hover-image p-[1px] rounded-xl hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
                  <div className="bg-[#191815] p-3 rounded-xl">
                    <Image src={EliteWheel} alt="Elite Wheel" />
                    <p className="text-center mt-2">Elite Wheel</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </ModalDialog>
    </>
  );
}
