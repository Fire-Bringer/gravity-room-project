'use client'
import TransitionLink from "../TransitionLink";


const NavBar = () => {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-between bg-black text-white border-b">
      <h1 className="text-3xl tracking-tight font-bold">
        Gravity Room
      </h1>
      <div className="flex gap-5">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/about" label="About" />
      </div>
    </nav>

  )
};

export default NavBar;
