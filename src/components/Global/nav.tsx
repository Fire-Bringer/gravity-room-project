'use client'
import TransitionLink from "../TransitionLink";


const NavBar = () => {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-between bg-black text-white">
      <h1 className="text-3xl tracking-tight font-bold">
        Gravity Room
      </h1>
      <div className="flex gap-5">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/about" label="About" />
      </div>
    </nav>

  )

/*
  const navItems = [
    {
      label: "Home",
      onClick: () => {
      },
    },
    {
      label: "About",
      onClick: () => {
      },
    },
    {
      label: "Portfolio",
      onClick: () => {
      },
    },
    {
      label: "Gallery",
      onClick: () => {
      },
    },
    {
      label: "Music",
      onClick: () => {
      },
    },
    {
      label: "Contact",
      onClick: () => {
      },
    }
  ];

  return (
    <div className="w-full h-[5vh] bg-black border-b">
      <ul className="h-full flex align-center justify-around text-white">
        {navItems.map((item, index) => (
          <li key={index} onClick={item.onClick} className="cursor-pointer self-center">
            {item.label}
          </li>
        ))}
      </ul>

    </div>
  );

*/
};

export default NavBar;
