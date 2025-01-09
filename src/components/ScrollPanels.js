'use client';
import React from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

function scrollPanels() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const dom = {
      columns: document.querySelector('.section-col'),
      columnWraps: document.querySelectorAll('.section-col .column-wrap'),
      items: document.querySelectorAll('.section-cols .col-item'),
    };
  });

  return (
    <div>
      <section className="leading-none static top-0 w-full min-h-screen bg-[#0f0e0e] mb-[250vh] h-screen flex flex-col text-center items-center justify-center pt-32 pb-8">
        <h2 className="section-title">
          PANELS <br /> effect
        </h2>

        <p className="m-0 max-w-[400px]">BUILT USING NEXT.JS AND GSAP</p>
        <p className="m-0 max-w-[400px] mt-auto text-red-500">
          <span>Scroll</span>
        </p>
      </section>

      <section className="section-col leading-none top-0 min-h-screen bg-[#0f0e0e] fixed left-0 right-0 bottom-0 z-[-1] w-full h-screen">
        <div className="columns w-full relative flex justify-center gap-[2.5vw] h-full -rotate-45 items-center">

          {/* Column 1*/}

          <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
            </div>
          </div>


          {/* Column 2*/}

          <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
            </div>
          </div>


          {/* Column 3*/}

          <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
              </div>
              <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0">
                <img className="col-img" src="/images/space-hero.png"/>
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
