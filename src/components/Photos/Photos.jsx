import Card from "./Card";
import "@/styles/photos.css"

const Photos = () => {
  return (
    <section className="cards h-[300vh] relative w-[100vw] bg-blue-600">
        {[...Array(4)].map((_, index) => (
          <Card
            key={index}
            id={`card-${index + 1}`}
            frontSrc="/images/space-horse.jpg"
            frontAlt="Card Image"
            backText="Your card details appear here"
          />
        ))}

    </section>
  );
};

export default Photos;
