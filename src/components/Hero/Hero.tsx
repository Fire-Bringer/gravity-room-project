import Image from "next/image";
import "@/styles/hero.css"

const Hero = () => {
  return (
    <div
      id="Home"
      className="hero-wrapper"
    >
      <header>
        <Image
          src={"/images/Hero/earth-image.png"}
          alt="Image of earth in space"
          width={1920}
          height={1080}
          className="bg-1"
        />
        <Image
          src={"/images/Hero/mountain.png"}
          alt="Image of a mountain range"
          width={1920}
          height={1440}
          className="bg-2"
        />
        <h1 className="title font-display">
          Gravity Room
        </h1>
        {/*
        <Image
          src={"/images/Hero/left-hill.png"}
          alt="Image of a lake landscape"
          width={1920}
          height={1080}
          className="bg-3"
        />
        <Image
          src={"/images/Hero/right-hill.png"}
          alt="Image of an autumn landscape"
          width={1920}
          height={904}
          className="bg-4"
        />
        <Image
          src={"/images/Hero/sunset-hill.png"}
          alt="Image of hilly road"
          width={1920}
          height={1080}
          className="bg-5"
        />
        <Image
          src={"/images/Hero/car-hill-1200.png"}
          alt="Image of a vintage car"
          width={1200}
          height={600}
          className="bg-6"
        />
        <Image
          src={"/images/Hero/palm-foreground.png"}
          alt="Image a palmtree foreground silhouette"
          width={1920}
          height={1279}
          className="bg-7"
        />
          */}
      </header>
    </div>
  );
};

export default Hero;
