const WhyChooseUs = ({ title, description, features = [] }) => {
  return (
    <section className=" px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          {title}
        </h2>
        <p className="text-gray-600 mt-4  dark:text-gray-300">{description}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 pt-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white dark:bg-darkColor shadow-lg rounded-lg p-4"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primaryColor shadow-lg text-white rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800  dark:text-gray-200">
                {feature.name}
              </h3>
              <p className="text-gray-600 text-sm  dark:text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
