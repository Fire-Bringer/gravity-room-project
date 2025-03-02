"use client";
import "@/styles/stars.css";
import "@/styles/photos.css";

const Videos = ({ videos }) => {
  // Process all video data in a single pass
  const videoItems = videos?.details?.title?.map(item => ({
    title: item.title || "",
    subtitle: item.subtitle || "",
    jap: item.jap || "",
    eng: item.eng || "",
    link: item.link?.url || ""
  })) || [];

  // If no videos are available, provide feedback
  if (videoItems.length === 0) {
    return (
      <section id="Videos" className="videos-container relative bg-[#0f0e0e] text-[#F0EAD6] flex flex-col items-center py-16">
        <div className="text-center">
          <h2 className="text-2xl font-display mb-4">Videos</h2>
          <p>No videos are currently available</p>
        </div>
      </section>
    );
  }

  return (
    <section id="Videos" className="videos-container relative bg-[#0f0e0e] text-[#F0EAD6] flex flex-col items-center py-16">
      {/* Starry Overlay */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      {videoItems.map((video, index) => (
        <div
          id={`video-${index + 1}`}
          key={index}
          className={`font-body video-card relative z-10 w-11/12 flex ${
            index % 2 === 0 ? "flex-col-reverse" : "flex-col"
          } ${
            index % 2 === 0 ? "-reverse lg:flex-row" : " lg:flex-row"
          } gap-10 py-10 lg:py-20 px-8 animation-show`}
        >
          {/* Video content - order changes based on index */}
          {index % 2 === 1 ? (
            <>
              <div className="portfolio-video w-full aspect-video z-10">
                {video.link ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={`${video.title || `Video ${index + 1}`} - YouTube video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading={index < 2 ? "eager" : "lazy"}
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                    <p>Video unavailable</p>
                  </div>
                )}
              </div>
              <div className="video-text w-full">
                <h2 className="font-display text-3xl text-center lg:text-start mb-4">{video.title}</h2>
                {video.subtitle && (
                  <p className="text-center lg:text-start">{video.subtitle}</p>
                )}
                {video.jap && (
                  <>
                    <p><br />{video.jap}</p>
                  </>
                )}
                {video.jap && video.eng && <br />}
                {video.eng && <p>{video.eng}</p>}
              </div>
            </>
          ) : (
            <>
              <div className="video-text w-full">
                <h2 className="font-display text-3xl text-center lg:text-start mb-4">{video.title}</h2>
                {video.subtitle && (
                  <p className="text-center lg:text-start">{video.subtitle}</p>
                )}
                {video.jap && (
                  <>
                    <p><br />{video.jap}</p>
                  </>
                )}
                {video.jap && video.eng && <br />}
                {video.eng && <p>{video.eng}</p>}
              </div>
              <div className="portfolio-video w-full aspect-video z-10">
                {video.link ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={`${video.title || `Video ${index + 1}`} - YouTube video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading={index < 2 ? "eager" : "lazy"}
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                    <p>Video unavailable</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default Videos;
