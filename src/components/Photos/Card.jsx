import { forwardRef } from "react";
import Image from "next/image";

const Card = forwardRef(({ id, frontSrc, frontAlt, backText }, ref) => {
  return (
    <div className="card absolute top-1/2 left-1/2 w-[240px] h-[360px] " id={id} ref={ref}>
      <div className="card-wrapper absolute top-1/2 left-1/2 w-full h-full">
        <div className="flip-card-inner relative w-full h-full">
            <div className="flip-card-front">
              <Image
                priority
                src={frontSrc}
                width={500}
                height={500}
                alt={frontAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flip-card-back">
              <p className="absolute top-1/2 left-1/2 text-center text-xl font-medium">{backText}</p>
            </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
