"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative z-50 m-0 w-full flex justify-center bg-[#0f0e0e] border-t">
      <ul className="w-1/2 flex flex-row justify-center gap-6 p-4 ">
        <li>
          <a
            href="https://open.spotify.com/artist/3vbXUUQLZUwtRpagZ8cErD"
            target="_blank"
          >
            <Image
              src={"/images/spotify-line.svg"}
              alt="Spotify Icon"
              width={30}
              height={30}
              className="bg-[#0f0e0e]"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/yayoi0410/" target="_blank">
            <Image
              src={"/images/instagram-line.svg"}
              alt="Instagram Icon"
              width={30}
              height={30}
              className="bg-[#0f0e0e]"
            />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@gravity_room" target="_blank">
            <Image
              src={"/images/youtube-line.svg"}
              alt="YouTube Icon"
              width={30}
              height={30}
              className="bg-[#0f0e0e]"
            />
          </a>
        </li>
        <li>
          <a href="https://soundcloud.com/gravityroom4" target="_blank">
            <Image
              src={"/images/soundcloud-line.svg"}
              alt="SoundCloud Icon"
              width={30}
              height={30}
              className="bg-[#0f0e0e]"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
