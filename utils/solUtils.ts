
// function to convert lamport to sol
export function lamportsToSol(lamports: number): number {
    const LAMPORTS_PER_SOL = 1_000_000_000;
    return lamports / LAMPORTS_PER_SOL;
}

// function to convert sol to lamport
export function solToLamports(sol: number): number {
    const LAMPORTS_PER_SOL = 1_000_000_000;
    return sol * LAMPORTS_PER_SOL;
}

// fix to decimal places for sol balance
export function fixToTwoDecimal(num: number): number {
    return parseFloat(num.toFixed(3));
}


export const replaceStrPath = (str:string) => {
    if (str.length < 4) {
      // If the string is too short to obfuscate, return it as is
      return str;
    }
  
    const visibleStart = 5; // Number of visible characters at the start
    const visibleEnd = 3; // Number of visible characters at the end
    const obfuscateLength = str.length - visibleStart - visibleEnd;
    
    const start = str.slice(0, visibleStart);
    const end = str.slice(-visibleEnd);
    const middle = '....';
  
    return `${start}${middle}${end}`;
  };