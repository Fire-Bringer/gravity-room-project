import Image from "next/image";
import "@/styles/stars.css";
import "@/styles/photos.css";

// Strapi API Fetch Function

async function getVideosContent() {
  const videosPromise = await fetch("http://localhost:1337/api/videos")
  const videos = await videosPromise.json()
  return videos.data
}

async function Videos() {
    //Strapi API Integration
    const videos = await getVideosContent()
    const videoOne = videos[0]
    const videoTwo = videos[1]
    const videoThree = videos[2]

  return (
    <section id="Videos" className="videos-container relative bg-[#0f0e0e] text-[#F0EAD6] flex flex-col items-center py-16 mx[10vw]">

      {/* Starry Overlay */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      {/*Video 1*/}
      <div id="video-1" className="video-card relative z-10 w-11/12 flex flex-col-reverse lg:flex-row gap-10 py-10 lg:py-20 px-8 animation-show">


        <div className="video-text w-full font-body">
          <h2 className="font-display text-3xl text-center lg:text-start mb-4">{videoOne.title}</h2>
          <p className="text-center lg:text-start">
            {videoOne.subtitle}
          </p>
          <p>
            <br />
            {videoOne.japDescription}。
          </p>
          <br />
          <p>
            {videoOne.engDescription}
          </p>
        </div>

        <div className="portfolio-video w-full aspect-video z-10">
          <iframe width="100%" height="100%" src={videoOne.embedURL} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </div>

      {/*Video 2*/}
      <div id="video-2" className="font-body video-card relative z-10 w-11/12 flex flex-col lg:flex-row gap-10 py-10 lg:py-20 px-8 animation-show">

        <div className="portfolio-video w-full aspect-video z-10">
          <iframe width="100%" height="100%" src={videoTwo.embedURL} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div className="video-text w-full">
          <h2 className="font-display text-3xl text-center lg:text-start mb-4">{videoTwo.title}</h2>
          <p className="text-center lg:text-start">
            {videoTwo.subtitle}
          </p>
          <p>
            <br />
            {videoTwo.japDescription}。
          </p>
          <br />
          <p>
            {videoTwo.engDescription}
          </p>
        </div>

      </div>

      {/*Video 3*/}
      <div id="video-3" className="font-body video-card relative z-10 w-11/12 flex flex-col-reverse lg:flex-row gap-10 py-10 lg:py-20 px-8 animation-show">


        <div className="video-text w-full">
          <h2 className="font-display text-3xl text-center lg:text-start mb-4">{videoThree.title}</h2>
          <p className="text-center lg:text-start">
            {videoThree.subtitle}
          </p>
          <p>
            <br />
            {videoThree.japDescription}
          </p>
          <br />
          <p>
            {videoThree.engDescription}
          </p>
        </div>

        <div className="portfolio-video w-full aspect-video z-10">
          <iframe width="100%" height="100%" src={videoThree.embedURL} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </div>

      <section id="Photos" className="font-body photos relative my-20 grid grid-cols-1 lg:grid-cols-2 text-center mx-[10vw]">

        <div id="photo-1" className="photo animation-show">
            <Image
              src={"/images/Photos/moonview.webp"}
              alt="Image of the moon at night"
              width={500}
              height={500}
            />
            <h3 className="font-display">Moonview</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum similique quia unde repellendus nemo labore impedit enim necessitatibus totam. Distinctio expedita voluptates, repellendus optio voluptas vero laudantium necessitatibus porro!</p>
        </div>
        <div id="photo-2" className="photo animation-show">
            <Image
              src={"/images/Photos/sunsetsky.webp"}
              alt="Image of the sunset"
              width={500}
              height={500}
            />
            <h3 className="font-display">Sunset Sky</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum similique quia unde repellendus nemo labore impedit enim necessitatibus totam. Distinctio expedita voluptates, repellendus optio voluptas vero laudantium necessitatibus porro!</p>
        </div>
        <div id="photo-3" className="photo animation-show">
            <Image
              src={"/images/Photos/nightcap.webp"}
              alt="Image of a glass of champagne at night"
              width={500}
              height={500}
            />
            <h3 className="font-display">Nightcap</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum similique quia unde repellendus nemo labore impedit enim necessitatibus totam. Distinctio expedita voluptates, repellendus optio voluptas vero laudantium necessitatibus porro!</p>
        </div>
        <div id="photo-4" className="photo animation-show">
            <Image
              src={"/images/Photos/flowerbush.webp"}
              alt="Image of flowers"
              width={500}
              height={500}
            />
            <h3 className="font-display">Morning Glow</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum similique quia unde repellendus nemo labore impedit enim necessitatibus totam. Distinctio expedita voluptates, repellendus optio voluptas vero laudantium necessitatibus porro!</p>
        </div>
        <div id="photo-5" className="photo animation-show">
            <Image
              src={"/images/Photos/sunnytree.webp"}
              alt="Image of a tree in the sun"
              width={500}
              height={500}
            />
            <h3 className="font-display">Sunny Tree</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum similique quia unde repellendus nemo labore impedit enim necessitatibus totam. Distinctio expedita voluptates, repellendus optio voluptas vero laudantium necessitatibus porro!</p>
        </div>
        <div id="photo-6" className="photo animation-show">
            <Image
              src={"/images/Photos/beachfront.webp"}
              alt="Image of a beachfront"
              width={500}
              height={500}
            />
            <h3 className="font-display">Beachfront</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum similique quia unde repellendus nemo labore impedit enim necessitatibus totam. Distinctio expedita voluptates, repellendus optio voluptas vero laudantium necessitatibus porro!</p>
        </div>
      </section>

    </section>
  );
};

export default Videos;
