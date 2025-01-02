'use client'

const NavBar = () => {
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
};

export default NavBar;
