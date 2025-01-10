import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Global/nav";
import Footer from "@/components/Global/footer";
import { Kiwi_Maru } from  "next/font/google";
import clsx from "clsx";

const kiwi = Kiwi_Maru({ weight: ['400'] });

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
      <body className={clsx(kiwi.className, 'm-0', 'h-screen', 'flex', 'flex-col')}>
        <NavBar/>
        <div className="grow bg-transparent">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
