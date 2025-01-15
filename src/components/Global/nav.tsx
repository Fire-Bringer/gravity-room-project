"use client";
//import TransitionLink from "../TransitionLink";
import { Averia_Serif_Libre } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";

const averia = Averia_Serif_Libre({ weight: ["400"] });

const NavBar = () => {
  return (
    <nav className="w-full h-[10vh] p-5 flex flex-row place-items-center justify-between bg-[#0f0e0e] text-white border-b">
      <h1
        className={clsx(
          averia.className,
          "text-2xl",
          "tracking-tight",
          "font-bold",
          "ml-2"
        )}
      >
        Gravity Room
      </h1>
      <div className="desktop-menu gap-8 mr-2 hidden lg:flex">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Videos">Videos</a>
        <a href="#Photos">Photos</a>
        <a href="#Music">Music</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className="mobile-menu bg-[#0f0e0e] mt-[72px] w-[50vw] h-[70vh] flex flex-col justify-around items-center absolute top-0 right-0 p-4 rounded-mobile-menu border-l border-b border-t z-[100] hidden">
      <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Videos">Videos</a>
        <a href="#Photos">Photos</a>
        <a href="#Music">Music</a>
        <a href="#Contact">Contact</a>
      </div>
      <button className="lg:hidden">
        <Image
          src={"/images/Icons/menu-3-line.svg"}
          alt="Burger Menu"
          width={30}
          height={30}
        />
        <Image
          src={"/images/Icons/close-large-line.svg"}
          alt="Burger Menu"
          width={30}
          height={30}
          className="hidden"
        />
      </button>
    </nav>
  );
};

export default NavBar;
