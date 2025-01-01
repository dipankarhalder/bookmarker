import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "@/app/styles/pages/globals.scss";
import { IChildren } from "@/interface";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Bookmaker",
  description:
    "A smart contracts and liquidity pools for seamless crypto-betting.",
};

export default function RootLayout({ children }: Readonly<IChildren>) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>{children}</body>
    </html>
  );
}
