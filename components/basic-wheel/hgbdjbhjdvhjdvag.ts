export enum OUTCOME {
  WIN = "WIN",
  LOSE = "LOSE",
}

export enum WHEELZ {
  o_one_five = "o_one_five",
  o_three_five = "o_three_five",
  o_seven_five = "o_seven_five",
  one_six = "one_six",
  one_thousand = "one_thousand",
  one_thousand_five = "one_thousand_five",
  two_thousand = "two_thousand",
  max = "max",
}

const ang = [
  0 * 30,
  11 * 30,
  10 * 30,
  9 * 30,
  8 * 30,
  7 * 30,
  6 * 30,
  5 * 30,
  4 * 30,
  3 * 30,
  2 * 30,
  1 * 30,
];

const colors = [
  "#931892",
  "#000000",
  "#0861F4",
  "#058E16",
  "#B71122",
  "#931892",
  "#000000",
  "#0861F4",
  "#058E16",
  "#B71122",
];

export const solWager = [
  { name: "0.015", wheel: WHEELZ.o_one_five },
  { name: "0.035", wheel: WHEELZ.o_three_five },
  { name: "0.075", wheel: WHEELZ.o_seven_five },
  { name: "0.16", wheel: WHEELZ.one_six },
];

export const sgyWager = [
  { name: "1000", wheel: WHEELZ.one_thousand },
  { name: "1500", wheel: WHEELZ.one_thousand_five },
  { name: "2000", wheel: WHEELZ.two_thousand },
  { name: "Max", wheel: WHEELZ.max },
];

export const allWagers = [solWager, sgyWager];

