import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";
import Hero from "@/components/HomePage/Hero";
import ScrollPanels from "@/components/ScrollPanels/ScrollPanels";
import Videos from "@/components/Videos/Videos";
import Music from "@/components/Music/Music";
import Contact from "@/components/Contact/Contact";

const HomePage = () => {
  return (
    <main>
      
      <ScrollAnimation>

        <Hero/>

        <ScrollPanels/>

        <Videos/>

        <Music/>

        <Contact/>

      </ScrollAnimation>

    </main>
  );
};

export default HomePage;
