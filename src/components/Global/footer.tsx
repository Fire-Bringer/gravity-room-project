'use client'

const Footer = () => {
  const footerItems = [
    {
      label: "Instagram",
      onClick: () => {
      },
    },
    {
      label: "Spotify",
      onClick: () => {
      },
    },
    {
      label: "RA-Dev",
      onClick: () => {
      },
    }
  ];

  return (
    <div className="w-full h-[5vh] bg-black border-t">
      <ul className="h-full flex align-center justify-around text-white">
        {footerItems.map((item, index) => (
          <li key={index} onClick={item.onClick} className="cursor-pointer self-center">
            {item.label}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Footer;
