import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramhee's Portfolio",
  description: "Ramhee's Portfolio",
};

const suit = localFont({
  src: "../public/fonts/SUIT-Regular.ttf",
  display: "swap",
  variable: "--font-suit",
});
const suitBold = localFont({
  src: "../public/fonts/SUIT-Bold.ttf",
  display: "swap",
  variable: "--font-suit-bold",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${suit.variable} ${suitBold.variable}`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-7KQCMJP4ZP" />
    </html>
  );
}
