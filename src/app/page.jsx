import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";
import Intro from '@/components/Intro/Intro';
import About from "@/components/About/About";
import ScrollPanels from "@/components/ScrollPanels/ScrollPanels";
import Videos from "@/components/Videos/Videos";
import Photos from "@/components/Photos/Photos";
import Music from "@/components/Music/Music";
import Contact from "@/components/Contact/Contact";

async function getData() {
  // Fetch data
  const resAbout = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/rcms-api/3/about/3');
  const about = await resAbout.json();

  const resVideos = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/rcms-api/4/videos/4');
  const videos = await resVideos.json();

  const resPhotos = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/rcms-api/5/photos/6');
  const photos = await resPhotos.json();

  const data = [about, videos, photos]

  return data
}


async function HomePage() {

  const data = await getData()

  const about = data[0]
  const videos = data[1]
  const photos = data[2]

  return (
    <main>

      <ScrollAnimation>

        <Intro/>

        <About about={about} />

        <ScrollPanels/>

        <Videos videos={videos} />

        <Photos photos={photos} />

        <Music/>

        <Contact/>

      </ScrollAnimation>

    </main>
  );
};

export default HomePage;
