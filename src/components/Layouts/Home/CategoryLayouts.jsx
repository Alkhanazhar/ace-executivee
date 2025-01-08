import CategoryCard from "../../Fragments/Home/CategoryCard";

const CategoryLayouts = () => {
  return (
    <section
      data-aos="fade-in"
      className="transition-all destinations duration-400 dark:bg-gray-900"
    >
      <div className="container grid gap-12 ">
        <div className="max-w-sm mx-auto text-center sm:max-w-md md:max-w-lg">
          <p className="destinations__subtitle section-subtitle">
            our {"Chauffeur's"}
          </p>
          <h1 className="destinations__title section-title">
            Unmatched Luxury Chauffeur Transports
          </h1>
        </div>
        <p className="mb-4  section-text  md:w-[50rem] mx-auto max-w-4xl text-gray-600 dark:text-gray-400">
          Step into a world of elegance and comfort with our exclusive chauffeur
          transport services. From seamless airport journeys to sophisticated
          city rides, our solutions are designed to meet your travel needs with
          style and reliability. Whether {"it's"} a corporate event, family
          outing, or special occasion, experience the luxury of tailored travel
          that prioritizes your convenience and satisfaction.
        </p>

        <div
          data-aos="fade-in"
          className="grid w-full max-w-sm grid-cols-1 gap-8 mx-auto md:max-w-2xl lg:max-w-5xl sm:max-w-xl sm:grid-cols-2 lg:grid-cols-3"
        >
          <CategoryCard />
        </div>
      </div>
    </section>
  );
};

export default CategoryLayouts;