export const basicWheelzData = {
  o_one_five: {
    wheel: [
      {
        name: "6000 $SGY",
        textColor: "",
        ang: ang[0],
        background: "#000000",
      },
      {
        name: "0.075 SOL",
        textColor: "",
        ang: ang[1],
        background: "#0861F4",
      },
      {
        name: "Crashed",
        textColor: "",
        ang: ang[2],
        background: "#058E16",
      },
      {
        name: "Whitelist",
        textColor: "",
        ang: ang[3],
        background: "#000000",
      },
      {
        name: "Crashed",
        textColor: "",
        ang: ang[4],
        background: "#B71122",
      },
      {
        name: "1X SOL",
        textColor: "",
        ang: ang[5],
        background: "#931892",
      },
      {
        name: "5X SOL",
        textColor: "",
        ang: ang[6],
        background: "#000000",
      },
      {
        name: "1X Whitelist",
        textColor: "",
        ang: ang[7],
        background: "#0861F4",
      },
      {
        name: "Crashed",
        textColor: "",
        ang: ang[8],
        background: "#058E16",
      },
      {
        name: "0.001 SOL",
        textColor: "",
        ang: ang[9],
        background: "#000000",
      },
      {
        name: "3X SOL",
        textColor: "",
        ang: ang[10],
        background: "#B71122",
      },
      {
        name: "Crashed",
        textColor: "",
        ang: ang[11],
        background: "#931892",
      },
    ],
    out: [
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[4],
      },
      {
        name: "1X SOL",
        outcome: OUTCOME.WIN,
        code: ang[5],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[8],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[11],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[4],
      },
      {
        name: "0.001 SOL",
        outcome: OUTCOME.WIN,
        code: ang[9],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[8],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[4],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[2],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[4],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[4],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[11],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[11],
      },
      {
        name: "3X SOL",
        outcome: OUTCOME.WIN,
        code: ang[10],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[11],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[4],
      },
      {
        name: "0.001 SOL",
        outcome: OUTCOME.WIN,
        code: ang[9],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[4],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[2],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[11],
      },
    ],
  },
  o_three_five: {
    wheel: [
      {
        name: "Crashed",
        textColor: "",
        ang: ang[0],
        background: "#000000",
      },
      {
        name: "10X SOL",
        textColor: "",
        ang: ang[1],
        background: "#0861F4",
      },
      {
        name: "1X SOL",
        textColor: "",
        ang: ang[2],
        background: "#058E16",
      },
      {
        name: "0.20 SOL",
        textColor: "",
        ang: ang[3],
        background: "#000000",
      },
      {
        name: "0.035 SOL",
        textColor: "",
        ang: ang[4],
        background: "#B71122",
      },
      {
        name: "Crashed",
        textColor: "",
        ang: ang[5],
        background: "#931892",
      },
      {
        name: "12000 $SGY",
        textColor: "",
        ang: ang[6],
        background: "#000000",
      },
      {
        name: "3X SOL",
        textColor: "",
        ang: ang[7],
        background: "#0861F4",
      },
      {
        name: "Crashed",
        textColor: "",
        ang: ang[8],
        background: "#058E16",
      },
      {
        name: "Whitelist",
        textColor: "",
        ang: ang[9],
        background: "#000000",
      },
      {
        name: "2X SOL",
        textColor: "",
        ang: ang[10],
        background: "#B71122",
      },
      {
        name: "Crashed",
        textColor: "",
        ang: ang[11],
        background: "#931892",
      },
    ],
    out: [
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[0],
      },

      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[11],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[5],
      },
      {
        name: "3X SOL",
        outcome: OUTCOME.WIN,
        code: ang[7],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[8],
      },
      {
        name: "1X SOL",
        outcome: OUTCOME.WIN,
        code: ang[11],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[5],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[0],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[5],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[0],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[8],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[11],
      },
      {
        name: "0.035 SOL",
        outcome: OUTCOME.WIN,
        code: ang[4],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[11],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[0],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[8],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[0],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[11],
      },
    ],
  },
  o_seven_five: {
    wheel: [
      {
        name: "Crashed",
        textColor: "",
        ang: ang[0],
        background: "#000000",
      },
      {
        name: "24000 $SGY",
        textColor: "",
        ang: ang[1],
        background: "#0861F4",
      },
      {
        name: "0.075 SOL",
        textColor: "",
        ang: ang[2],
        background: "#058E16",
      },
      {
        name: "0.10 SOL",
        textColor: "",
        ang: ang[3],
        background: "#000000",
      },
      {
        name: "0.23 SOL",
        textColor: "",
        ang: ang[4],
        background: "#B71122",
      },
      {
        name: "Crashed",
        textColor: "",
        ang: ang[5],
        background: "#931892",
      },
      {
        name: "5X SOL",
        textColor: "",
        ang: ang[6],
        background: "#000000",
      },
      {
        name: "Crashed",
        textColor: "",
        ang: ang[7],
        background: "#0861F4",
      },
      {
        name: "3X SOL",
        textColor: "",
        ang: ang[8],
        background: "#058E16",
      },
      {
        name: "VIP Card",
        textColor: "",
        ang: ang[9],
        background: "#000000",
      },
      {
        name: "Whitelist",
        textColor: "",
        ang: ang[10],
        background: "#B71122",
      },
      {
        name: "1X SOL",
        textColor: "",
        ang: ang[11],
        background: "#931892",
      },
    ],
    out: [
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[0],
      },
      {
        name: "0.75 SOL",
        outcome: OUTCOME.WIN,
        code: ang[2],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[0],
      },
      {
        name: "1X SOL",
        outcome: OUTCOME.WIN,
        code: ang[11],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[7],
      },
      {
        name: "0.10 SOL",
        outcome: OUTCOME.WIN,
        code: ang[3],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[5],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[0],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[5],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[7],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[5],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[0],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[0],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[5],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[7],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[7],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[7],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[5],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[0],
      },
    ],
  },
  one_six: {
    wheel: [
      {
        name: "1X SOL",
        textColor: "",
        ang: ang[0],
        background: "#000000",
      },
      {
        name: "Crashed",
        textColor: "",
        ang: ang[1],
        background: "#0861F4",
      },
      {
        name: "36000 $SGY",
        textColor: "",
        ang: ang[2],
        background: "#058E16",
      },
      {
        name: "1X VIP Card",
        textColor: "",
        ang: ang[3],
        background: "#000000",
      },
      {
        name: "0.23 SOL",
        textColor: "",
        ang: ang[4],
        background: "#B71122",
      },
      {
        name: "0.26 SOL",
        textColor: "",
        ang: ang[5],
        background: "#931892",
      },
      {
        name: "Crashed",
        textColor: "",
        ang: ang[6],
        background: "#000000",
      },
      {
        name: "10X SOL",
        textColor: "",
        ang: ang[7],
        background: "#0861F4",
      },
      {
        name: "VIP Card",
        textColor: "",
        ang: ang[8],
        background: "#058E16",
      },
      {
        name: "Crashed",
        textColor: "",
        ang: ang[9],
        background: "#000000",
      },
      {
        name: "5X SOL",
        textColor: "",
        ang: ang[10],
        background: "#B71122",
      },
      {
        name: "Whitelist",
        textColor: "",
        ang: ang[11],
        background: "#931892",
      },
    ],
    out: [
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[1],
      },
      {
        name: "1X SOL",
        outcome: OUTCOME.WIN,
        code: ang[0],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[9],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[1],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[6],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[9],
      },
      {
        name: "0.23 SOL",
        outcome: OUTCOME.WIN,
        code: ang[4],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[6],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[6],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[1],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[1],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[1],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[6],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[9],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[6],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[9],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[1],
      },
      {
        name: "Crashed",
        outcome: OUTCOME.LOSE,
        code: ang[1],
      },
    ],
  },
  one_thousand: {
    wheel: [],
    out: [],
  },
  one_thousand_five: {
    wheel: [],
    out: [],
  },
  two_thousand: {
    wheel: [],
    out: [],
  },
  max: {
    wheel: [],
    out: [],
  },
};
