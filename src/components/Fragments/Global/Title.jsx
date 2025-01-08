const Title = ({ heading, mainHeading }) => {
  return (
    <div className="text-center destinations__data">
      <p className="destinations__subtitle section-subtitle">{heading}</p>
      <h1 className="destinations__title section-title">{mainHeading}</h1>
    </div>
  );
};

export default Title;
