"use client"
import Image from "next/image"
import { useState, useEffect, useRef, useCallback } from "react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

// Ensure GSAP plugins are registered outside component to avoid re-registration issues
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin)
}

const navLinks = [
  { path: "#Home", label: "Home", targetId: "Home" },
  { path: "#About", label: "About", targetId: "About" },
  { path: "#Videos", label: "Videos", targetId: "Videos" },
  { path: "#Photos", label: "Photos", targetId: "Photos" },
  { path: "#Music", label: "Music", targetId: "Music" },
  { path: "#Contact", label: "Contact", targetId: "Contact" },
]

const NavBar = () => {
  const navRef = useRef(null)
  const mobileNavRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Track if animation is in progress
  const isAnimatingRef = useRef(false)

  // Optimized scroll function with fallback mechanism
  const handleNavLinkClick = useCallback(
    (targetId, offset = -75) => {
      if (typeof window === "undefined") return

      // Close menu only if it's open
      if (isMenuOpen) setIsMenuOpen(false)

      try {
        const targetElement = document.getElementById(targetId)

        if (targetElement && !isAnimatingRef.current) {
          // Set animation flag
          isAnimatingRef.current = true

          // Kill any existing animations
          gsap.killTweensOf(window)

          // Get accurate position
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY

          // Use a more reliable approach with a fallback
          gsap.to(window, {
            duration: 1.5, // Shorter duration for better reliability
            scrollTo: {
              y: targetPosition + offset,
              autoKill: false, // Changed to false to prevent early termination
            },
            ease: "power1.inOut", // Using a simpler easing function
            onUpdate: () => {
              // Optional: You can track progress here if needed
            },
            onComplete: () => {
              // Ensure we're at the right position with a fallback
              if (Math.abs(window.scrollY - (targetPosition + offset)) > 10) {
                // If GSAP didn't get us close enough, use native scrolling as fallback
                window.scrollTo({
                  top: targetPosition + offset,
                  behavior: "smooth",
                })
              }

              // Reset animation flag after a short delay
              setTimeout(() => {
                isAnimatingRef.current = false
              }, 100)
            },
            onInterrupt: () => {
              // Reset animation flag if interrupted
              isAnimatingRef.current = false
            },
          })
        } else if (!targetElement) {
          console.warn(`Element with id "${targetId}" not found!`)
        }
      } catch (error) {
        console.error("Navigation error:", error)
        isAnimatingRef.current = false

        // Fallback to native scrolling if GSAP fails
        try {
          const targetElement = document.getElementById(targetId)
          if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
              top: targetPosition + offset,
              behavior: "smooth",
            })
          }
        } catch (e) {
          console.error("Fallback navigation failed:", e)
        }
      }
    },
    [isMenuOpen],
  )

  // ✅ Optimized GSAP Initial Animations
  useEffect(() => {
    if (typeof window !== "undefined" && navRef.current) {
      gsap.to(navRef.current, { opacity: 1, duration: 1.5, delay: 10 })

      if (mobileNavRef.current) {
        gsap.set(mobileNavRef.current, { x: 200, opacity: 0 })
      }
    }

    // Cleanup function to prevent memory leaks
    return () => {
      if (typeof window !== "undefined") {
        gsap.killTweensOf(window)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined" || !mobileNavRef.current) return

    gsap.to(mobileNavRef.current, {
      x: isMenuOpen ? 0 : 200,
      opacity: isMenuOpen ? 1 : 0,
      duration: 0.8,
      ease: "power3.out",
    })
  }, [isMenuOpen])

  return (
    <nav
      className="nav fixed z-50 w-full h-[5.625rem] p-5 flex flex-row place-items-center justify-between bg-[#0f0e0e] text-white border-b opacity-0"
      ref={navRef}
    >
      <h6 className="tracking-tight text-lg font-bold ml-2 font-display">Gravity Room</h6>

      {/* ✅ Desktop Menu */}
      <div className="desktop-menu font-body gap-8 mr-2 hidden lg:flex">
        {navLinks.map((link, index) => (
          <div key={index}>
            <button onClick={() => handleNavLinkClick(link.targetId)} className="hover:text-gray-400">
              {link.label}
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Mobile Menu */}
      <div
        ref={mobileNavRef}
        className="mobile-menu font-body bg-[#0f0e0e] w-[40vw] h-[70vh] lg:hidden flex flex-col justify-around items-center absolute top-[5.625rem] right-0 p-4 rounded-mobile-menu border-l border-b z-50"
      >
        {navLinks.map((link, index) => (
          <div key={index}>
            <button onClick={() => handleNavLinkClick(link.targetId)} className="hover:text-gray-400">
              {link.label}
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Burger Menu Toggle */}
      <button
        className="lg:hidden"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <Image
          src={"/images/Icons/menu-3-line.svg"}
          alt="Menu"
          width={30}
          height={30}
          className={isMenuOpen ? "hidden" : "block"}
        />
        <Image
          src={"/images/Icons/close-large-line.svg"}
          alt="Close"
          width={30}
          height={30}
          className={isMenuOpen ? "block" : "hidden"}
        />
      </button>
    </nav>
  )
}

export default NavBar

