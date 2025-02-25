import "@/styles/stars.css";
import "@/styles/photos.css";

const Videos = ( {videos} ) => {

  // Extract Definitions
  const titles = [];
  const subtitles = [];
  const JAPs = [];
  const ENGs = [];
  const Links = [];

  videos?.details?.title.forEach((item) => {
    titles.push(item.title)
  });

  videos?.details?.title.forEach((item) => {
    subtitles.push(item.subtitle)
  });

  videos?.details?.title.forEach((item) => {
    JAPs.push(item.jap)
  });

  videos?.details?.title.forEach((item) => {
    ENGs.push(item.eng)
  });

  videos?.details?.title.forEach((item) => {
    Links.push(item.link.url)
  });

  return (
    <section id="Videos" className="videos-container relative bg-[#0f0e0e] text-[#F0EAD6] flex flex-col items-center py-16 mx[10vw]">

      {/* Starry Overlay */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      {/*Video 1*/}
      <div id="video-1" className="video-card relative z-10 w-11/12 flex flex-col-reverse lg:flex-row gap-10 py-10 lg:py-20 px-8 animation-show">


        <div className="video-text w-full font-body">
          <h2 className="font-display text-3xl text-center lg:text-start mb-4">{titles[0]}</h2>
          <p className="text-center lg:text-start">
            {subtitles[0]}
          </p>
          <p>
            <br />
            {JAPs[0]}
          </p>
          <br />
          <p>
          {ENGs[0]}
          </p>
        </div>

        <div className="portfolio-video w-full aspect-video z-10">
          <iframe width="100%" height="100%" src={Links[0]} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </div>

      {/*Video 2*/}
      <div id="video-2" className="font-body video-card relative z-10 w-11/12 flex flex-col lg:flex-row gap-10 py-10 lg:py-20 px-8 animation-show">

        <div className="portfolio-video w-full aspect-video z-10">
          <iframe width="100%" height="100%" src={Links[1]} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div className="video-text w-full">
          <h2 className="font-display text-3xl text-center lg:text-start mb-4">{titles[1]}</h2>
          <p className="text-center lg:text-start">
            {subtitles[1]}
          </p>
          <p>
            <br />
            {JAPs[1]}
          </p>
          <br />
          <p>
            {ENGs[1]}
          </p>
        </div>

      </div>

      {/*Video 3*/}
      <div id="video-3" className="font-body video-card relative z-10 w-11/12 flex flex-col-reverse lg:flex-row gap-10 py-10 lg:py-20 px-8 animation-show">


        <div className="video-text w-full">
          <h2 className="font-display text-3xl text-center lg:text-start mb-4">{titles[2]}</h2>
          <p className="text-center lg:text-start">
            {subtitles[2]}
          </p>
          <p>
            <br />
            {JAPs[2]}。
          </p>
          <br />
          <p>
            {ENGs[2]}
          </p>
        </div>

        <div className="portfolio-video w-full aspect-video z-10">
          <iframe width="100%" height="100%" src={Links[2]} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </div>

    </section>
  );
};

export default Videos;
