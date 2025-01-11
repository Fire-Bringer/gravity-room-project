import Hero from "@/components/HomePage/Hero";
import ScrollPanels from "@/components/ScrollPanels/ScrollPanels"

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
