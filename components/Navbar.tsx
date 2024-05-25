"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { FaBars } from "react-icons/fa";
import Logo from "../public/assets/logo.png";
import { FaDiscord, FaBars, FaTimes } from "react-icons/fa";
import Home from "../public/assets/icons/house-05.png";
import Game from "../public/assets/icons/nintendo-switch.png";
import Solana from "../public/assets/solana-icon.png";

export default function NavBar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <>
      <nav className="font-sn">
        <div className="bg-[#10100E] border border-transparent border-b-[#2F3336] text-white">
          {/* web view */}
          <div className="hidden xl:flex justify-between items-center py-4">
            <ul className="flex gap-8">
              <li className="flex justify-center items-center">
                <Image src={Home} alt="" className="w-6 h-7 mr-2" /> Home
              </li>
              <button className="flex justify-center items-center border border-transparent hover:bg-[#191815] hover:border hover:border-[#2F3336] p-2 rounded-lg">
                <Image src={Game} alt="" className="w-6 h-7 mr-2" /> GameOn
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
            {openMobileMenu ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
          <ul
            className={
              openMobileMenu
                ? `lg:hidden bg-[#14112D] px-3 z-40 fixed left-0 top-16 w-full h-full ease-in-out duration-500`
                : `ease-in-out duration-500 fixed top-16 bottom-0 left-[-100%]`
            }
          >
            <li className="navbar-item">Home</li>
            <li className="navbar-item">Casino</li>
            <li className="navbar-item">Whitepaper</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
