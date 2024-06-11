export {};

declare global {
  interface Window {
    phantom: {
      solana: {
        isPhantom: boolean;
        [key: string]: any;
      };
    };
  }
}

export const getPhantomProvider = () => {
  if ("phantom" in window) {
    const provider = window.phantom?.solana;

    if (provider?.isPhantom) {
      return provider;
    }
  }

  return null;
};
