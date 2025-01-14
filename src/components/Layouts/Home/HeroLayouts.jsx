import { ArrowRight, Phone } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [hover, setHover] = useState(true);
  const handleMouseOver = () => {
    setHover((prev) => {
      return !prev;
    });
  };
  const heading = "Luxury Minibus Travel Services";
  const headingLength = heading.length / 2;
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(
      "h1 .a",
      {
        opacity: 0,
        y: 10,
        stagger: 0.05,
        duration: 0.1,
        ease: "power2.out",
      },
      "anim"
    );
    tl.from(
      "h1 .b",
      {
        opacity: 0,
        stagger: -0.05,
        duration: 0.1,
        y: 10,
        ease: "power2.out",
      },
      "anim"
    );
    tl.from(".eyebrow", {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      duration: 0.4,
      ease: "power2.out",
    });
    tl.from(".hero-para", {
      opacity: 0,
      stagger: -0.1,
      duration: 0.3,
      y: 10,
      ease: "power2.out",
    });
  });

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className=" overflow-hidden  mb-2 text-sm eyebrow px-4 py-1 w-fit mx-auto rounded-full bg-gradient-to-b from-neutral-50 to-neutral-400 ">
            over 1400+ happy customers
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold  mb-6 overflow-hidden whitespace-nowrap">
            {heading.split("").map((item, index) => {
              if (index < headingLength) {
                if (item == " ") {
                  return (
                    <span
                      className="a bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 "
                      key={index}
                    >
                      {item}
                    </span>
                  );
                }
                return (
                  <span
                    className="a inline-block  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 "
                    key={index}
                  >
                    {item}
                  </span>
                );
              } else if (index == headingLength) {
                return (
                  <>
                    <br key={index} className="block lg:hidden " />
                    <span
                      className="a inline-block  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 "
                      key={index}
                    >
                      {item}
                    </span>
                  </>
                );
              } else {
                if (item == " ") {
                  return (
                    <span
                      className="a  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 "
                      key={index}
                    >
                      {item}
                    </span>
                  );
                }
                return (
                  <span
                    className="b inline-block  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
                    key={index}
                  >
                    {item}
                  </span>
                );
              }
            })}
          </h1>
          <div className="overflow-hidden">
            <p className="text-base md:text-base  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 font-[500] mb-8 max-w-3xl mx-auto hero-para">
              {
                "Experience the perfect blend of style, comfort, and affordability with our 8-seater luxury minibus service. Whether you're heading to the airport, planning a family holiday, or attending a special occasion, we've got you covered."
              }
            </p>
          </div>
          {/* <Link to={"/contact"}>
            <button
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseOver}
              className="bg-primaryColor text-white px-8 py-3 rounded-full font-semibold flex items-center mx-auto hover:bg-primaryColor/80 transition-colors"
            >
              Get in Touch
              <ArrowRight
                className={`h-5 w-5  duration-300 transition-all ${
                  hover ? "ml-2" : "ml-5"
                }`}
              />
            </button>
          </Link> */}
          <div>
            <a
              rel="noreferrer"
              href="https://wa.me/+447872002283?text=Hello%20there!"
              target="_blank"
              className="w-fit bg-primaryColor text-white px-8 py-3 rounded-full font-semibold flex items-center mx-auto hover:bg-primaryColor/80 transition-colors"
            >
              Call Now <Phone size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
