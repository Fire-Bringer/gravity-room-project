import "@/styles/stars.css";
import "@/styles/photos.css";

const Photos = ( {photos} ) => {

  // Extract Definitions
  const titles = [];
  const images = [];
  const descriptions = [];

  photos?.details?.title.forEach((item) => {
    titles.push(item.title)
  });

  photos?.details?.title.forEach((item) => {
    images.push(item.image)
  });

  photos?.details?.title.forEach((item) => {
    descriptions.push(item.description)
  });

  return (
    <section id="Photos" className="videos-container relative bg-[#0f0e0e] text-[#F0EAD6] flex flex-col items-center py-16 mx[10vw]">

      {/* Starry Overlay */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      <div className="font-body photos relative my-20 grid grid-cols-1 lg:grid-cols-2 text-center mx-[10vw]">

        <div id="photo-1" className="photo animation-show">
            <img
              src={images[0]}
              alt="Image of the moon at night"
              width={500}
              height={500}
            />
            <h3 className="font-display">{titles[0]}</h3>
            <p>{descriptions[0]}</p>
        </div>
        <div id="photo-2" className="photo animation-show">
            <img
              src={images[1]}
              alt="Image of the sunset"
              width={500}
              height={500}
            />
            <h3 className="font-display">{titles[1]}</h3>
            <p>{descriptions[1]}</p>
        </div>
        <div id="photo-3" className="photo animation-show">
            <img
              src={images[2]}
              alt="Image of a glass of champagne at night"
              width={500}
              height={500}
            />
            <h3 className="font-display">{titles[2]}</h3>
            <p>{descriptions[2]}</p>
        </div>
        <div id="photo-4" className="photo animation-show">
            <img
              src={images[3]}
              alt="Image of flowers"
              width={500}
              height={500}
            />
            <h3 className="font-display">{titles[3]}</h3>
            <p>{descriptions[3]}</p>
        </div>
        <div id="photo-5" className="photo animation-show">
            <img
              src={images[4]}
              alt="Image of a tree in the sun"
              width={500}
              height={500}
            />
            <h3 className="font-display">{titles[4]}</h3>
            <p>{descriptions[4]}</p>
        </div>
        <div id="photo-6" className="photo animation-show">
            <img
              src={images[5]}
              alt="Image of a beachfront"
              width={500}
              height={500}
            />
            <h3 className="font-display">{titles[5]}</h3>
            <p>{descriptions[5]}</p>
        </div>
      </div>

    </section>
  );
};

export default Photos;
