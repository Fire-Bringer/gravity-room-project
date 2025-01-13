"use client";
import Card from "./Card";
import "@/styles/photos.css"

import { useEffect, useRef } from "react";
import ReactLenis from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Photos = () => {
  const container = useRef(null);
  const cardRefs = useRef([]);

  

  return (
    <ReactLenis root>
      <section className="cards h-[300vh] relative w-[100vw] bg-blue-600" ref={container}>
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              id={`card-${index + 1}`}
              frontSrc="/images/space-horse.jpg"
              frontAlt="Card Image"
              backText="Your card details appear here"
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
      </section>
    </ReactLenis>
  );
};

export default Photos;
