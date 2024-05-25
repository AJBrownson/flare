"use client"
import { useState } from "react";
import Image from "next/image";
// import Spin from "../../../public/assets/spin-logo.png"
import Pointer from "../public/assets/pointer.png"
import WheelBase from "../public/assets/wheel-base.png"
import WheelStand from "../public/assets/wheel-stand.png"



const RouletteWheel = () => {
    const [isJoinClicked, setIsJoinClicked] = useState(false);
    const [comments, setComments] = useState(false);
    const [winners, setWinners] = useState(false);
  
    const handleComments = () => {
      setComments(!comments)
    }
  
    const handleWinners = () => {
      setWinners(!winners)
    }
  
    const handleImageClick = () => {
      // On the first click, toggle between Connect and Join images
      if (!isJoinClicked) {
        setIsJoinClicked(true);
      } else {
        // On the second click (Join image), show the modal
        document.getElementById("modal-1")?.click();
      }
    };
  
    const handleModalClose = () => {
      // Reset state to make Connect image appear after modal is closed
      setIsJoinClicked(false);
    };
  
    return (
      <main className="bg-black">
        <section className="oveflow-hidden mt-28 lg:flex lg:items-center h-full">
          <div className="flex justify-center">
            <div className="relative px-4 rounded-full outline outline-4 outline-[#DC1FFF]">
              <div className="flex items-center justify-center">
                {/* <img
                  src={Stopper}
                  alt=""
                  className="w-24 bottom-[22rem] absolute z-[1]"
                /> */}
                {/* <img src={Handle} alt="" className="w-36 bottom-[23rem] absolute" /> */}
              </div>
  
              <ul className="z-0 relative w-72 lg:w-[25rem] h-72 lg:h-[25rem] border-[5px] border-[#FFFE89] border-solid mx-auto my-4 rounded-full overflow-hidden p-0">
                <li className="bg-[#090719] border-l border-[rgb(255,254,137)] transform rotate-0 skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                <div className="absolute -left-[100%] width-[200%] height-[200%] bg-slate-600">
                    1
                  </div>
                </li>
                <li className="bg-[#090719] border-l border-[#FFFE89] transform rotate-[30deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                  <div className="absolute -left-[100%] width-[200%] height-[200%]">
                    2
                  </div>
                </li>
                <li className="bg-[#090719] border-l border-[#FFFE89] transform rotate-[60deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                  <div className="absolute -left-[100%] width-[200%] height-[200%]">
                    3
                  </div>
                </li>
                <li className="bg-[#090719] border-l border-[#FFFE89] transform rotate-[90deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                  <div className="absolute -left-[100%] width-[200%] height-[200%]">
                    4
                  </div>
                </li>
                <li className="bg-[#090719] border-l border-[#FFFE89] transform rotate-[120deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                  <div className="absolute -left-[100%] width-[200%] height-[200%]">
                    5
                  </div>
                </li>
                <li className="bg-[#090719] border-l border-[#FFFE89] transform rotate-[150deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                  <div className="absolute -left-[100%] width-[200%] height-[200%]">
                    6
                  </div>
                </li>
                <li className="bg-[#090719] border-l border-[#FFFE89] transform rotate-[180deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                  <div className="absolute -left-[100%] width-[200%] height-[200%]">
                    7
                  </div>
                </li>
                <li className="bg-[#090719] border-l border-[#FFFE89] transform rotate-[210deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                  <div className="absolute -left-[100%] width-[200%] height-[200%]">
                    8
                  </div>
                </li>
                <li className="bg-[#090719] border-l border-[#FFFE89] transform rotate-[240deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                  <div className="absolute -left-[100%] width-[200%] height-[200%]">
                    9
                  </div>
                </li>
                <li className="bg-[#090719] border-l border-[#FFFE89] transform rotate-[270deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                  <div className="absolute -left-[100%] width-[200%] height-[200%]">
                    10
                  </div>
                </li>
                <li className="bg-[#090719] border-l border-[#FFFE89] transform rotate-[300deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                  <div className="absolute -left-[100%] width-[200%] height-[200%]">
                    11
                  </div>
                </li>
                <li className="bg-[#090719] border-l border-[#FFFE89] transform rotate-[330deg] skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] origin-[0%_100%]">
                  <div className="absolute -left-[100%] width-[200%] height-[200%]">
                    12
                  </div>
                </li>
              </ul>
  
              {/* div for logo */}
              <div className="flex items-center justify-center">
              <Image
                src={Pointer}
                alt=""
                className="w-20 lg:w-[120px] absolute bottom-28 lg:bottom-[10rem]"
                // className="w-12 lg:w-[130px] absolute bottom-28 lg:bottom-[11.5rem] lg:left-[11.75rem]"
              />
              </div>

              {/* wheel base */}
              <div className="flex items-center">
              <Image
                  src={WheelStand}
                  alt=""
                  className="h-20 w-20 absolute left-10 lg:left-32 mt-10 lg:top-[25.5rem]"
                />
                <Image
                  src={WheelBase}
                  alt=""
                  className="w-40 absolute left-20 lg:left-32 mt-10 lg:top-[25.5rem]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default RouletteWheel;