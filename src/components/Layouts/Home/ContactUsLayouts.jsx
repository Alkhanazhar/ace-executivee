import { Phone } from "lucide-react";
import { useState } from "react";

const ContactUsLayouts = () => {
  const [hover, setHover] = useState(true);
  const handleMouseOver = () => {
    setHover((prev) => {
      return !prev;
    });
  };
  return (
    <section
      className="pt-24 transition-all callback duration-400 dark:bg-gray-900"
      data-aos="fade-in"
    >
      <div className="callback__wrapper relative flex h-[640px] items-center">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="callback img"
          className="absolute top-0 left-0 object-cover object-center w-full h-full callback__img"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30" />

        <div className="container callback__container">
          <div className="relative text-center callback__data xs:mx-auto xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <p className="text-white callback__subtitle section-subtitle">
              {"Let's talk"}
            </p>
            <h1 className="text-white callback__title section-title">
              Contact us if {"you're"} ready
            </h1>
            <p className="pb-8 text-white callback__text section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              itaque eaque cumque libero dignissimos aut maiores odit commodi
              aspernatur expedita.
            </p>
            <a
              rel="noreferrer"
              href="https://wa.me/+447872002283?text=Hello%20there!"
              target="_blank"
              className="w-fit bg-primaryColor text-white px-4 py-3  text-base rounded-full font-semibold flex items-center mx-auto hover:bg-primaryColor/80 transition-colors"
            >
              Call Now <Phone size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsLayouts;
