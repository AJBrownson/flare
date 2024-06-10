"use client";

import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
// import SpinWheel from "./components/canva";
import SpinWheel from "../../components/canva";

import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { motion } from "framer-motion";

import { CgClose } from "react-icons/cg";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

import {
  lamportsToSol,
  fixToTwoDecimal,
  replaceStrPath,
} from "../../utils/solUtils";
import { registerUser, getSpin } from "../../lib/api/userService";
import { sendChat, getChat } from "../../lib/api/chatService";
import { stringify } from "querystring";
import { toast } from "react-toastify";
import { formatToDate, formatToTime } from "../../lib/utils";
import SgySol from "../../components/sgySol";

function PlayCasion() {
  const [chatModal, setChatModal] = useState<boolean>(false);
  const [wheelModal, setWheelModal] = useState<boolean>(false);
  const [activeBtn, setActiveBtn] = useState<number>(1);
  const [recents, setRecents] = useState<any[]>([]);
  const [message, setMessage] = useState<string>("");
  const [chats, setChats] = useState<any[]>([]);
  const [claim, setClaim] = useState<boolean>(false);

  const openModal = () => {
    setChatModal(true);
  };

  const closeModal = () => {
    setChatModal(false);
  };

  const openWheelModal = () => {
    setWheelModal(true);
    console.log("pressed");
  };

  const closeWheelModal = () => {
    setWheelModal(false);
  };

  // items for changing wheel elements
  const [items, setItems] = useState([
    "0.16 SOL",
    "3X SOL",
    "Crashed",
    "6000 $SGY",
    "0.075 SOL",
    "Crashed",
    "Whitelist",
    "Crashed",
    "1X SOL",
    "5X SOL",
    "1X Whitelist",
    "Crashed",
  ]);
  const item1 = [
    "0.16 SOL",
    "Crashed",
    "12000 $SGY",
    "3X SOL",
    "Crashed",
    "Whitelist",
    "2X SOL",
    "Crashed",
    "10X SOL",
    "Crashed",
    "1X SOL",
    "0.20 SO",
  ];

  const item2 = [
    "0.23 SOL",
    "Crashed",
    "5X SOL",
    "Crashed",
    "3X SOL",
    "VIP Card",
    "Whitelist",
    "1X SOL",
    "Crashed",
    "24000 $SGY",
    "0.16 SOL",
    "0.20 SOL",
  ];

  const item3 = [
    "0.23 SOL",
    "0.26 SOL",
    "Crashed",
    "10X SOL",
    "VIP Card",
    "Crashed",
    "5X SOL",
    "Whitelist",
    "1X SOL",
    "Crashed",
    "36000 $SGY",
    "1X VIP Card",
  ];

  const handleItems = (item: string[], btnNo: number) => {
    setItems(item);
    setActiveBtn(btnNo);
  };

  const { publicKey } = useWallet();

  useEffect(() => {
    getMessages();

    if (!publicKey) return;

    regUser();

    getUserSpin();
  }, [publicKey]);

  const regUser = async () => {
    try {
      const result = await registerUser(publicKey);
      toast.info(result.msg, { position: "bottom-left" });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserSpin = async () => {
    try {
      const res = await getSpin(publicKey);
      setRecents(res.spin);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendmessage = async (event: FormEvent) => {
    event.preventDefault();
    if (!publicKey) return toast.error("Connect Wallet");

    try {
      const res = await sendChat(message, publicKey);
      console.log(res.msg);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const getMessages = async () => {
    try {
      const result = await getChat();
      setChats(result.chat);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-auto bg-black container px-4 md:px-16 mx-auto overflow-x-hidden">
        <div className="md:py-4 grid grid-cols-2 md:flex w-full md:justify-between gap-x-4 items-center">
          <button
            className="md:px-4 py-2 bg-gradient-to-r from-[#FFFE89] to-[#935327] text-black text-sm rounded-md z-10"
            onClick={openWheelModal}
          >
            Wheels Details
          </button>

          <SgySol />
        </div>

        <div className="relative w-full flex flex-col items-center justify-center mt-5 md:mt-0">
          <div className="relative w-full flex items-center justify-center">
            <div className="absolute top-5 w-full flex justify-center ">
              <img
                src="/wheelframe.png"
                alt=""
                className="object-contain h-[340px] w-[340px]"
              />
            </div>
            <SpinWheel items={items} sol={0.015} />
          </div>

          <div className="-mt-12 md:w-[30%] w-full border-2 border-[#560082] rounded-b-lg space-y-4">
            <div className="w-full grid grid-cols-2 gap-x-3 justify-between px-5 mt-2 bg-[#10100E] text-sm">
              <div className="hover:cursor-pointer px-4 py-2 rounded-lg border-[2px] border-[#10100E] text-black bg-gradient-to-r from-[#FFFE89] to-[#935327] grid place-content-center">
                Stake Sol
              </div>
              <div className="hover:cursor-pointer px-4 py-2 rounded-lg border-[2px] border-[#10100E] text-[#FFFFE3] grid place-content-center">
                Stake SGY
              </div>
            </div>

            <div className="bg-[#560082] px-3 py-4 grid grid-cols-4 md:grid-cols-4 gap-x-2 rounded-md">
              <div
                className={`px-1 py-2 rounded-lg  font-semibold text-xs  grid place-content-center cursor-pointer ${
                  activeBtn == 1
                    ? " text-white bg-[#012F8D]"
                    : " text-black bg-[#DC1FFF]"
                }`}
                onClick={() => handleItems(items, 1)}
              >
                0.015
              </div>
              <div
                className={`px-1 py-2 rounded-lg  font-semibold text-xs  grid place-content-center cursor-pointer ${
                  activeBtn == 2
                    ? " text-white bg-[#012F8D]"
                    : " text-black bg-[#DC1FFF]"
                }`}
                onClick={() => handleItems(item1, 2)}
              >
                0.035
              </div>
              <div
                className={`px-1 py-2 rounded-lg  font-semibold text-xs  grid place-content-center cursor-pointer ${
                  activeBtn == 3
                    ? " text-white bg-[#012F8D]"
                    : " text-black bg-[#DC1FFF]"
                }`}
                onClick={() => handleItems(item2, 3)}
              >
                0.075
              </div>
              <div
                className={`px-1 py-2 rounded-lg  font-semibold text-xs  grid place-content-center cursor-pointer ${
                  activeBtn == 4
                    ? " text-white bg-[#012F8D]"
                    : " text-black bg-[#DC1FFF]"
                }`}
                onClick={() => handleItems(item3, 4)}
              >
                0.16
              </div>
            </div>
          </div>

          <div className="md:absolute md:right-[10em] md:bottom-[10em] fixed right-0 bottom-[11rem]">
            <button
              onClick={openModal}
              className="w-16 h-16 rounded-full border-4 border-[#935327] bg-gradient-to-r from-[#FFFE89] to-[#935327] grid place-content-center px-2 py-1"
            >
              <img src="/wechat.png" alt="" />
            </button>
          </div>
        </div>

        {/* Chat modal */}
        {chatModal && (
          <motion.div
            className="bg-[#191815] absolute top-0 right-10 h-[85%] w-[330px] rounded-lg border-[1.5px] border-[#30302B]  z-50"
            initial={{ scale: 0 }}
            animate={{ scale: chatModal ? 1 : 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div className="px-2 py-4 bg-[#30302B] rounded-t-md grid place-content-center">
              <div className="px-3 py-1 rounded-2xl flex justify-center bg-[#10100E]">
                <div className="flex items-center justify-center gap-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#00CC45]"></div>
                  <p className="text-xs font-semibold">1011</p>
                </div>
              </div>
              <button
                className="absolute right-0 border-[1.5px] border-[#FFFFE3] text-[#FFFFE3] px-2 py-1 rounded-lg"
                onClick={closeModal}
              >
                <CgClose size={30} />
              </button>
            </div>

            <div className=" px-4 ">
              <div className="text-sm text-[#FFFFE3] pt-2 space-y-3">
                {chats.length > 0
                  ? chats.map((chat, i) => (
                      <div key={i} className="w-full">
                        <div className="flex gap-x-8 items-center">
                          <div className="text-[#DC1FFF] text-md font-semibold">
                            {replaceStrPath(chat.address)}
                          </div>
                          <div className="text-[#8E8E8E] flex gap-x-2 text-xs">
                            <p>{formatToDate(chat.date)}</p>
                            <p>{formatToTime(chat.date)}</p>
                          </div>
                        </div>

                        <div className="mt-[0.5px] text-sm text-white font-semibold w-full">
                          {chat.msg}
                        </div>
                      </div>
                    ))
                  : "No Messages"}
              </div>

              <div className="absolute fixed bottom-0 right-0 left-0 w-full px-4 py-3">
                <form onSubmit={handleSendmessage}>
                  <div className="flex justify-between items-center border-[1.5px] border-[#30302B] px-2 py-2 rounded-lg">
                    <div className="flex items-center gap-x-2 ">
                      <img src="/smile.png" alt="" />

                      <input
                        type="text"
                        name="msg"
                        value={message}
                        onChange={handleChange}
                        placeholder="Enter Message"
                        className="text-xs font-semibold text-[#8E8E8E] placeholder-[#8E8E8E] bg-transparent outline-none"
                      />
                    </div>

                    <button type="submit">
                      <img src="/sent.png" alt="" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        )}

        {/* WheelDatails modal */}
        {wheelModal && (
          <motion.div
            className="bg-[#191815] absolute top-0 md:left-10 left-0 h-[85%] w-[330px] rounded-lg border-[1.5px] border-[#30302B]  z-50"
            initial={{ scale: 0 }}
            animate={{ scale: wheelModal ? 1 : 0 }}
            transition={{
              type: "spring",
              stiffness: 210,
              damping: 20,
            }}
          >
            <button
              className="absolute md:-right-12 right-0 border-[1.5px] border-[#FFFFE3] text-[#FFFFE3] px-2 py-1 rounded-lg"
              onClick={closeWheelModal}
            >
              <CgClose size={30} />
            </button>

            <Tabs defaultValue="wheel" className="w-full">
              <TabsList className="w-full py-5 flex items-center justify-between bg-[#30302B]">
                <TabsTrigger
                  value="wheel"
                  className="data-[state=active]:bg-[#10100E] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-[#FFFE89] data-[state=active]:rounded-lg  w-full text-sm font-semibold"
                >
                  Wheel Details
                </TabsTrigger>
                <TabsTrigger
                  value="recent"
                  className="data-[state=active]:bg-[#10100E] data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-[#FFFE89] data-[state=active]:rounded-lg  w-full text-sm font-semibold"
                >
                  Recent Spin
                </TabsTrigger>
              </TabsList>

              <TabsContent value="wheel" className="px-4">
                {items.map((data, i) => (
                  <div
                    key={i}
                    className="w-full py-2 text-[#FFFFE3] font-light text-sm overflow"
                  >
                    {data}
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="recent">
                <div className="w-full flex items-center justify-center">
                  {recents.length > 0 ? (
                    <div className="w-full">
                      <ul className="flex flex-col w-full">
                        {recents.map((items, index) => (
                          <li
                            key={index}
                            className={`${
                              index % 2 == 0
                                ? "bg-[#10100E] flex justify-between items-center px-4 py-3"
                                : "bg-[#191815] flex justify-between items-center px-4 py-3"
                            }`}
                          >
                            <p className="text-sm text-[#FFFFE3]">
                              {replaceStrPath(items.address)}
                            </p>
                            <div className="border-l-[1.5px] border-[#30302B] h-[30px]"></div>
                            <div className="">
                              {items.result == "Crashed" ? (
                                <div className="w-[100px] px-5 py-1 rounded-xl bg-[#FFD6C5] text-sm font-semibold text-[#FF4E00] grid place-content-center">
                                  LOSE
                                </div>
                              ) : (
                                <div className="w-[100px] px-5 py-1 rounded-xl bg-[#8DD6AF] text-sm font-semibold text-[#1B874D] grid place-content-center">
                                  {" "}
                                  WIN{" "}
                                </div>
                              )}
                            </div>
                            <div className="border-l-[1.5px] border-[#30302B] h-[30px]"></div>
                            <p className="text-[#FFFFE3] font-semibold">
                              {items.stake}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    "Records not found"
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default PlayCasion;
