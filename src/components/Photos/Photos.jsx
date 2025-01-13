import Card from "./Card";

const Photos = () => {
  return (
    <section className="cards">
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
