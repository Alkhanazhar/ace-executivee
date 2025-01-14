const PromoCard = () => {
  // const { loading, error } = useFetch("api/v1/promos");
  const data = [
    {
      title: "Welcome Discount",
      // code: "WELCOME10",
      description:
        "Get 10% off your first booking with our luxury minibus service.",
      imageUrl:
        "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=300&h=200&fit=crop",
    },
    {
      title: "Airport Special",
      // code: "AIRPORT20",
      description:
        "Enjoy 20% off on airport transfers to Heathrow, Gatwick, or Manchester.",
      imageUrl:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop",
    },
    {
      title: "Family Getaway",
      // code: "FAMILY15",
      description: "Book your family holiday travel and save 15% on your trip.",
      imageUrl:
        "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=300&h=200&fit=crop",
    },
    {
      title: "Corporate Saver",
      // code: "BIZ25",
      description: "Save 25% on corporate bookings for group travel or events.",
      imageUrl:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=300&h=200&auto=compress",
    },
    {
      title: "Special Occasion Offer",
      // code: "EVENT30",
      description:
        "Make your special occasions extra memorable with 30% off luxury transport.",
      imageUrl:
        "https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?w=300&h=200&auto=compress",
    },
    {
      title: "Loyalty Reward",
      // code: "LOYALTY50",
      description:
        "Get 50% off your 5th trip as a token of appreciation for choosing us!",
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop",
    },
  ];

  return (
    <>
      {data.map((v, i) => (
        <div
          key={i}
          className="p-2 shadow-lg  min-w-[15rem] bg-white rounded-md h-52"
        >
          <div className="relative">
            <img src={v.imageUrl} alt="" className="object-cover w-full h-40" />
            <div className="absolute p-1 text-[12px] shadow-md bg-white rounded top-1 left-1">
              {v.code}
            </div>
          </div>
          <div className="mt-2 text-sm font-[400]">{v.title}</div>
          <div className="flex items-center justify-between">
            {/* <div className="fixed bottom-0 text-sm font-bold">
              ${v.promo_discount_price}
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default PromoCard;
