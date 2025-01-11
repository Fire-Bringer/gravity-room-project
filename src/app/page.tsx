import Hero from "@/components/HomePage/Hero";
import ScrollPanels from "@/components/ScrollPanels/ScrollPanels"
import Videos from "@/components/Videos/Videos"
import Music from "@/components/Music/Music"

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
    </main>
  );
};

export default HomePage;
