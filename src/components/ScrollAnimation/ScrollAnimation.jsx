"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({ children }) => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animation-show');

    elements.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  return <div>{children}</div>;
};

export default ScrollAnimation;
