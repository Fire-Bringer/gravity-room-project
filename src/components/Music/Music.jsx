const Music = () => {
  return (
    <div id="Music" className="flex flex-col gap-8 mx-8 my-16">

      <div className="solo-music w-11/12 xl:w-4/5 self-center animation-show">
        <iframe src="https://open.spotify.com/embed/artist/3vbXUUQLZUwtRpagZ8cErD?utm_source=generator&theme=0" width="100%" height="370" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

      <div className="playlist-music w-11/12 xl:w-4/5 self-center animation-show">
        <iframe src="https://open.spotify.com/embed/playlist/6bbK8c1wf2KA6e3a44DT8x?utm_source=generator&theme=0" width="100%" height="620" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

    </div>
  );
};

export default Music;
