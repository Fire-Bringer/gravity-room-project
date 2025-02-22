import "@/styles/stars.css";
import "@/styles/photos.css";

const Photos = () => {

  return (
    <section id="Photos" className="videos-container relative bg-[#0f0e0e] text-[#F0EAD6] flex flex-col items-center py-16 mx[10vw]">

      {/* Starry Overlay */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      <div className="font-body photos relative my-20 grid grid-cols-1 lg:grid-cols-2 text-center mx-[10vw]">

        <div id="photo-1" className="photo animation-show">
            <img
              src="/images/Photos/moonview.webp"
              alt="Image of the moon at night"
              width={500}
              height={500}
            />
            <h3 className="font-display">Moonview</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum similique quia unde repellendus nemo labore impedit enim necessitatibus totam. Distinctio expedita voluptates, repellendus optio voluptas vero laudantium necessitatibus porro!</p>
        </div>
        <div id="photo-2" className="photo animation-show">
            <img
              src="/images/Photos/sunsetsky.webp"
              alt="Image of the sunset"
              width={500}
              height={500}
            />
            <h3 className="font-display">Sunset Sky</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum similique quia unde repellendus nemo labore impedit enim necessitatibus totam. Distinctio expedita voluptates, repellendus optio voluptas vero laudantium necessitatibus porro!</p>
        </div>
        <div id="photo-3" className="photo animation-show">
            <img
              src="/images/Photos/nightcap.webp"
              alt="Image of a glass of champagne at night"
              width={500}
              height={500}
            />
            <h3 className="font-display">Nightcap</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum similique quia unde repellendus nemo labore impedit enim necessitatibus totam. Distinctio expedita voluptates, repellendus optio voluptas vero laudantium necessitatibus porro!</p>
        </div>
        <div id="photo-4" className="photo animation-show">
            <img
              src="/images/Photos/flowerbush.webp"
              alt="Image of flowers"
              width={500}
              height={500}
            />
            <h3 className="font-display">Morning Glow</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum similique quia unde repellendus nemo labore impedit enim necessitatibus totam. Distinctio expedita voluptates, repellendus optio voluptas vero laudantium necessitatibus porro!</p>
        </div>
        <div id="photo-5" className="photo animation-show">
            <img
              src="/images/Photos/sunnytree.webp"
              alt="Image of a tree in the sun"
              width={500}
              height={500}
            />
            <h3 className="font-display">Sunny Tree</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum similique quia unde repellendus nemo labore impedit enim necessitatibus totam. Distinctio expedita voluptates, repellendus optio voluptas vero laudantium necessitatibus porro!</p>
        </div>
        <div id="photo-6" className="photo animation-show">
            <img
              src="/images/Photos/beachfront.webp"
              alt="Image of a beachfront"
              width={500}
              height={500}
            />
            <h3 className="font-display">Beachfront</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum similique quia unde repellendus nemo labore impedit enim necessitatibus totam. Distinctio expedita voluptates, repellendus optio voluptas vero laudantium necessitatibus porro!</p>
        </div>
      </div>

    </section>
  );
};

export default Photos;
