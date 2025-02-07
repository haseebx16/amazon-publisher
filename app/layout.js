"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import { Oswald } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({ children }) {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67a64544825083258e11df9f/1ijgnt5jj";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
