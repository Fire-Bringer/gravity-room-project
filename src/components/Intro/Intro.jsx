'use client';
import '@/styles/intro.css';
import gsap from "gsap";
import { useRef, useEffect } from 'react';
import Hero from "@/components/Hero/Hero";

const Intro = () => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden"; // Also set for <html>

    setTimeout(() => {
      document.body.style.overflow = "visible";
      document.documentElement.style.overflowY = "visible"; // Ensure scrolling is enabled
      window.scrollTo(0, 0);
    }, 6000);
  }, []);

  const progressBarRef = useRef(null);
  const preloaderRef = useRef(null);
  const introDivRef = useRef(null);
  const introImgRefs = useRef([]);
  const heroCompRef = useRef(null);
  const carRef = useRef(null);
  const quoteRef = useRef(null);

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

    gsap.to(quoteRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut"
    });

    gsap.to(carRef.current, {
      opacity: 1,
      duration: 2,
      ease: "power1.inOut"
    });

    gsap.to(quoteRef.current, {
      y: 15, // Moves the element up and down
      duration: 3,
      ease: "power1.inOut",
      repeat: -1, // Infinite loop
      yoyo: true // Reverses animation back and forth
    });

    gsap.to(quoteRef.current, {
      scale: 5,
      duration: 5,
      delay: 7,
      ease: "power1.inOut"
    });

    gsap.to(carRef.current, {
      y: 20, // Moves the element up and down
      duration: 3,
      ease: "power1.inOut",
      repeat: -1, // Infinite loop
      yoyo: true // Reverses animation back and forth
    });

    gsap.to(progressBarRef.current, {
      width: "30%",
      duration: 2,
      ease: "power4.inOut",
      delay: 4,
    });

    gsap.to(progressBarRef.current, {
      width: "100%",
      opacity: 0,
      duration: 2,
      delay: 5.5,
      ease: "power3.out",
      onComplete: () => {
        gsap.set(preloaderRef.current, {
          display: "none",
        });
      },
    });

    gsap.to(introImgRefs.current, {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.25,
      delay: 6,
    });

    gsap.to(introDivRef.current, {
      scale: 1.3,
      duration: 3,
      ease: "power3.inOut",
      delay: 6,
    });

    gsap.to(introDivRef.current, {
      opacity: 0,
      duration: 4,
      ease: "power3.inOut",
      delay: 6,
    });

    gsap.to(heroCompRef.current, {
      opacity: 1,
      duration: 4,
      ease: "power3.inOut",
      delay: 7,
    });


  }, []);

  return (
    <section className="intro-section">

      <div className="intro" ref={introDivRef}>

        <div className="pre-loader" ref={preloaderRef}>

          <div className="intro-quote font-body text-lg md:text-xl text-center" ref={quoteRef}>
            <p>Why fear the unknown...when you can embrace it?</p>
          </div>

          <div className="w-32 md:w-40 opacity-0" ref={carRef}>
            <img
              src='/images/convertible.png'
              alt="Loader car svg"
              width={200.5}
              height={85.75}
              className="w-full h-auto"
            />
          </div>

          <div className="progress-bar" ref={progressBarRef}></div>

        </div>

        <div className="intro-imgs">

          {introImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={1920}
              height={1000}
              className="intro-img"
              ref={addIntroImgRef}
            />
          ))}

        </div>

      </div>

      <div className="hero-content">
        <div className="hero-component" ref={heroCompRef}>
          <Hero/>
        </div>
      </div>

    </section>
  );
};

export default Intro;
