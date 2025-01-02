import { NavProps } from "@/types";

const NavBar = ( { navItem }: NavProps ) => {
  return (
    <div className="w-full h-[10vh] bg-black border-b-white">
      <ul className="flex justify-around text-white">
        {navItem.map((item, index) => (
          <li key={index} onClick={item.onClick} className="cursor-pointer">
            {item.label}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default NavBar;
