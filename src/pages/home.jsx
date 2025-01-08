import { Clock, DollarSign, Globe, MapPin, Monitor, Smile } from "lucide-react";
import { FocusCardsDemo } from "../components/FocusMode";
import Navbar from "../components/Fragments/Home/Navbar";
import AboutUsLayouts from "../components/Layouts/Home/AboutUsLayouts";
import CategoryLayouts from "../components/Layouts/Home/CategoryLayouts";
import ChauffeurServiceCard from "../components/Layouts/Home/ChauhpherCards";
import ContactUsLayouts from "../components/Layouts/Home/ContactUsLayouts";
import FooterLayouts from "../components/Layouts/Home/FooterLayouts";
import HeroLayouts from "../components/Layouts/Home/HeroLayouts";
import PromoLayouts from "../components/Layouts/Home/PromoLayouts";
import WhyChooseUs from "../components/Layouts/Home/WhyChoose";
import LocomotiveScroll from "locomotive-scroll";
import CustomerReviews from "../components/Layouts/Home/Reviews";

const HomePage = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const serviceData = {
    title: "Chauffeur Services in Birmingham",
    description: [
      "Enjoy reliable, comfortable, and stylish travel with our luxury 8-seater minibus, tailored to meet your travel needs.",
      "Special Occasions: Weddings, day trips, corporate events, and more.",

      "Renowned for punctuality, discretion, and exceptional local knowledge, our chauffeurs provide unparalleled service tailored to your needs. Travel in comfort and elegance.",
    ],
    phoneNumber: "07872 002283",
    imageUrl:
      "https://img.freepik.com/free-photo/businesswoman-getting-taxi-cab_23-2149236690.jpg?t=st=1735825305~exp=1735828905~hmac=32e277a19fea4e36715f9328861f335ac5c8985fc273c268bb2b1ecc68c97289&w=900",
  };
  const serviceData2 = {
    title: "Travel in Style and Comfort with Our 8-Seater Luxury Minibus",

    description: [
      "Airport Runs: Manchester, London Heathrow, Gatwick, and all UK airports.",
      "Family Holidays: Spacious seating and ample boot space for all your luggage.",

      "✔ Reliable Service",
      "✔ Competitive Rates",
      "✔ Comfortable and Spacious",
    ],
    phoneNumber: ["07872 002283", "07507 133667"],
    imageUrl: "busimage.jpeg",
  };
  const whyChooseUs = {
    title: "Why Choose ACE Executives",
    description:
      "Choosing ACE Executives means opting for a premium travel experience. With over a decade of expertise, we excel in providing luxury, comfort, and professionalism for smooth and tailored journeys.",
    features: [
      {
        name: "Flight Monitoring",
        description: "Real-time tracking ensures you're always on schedule.",
        icon: <Monitor size={32} />,
      },
      {
        name: "Full GPS Tracking",
        description: "Secure rides with GPS tracking on all vehicles.",
        icon: <Globe size={32} />,
      },
      {
        name: "24/7 Support",
        description: "We’re here for you anytime, anywhere.",
        icon: <Clock size={32} />,
      },
      {
        name: "Meet and Greet",
        description: "Personalized meet-and-greet service at every ride.",
        icon: <Smile size={32} />,
      },
      {
        name: "Fixed Rates",
        description: "Enjoy transparent and affordable pricing.",
        icon: <DollarSign size={32} />,
      },
      {
        name: "60-Minute Waiting Time",
        description: "Relax with complimentary waiting time.",
        icon: <MapPin size={32} />,
      },
    ],
  };

  return (
    <div className="overflow-hidden dark:bg-gray-900">
      <Navbar />
      <div data-aos="fade-in">
        <HeroLayouts />
      </div>
      <FocusCardsDemo />
      <AboutUsLayouts />
      <CategoryLayouts />
      <div className="dark:bg-gray-900">
        <div className="py-8 flex items-center justify-center max-w-7xl mx-auto ">
          <ChauffeurServiceCard
            title={serviceData.title}
            description={serviceData.description}
            phoneNumber={serviceData.phoneNumber}
            imageUrl={serviceData.imageUrl}
          />
        </div>
      </div>
      <div className="dark:bg-gray-900" data-aos="fade-in">
        <div className="py-8 flex items-center justify-center max-w-7xl mx-auto dark:bg-gray-900">
          <ChauffeurServiceCard
            flip={true}
            title={serviceData2.title}
            description={serviceData2.description}
            phoneNumber={serviceData2.phoneNumber[1]}
            imageUrl={serviceData2.imageUrl}
          />
        </div>
      </div>
      <div className="dark:bg-gray-900" data-aos="fade-in">
        <div className="py-8 flex items-center justify-center max-w-7xl mx-auto ">
          <WhyChooseUs
            title={whyChooseUs.title}
            description={whyChooseUs.description}
            features={whyChooseUs.features}
          />
        </div>
      </div>
      <div className="dark:bg-gray-900" data-aos="fade-in">
        <CustomerReviews />
      </div>
      <PromoLayouts />
      <ContactUsLayouts />
      <FooterLayouts />
    </div>
  );
};

export default HomePage;
