import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Global/nav";
import Footer from "@/components/Global/footer";
import { Kiwi_Maru, Averia_Serif_Libre } from  "next/font/google";
import clsx from "clsx";

// Font Configurations
const kiwiMaru = Kiwi_Maru({
  weight: ['400'],
  variable: "--font-kiwi-maru",
});

const averiaSerifLibre = Averia_Serif_Libre({
  weight: ["400"],
  variable: "--font-averia-serif-libre",
});

export const metadata: Metadata = {
  title: "Gravity Room",
  description: "Life Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(kiwiMaru.variable, averiaSerifLibre.variable, 'm-0', 'h-screen', 'flex', 'flex-col')}>
        <NavBar/>
        <div className="grow bg-transparent">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
