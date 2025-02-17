"use client";
import Image from "next/image";
import "@/styles/hero.css";
import { useState, useEffect} from "react";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="Home" className="hero-wrapper mt-12">
      <header>
        <Image
          src={"/images/Hero/earth-image.png"}
          alt="Image of earth in space"
          width={1920}
          height={1080}
          className="bg bg-1"
          style={{ transform: `translateZ(-10000px) scale(2) translateY(${scrollPosition * 0.1}px)` }}
        />
        <Image
          src={"/images/Hero/mountain.png"}
          alt="Image of a mountain range"
          width={1920}
          height={1080}
          className="bg bg-2"
          style={{ transform: `translateZ(-9000px) scale(1.9) translateY(${scrollPosition * 1}px)` }}
        />
        <Image
          src={"/images/Hero/left-hill.png"}
          alt="Image of a lake landscape"
          width={1920}
          height={1080}
          className="bg bg-3"
          style={{ transform: `translateZ(-8000px) scale(1.8) translateY(${scrollPosition * 0.9}px)` }}
        />
        <Image
          src={"/images/Hero/right-hill.png"}
          alt="Image of an autumn landscape"
          width={1920}
          height={904}
          className="bg bg-4"
          style={{ transform: `translateZ(-6000px) scale(1.6) translateY(${scrollPosition * 0.8}px)` }}
        />
        <Image
          src={"/images/Hero/sunset-hill.png"}
          alt="Image of hilly road"
          width={1920}
          height={1080}
          className="bg bg-5"
          style={{ transform: `translateZ(-4000px) scale(1.4) translateY(${scrollPosition * 0.7}px)` }}
        />
        <Image
          src={"/images/Hero/car-hill-1200.png"}
          alt="Image of a vintage car"
          width={1200}
          height={600}
          className="bg bg-6"
          style={{ transform: `translateZ(-2000px) scale(0.8) translateY(${scrollPosition * 0.5}px)` }}
        />
        <Image
          src={"/images/Hero/palm-foreground.png"}
          alt="Image a palmtree foreground silhouette"
          width={1920}
          height={1279}
          className="bg bg-7"
          style={{ transform: `translateZ(1000px) scale(1) translateY(${scrollPosition * 0.01}px)` }}
        />
        <h1
          className="title font-display drop-shadow"
          style={{ transform: `translateZ(1000px) scale(1) translateY(${scrollPosition * 0.9}px)` }}
        >
          Gravity Room
        </h1>
      </header>
    </div>
  );
};

export default Hero;
