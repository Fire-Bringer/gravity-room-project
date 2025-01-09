//import Image from "next/image";
import ScrollPanels from '@/components/ScrollPanels';
import Hero from "@/components/HomePage/Hero";

const HomePage = () => {
  return (
    <main>
      <section>
        <Hero/>
      </section>
      <section>
        <ScrollPanels/>
      </section>
    </main>
  );
};

export default HomePage;
