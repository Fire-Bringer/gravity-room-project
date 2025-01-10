'use client'
import TransitionLink from "../TransitionLink";
import { Averia_Serif_Libre } from  "next/font/google";
import clsx from "clsx";
import Image from "next/image";

const averia = Averia_Serif_Libre({ weight: ['400'] });


const NavBar = () => {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-between bg-black text-white border-b">
      <h1 className={clsx(averia.className, 'text-2xl', 'tracking-tight', 'font-bold', 'ml-4')}>
        Gravity Room
      </h1>
      <div className="desktop-menu flex gap-8 mr-4">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="#About" label="About" />
        <TransitionLink href="#Videos" label="Videos" />
        <TransitionLink href="#Photos" label="Photos" />
        <TransitionLink href="#Music" label="Music" />
        <TransitionLink href="#Contact" label="Contact" />
      </div>
      <div className="mobile-menu bg-[#0f0e0e] mt-[72px] w-[50vw] h-[70vh] flex flex-col justify-around items-center absolute top-0 right-0 p-4 rounded-[0 0 0 20px] z-[100] hidden">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="#About" label="About" />
        <TransitionLink href="#Videos" label="Videos" />
        <TransitionLink href="#Photos" label="Photos" />
        <TransitionLink href="#Music" label="Music" />
        <TransitionLink href="#Contact" label="Contact" />
      </div>
      <button className="hidden">
        <Image src={"/images/menu-3-line.svg"} alt="Burger Menu" width={30} height={30}/>
      </button>
    </nav>

  )
};

export default NavBar;
