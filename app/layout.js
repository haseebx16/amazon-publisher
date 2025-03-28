"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import { Oswald } from 'next/font/google';
import Script from 'next/script';
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
      <head>
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16944365395"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-aw" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16944365395');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16851710462"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-aw" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16851710462');
          `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P495WRFL4E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-g" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P495WRFL4E');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}