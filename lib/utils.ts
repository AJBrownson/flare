import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatToTime(isoDateString: Date): string {
   // Parse the ISO date string
   const mongoDate = new Date(isoDateString);

   // Check if mongoDate is a valid Date object
   if (isNaN(mongoDate.getTime())) {
     throw new Error('Invalid date');
   }
 
   // Extract time components
   let hours = mongoDate.getUTCHours();
   const minutes = mongoDate.getUTCMinutes();
   const ampm = hours >= 12 ? 'PM' : 'AM';
 
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
     throw new Error('Invalid date');
   }
 
   // Extract date components
   const day = mongoDate.getUTCDate();
   const month = mongoDate.getUTCMonth() + 1; // getMonth() returns 0-based month
   const year = mongoDate.getUTCFullYear() % 100; // get last two digits of the year
 
   // Format date as "D/M/YY"
   return `${day}/${month}/${year}`;
}

export const isMobile = (): boolean => {
  const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent;
  return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/.test(userAgent);
};
