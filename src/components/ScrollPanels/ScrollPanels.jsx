"use client";
import React from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Image from "next/image";
import "@/styles/about.css"
import "@/styles/stars.css"

function scrollPanels() {
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
      <section id="About" className="relative leading-none top-0 w-full min-h-screen mb-[100vh] flex flex-col text-center items-center justify-center pt-8 pb-8">

        {/* Starry Overlay */}
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>

        <div id="about-content" className="relative z-10 flex flex-col items-center max-w-[600px] py-16 px-8">

          <h2 className="section-title text-3xl mb-8 animation-show">
            Yayoi
          </h2>

          <Image src="/images/gravityroom-logo.jpg" alt="Gravity Room Logo" width={150} height={150}  className="about-img rounded-full animation-show"/>

          <p className="leading-normal mt-8 animation-show w-4/5">
            Gravity Roomにはいろんなものが集まってきます。
            私たちが重力によって地球に引っ張られているように・・
            そしてこの世界をいろいろな方法で冒険するのが、
            Gravity Roomのプロジェクトです。
            音楽、写真、動画、言葉、など。
            過ぎ去っていくその瞬間を記録するツールが溢れている時代に感謝。
            <br />
            <br />
            In Gravity Room, all things come together.
            Just as we are pulled toward the Earth by gravity itself...
            The Gravity Room project explores this world in a variety of ways.
            Through Music, Photos, Videos, Words… and more.
            It is a blessing and reminder that we have the tools to record the moments that are constantly passing away.
          </p>
          <div className="m-0 mt-8 flex animation-show">
            <ul className="flex flex-row justify-center w-full gap-4 md:gap-10">
              <li>
                <a href="https://open.spotify.com/artist/3vbXUUQLZUwtRpagZ8cErD" target="_blank">
                  <Image src={'/images/Icons/spotify-line.svg'} alt="Spotify Icon" width={48} height={48} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/yayoi0410/" target="_blank">
                  <Image src={'/images/Icons/instagram-line.svg'} alt="Instagram Icon" width={48} height={48} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@gravity_room" target="_blank">
                  <Image src={'/images/Icons/youtube-line.svg'} alt="YouTube Icon" width={48} height={48} />
                </a>
              </li>
              <li>
                <a href="https://soundcloud.com/gravityroom4" target="_blank">
                  <Image src={'/images/Icons/soundcloud-line.svg'} alt="SoundCloud Icon" width={48} height={48} />
                </a>
              </li>
            </ul>
          </div>
          <button className="bg-[#da30a5fb] px-8 py-4 rounded-[20px] mt-6 flex items-center justify-center animation-show">
            <a href="#Contact" className="bg-inherit">
              Contact
            </a>
          </button>
        </div>
      </section>

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

export default scrollPanels;
