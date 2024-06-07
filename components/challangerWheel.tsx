import {
  useEffect,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";

import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

import { solToLamports } from "@/utils/solUtils";
import { sendSolTransaction } from "@/utils/sendSol";
import { toast } from "react-toastify";

import { registerSpin } from "@/lib/api/userService";
import { stringify } from "querystring";
import { replaceStrPath } from "@/utils/solUtils";

interface SpinWheelChallangerProps {
  items: string[];
  sol: number;
  onJoin: () => Promise<void>;
}

export interface SpinWheelChallengerHandle {
  spin: () => void;
}

const SpinWheelChallanger = forwardRef<
  SpinWheelChallengerHandle,
  SpinWheelChallangerProps
>(({ items, sol, onJoin }, ref) => {
  // console.log('received items',items)

  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const [rotate, setRotate] = useState<number>(0);
  const [easeOut, setEaseOut] = useState<number>(0);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    renderWheel();
  }, [items]);

  const renderWheel = () => {
    // Determine number/size of sectors that need to be created

    let numOptions = items.length;
    let arcSize = (2 * Math.PI) / numOptions;
    let angle = arcSize;

    // Get index of starting position of selector
    topPosition(numOptions, arcSize);

    // Dynamically generate sectors from state list
    for (let i = 0; i < numOptions; i++) {
      let text = items[i];
      renderSector(i + 1, text, angle, arcSize, getColor());
      angle += arcSize;
    }
  };

  const topPosition = (num: number, angle: number) => {
    let topSpot: number | null = null;
    let degreesOff: number | null = null;
    if (num === 12) {
      topSpot = 9;
      degreesOff = 0;
    } else if (num === 11) {
      topSpot = 8;
      degreesOff = Math.PI / 2 - angle * 3;
    } else if (num === 10) {
      topSpot = 8;
      degreesOff = 0;
    } else if (num === 9) {
      topSpot = 7;
      degreesOff = Math.PI / 2 - angle * 2;
    } else if (num === 8) {
      topSpot = 6;
      degreesOff = 0;
    } else if (num <= 7 && num > 4) {
      topSpot = num - 1;
      degreesOff = Math.PI / 2 - angle;
    } else if (num === 4) {
      topSpot = num - 1;
      degreesOff = 0;
    } else if (num <= 3) {
      topSpot = num;
      degreesOff = Math.PI / 2;
    }

    if (topSpot !== null && degreesOff !== null) {
      setRotate(topSpot - 1);
      setEaseOut(degreesOff);
    }
  };

  const renderSector = (
    index: number,
    text: string,
    start: number,
    arc: number,
    color: string
  ) => {
    // Create canvas arc for each list element
    let canvas = document.getElementById("wheel") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d")!;
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = 75;
    let startAngle = start;
    let endAngle = start + arc;
    let angle = index * arc;
    let baseSize = radius * 3.33;
    let textRadius = baseSize - 150;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;

    ctx.font = "13px Arial";
    ctx.fillStyle = "white";
    ctx.stroke();

    ctx.save();
    ctx.translate(
      x + Math.cos(angle - arc / 2) * textRadius,
      y + Math.sin(angle - arc / 2) * textRadius
    );
    ctx.rotate(angle - arc / 2 + Math.PI / 2);
    ctx.rotate(Math.PI / 2);
    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
    ctx.restore();
  };

  const getColor = () => {
    // Randomly generate rgb values for wheel sectors
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},0.4)`;
  };

  const spin = () => {
    // Set random spin degree and ease out time
    // Set state variables to initiate animation
    let randomSpin = Math.floor(Math.random() * 4000) + 500;
    setRotate(randomSpin);
    setEaseOut(2);
    setSpinning(true);

    // Calculate result after wheel stops spinning
    setTimeout(() => {
      getResult(randomSpin);
    }, 3000);
  };

  useImperativeHandle(ref, () => ({
    spin,
  }));

  const getResult = (spin: number) => {
    // Find net rotation and add to offset angle
    // Repeat subtraction of inner angle amount from total distance traversed
    // Use count as an index to find value of result from state list
    let arcSize = (2 * Math.PI) / items.length;
    let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
    let travel = netRotation + easeOut;
    let count = rotate + 1;
    while (travel > 0) {
      travel = travel - arcSize;
      count--;
    }
    let finalResult;
    if (count >= 0) {
      finalResult = count;
    } else {
      finalResult = items.length + count;
    }

    // Set state variable to display result
    setResult(finalResult);
    const res = items[finalResult];
    registerSpin(publicKey, res, sol);
    setSpinning(false);
  };

  const reset = () => {
    // Reset wheel and result
    setRotate(0);
    setEaseOut(0);
    setResult(null);
    setSpinning(false);
  };

  return (
    <div className="relative -mt-16">
      <span id="selector" className="absolute top-8 left-[47%] text-[40px]">
        &#9660;
      </span>
      <canvas
        id="wheel"
        width="500"
        height="500"
        style={{
          WebkitTransform: `rotate(${rotate}deg)`,
          WebkitTransition: `-webkit-transform ${easeOut}s ease-out`,
        }}
      />

      {spinning ? (
        <button
          type="button"
          className="absolute top-[47%] right-[47%] bg-white shadow-lg shadow-white text-black w-8 h-8 rounded-full text-xs font-semibold px-4 py-2 grid place-content-center"
          onClick={reset}
        >
          wait
        </button>
      ) : (
        <button
          type="button"
          className="absolute top-[47%] right-[47%] bg-white shadow-lg shadow-white text-black w-8 h-8 rounded-full text-xs font-semibold px-4 py-2 grid place-content-center"
          onClick={onJoin}
        >
          Join
        </button>
      )}

      <div className="display flex w-full justify-center absolute bottom-12 left-0 -mt-5">
        <span id="readout" className="flex items-center gap-x-4 -mt-8">
          <p className="text-md font-semibold">YOU WON: </p>
          <span id="result" className="text-lg font-semibold">
            {result !== null ? items[result] : ""}
          </span>
        </span>
      </div>
    </div>
  );
});

SpinWheelChallanger.displayName = "SpinWheelChallanger";

export default SpinWheelChallanger;
