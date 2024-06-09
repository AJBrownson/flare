"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Close from "@/public/assets/menu-close.png";
import Emoji from "@/public/assets/icons/emoji.png";
import Send from "@/public/assets/icons/send.png";
import { useWallet } from "@solana/wallet-adapter-react";
import Picker from "@emoji-mart/react";
import emojiData from "@emoji-mart/data";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import useSWRInfinite from "swr/infinite";
import { cn, fetcher } from "@/lib/utils";
import { shortenAddress } from "../leaderboard";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const getKey = (pageIndex: any, previousPageData: any) => {
  if (previousPageData && !previousPageData.data.length) return null; // reached the end
  return `/api/chat?offset=${pageIndex}&limit=${limit}`; // SWR key
};

const limit = 2;
export default function ChatWidget({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(isOpen);
  const [createMessage, setCreateMessage] = useState(false);
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const { publicKey } = useWallet();

  const handleOutsideClick = (event: MouseEvent) => {
    // if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
    //   setIsVisible(false);
    //   setTimeout(() => onClose(), 300);
    // }
  };

  const textRef = useRef<HTMLTextAreaElement>(null);

  const { data, size, setSize, isLoading, mutate, isValidating } =
    useSWRInfinite(getKey, fetcher, {
      refreshInterval: () => (isOpen ? 3000 : 0),
    });

  const handleEmoji = (emoji: { native: string }) => {
    if (textRef.current) {
      textRef.current.value = `${textRef.current.value}${emoji.native}`;
    }
  };

  const sendMessage = async () => {
    setCreateMessage(true);
    try {
      if (publicKey && textRef.current) {
        const res = await fetch("/api/chat", {
          method: "post",
          body: JSON.stringify({
            address: publicKey.toBase58(),
            message: textRef.current.value,
          }),
        });

        if (res.status === 200) {
          mutate();
        }

        textRef.current.value = "";
      }
    } catch (error) {}
    setCreateMessage(false);
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

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");

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
          className="absolute xl:top-10 right-0 border border-[#FFFFE3] p-1 rounded"
        >
          <Image src={Close} alt="Close" />
        </button>

        <div className="font-space w-[350px] xl:max-w-[309px]  bg-[#191815] rounded-2xl mt-10 pb-6 text-[#FFFFE3]">
          <div className="bg-[#30302B] flex items-center justify-center py-3 rounded-tl-2xl rounded-tr-2xl">
            <div className="flex justify-center items-center bg-[#10100E] w-16 h-6 rounded-2xl">
              <span className="p-[5px] bg-[#00CC45] rounded-full mr-1"></span>
              <h1 className="text-[#FFFFE3] text-xs font-montserrat">1101</h1>
            </div>
          </div>

          {/* Comment content  */}
          <div className="px-5 h-full min-h-[400px] max-h-[500px] flex flex-col overflow-y-auto">
            <div className="w-full z-10 bg-[#191815] to-transparent bg-opacity-25">
              <div className="w-full h-5 bg-gradient-to-b from-[#191815] to-transparent"></div>
            </div>

            <div className="flex-1 flex flex-col h-full justify-end mt-2 ">
              <div className="">
                {data &&
                  data[size - 1]?.data &&
                  data[size - 1].data.length === limit && (
                    <button
                      className="text-center text-sm my-3 w-full"
                      onClick={() => setSize(size + 1)}
                    >
                      Load More...
                    </button>
                  )}

                {isLoadingMore && (
                  <p className="my-3 text-center">loading...</p>
                )}

                {isLoading || !data ? (
                  <p className="my-3 text-center">loading messages...</p>
                ) : (
                  data &&
                  data
                    .map((dat, i) => {
                      return dat.data.map((d: any, i: number) => {
                        return (
                          <div key={i} className="">
                            <div className="flex items-center mb-1">
                              <div className="flex items-center text-sm font-bold text-[#DC1FFF]">
                                <p>{shortenAddress(d.address)}</p>
                                <p className="text-xs ml-3 text-[#8E8E8E]">
                                  {new Date(d.createdAt).toLocaleDateString()}
                                </p>
                                <p className="text-xs ml-2 text-[#8E8E8E]">
                                  {new Date(d.createdAt).toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                            <p className="mb-4 text-xs">{d.message}</p>
                          </div>
                        );
                      });
                    })
                    .reverse()
                )}
              </div>
            </div>
          </div>

          {/* comment box */}
          <div className="relative px-5 mt-2">
            <textarea
              ref={textRef}
              name="message"
              placeholder="Enter message"
              id=""
              disabled={createMessage}
              cols={30}
              rows={1}
              className="placeholder:text-[#8E8E8E] text-xs w-full rounded-lg px-10 py-3 border border-[#30302B] bg-[#191815] resize-none"
            ></textarea>

            <Popover className="absolute left-7 top-1/2 transform -translate-y-1/2">
              <PopoverButton className="outline-none">
                <Image src={Emoji} alt="" className="" width={20} height={20} />
              </PopoverButton>
              <PopoverPanel anchor="bottom" className="flex flex-col z-50">
                <Picker
                  data={emojiData}
                  onEmojiSelect={(emoji: any) => {
                    setEmoji(emoji.native);
                    handleEmoji(emoji);
                  }}
                />
              </PopoverPanel>
            </Popover>

            <button
              className={cn(
                "absolute right-7 top-1/2 transform -translate-y-1/2",
                createMessage && "opacity-35"
              )}
              onClick={sendMessage}
              disabled={createMessage}
            >
              <Image
                src={Send}
                width={30}
                height={30}
                alt="send"
                className=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
