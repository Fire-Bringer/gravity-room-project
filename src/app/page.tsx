import Hero from "@/components/HomePage/Hero";
import ScrollPanels from "@/components/ScrollPanels/ScrollPanels"
import Videos from "@/components/Videos/Videos"
import Photos from "@/components/Photos/Photos"
import Music from "@/components/Music/Music"
import Contact from "@/components/Contact/Contact"

const HomePage = () => {
  return (
    <main>

        <Hero/>

        <ScrollPanels/>

        <Videos/>

        <Photos/>

        <Music/>

        <Contact/>

    </main>
  );
};

export default HomePage;
