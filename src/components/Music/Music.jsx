const Music = () => {
  return (
    <div id="Music" className="embed-spotify">

    <div className="solo-music">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3vbXUUQLZUwtRpagZ8cErD?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>

    <div className="playlist-music">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6bbK8c1wf2KA6e3a44DT8x?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  </div>
  );
};
