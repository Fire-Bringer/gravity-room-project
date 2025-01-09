import React from "react";

function scrollPanels() {
  return (
    <div>
      <section className="leading-none static top-0 w-full min-h-screen bg-[#0f0e0e] mb-[250vh] h-screen flex flex-col text-center items-center justify-center pt-32 pb-8">
        <h2 className="section_title">
          PANELS <br /> effect
        </h2>

        <p className="m-0 max-w-[400px]">BUILT USING NEXT.JS AND GSAP</p>
        <p className="m-0 max-w-[400px] mt-auto text-red-500">
          <span>Scroll</span>
        </p>
      </section>
      <section></section>
      <section></section>
    </div>
  );
}

export default scrollPanels;
