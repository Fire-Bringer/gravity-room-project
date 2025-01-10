
const Videos = () => {
  return (
    <section id="Videos" className="videos-container bg-[#0f0e0e] text-[#F0EAD6] mt-20 flex flex-col items-center mx[10vw] border">

      <div className="video-card w-11/12 flex gap-20 py-20">

        <div className="video-text w-1/2">
          <h2 className="text-3xl">A Look In Sacramento, California</h2>
          <p>
            カリフォルニア州の州都、サクラメント
            <br /><br />
            City of treesと言われるサクラメントでは、ドライブ中たくさんの木のトンネルを走った。
            州都ながらもほどよく都会で、今まで行ったアメリカとはまた違う経験ができた。
            オールドサクラメントは、かわいい雰囲気で色んなお店があって、歩いてるだけで楽しい。
          </p>
          <br />
          <p>
            In Sacramento, which is known as the "City of Trees," I drove through many tree-lined tunnels.
            Though it’s the state capital, it has a balanced, not-too-urban feel, offering a different experience compared to other places in the U.S.
            Old Sacramento has a charming atmosphere with various shops, and just walking around is a lot of fun.
          </p>
        </div>

        <div class="portfolio-video w-full aspect-video z-10">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IFleNgOaE1w?si=rLuhijiHmWQGkf5y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

    </section>
  );
};

export default Videos;
