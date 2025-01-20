"use client";
import React from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

function ScrollPanels() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const dom = {
      columns: document.querySelector(".section-col"),
      columnWraps: document.querySelectorAll(".section-col .column-wrap"),
      items: document.querySelectorAll(".section-cols .col-item"),
    };

    let lenis;

    const SmoothScroll = () => {
      lenis = new Lenis({
        lerp: 0.1,
        smooth: true,
      });

      const ScrollFn = (time) => {
        lenis.raf(time);

        requestAnimationFrame(ScrollFn);
      };

      requestAnimationFrame(ScrollFn);
    };

    const ScrollAni = () => {
      gsap
        .timeline({
          scrollTrigger: {
            start: 0,
            end: "max",
            scrub: true,
          },
        })
        .addLabel("start", 0)
        .to(
          dom.columns,
          {
            ease: "none",
            startAt: { scale: 1.2 },
            scale: 1,
          },
          "start"
        )
        .to(dom.items, {
          scrollTrigger: {
            start: 0,
            end: "top top",
            scrub: true,
          },

          ease: "power4.inOut",
          startAt: {
            opacity: 0,
            filter: "brightness(300%)",
          },

          opacity: 1,
          filter: "brightness(100%)",
          yoyo: true,
          repeat: 1,
        })
        .to(
          dom.columnWraps,
          {
            ease: "none",
            yPercent: (pos) => pos * -15,
          },
          "start"
        );
    };

    SmoothScroll();
    ScrollAni();
  });

  return (
    <div>

      <section className="section-col leading-none top-0 min-h-screen bg-[#0f0e0e] fixed left-0 right-0 bottom-0 z-[-1] w-full h-screen">
        <div className="columns w-full relative flex justify-center gap-[2.5vw] h-full -rotate-45 items-center">

          {/* Column 1*/}

          <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
            </div>
          </div>

          {/* Column 2*/}

          <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
            </div>
          </div>

          {/* Column 3*/}

          <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
              <div className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default ScrollPanels;
