"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Lenis from "lenis"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function ScrollPanels() {
  // Create refs
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const column1Ref = useRef(null)
  const column2Ref = useRef(null)
  const column3Ref = useRef(null)
  const itemsRef = useRef([])

  // Clear item refs on each render
  useEffect(() => {
    itemsRef.current = []
    return () => {
      // Cleanup function
      const triggers = ScrollTrigger.getAll()
      triggers.forEach((trigger) => trigger.kill())
    }
  }, [])

  // Initialize animations after component mounts
  useEffect(() => {
    // Make sure all refs are available
    if (!sectionRef.current || !column1Ref.current || !column2Ref.current || !column3Ref.current) {
      return
    }

    // Create Lenis smooth scroll instance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Connect Lenis to ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Set up GSAP context for better cleanup
    const ctx = gsap.context(() => {
      // Main section animation (scale down as user scrolls)
      gsap.fromTo(
        sectionRef.current,
        { scale: 1.2 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      )

      // Column animations with different speeds
      gsap.to(column1Ref.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.to(column2Ref.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.to(column3Ref.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Individual item animations
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0.7,
            filter: "brightness(70%)",
          },
          {
            opacity: 1,
            filter: "brightness(100%)",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        )
      })
    })

    // Cleanup function
    return () => {
      // Kill all ScrollTrigger instances
      ctx.revert()

      // Stop Lenis
      lenis.destroy()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-[150vh]">
      {/* Fixed background section */}
      <section
        ref={sectionRef}
        className="section-col leading-none top-0 bg-[#0f0e0e] fixed left-0 right-0 bottom-0 z-[-1] w-full h-screen overflow-hidden"
      >
        <div className="columns w-full relative flex justify-center gap-[2.5vw] h-full -rotate-45 items-center">
          {/* Column 1 */}
          <div ref={column1Ref} className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`col1-${i}`}
                  ref={(el) => el && itemsRef.current.push(el)}
                  className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0"
                >
                  <img className="col-img w-full h-full object-cover" src="/images/space-hero.png" alt="Space hero" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div ref={column2Ref} className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`col2-${i}`}
                  ref={(el) => el && itemsRef.current.push(el)}
                  className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0"
                >
                  <img className="col-img w-full h-full object-cover" src="/images/space-hero.png" alt="Space hero" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div ref={column3Ref} className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
            <div className="column relative block">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`col3-${i}`}
                  ref={(el) => el && itemsRef.current.push(el)}
                  className="col-item w-[50vw] md:w-[30vw] lg:w-[25vw] h-[50vw] md:h-[30vw] lg:h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0"
                >
                  <img className="col-img w-full h-full object-cover" src="/images/space-hero.png" alt="Space hero" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacer section to create scrollable area */}
      {/* <div className="h-[300vh]"></div> */}
    </div>
  )
}

export default ScrollPanels
