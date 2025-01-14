import React, { useState } from "react";
import { cn } from "../../lib/Utils";
import Title from "../Fragments/Global/Title";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <img
      src={card.src}
      alt={card.title}
      className="object-cover absolute inset-0 bg-cover "
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex flex-col justify-between items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-90"
      )}
    >
      <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
      <div className="text-sm md:text-base font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.description}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div data-aos="fade-in" className="dark:bg-gray-900 pt-12">
      <Title
        heading={"Our Service's"}
        mainHeading={"Airport Transfer Services Across the UK"}
      />
      <p className="mb-4 about__text section-text 2xl:max-w-5xl text-gray-700 dark:text-gray-300 text-center mx-auto">
        Our airport transfer service ensures seamless travel to and from major
        UK airports. We’ll pick you up from your chosen destination and get you
        to the airport well in time for your flight. Upon your return, count on
        us to be waiting for you in the arrivals area, ensuring a stress-free
        journey every time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl md:mx-auto md:px-8 w-full px-8 dark:bg-gray-900 ">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}
