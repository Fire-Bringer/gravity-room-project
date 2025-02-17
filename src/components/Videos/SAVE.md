import "@/styles/stars.css";
import "@/styles/photos.css";

// Strapi API Fetch Function

async function getVideosContent() {
  const videosPromise = await fetch("http://localhost:1337/api/videos")
  const videos = await videosPromise.json()
  return videos.data
}

async function getPhotosContent() {
  const photosPromise = await fetch("http://localhost:1337/api/photos?populate=*")
  const photos = await photosPromise.json()
  return photos.data
}

async function Videos() {
    //Strapi API Integration
    const videos = await getVideosContent()
    const videoOne = videos[0]
    const videoTwo = videos[1]
    const videoThree = videos[2]

    const photos = await getPhotosContent()
    const photoOne = photos[0]
    const photoTwo = photos[1]
    const photoThree = photos[2]
    const photoFour = photos[3]
    const photoFive = photos[4]
    const photoSix = photos[5]

    console.log(photoOne.image.url)

  return (
    <section id="Videos" className="videos-container relative bg-[#0f0e0e] text-[#F0EAD6] flex flex-col items-center py-16 mx[10vw]">

      {/* Starry Overlay */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      {/*Video 1*/}
      <div id="video-1" className="video-card relative z-10 w-11/12 flex flex-col-reverse lg:flex-row gap-10 py-10 lg:py-20 px-8 animation-show">


        <div className="video-text w-full font-body">
          <h2 className="font-display text-3xl text-center lg:text-start mb-4">{videoThree.title}</h2>
          <p className="text-center lg:text-start">
            {videoThree.subtitle}
          </p>
          <p>
            <br />
            {videoThree.japDescription}。
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
          <h2 className="font-display text-3xl text-center lg:text-start mb-4">{videoOne.title}</h2>
          <p className="text-center lg:text-start">
            {videoOne.subtitle}
          </p>
          <p>
            <br />
            {videoOne.japDescription}
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

      <section id="Photos" className="font-body photos relative my-20 grid grid-cols-1 lg:grid-cols-2 text-center mx-[10vw]">

        <div id="photo-1" className="photo animation-show">
            <img
              src={`http://localhost:1337${photoOne.image.url}`}
              alt="Image of the moon at night"
              width={500}
              height={500}
            />
            <h3 className="font-display">{photoOne.title}</h3>
            <p>{photoOne.description}</p>
        </div>
        <div id="photo-2" className="photo animation-show">
            <img
              src={`http://localhost:1337${photoTwo.image.url}`}
              alt="Image of the sunset"
              width={500}
              height={500}
            />
            <h3 className="font-display">{photoTwo.title}</h3>
            <p>{photoTwo.description}</p>
        </div>
        <div id="photo-3" className="photo animation-show">
            <img
              src={`http://localhost:1337${photoThree.image.url}`}
              alt="Image of a glass of champagne at night"
              width={500}
              height={500}
            />
            <h3 className="font-display">{photoThree.title}</h3>
            <p>{photoThree.description}</p>
        </div>
        <div id="photo-4" className="photo animation-show">
            <img
              src={`http://localhost:1337${photoFour.image.url}`}
              alt="Image of flowers"
              width={500}
              height={500}
            />
            <h3 className="font-display">{photoFour.title}</h3>
            <p>{photoFour.description}</p>
        </div>
        <div id="photo-5" className="photo animation-show">
            <img
              src={`http://localhost:1337${photoFive.image.url}`}
              alt="Image of a tree in the sun"
              width={500}
              height={500}
            />
            <h3 className="font-display">{photoFive.title}</h3>
            <p>{photoFive.description}</p>
        </div>
        <div id="photo-6" className="photo animation-show">
            <img
              src={`http://localhost:1337${photoSix.image.url}`}
              alt="Image of a beachfront"
              width={500}
              height={500}
            />
            <h3 className="font-display">{photoSix.title}</h3>
            <p>{photoSix.description}</p>
        </div>
      </section>

    </section>
  );
};

export default Videos;
