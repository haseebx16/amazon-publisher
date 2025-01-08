import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata = {
  title: "Amazon Legacy Press",
  description: "Professional publishing services to help authors reach their full potential",
};

export default function RootLayout({ children }) {
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
