'use client';
import Image from "next/image";
import '@/styles/intro.css';
import gsap from "gsap";
import { useRef, useEffect } from 'react';
import Hero from "../Hero/Hero";

const Intro = () => {

  const progressBarRef = useRef(null);
  const preloaderRef = useRef(null);
  const introDivRef = useRef(null);
  const introImgRefs = useRef([]);

  const addIntroImgRef = (el) => {
    if (el && !introImgRefs.current.includes(el)) {
      introImgRefs.current.push(el)
    }
  };

  const introImages = [
    { src: '/images/Photos/beachfront.webp', alt: 'Beachfront image' },
    { src: '/images/Photos/flowerbush.webp', alt: 'Flowerbush image' },
    { src: '/images/Photos/sunnytree.webp', alt: 'Sunny tree image' },
    { src: '/images/Photos/sweettooth.webp', alt: 'Sweet tooth image' },
    { src: '/images/Photos/sunsetsky.webp', alt: 'Sunset sky image' },
    { src: '/images/Photos/moonview.webp', alt: 'Moonview image' },
    { src: '/images/Photos/nightcap.webp', alt: 'Nightcap image' },
  ];

  useEffect(() => {

    gsap.to(".progress-bar", {
      width: "30%",
      duration: 2,
      ease: "power4.inOut",
      delay: 2,
    });

    gsap.to(".progress-bar", {
      width: "100%",
      opacity: 0,
      duration: 2,
      delay: 3.5,
      ease: "power3.out",
      onComplete: () => {
        gsap.set(".pre-loader", {
          display: "none",
        });
      },
    });

    gsap.to(".intro-imgs > img", {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.25,
      delay: 4,
    });

    gsap.to(".intro", {
      scale: 1.3,
      duration: 3,
      ease: "power3.inOut",
      delay: 4,
    });

    gsap.to(".intro", {
      opacity: 0,
      duration: 4,
      ease: "power3.inOut",
      delay: 4,
    });

    gsap.to(".hero-content", {
      opacity: 1,
      duration: 4,
      ease: "power3.inOut",
      delay: 5,
    });

  }, []);

  return (
    <section className="intro-section">

      <div className="intro" ref={introDivRef}>

        <div className="pre-loader" ref={preloaderRef}>

          <Image
            src='/images/new-car.png'
            alt="Loader car svg"
            width={200}
            height={200}
            color="red"
          />

          <div className="progress-bar" ref={progressBarRef}></div>

        </div>

        <div className="intro-imgs">

          {introImages.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={1920}
              height={1000}
              objectFit="cover"
              className="intro-img"
              ref={addIntroImgRef}
            />
          ))}

        </div>

      </div>

      <div className="hero-content opacity-0">
          <Hero/>
      </div>


    </section>
  );
};

export default Intro;
