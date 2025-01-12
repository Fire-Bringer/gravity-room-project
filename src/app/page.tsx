import Hero from "@/components/HomePage/Hero";
import ScrollPanels from "@/components/ScrollPanels/ScrollPanels"
import Videos from "@/components/Videos/Videos"
import Music from "@/components/Music/Music"
import Contact from "@/components/Contact/Contact"

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
      <section>
        <Music/>
      </section>
      <section>
        <Contact/>
      </section>
    </main>
  );
};

export default HomePage;
