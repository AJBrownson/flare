"use client";
import { useState } from "react";
import Image from "next/image";
import Emoji from "../public/assets/icons/emoji.png";
import Send from "../public/assets/icons/send.png";
import Close from "@/public/assets/menu-close.png"



export default function ChatWidget() {

  const commentsData = [
    {
      id: 1,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "7:00 PM",
      comment: "I just had the best spin of my life! Can't wait to play again!",
    },
    {
      id: 2,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "7:10 PM",
      comment: "I actually WON!!!",
    },
    {
      id: 3,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "7:30 PM",
      comment: "This game is so thrilling! My heart races with every spin!",
    },
    {
      id: 4,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "8:10 PM",
      comment:
        "Even though I didn't win, I had a blast playing. This game is really fun!",
    },
    {
      id: 5,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "8:30 PM",
      comment: "Another loss... when will I catch a break?",
    },
    {
      id: 5,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "8:30 PM",
      comment:
        "I can't believe I lost all my winnings. Feeling really down right now.",
    },
    {
      id: 7,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "8:30 PM",
      comment:
        "I really messed up the game and lost heavily. when will my turn reach?",
    },
  ];

  return (
    <>
      {/* <div className="lg:mt-10 max-h-[34rem] max-w-full lg:max-w-[20rem]"> */}
      <div className="font-space w-[320px] xl:max-w-[309px] bg-[#191815] rounded-2xl mt-10 pb-6 text-[#FFFFE3]">
        <div className="bg-[#30302B] flex items-center justify-center py-3 rounded-tl-2xl rounded-tr-2xl">
          <div className="flex justify-center items-center bg-[#10100E] w-16 h-6 rounded-2xl">
            <span className="p-[5px] bg-[#00CC45] rounded-full mr-1"></span>
            <h1 className="text-[#FFFFE3] text-xs font-montserrat">1101</h1>
          </div>
        </div>

        <div className="px-5">
          {commentsData.map((comment) => (
            <div key={comment.id}>
              <div className="flex items-center mb-1">
                <div className="flex items-center text-sm font-bold text-[#DC1FFF]">
                  <p>{comment.name}</p>
                  <p className="text-xs ml-3 text-[#8E8E8E]">{comment.date}</p>
                  <p className="text-xs ml-2 text-[#8E8E8E]">{comment.time}</p>
                </div>
              </div>
              {/* Comment content */}
              <p className="mb-4 text-xs">{comment.comment}</p>
            </div>
          ))}
        </div>

        {/* comment box */}
        <div className="relative px-5">
          <input
            type="text"
            placeholder="Enter Message"
            className="placeholder:text-[#8E8E8E] text-xs w-full rounded-lg pl-8 py-3 border border-[#30302B] bg-[#191815]"
          />
          <Image src={Emoji} alt="" className="absolute left-7 top-1/2 transform -translate-y-1/2" />
          <Image src={Send} alt="" className="absolute right-7 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
    </>
  );
}
