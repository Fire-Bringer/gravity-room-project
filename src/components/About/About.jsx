import Image from "next/image";
import "@/styles/about.css"
import "@/styles/stars.css"

const About = () => {

  return (
    <section id="About" className="relative leading-none top-0 w-full min-h-screen mb-[100vh] flex flex-col text-center items-center justify-center pt-8 pb-8">

      {/* Starry Overlay */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      <div id="about-content" className="relative z-10 flex flex-col items-center max-w-[600px] py-16 px-8">

        <h2 className="section-title text-3xl font-display mb-8 animation-show">
          Yayoi
        </h2>

        <img src='/images/gravityroom-logo.jpg' alt="Gravity Room Logo" width={150} height={150}  className="about-img rounded-full animation-show"/>

        <p className="about-contents font-body leading-normal mt-8 animation-show w-4/5">
          Gravity Roomにはいろんなものが集まってきます。私たちが重力によって地球に引っ張られているように・・そしてこの世界をいろいろな方法で冒険するのが、Gravity Roomのプロジェクトです。音楽、写真、動画、言葉、など。過ぎ去っていくその瞬間を記録するツールが溢れている時代に感謝。
          <br /> <br />
          In Gravity Room, all things come together. Just as we are pulled toward the Earth by gravity itself... The Gravity Room project explores this world in a variety of ways. Through Music, Photos, Videos, Words… and more. It is a blessing and reminder that we have the tools to record the moments that are constantly passing away.
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
