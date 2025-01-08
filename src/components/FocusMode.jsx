import { FocusCards } from "./ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Cardiff Airport",
      description:
        "Enjoy seamless airport transfers to Cardiff Airport, tailored for your comfort and on-time arrival.",
      src: "./freepik3.jpg",
    },
    {
      title: "Bristol Airport",
      description:
        "Reliable and efficient transport to Bristol Airport, making your travel experience smooth and stress-free.",
      src: "https://images.pexels.com/photos/1815385/pexels-photo-1815385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Heathrow Airport",
      description:
        "Expert airport transfer services to Heathrow Airport with guaranteed comfort and punctuality for every trip.",
      src: "https://images.pexels.com/photos/30001160/pexels-photo-30001160/free-photo-of-commercial-airplane-parked-at-minas-gerais-airport.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Gatwick Airport",
      description:
        "Enjoy seamless airport transfers to Gatwick Airport, tailored for your comfort and on-time arrival.",
      src: "https://images.pexels.com/photos/1815385/pexels-photo-1815385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Manchester Airport",
      description:
        "Providing dependable transfers to Manchester Airport, ensuring you travel with confidence and ease.",
      src: "./freepik.webp",
    },
    {
      title: "Edinburgh Airport",
      description:
        "Professional transfer services to Edinburgh Airport, offering hassle-free and timely travel solutions.",
      src: "./freepik2.webp",
    },
  ];

  return <FocusCards cards={cards} />;
}
