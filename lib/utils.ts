import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const chargeAddress = "EcNK5Lt7ftEk4wydT8yEMwuuGCnofM6N6bZmGTY8radM";
export const paymentAddress = "BcP1RJYBUidRR5ERvqN6VhtqZZJNFDbmSbu4T35G56wU";

export const gamesKey = "/api/games";
export const leadersKey = "/api/leaders";

export const prizesKey = (add: string) => `/api/prize?address=${add}`;

export async function fetcher(url: string) {
  return (await fetch(url)).json();
}

export const getBalance = async (
  connection: Connection,
  publicKey: PublicKey
) => {
  const balance = (await connection.getBalance(publicKey)) / LAMPORTS_PER_SOL;

  return balance;
};

export function formatToTime(isoDateString: Date): string {
  // Parse the ISO date string
  const mongoDate = new Date(isoDateString);

  // Check if mongoDate is a valid Date object
  if (isNaN(mongoDate.getTime())) {
    throw new Error("Invalid date");
  }

  // Extract time components
  let hours = mongoDate.getUTCHours();
  const minutes = mongoDate.getUTCMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format minutes to always have two digits
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Format time as "h:mm AM/PM"
  return `${hours}:${formattedMinutes} ${ampm}`;
}

export function formatToDate(isoDateString: Date): string {
  // Parse the ISO date string
  const mongoDate = new Date(isoDateString);

  // Check if mongoDate is a valid Date object
  if (isNaN(mongoDate.getTime())) {
    throw new Error("Invalid date");
  }

  // Extract date components
  const day = mongoDate.getUTCDate();
  const month = mongoDate.getUTCMonth() + 1; // getMonth() returns 0-based month
  const year = mongoDate.getUTCFullYear() % 100; // get last two digits of the year

  // Format date as "D/M/YY"
  return `${day}/${month}/${year}`;
}

export const isMobile = (): boolean => {
  const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;
  return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/.test(
    userAgent
  );
};

export function formatNumberToKM(number: number | undefined, deci?: number) {
  if (number) {
    if (number >= 1000000) {
      // Calculate the 'M' version
      const mVersion = number / 1000000;

      // Use toFixed(1) to round to 1 decimal place
      const roundedMVersion = mVersion.toFixed(2);

      // Check if the rounded version ends with '.0' and remove it if necessary
      const formattedM = roundedMVersion.replace(/\.0$/, "");

      // Append 'M' to the formatted version
      return formattedM + "M";
    } else if (number >= 1000) {
      // Calculate the 'K' version
      const kVersion = number / 1000;

      // Use toFixed(1) to round to 1 decimal place
      const roundedKVersion = kVersion.toFixed(2);

      // Check if the rounded version ends with '.0' and remove it if necessary
      const formattedK = roundedKVersion.replace(/\.0$/, "");

      // Append 'K' to the formatted version
      return formattedK + "K";
    }

    // If the number is less than 1000, return it as is
    return number.toFixed(deci || 4).toString();
  }

  // If the number is undefined or 0, return '0.0'
  return "0.0";
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min); // Ensure the minimum value is rounded up to the nearest integer
  max = Math.floor(max); // Ensure the maximum value is rounded down to the nearest integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
