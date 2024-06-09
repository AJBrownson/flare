"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Close from "@/public/assets/menu-close.png";
import Emoji from "@/public/assets/icons/emoji.png";
import Send from "@/public/assets/icons/send.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatWidget({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsVisible(false);
      setTimeout(() => onClose(), 100);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

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
      id: 6,
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
    {
      id: 8,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "8:30 PM",
      comment:
        "I really messed up the game and lost heavily. when will my turn reach?",
    },
    {
      id: 9,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "8:30 PM",
      comment:
        "I really messed up the game and lost heavily. when will my turn reach?",
    },
    {
      id: 10,
      name: "ADXp...HSqu",
      date: "17/1/24",
      time: "8:30 PM",
      comment:
        "I really messed up the game and lost heavily. when will my turn reach?",
    },
  ];

  if (!isOpen && !isVisible) return null;

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className={`relative xl:-right-[17%] xl:px-16 transform transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onClose(), 300);
          }}
          className="absolute lg:hidden xl:top-10 right-0 border border-[#FFFFE3] p-1 rounded"
        >
          <Image src={Close} alt="Close" />
        </button>

        <div className="font-space w-[350px] xl:max-w-[309px] bg-[#191815] rounded-2xl mt-10 pb-6 text-[#FFFFE3]">
          <div className="bg-[#30302B] flex items-center justify-center py-3 rounded-tl-2xl rounded-tr-2xl">
            <div className="flex justify-center items-center bg-[#10100E] w-16 h-6 rounded-2xl">
              <span className="p-[5px] bg-[#00CC45] rounded-full mr-1"></span>
              <h1 className="text-[#FFFFE3] text-xs font-montserrat">1101</h1>
            </div>
          </div>

          {/* Comment content  */}
          <div className="px-5 relative max-h-[500px] overflow-y-auto">
            <div className="sticky top-0 w-full z-10 bg-[#191815] to-transparent bg-opacity-25">
              <div className="w-full h-5 bg-gradient-to-b from-[#191815] to-transparent"></div>
            </div>
            {commentsData.map((comment, i) => (
              <div key={i}>
                <div className="flex items-center mb-1">
                  <div className="flex items-center text-sm font-bold text-[#DC1FFF]">
                    <p>{comment.name}</p>
                    <p className="text-xs ml-3 text-[#8E8E8E]">
                      {comment.date}
                    </p>
                    <p className="text-xs ml-2 text-[#8E8E8E]">
                      {comment.time}
                    </p>
                  </div>
                </div>
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
            <Image
              src={Emoji}
              alt=""
              className="absolute left-7 top-1/2 transform -translate-y-1/2"
            />
            <Image
              src={Send}
              alt=""
              className="absolute right-7 top-1/2 transform -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
