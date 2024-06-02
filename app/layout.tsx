import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Wallet } from "../components/Wallet";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const space_grotesk = localFont({
  src: [
    {
      path: "../public/assets/fonts/SpaceGrotesk-Medium.ttf",
    },
    {
      path: "../public/assets/fonts/SpaceGrotesk-Regular.ttf",
    },
  ],
  variable: "--font-space_grotesk",
});

const montserrat = localFont({
  src: [
    {
      path: "../public/assets/fonts/Montserrat-ExtraBold.otf",
    },
    {
      path: "../public/assets/fonts/Montserrat-Bold.otf",
    },
  ],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Solgacy",
  description:
    "Join Solgacy, the ultimate gaming platform on Solana. Explore exciting games, earn rewards, and be part of a vibrant community. Discover the future of blockchain gaming with Solgacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.variable} ${montserrat.variable}`}>
        <div>
          <Wallet>
            <div>
              {children}
              <ToastContainer />
            </div>
          </Wallet>
        </div>
      </body>
    </html>
  );
}
