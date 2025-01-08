'use client'
import TransitionLink from "../TransitionLink";


const NavBar = () => {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-between bg-black text-white border-b">
      <h1 className="text-3xl tracking-tight font-bold">
        Gravity Room
      </h1>
      <div className="flex gap-8">
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
