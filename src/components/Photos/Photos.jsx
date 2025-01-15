import Image from "next/image";
import "@/styles/photos.css"

const Photos = () => {
  return (
    <section id="Photos" className="photos relative my-20 grid grid-cols-1 lg:grid-cols-2 text-center mx-[10vw]">

      <div id="photo-1" className="photo animation-show">
          <Image
            src={"/images/Photos/moonview.webp"}
            alt="Image of the moon at night"
            width={500}
            height={500}
          />
          <h3>Moonview</h3>
      </div>
      <div id="photo-2" className="photo animation-show">
          <Image
            src={"/images/Photos/sunsetsky.webp"}
            alt="Image of the sunset"
            width={500}
            height={500}
          />
          <h3>Sunset Sky</h3>
      </div>
      <div id="photo-3" className="photo animation-show">
          <Image
            src={"/images/Photos/nightcap.webp"}
            alt="Image of a glass of champagne at night"
            width={500}
            height={500}
          />
          <h3>Nightcap</h3>
      </div>
      <div id="photo-4" className="photo animation-show">
          <Image
            src={"/images/Photos/flowerbush.webp"}
            alt="Image of flowers"
            width={500}
            height={500}
          />
          <h3>Morning Glow</h3>
      </div>
      <div id="photo-5" className="photo animation-show">
          <Image
            src={"/images/Photos/sunnytree.webp"}
            alt="Image of a tree in the sun"
            width={500}
            height={500}
          />
          <h3>Sunny Tree</h3>
      </div>
      <div id="photo-6" className="photo animation-show">
          <Image
            src={"/images/Photos/beachfront.webp"}
            alt="Image of a beachfront"
            width={500}
            height={500}
          />
          <h3>Beachfront</h3>
      </div>
    </section>
  );
};

export default Photos;
