import React from "react";
import Title from "../../Fragments/Global/Title";

const reviews = [
  {
    name: "Bolaji Akinwale",
    date: "2025-01-01",
    review:
      "Israan arrived ahead of schedule and was very helpful with our luggage and a very smooth drive to the airport. The car was clean and...",
    source: "Google",
  },
  {
    name: "Chandrima Roy",
    date: "2025-01-01",
    review:
      "Great service, on time, polite and clean car. Great to be able to track too.",
    source: "Google",
  },
  {
    name: "David Henstock",
    date: "2024-12-31",
    review:
      "Was very impressed with their service. Wouldn’t hesitate to recommend the company to my friends.",
    source: "Google",
  },
  {
    name: "Sally Howes",
    date: "2024-12-31",
    review:
      "Timely pick up, a warm greeting and a smooth transfer to the airport. Bags carried for me. Door opened. Very polite and helpful....",
    source: "Google",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          heading={"Customer Reviews"}
          mainHeading={"1489 reviews Across the UK"}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className=" p-4 shadow-lg rounded-lg border border-gray-200 flex flex-col justify-between"
            >
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-600">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-800 dark:text-gray-200 ">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-300 ">
                    {review.date}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4 dark:text-gray-400 ">
                {review.review}
              </p>
              <div className="flex items-center mt-auto">
                <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
                <span className=" ml-2 text-gray-500 text-[10px]">
                  Verified by {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
