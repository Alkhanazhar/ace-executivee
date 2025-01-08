import { Link } from "react-router-dom";
import { urlStaticAboutImage } from "../../../utils/data";
import { brandName } from "../../../utils/Constants";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const AboutUsLayouts = () => {
  const [hover, setHover] = useState(true);
  const handleMouseOver = () => {
    setHover((prev) => {
      return !prev;
    });
  };
  return (
    <section
      data-aos="fade-right"
      id="#about"
      className="transition-all py-12 duration-400 dark:bg-gray-900"
    >
      <div
        data-aos="fade-in"
        className="border-0 container grid gap-12  xs:max-w-sm sm:max-w-md md:max-w-lg xl:max-w-4xl xl:grid-cols-2 xl:items-center 2xl:max-w-5xl"
      >
        <div className="flex flex-col justify-start items-start">
          <p className="about__subtitle section-subtitle">About Us</p>
          <h1 className="about__title section-title">Explore UK with us</h1>
          <p className="mb-4 about__text section-text 2xl:max-w-md">
            The {brandName} project will produce a web platform that allows
            users to access minibus travel information across the UK in a more
            efficient and enjoyable way. In addition, users (admins) can manage
            routes by adding, editing, and deleting travel destinations, upload
            photos of minibuses and journeys, search for specific destinations,
            and ensure secure user accounts through authentication.
          </p>
          <button
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseOver}
            className="ms-0 bg-primaryColor text-white px-8 py-3 rounded-full font-semibold flex items-center mx-auto hover:bg-primaryColor/80 transition-colors"
          >
            Book Now
            <ArrowRight
              className={`h-5 w-5  duration-300 transition-all ${
                hover ? "ml-2" : "ml-5"
              }`}
            />
          </button>
        </div>

        <img
          data-aos="fade-left"
          src={
            "https://img.freepik.com/free-photo/picture-two-young-businessmen-meeting-shaking-hands_176420-6256.jpg?t=st=1735835362~exp=1735838962~hmac=7b9785f3fa444c2d7f44ecc062e5ae3d15092c0c097c47011c66208a1117051f&w=900"
          }
          alt="about img"
          className="object-cover w-full about__img"
        />
      </div>
    </section>
  );
};

export default AboutUsLayouts;
