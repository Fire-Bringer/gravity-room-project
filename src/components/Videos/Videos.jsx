
const Videos = () => {
  return (
    <section id="Videos" className="videos-container bg-[#0f0e0e] text-[#F0EAD6] flex flex-col items-center mx[10vw]">

      {/*Video 1*/}
      <div className="video-card w-11/12 flex flex-col-reverse lg:flex-row gap-10 py-10 lg:py-20 px-8">


        <div className="video-text w-full">
          <h2 className="text-3xl text-center lg:text-start mb-4">A Look In Sacramento, California</h2>
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

        <div className="portfolio-video w-full aspect-video z-10">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IFleNgOaE1w?si=rLuhijiHmWQGkf5y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </div>

      {/*Video 2*/}
      <div className="video-card w-11/12 flex flex-col-reverse lg:flex-row gap-10 py-10 lg:py-20 px-8">

        <div className="portfolio-video w-full aspect-video z-10">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WuLTFC1kbHc?si=KQzj2ljatxOkOhop&amp;start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div className="video-text w-full">
          <h2 className="text-3xl text-center lg:text-start mb-4">A Look In Krabi, Thailand</h2>
          <p>
            タイのビーチリゾート地、クラビ
            <br /><br />
            ピピ島の海の青さ！空は壮大で、とてつもなく大きな岩やターコイズブルーの海など、やっぱり一番のアートは大自然かもしれないと何度も思った。ビーチサイドカフェは絶対にまた行きたい場所。
          </p>
          <br />
          <p>
            Krabi is a beach resort in Thailand. The blue of the sea around Phi Phi Islands is amazing! With the boundless sky, enormous rocks, and turquoise sea, every time I opened my eyes I couldn't help but think that perhaps this was one of the greatest arts of nature itself.
            The beachside café is a place I definitely want to visit again.
          </p>
        </div>

      </div>

      {/*Video 3*/}
      <div className="video-card w-11/12 flex flex-col-reverse lg:flex-row gap-10 py-10 lg:py-20 px-8">


        <div className="video-text w-full">
          <h2 className="text-3xl text-center lg:text-start mb-4">A Look In Hoi An, Vietnam</h2>
          <p>
            ベトナム、ホイアン
            <br /><br />
            夜は町全体にランプが灯り、優しく魅惑的な雰囲気に。
            Grabを使えばどこでも行けるけど、町の人たちと同じようにバイクを使うとさらにホイアンを感じられた。
          </p>
          <br />
          <p>
            At night, lamps light up the entire town, creating a gentle and enchanting atmosphere.
            With Grab, you can go anywhere, but using a motorbike, just like the locals, allows you to feel even more of Hoi An.
          </p>
        </div>

        <div className="portfolio-video w-full aspect-video z-10">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/wcfqa4ru6QE?si=vi6VkM6-AnmMsByb&amp;start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </div>

    </section>
  );
};

export default Videos;
