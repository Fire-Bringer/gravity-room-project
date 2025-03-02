"use client";
import { useState, useEffect } from "react";
import "@/styles/stars.css";

const Music = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Spotify embed configuration
  const spotifyEmbeds = [
    {
      id: "artist",
      title: "Artist Profile",
      src: "https://open.spotify.com/embed/artist/3vbXUUQLZUwtRpagZ8cErD?utm_source=generator&theme=0",
      height: 370,
    },
    {
      id: "playlist",
      title: "Featured Playlist",
      src: "https://open.spotify.com/embed/playlist/6bbK8c1wf2KA6e3a44DT8x?utm_source=generator&theme=0",
      height: 620,
    }
  ];

  useEffect(() => {
    // Reset loading state if component remounts
    setIsLoading(true);
    setError(false);

    // Simulate checking if Spotify embeds can load
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="Music"
      className="music-container relative bg-[#0f0e0e] text-[#F0EAD6] flex flex-col items-center py-16"
    >
      {/* Starry Overlay for visual consistency with other sections */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      {/* Section Heading */}
      <h2 className="font-display text-3xl mb-12 relative z-10">Music</h2>

      {/* Loading State */}
      {isLoading && (
        <div className="w-11/12 xl:w-4/5 h-80 bg-gray-800 animate-pulse flex items-center justify-center mb-8 relative z-10">
          <p>Loading music content...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="w-11/12 xl:w-4/5 bg-red-900 p-4 mb-8 text-center relative z-10">
          <p>Unable to load music content. Please try again later.</p>
        </div>
      )}

      {/* Spotify Embeds */}
      {!isLoading && !error && (
        <div className="flex flex-col gap-8 w-full items-center relative z-10">
          {spotifyEmbeds.map((embed) => (
            <div
              key={embed.id}
              className="w-11/12 xl:w-4/5 music-embed animation-show"
              aria-label={embed.title}
            >
              <iframe
                src={embed.src}
                title={`Spotify ${embed.title}`}
                width="100%"
                height={embed.height}
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                onError={() => setError(true)}
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Music;
