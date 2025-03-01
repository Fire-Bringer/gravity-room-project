"use client";
import Image from "next/image";
import "@/styles/stars.css";
import "@/styles/photos.css";

const Photos = ({ photos }) => {
  // Safely extract photo data in a single pass
  const photoItems = photos?.details?.title?.map(item => ({
    title: item.title || "",
    image: item.image || "",
    jap: item.jap || "",
    eng: item.eng || ""
  })) || [];

  // If no photos are available, provide feedback
  if (photoItems.length === 0) {
    return (
      <section id="Photos" className="photos-container bg-[#0f0e0e] text-[#F0EAD6] py-16">
        <div className="text-center">
          <h2 className="text-2xl font-display mb-4">Photos</h2>
          <p>No photos are currently available</p>
        </div>
      </section>
    );
  }

  return (
    <section id="Photos" className="videos-container relative bg-[#0f0e0e] text-[#F0EAD6] flex flex-col items-center py-16">
      {/* Starry Overlay */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      <div className="font-body photos relative my-20 grid grid-cols-1 lg:grid-cols-2 text-center mx-[10vw] gap-8">
        {photoItems.map((photo, index) => (
          <div
            id={`photo-${index + 1}`}
            className="photo animation-show"
            key={index}
          >
            {photo.image ? (
              <Image
                src={photo.image}
                alt={`Photo: ${photo.title || `Photo ${index + 1}`}`}
                width={500}
                height={500}
                loading={index < 2 ? "eager" : "lazy"}
                className="mx-auto"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdQIB5zOTIQAAAABJRU5ErkJggg=="
              />
            ) : (
              <div className="w-[500px] h-[500px] bg-gray-800 flex items-center justify-center mx-auto">
                <p>Image not available</p>
              </div>
            )}
            <h3 className="font-display mt-4">{photo.title}</h3>
            {photo.jap && <p>{photo.jap}</p>}
            {photo.jap && photo.eng && (
              <>
                <br />
              </>
            )}
            {photo.eng && <p>{photo.eng}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos;
