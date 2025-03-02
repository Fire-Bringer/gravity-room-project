"use client";
import Image from "next/image";
import { useCallback } from "react";
import "@/styles/about.css";
import "@/styles/stars.css";

// Social media links in a centralized, easily maintainable array
const socialLinks = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3vbXUUQLZUwtRpagZ8cErD",
    icon: "/images/Icons/spotify-line.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/yayoi0410/",
    icon: "/images/Icons/instagram-line.svg",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@gravity_room",
    icon: "/images/Icons/youtube-line.svg",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/gravityroom4",
    icon: "/images/Icons/soundcloud-line.svg",
  },
];

const About = ({ about }) => {
  // Extract data safely with fallbacks
  const title = about?.details?.ext_1?.ext_1 || "About";
  const profileImage = about?.details?.ext_1?.ext_2 || "/images/default-profile.jpg";
  const paragraphOne = about?.details?.ext_1?.ext_3 || "";
  const paragraphTwo = about?.details?.ext_1?.ext_4 || "";

  // Use the navigation handler from your nav component for consistency
  const handleContactClick = useCallback((e) => {
    e.preventDefault();
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="About"
      className="relative leading-none top-0 w-full min-h-screen flex flex-col text-center items-center justify-center pt-8 pb-8"
    >
      {/* Starry Background Effect */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      <div
        id="about-content"
        className="relative z-10 flex flex-col items-center max-w-[600px] py-16 px-8"
      >
        <h2 className="section-title text-3xl font-display mb-8 animation-show">
          {title}
        </h2>

        {/* Image with proper Next.js optimization and error handling */}
        <div className="w-[150px] h-[150px] relative rounded-full overflow-hidden animation-show">
          <Image
            src={profileImage}
            alt="Gravity Room Profile"
            width={150}
            height={150}
            className="about-img rounded-full animation-show"
            onError={(e) => {
              e.target.src = "/images/default-profile.jpg";
            }}
          />
        </div>

        <div className="about-contents font-body leading-normal mt-8 animation-show w-4/5">
          {paragraphOne && <p className="mb-4">{paragraphOne}</p>}
          {paragraphTwo && <p>{paragraphTwo}</p>}
        </div>

        {/* Social Links with proper accessibility attributes */}
        <div className="m-0 mt-8 flex animation-show">
          <ul className="flex flex-row justify-center w-full gap-4 md:gap-10">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.name} profile`}
                >
                  <Image
                    src={social.icon}
                    alt={`${social.name} Icon`}
                    width={48}
                    height={48}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Using anchor with button styling instead of button with anchor inside */}
        <a
          href="#Contact"
          onClick={handleContactClick}
          className="font-body bg-[#da30a5fb] hover:bg-[#fc87d7fb] px-8 py-4 rounded-[20px] mt-6 flex items-center justify-center animation-show transition-colors duration-300"
        >
          Contact
        </a>
      </div>
    </section>
  );
};

export default About;
