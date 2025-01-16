const ChauffeurServiceCard = ({
  title,
  description,
  phoneNumber,
  imageUrl,
  flip = false,
}) => {
  return (
    <div
      data-aos="fade-in"
      className={`flex flex-col  items-center md:items-start  p-4 md:p-8 gap-6 md:gap-12 ${
        flip ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex-1" data-aos="fade-right">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          {title}
        </h2>
        {description.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-600 dark:text-gray-400 mt-2 md:text-base text-sm font-[500]"
          >
            {paragraph}
          </p>
        ))}

        <p className="text-gray-600 mt-4 dark:text-gray-400">
          Call us at{" "}
          <a
            href={`tel:${phoneNumber}`}
            className="text-blue-800 font-medium dark:text-blue-800"
          >
            {phoneNumber}
          </a>{" "}
          to book your ride or get a quick quote, available 24/7.
        </p>
      </div>
      <div className="flex-1" data-aos="fade-left">
        <img
          src={imageUrl}
          alt={title}
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ChauffeurServiceCard;
