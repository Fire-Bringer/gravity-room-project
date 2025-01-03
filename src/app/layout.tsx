import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Global/nav";
import Footer from "@/components/Global/footer";

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
      <body className="m-0">
        <main className="h-screen flex flex-col">
          <NavBar/>
          <div className="grow">
            {children}
          </div>
          <Footer/>
        </main>
      </body>
    </html>
  );
}
