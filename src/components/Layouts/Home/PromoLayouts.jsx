import PromoCard from "../../Fragments/Home/PromoCard";

const PromoLayouts = () => {
  return (
    <section
      className="duration-400 dark:bg-gray-900 relative"
      data-aos="fade-in"
    >
      <div className=" grid gap-12 relative">
        <div className="text-center ">
          <p className="destinations__subtitle section-subtitle">Best Promos</p>
          <h1 className="destinations__title section-title">
            Luxury Travel at Affordable Prices
          </h1>
        </div>

        <div className="h-auto max-w-sm p-4 mx-auto overflow-hidden md:max-w-2xl lg:max-w-4xl sm:max-w-xl xl:max-w-5xl ">
          <div className="flex w-full gap-4 animate-slide relative">
            <PromoCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoLayouts;
