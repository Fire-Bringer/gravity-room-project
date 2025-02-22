"use client";
import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const navLinks = [
  { path: "#Home", label: "Home", targetId: "Home" },
  { path: "#About", label: "About", targetId: "About" },
  { path: "#Videos", label: "Videos", targetId: "Videos" },
  { path: "#Photos", label: "Photos", targetId: "Photos" },
  { path: "#Music", label: "Music", targetId: "Music" },
  { path: "#Contact", label: "Contact", targetId: "Contact" },
];

const NavBar = () => {

  // Handle to set offset on y access to navigate above the targeted section IDs
  const handleNavLinkClick = (targetId, offset = 0) => {
    toggleMenu();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetY = targetElement.offsetTop + offset; // Calculate adjusted y position

      gsap.to(window, {
        duration: 5,
        scrollTo: { y: targetY, autoKill: false },
        ease: "power1.inOut",
      });
    } else {
      console.error(`Element with id "${targetId}" not found!`); // For debugging
    }
  };

  const navRef = useRef(null);
  const mobileNavRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    gsap.to(navRef.current, {
      opacity: 1,
      duration: 3,
      delay: 10
    })
  }, []);

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
    <nav className="nav fixed z-50 w-full h-[5.625rem] p-5 flex flex-row place-items-center justify-between bg-[#0f0e0e] text-white border-b opacity-0" ref={navRef}>
      <h6
        className="tracking-tight text-lg font-bold ml-2 font-display"
      >
        Gravity Room
      </h6>
      <div className="desktop-menu font-body gap-8 mr-2 hidden lg:flex">
        {navLinks.map((link, index) => (
          <div key={index}>
            <div onClick={() => handleNavLinkClick(link.targetId, -100)}> {/* Example: 100px above */}
              <Link href={link.path}>
                {link.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mobile-menu font-body bg-[#0f0e0e] w-[40vw] h-[70vh] lg:hidden flex flex-col justify-around items-center absolute top-[5.625rem] right-0 p-4 rounded-mobile-menu border-l border-b z-50" ref={mobileNavRef}>
        {navLinks.map((link, index) => (
          <div key={index}>
            <div onClick={() => handleNavLinkClick(link.targetId, -100)}> {/* Example: 100px above */}
              <Link href={link.path}>
                {link.label}
              </Link>
            </div>
          </div>
        ))}
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
