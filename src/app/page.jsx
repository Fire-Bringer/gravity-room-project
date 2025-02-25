import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";
import Intro from '@/components/Intro/Intro';
import About from "@/components/About/About";
import ScrollPanels from "@/components/ScrollPanels/ScrollPanels";
import Videos from "@/components/Videos/Videos";
import Photos from "@/components/Photos/Photos";
import Music from "@/components/Music/Music";
import Contact from "@/components/Contact/Contact";
import 'server-only';

async function getData() {
  const endpoints = [
    { key: 'about', url: '/rcms-api/3/about/3' },
    { key: 'videos', url: '/rcms-api/4/videos/4' },
    { key: 'photos', url: '/rcms-api/5/photos/6' }
  ];

  const fetchPromises = endpoints.map(endpoint =>
    fetch(process.env.BASE_URL + endpoint.url).then(res => res.json())
  );

  const [about, videos, photos] = await Promise.all(fetchPromises);

  return { about, videos, photos };
}


async function HomePage() {

  const { about, videos, photos } = await getData();

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
