"use client";
//import TransitionLink from "../TransitionLink";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed z-50 w-full h-[10vh] p-5 flex flex-row place-items-center justify-between bg-[#0f0e0e] text-white border-b">
      <h1
        className="text-2xl tracking-tight font-bold ml-2 font-display"
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
      <div className="mobile-menu bg-[#0f0e0e] w-[50vw] h-[70vh] lg:hidden hidden flex-col justify-around items-center absolute top-[60px] right-0 p-4 rounded-mobile-menu border-l border-b border-t z-50">
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
