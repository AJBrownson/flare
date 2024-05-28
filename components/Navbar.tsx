"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link"
import Logo from "@/public/assets/logo.png";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import Home from "@/public/assets/icons/house-05.png";
import Game from "@/public/assets/icons/nintendo-switch.png";
import Solana from "@/public/assets/solana-icon.png";
import Wheelz from "@/public/assets/wheelz.png";
import Tournament from "@/public/assets/tournament.png";
import Games from "@/public/assets/games.png";
import NFT from "@/public/assets/nft.png";
import Dex from "@/public/assets/dex.png";

export default function NavBar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCaretUp, setIsCaretUp] = useState(false); // New state variable
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
    setIsCaretUp(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setIsCaretUp(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(event.target as Node)
    ) {
      closeDialog();
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
          {/* web view */}
          <div className="hidden xl:flex justify-between items-center py-4">
            <ul className="flex gap-8">
              <li className="flex justify-center items-center">
                <Image src={Home} alt="" className="w-6 h-7 mr-2" /> Home
              </li>
              <button
                onClick={isDialogOpen ? closeDialog : openDialog}
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
              <button className="flex p-3 font-semibold rounded-lg items-center text-sm bg-[#0000FF] text-white">
                <Image src={Solana} alt="" className="w-4 h-4 mr-2" />
                Connect Wallet
              </button>
            </div>
          </div>

          {/* mobile menu div */}
          <div onClick={handleMenuClick} className="block lg:hidden">
            {/* {openMobileMenu ? <FaTimes size={25} /> : <FaBars size={25} />} */}
          </div>
          <ul
            className={
              openMobileMenu
                ? `lg:hidden bg-[#14112D] px-3 z-40 fixed left-0 top-16 w-full h-full ease-in-out duration-500`
                : `ease-in-out duration-500 fixed top-16 bottom-0 left-[-100%]`
            }
          >
            <li className="navbar-item">Home</li>
            <li className="navbar-item">GameOn</li>
          </ul>
        </div>
      </nav>

      {/* Sliding Dialog */}
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

              <Link href="/game">
              <div className="hover-image p-[1px] rounded-xl hover:bg-gradient-to-r from-[#FFFE89] from-60% to-[#C65E34] to-100%">
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
              </Link>

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
    </>
  );
}
