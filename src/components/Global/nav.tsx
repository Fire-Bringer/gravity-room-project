'use client'
import TransitionLink from "../TransitionLink";
import { Averia_Serif_Libre } from  "next/font/google";
import clsx from "clsx";

const averia = Averia_Serif_Libre({ weight: ['400'] });


const NavBar = () => {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-between bg-black text-white border-b">
      <h1 className={clsx(averia.className, 'text-2xl', 'tracking-tight', 'font-bold', 'ml-4')}>
        Gravity Room
      </h1>
      <div className="flex gap-8 mr-4">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="#About" label="About" />
        <TransitionLink href="#Videos" label="Videos" />
        <TransitionLink href="#Photos" label="Photos" />
        <TransitionLink href="#Music" label="Music" />
        <TransitionLink href="#Contact" label="Contact" />
      </div>
    </nav>

  )
};

export default NavBar;
