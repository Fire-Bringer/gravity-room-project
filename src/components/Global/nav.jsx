"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const NavBar = () => {

  const mobileNavRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    gsap.set(mobileNavRef.current, { x: 200, opacity: 0 }); // Set initial position only once
  }, []);

  useEffect(() => {

    if (isMenuOpen) {
      gsap.to(mobileNavRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      })
    } else if (!isMenuOpen) {
      gsap.to(mobileNavRef.current, {
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed z-50 w-full h-[5.625rem] p-5 flex flex-row place-items-center justify-between bg-[#0f0e0e] text-white border-b">
      <h6
        className="tracking-tight text-lg font-bold ml-2 font-display"
      >
        Gravity Room
      </h6>
      <div className="desktop-menu font-body gap-8 mr-2 hidden lg:flex">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Videos">Videos</a>
        <a href="#Photos">Photos</a>
        <a href="#Music">Music</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className="mobile-menu font-body bg-[#0f0e0e] w-[40vw] h-[70vh] lg:hidden flex flex-col justify-around items-center absolute top-[5.625rem] right-0 p-4 rounded-mobile-menu border-l border-b z-50" ref={mobileNavRef}>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Videos">Videos</a>
        <a href="#Photos">Photos</a>
        <a href="#Music">Music</a>
        <a href="#Contact">Contact</a>
      </div>
      <button className="lg:hidden" onClick={toggleMenu}>
        <Image
          src={"/images/Icons/menu-3-line.svg"}
          alt="Burger Menu"
          width={30}
          height={30}
          className={isMenuOpen ? "hidden" : "block"}
        />
        <Image
          src={"/images/Icons/close-large-line.svg"}
          alt="Burger Menu"
          width={30}
          height={30}
          className={isMenuOpen ? "block" : "hidden"}
        />
      </button>
    </nav>
  );
};

export default NavBar;
