"use client";
import Image from "next/image";
// import './Navbar.css'
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useWallet } from "@solana/wallet-adapter-react";
import { IoMdMenu } from "react-icons/io";
import Logo from "../public/assets/logo.png";
import Open from "../public/assets/menu-bar.png";
import Close from "../public/assets/menu-close.png";
import Solana from "../public/assets/solana-icon.png";

import axios from "axios";
import ClaimModal from "./claimModal";
import { MdClose } from "react-icons/md";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const NavBar = () => {
  const wallet = useWallet();

  const [modal, setModal] = useState<boolean>(false);
  const [modalMobile, setModalMobile] = useState<boolean>(false);
  const [claim, setClaim] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(false);

  return (
    <nav className="bg-black text-white py-1 font-space">
      <div className="flex justify-between items-center container md:px-16 mx-auto px-4">
        <div className="">
          <ul className="flex items-center md:space-x-8">
            {/* <li className='inline-flex items-center gap-x-2'><Image src="/home.png" alt="" /><a href='/'>Home</a></li> */}
            <li className="hidden md:block cursor-pointer group">
              {/* {/* <div className='inline-flex items-center gap-x-2'><Image src="/dropdown.png" alt="" />Gameon <Image src="/arrow.png" alt="" /></div> */}
              <div className="invisible absolute top-10 group-hover:visible group-hover:top-15 transition-all ease-in-out duration-300 delay-150 z-50 ">
                <div className="triangle-up"></div>
                <div className="px-5 py-2 grid grid-cols-3 gap-y-2 gap-x-2 border-[1.5px] border-[#30302B] bg-[#161616] rounded-lg">
                  <div
                    onClick={() => setModal(true)}
                    className="w-[200px] h-auto bg-[#10100E] rounded-lg px-4 py-3 space-y-2"
                  >
                    {/* <Image src="/wheel.png" alt="" /> */}
                    <div className="text-xs text-[#FFFFE3]">The Wheelz</div>
                  </div>
                  <div className="w-[200px] h-auto bg-[#10100E] rounded-lg px-4 py-3 space-y-2">
                    {/* <Image src="/cup.png" alt="" /> */}
                    <div className="text-xs text-[#FFFFE3] flex items-center justify-between">
                      {" "}
                      <p>Tournaments</p>{" "}
                      <div className="px-2 py-1 rounded-2xl bg-[#560082] grid place-content-center text-[10px]">
                        Soon
                      </div>
                    </div>
                  </div>
                  <div className="w-[200px] h-auto bg-[#10100E] rounded-lg px-4 py-3 space-y-2">
                    {/* <Image src="/question.png" alt="" /> */}
                    <div className="text-xs text-[#FFFFE3] flex items-center justify-between">
                      {" "}
                      <p>More Games</p>{" "}
                      <div className="px-2 py-1 rounded-2xl bg-[#560082] grid place-content-center text-[10px]">
                        Soon
                      </div>
                    </div>
                  </div>
                  <div className="w-[200px] h-auto bg-[#10100E] rounded-lg px-4 py-3 space-y-2">
                    {/* <Image src="/dog.png" alt="" /> */}
                    <div className="text-xs text-[#FFFFE3] flex items-center justify-between">
                      {" "}
                      <p>NFT Shops</p>{" "}
                      <div className="px-2 py-1 rounded-2xl bg-[#560082] grid place-content-center text-[10px]">
                        Launching 2024
                      </div>
                    </div>
                  </div>
                  <div className="w-[200px] h-auto bg-[#10100E] rounded-lg px-4 py-3 space-y-2">
                    {/* <Image src="/rotate.png" alt="" /> */}
                    <div className="text-xs text-[#FFFFE3] flex items-center justify-between">
                      {" "}
                      <p>DEX</p>{" "}
                      <div className="px-2 py-1 rounded-2xl bg-[#560082] grid place-content-center text-[10px]">
                        Launching 2025
                      </div>
                    </div>
                  </div>
                </div>

                {/* modal for select wheel */}

                {modal && (
                  <div className="absolute top-5 w-full h-full bg-black/20 flex items-center justify-center z-50">
                    <div className="relative flex flex-col bg-[#161616] px-4 py-3 gap-y-4">
                      <div className="text-center">
                        <p className="text-white font-semibold text-lg">
                          Select an arena for your game
                        </p>
                        <p className="text-gray-200 text-sm ">
                          step into your gaming arena of choice! Which one will
                          it be
                        </p>
                      </div>
                      <a href="/play">
                        <div className="px-4 py-1 flex items-center gap-x-4 border-[1.5px] border-[#30302B] rounded-lg">
                          {/* <Image src="basic.png" alt="" /> */}
                          <div className="">
                            <p className="font-semibold text-[#FFFFE3]">
                              Basic Wheel
                            </p>
                            <p className="text-xs text-[#8E8E8E]">
                              play and earn extra rewards
                            </p>
                          </div>
                        </div>
                      </a>
                      <a href="/challange">
                        <div className="px-4 py-1 flex items-center gap-x-4 border-[1.5px] border-[#30302B] rounded-lg">
                          {/* <Image src="challange.png" alt="" /> */}
                          <div className="">
                            <p className="font-semibold text-[#FFFFE3]">
                              Challanger Wheel
                            </p>
                            <p className="text-xs text-[#8E8E8E]">
                              Every one bets equally, and the winner takes it
                              all
                            </p>
                          </div>
                        </div>
                      </a>
                      <div className="px-4 py-1 flex items-center gap-x-4 border-[1.5px] border-[#30302B] rounded-lg">
                        {/* <Image src="elite.png" alt="" /> */}
                        <div className="">
                          <p className="font-semibold text-[#FFFFE3]">
                            Ellite Rollar
                          </p>
                          <p className="text-xs text-[#8E8E8E]">
                            players face off in a high-stakes challange
                          </p>
                        </div>
                      </div>

                      <button
                        className="absolute -right-12 top-0 px-4 py-2 rounded-lg border-[1.5px] border-[#FFFFE3] bg-[#161616] text-[#FFFFE3]"
                        onClick={() => setModal(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                )}

                {/* end of the modal */}
              </div>
            </li>
          </ul>
        </div>

        <div className="w-auto grid place-content-center">
          {/* <Image src="/logo11.png" alt="logo" className='object-contain w-16 h-16' /> */}
        </div>

        <div className="hidden md:flex items-center gap-x-4">
          <div>
            {wallet.publicKey ? (
              <button
                className="inline-flex items-center gap-x-4 px-4 py-2 bg-[#1B874D] text-[#FFFFE3] rounded-md"
                onClick={() => setClaim(true)}
              >
                {/* Claim <Image src="/money-bag-02.png" alt="" /> */}
              </button>
            ) : (
              ""
            )}
          </div>

          <WalletMultiButtonDynamic className="px-0">
            {wallet.publicKey
              ? `${wallet.publicKey.toBase58().substring(0, 7)}****`
              : "Connect Wallet"}
          </WalletMultiButtonDynamic>
        </div>
        <button
          onClick={() => setMobile(true)}
          className="md:hidden py-1 px-2 border-[1.4px] rounded-md border-[#30302B]"
        >
          {/* <IoMdMenu size={30}/> */}
        </button>
      </div>

      <div className="w-full container md:px-16 px-4  mx-auto my-4">
        <div className="border-b-[1.5px] border-grey-800"></div>
      </div>

      {/* mobile Navigation */}
      <div
        className={`h-full md:hidden ${
          mobile
            ? "absolute top-0 right-0 w-[90%] px-4 py-3 bg-black text-white transition-all ease-in-out duration-300 z-50"
            : "fixed top-0 left-[-100%] w-[90%] transition-all ease-in-out delay-150 duration-300"
        }`}
      >
        <button
          onClick={() => setMobile(false)}
          className="px-4 py-2 rounded-md border-[1.4px] border-[#30302B]"
        >
          {/* <MdClose size={30}/> */}
        </button>
        <div className="flex flex-col space-y-8 items-center justify-center ">
          <div className="group">
            {/* {/* <div className='inline-flex items-center gap-x-2'><Image src="/dropdown.png" alt="" />Gameon <Image src="/arrow.png" alt="" /></div> */}

            <div className="invisible group-hover:visible absolute inset-0 z-50">
              <div className="px-2 py-2 grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-1 border-[1.5px] border-[#30302B] bg-[#161616]">
                <div
                  onClick={() => setModalMobile(true)}
                  className="md:w-[200px] w-[150px] h-auto bg-[#10100E] rounded-lg px-4 py-3 space-y-2"
                >
                  {/* <Image src="/wheel.png" alt="" /> */}
                  <div className="text-xs text-[#FFFFE3]">The Wheelz</div>
                </div>
                <div className="md:w-[200px] w-[150px] h-auto bg-[#10100E] rounded-lg px-1 py-3 space-y-2">
                  {/* <Image src="/cup.png" alt="" /> */}
                  <div className="text-xs text-[#FFFFE3] flex items-center justify-between">
                    {" "}
                    <p>Tournaments</p>{" "}
                    <div className="px-2 py-1 rounded-2xl bg-[#560082] grid place-content-center text-[10px]">
                      Soon
                    </div>
                  </div>
                </div>
                <div className="md:w-[200px] w-[150px] h-auto bg-[#10100E] rounded-lg px-1 py-3 space-y-2">
                  {/* <Image src="/question.png" alt="" /> */}
                  <div className="text-xs text-[#FFFFE3] flex items-center justify-between">
                    {" "}
                    <p>More Games</p>{" "}
                    <div className="px-2 py-1 rounded-2xl bg-[#560082] grid place-content-center text-[10px]">
                      Soon
                    </div>
                  </div>
                </div>
                <div className="md:w-[200px] w-[150px] h-auto bg-[#10100E] rounded-lg px-1 py-3 space-y-2">
                  {/* <Image src="/dog.png" alt="" /> */}
                  <div className="text-xs text-[#FFFFE3] flex items-center justify-between">
                    {" "}
                    <p>NFT Shops</p>{" "}
                    <div className="px-2 py-1 rounded-2xl bg-[#560082] grid place-content-center text-[10px]">
                      Launching 2024
                    </div>
                  </div>
                </div>
                <div className="md:w-[200px] w-[150px] h-auto bg-[#10100E] rounded-lg px-1 py-3 space-y-2">
                  {/* <Image src="/rotate.png" alt="" /> */}
                  <div className="text-xs text-[#FFFFE3] flex items-center justify-between">
                    {" "}
                    <p>DEX</p>{" "}
                    <div className="px-2 py-1 rounded-2xl bg-[#560082] grid place-content-center text-[10px]">
                      Launching 2025
                    </div>
                  </div>
                </div>
              </div>

              {/* modal for select wheel */}

              {modalMobile && (
                <div className="absolute top-5 w-full h-auto bg-black/20 flex items-center justify-center z-50">
                  <div className="relative flex flex-col bg-[#161616] px-4 py-3 gap-y-4">
                    <div className="text-center">
                      <p className="text-white font-semibold text-lg">
                        Select an arena for your game
                      </p>
                      <p className="text-gray-200 text-sm ">
                        step into your gaming arena of choice! Which one will it
                        be
                      </p>
                    </div>
                    <a href="/play">
                      <div className="px-4 py-1 flex items-center gap-x-4 border-[1.5px] border-[#30302B] rounded-lg">
                        {/* <Image src="basic.png" alt="" /> */}
                        <div className="">
                          <p className="font-semibold text-[#FFFFE3]">
                            Basic Wheel
                          </p>
                          <p className="text-xs text-[#8E8E8E]">
                            play and earn extra rewards
                          </p>
                        </div>
                      </div>
                    </a>
                    <a href="/challange">
                      <div className="px-4 py-1 flex items-center gap-x-4 border-[1.5px] border-[#30302B] rounded-lg">
                        {/* <Image src="challange.png" alt="" /> */}
                        <div className="">
                          <p className="font-semibold text-[#FFFFE3]">
                            Challenger Wheel
                          </p>
                          <p className="text-xs text-[#8E8E8E]">
                            Every one bets equally, and the winner takes it all
                          </p>
                        </div>
                      </div>
                    </a>
                    <div className="px-4 py-1 flex items-center gap-x-4 border-[1.5px] border-[#30302B] rounded-lg">
                      {/* <Image src="elite.png" alt="" /> */}
                      <div className="">
                        <p className="font-semibold text-[#FFFFE3]">
                          Elite Roller
                        </p>
                        <p className="text-xs text-[#8E8E8E]">
                          players face off in a high-stakes challange
                        </p>
                      </div>
                    </div>

                    <button
                      className="absolute right-0 top-0 px-4 py-2 rounded-lg border-[1.5px] border-[#FFFFE3] bg-[#161616] text-[#FFFFE3]"
                      onClick={() => setModalMobile(false)}
                    >
                      X
                    </button>
                  </div>
                </div>
              )}

              {/* end of the modal */}
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <div>
              {wallet.publicKey ? (
                <button
                  className="inline-flex items-center gap-x-4 px-4 py-2 bg-[#1B874D] text-[#FFFFE3] rounded-md"
                  onClick={() => setClaim(true)}
                >
                  {/* Claim <Image src="/money-bag-02.png" alt="" /> */}
                </button>
              ) : (
                ""
              )}
            </div>

            <WalletMultiButtonDynamic>
              {wallet.publicKey
                ? `${wallet.publicKey.toBase58().substring(0, 7)}****`
                : "Connect Wallet"}
            </WalletMultiButtonDynamic>
          </div>
        </div>
      </div>

      {claim && (
        <div><ClaimModal handleClose={()=>setClaim(false)}/></div>
      )}
    </nav>
  );
};

export default NavBar;
