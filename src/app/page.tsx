//import Image from "next/image";
import Hero from "@/components/HomePage/Hero";
import ScrollPanels from "@/components/ScrollPanels/ScrollPanels";
import Videos from "@/components/Videos/Videos"

const HomePage = () => {
  return (
    <main>
      <section>
        <Hero/>
      </section>
      <section>
        <ScrollPanels/>
      </section>
      <section>
        <Videos/>
      </section>
    </main>
  );
};

export default HomePage;
