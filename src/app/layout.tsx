import type { Metadata } from "next";
import {Pixelify_Sans } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const pixel = Pixelify_Sans({subsets : ["latin","cyrillic","latin-ext"]});

export const metadata: Metadata = {
  title: "GlobeTrotter Challenge",
  description: "Guess the city from the clues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={pixel.className}
      >
        {children}
      </body>
    </html>
  );
}
