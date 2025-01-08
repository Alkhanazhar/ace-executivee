import { dataStatic } from "../../../utils/data";

const CategoryCard = () => {
  const data = [
    {
      title: "Premium Airport Transport",
      imageUrl:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&h=200&fit=crop", // Business jet and luxury car
      description:
        "Enjoy stress-free airport transfers in our luxury minibuses. Professional chauffeurs ensure punctual arrivals and departures at all major UK airports including Heathrow, Gatwick, and Manchester.",
    },
    {
      title: "Corporate Travel Solutions",
      imageUrl:
        "https://img.freepik.com/free-photo/muslim-person-travelling-through-city_23-2149305584.jpg?t=st=1735824346~exp=1735827946~hmac=dfb80a15adb78a3b6c74d2507248cc62e73352162a31ae798e32f11014626c01&w=900", // Businessman entering luxury vehicle
      description:
        "Elevate your business travel with our executive transport service. Perfect for corporate events, client meetings, and team outings with professional, discreet, and reliable service.",
    },
    {
      title: "Executive Group Transport",
      imageUrl:
        "https://img.freepik.com/free-photo/businesswoman-getting-taxi-cab_23-2149236753.jpg?t=st=1735824600~exp=1735828200~hmac=8ace271fe8271b447b696a701e33073608aee45942f4464aa2cfdd0fac8a4dc0&w=740", // Mercedes Sprinter business van
      description:
        "Premium group transportation for executive teams and business delegates. Spacious, comfortable vehicles equipped with modern amenities for productive travel time.",
    },
    {
      title: "Door-to-Door Business Service",
      imageUrl:
        "https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?w=300&h=200&fit=crop", // Business professional by luxury car
      description:
        "Reliable door-to-door pickup service for business professionals. Seamless transportation from your location to meetings, conferences, or corporate events.",
    },
    {
      title: "Airport Meet & Greet",
      imageUrl:
        "https://img.freepik.com/free-photo/man-with-passport-boarding-pass-sitting-waiting-area_107420-63592.jpg?t=st=1735824461~exp=1735828061~hmac=6d3569e89ea274f7228a358ecb645b0807252fca0c52c461b0df910588d337c4&w=900", // Executive at airport with car
      description:
        "Professional meet and greet service at all major airports. Our chauffeurs handle your luggage and ensure a smooth transition from airport to vehicle.",
    },
    {
      title: "Premium Hourly Hire",
      imageUrl:
        "https://img.freepik.com/free-photo/businesswoman-getting-taxi-cab_23-2149236693.jpg?t=st=1735824674~exp=1735828274~hmac=5e39eb260524a3d98551c71f3c8d25b7a8a1a7edbbe297a2f7192eef06b47a2d&w=996", // Luxury business van
      description:
        "Flexible hourly and full-day hire services tailored to your business needs. Perfect for multiple meetings, roadshows, or extended corporate events with dedicated chauffeurs.",
    },
  ];

  if (!data || data.length === 0) {
    return (
      <>
        {dataStatic.map((v, i) => (
          <div
            key={i}
            className=" shadow-md duration-50 rounded-xl hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <img
                src={v.imageUrl}
                alt="Product"
                className="object-cover w-full h-40 rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <p className="block text-lg font-bold text-black capitalize truncate">
                  {v.name}
                </p>
              </div>
            </a>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {data.slice(0, 6).map((v, i) => (
        <div
          key={i}
          className="shadow-md dark:shadow-white/5 duration-200 rounded-xl hover:scale-105 hover:shadow-xl "
        >
          <a href="#">
            <img
              src={v.imageUrl}
              alt="Product"
              className="object-cover w-full h-44 rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <p className="block text-lg font-bold text-gray-700 dark:text-gray-300 capitalize truncate">
                {v.title}
              </p>
            </div>
            <p className="block text-[.8rem] px-2 pb-1 font-[300] text-gray-500  dark:text-gray-400 capitalize ">
              {v.description}
            </p>
          </a>
        </div>
      ))}
    </>
  );
};

export default CategoryCard;
