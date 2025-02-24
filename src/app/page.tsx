import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";
import Intro from '@/components/Intro/Intro';
import About from "@/components/About/About";
//import ScrollPanels from "@/components/ScrollPanels/ScrollPanels";
//import Videos from "@/components/Videos/Videos";
//import Photos from "@/components/Photos/Photos";
//import Music from "@/components/Music/Music";
//import Contact from "@/components/Contact/Contact";

const HomePage = () => {

  return (
    <main>

      <ScrollAnimation>

        <Intro/>

        <About/>

      </ScrollAnimation>

    </main>
  );
};

export default HomePage;
