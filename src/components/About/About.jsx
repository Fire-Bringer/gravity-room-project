import Image from "next/image";
import "@/styles/about.css"
import "@/styles/stars.css"
import HTMLReactParser from "html-react-parser/lib/index";

// Strapi API Fetch Function

async function getAboutContent() {
  const aboutPromise = await fetch("http://localhost:1337/api/about?populate=*")
  const about = await aboutPromise.json()
  return about.data
}

async function About () {
  //Strapi API Integration
  const about = await getAboutContent()
  const aboutName = about.title
  const aboutImg = about.image.url
  const aboutContent = about.description.flatMap(paragraph =>
    paragraph.children.map(child => child.text)
  ).join("<br /><br />");

  return (
    <section id="About" className="relative leading-none top-0 w-full min-h-screen mb-[100vh] flex flex-col text-center items-center justify-center pt-8 pb-8">

      {/* Starry Overlay */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      <div id="about-content" className="relative z-10 flex flex-col items-center max-w-[600px] py-16 px-8">

        <h2 className="section-title text-3xl font-display mb-8 animation-show">
          {aboutName}
        </h2>

        <img src={`http://localhost:1337${aboutImg}`} alt="Gravity Room Logo" width={150} height={150}  className="about-img rounded-full animation-show"/>

        <p className="about-contents font-body leading-normal mt-8 animation-show w-4/5">
          {HTMLReactParser(aboutContent)}
        </p>
        <div className="m-0 mt-8 flex animation-show">
          <ul className="flex flex-row justify-center w-full gap-4 md:gap-10">
            <li>
              <a href="https://open.spotify.com/artist/3vbXUUQLZUwtRpagZ8cErD" target="_blank">
                <Image src={'/images/Icons/spotify-line.svg'} alt="Spotify Icon" width={48} height={48} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/yayoi0410/" target="_blank">
                <Image src={'/images/Icons/instagram-line.svg'} alt="Instagram Icon" width={48} height={48} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@gravity_room" target="_blank">
                <Image src={'/images/Icons/youtube-line.svg'} alt="YouTube Icon" width={48} height={48} />
              </a>
            </li>
            <li>
              <a href="https://soundcloud.com/gravityroom4" target="_blank">
                <Image src={'/images/Icons/soundcloud-line.svg'} alt="SoundCloud Icon" width={48} height={48} />
              </a>
            </li>
          </ul>
        </div>
        <button className="font-body bg-[#da30a5fb] px-8 py-4 rounded-[20px] mt-6 flex items-center justify-center animation-show">
          <a href="#Contact" className="bg-inherit">
            Contact
          </a>
        </button>
      </div>
    </section>
  );
};

export default About;
