"use client";
import { useState, useEffect } from "react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CountdownModal ({ isOpen, onClose }: ModalProps) {
  const [countdown, setCountdown] = useState(49);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown === 1 ? 49 : prevCountdown - 1
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative xl:px-16">
          <div>
            <p className="font-montserrat font-extrabold text-[180px] xl:text-[300px] bg-clip-text text-transparent bg-gradient-to-b from-[#FFFE89] to-[#C65E34]">
            {countdown < 10 ? `0${countdown}` : countdown}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
