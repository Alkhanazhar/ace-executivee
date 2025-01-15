/* eslint-disable react/prop-types */

import { useState } from "react";

const FormSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "@gmail.com",
    phone_number: "",
    number_of_persons: 0,
    additional_pickups: "",
    type_of_occasion: "",
    pick_up_date: "",
    pick_up_time: "",
    starting_location: "",
    starting_postal_code: "",
    end_location: "",
    end_postal_code: "",
    return_same_day: "",
    additional_comments: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://example.com/api/bookings",
        formData
      );

      console.log("Booking successful:", response.data);
      alert("Booking submitted successfully!");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to submit booking. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex-1 rounded-lg bg-white shadow-md dark:bg-darkColor p-4 -mt-16 border dark:border-white/10 mb-14">
      <div>
        <Label label={"Name"} />
        <div className="flex items-center gap-2">
          <Input placeholder="Firstname" type="text" />
          <Input placeholder="Lastname" type="text" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div>
          <Label label={"Email"} />
          <div className="flex items-center">
            <Input placeholder="Email" type="email" />
          </div>
        </div>
        <div>
          <Label label={"Phone Number"} />
          <div className="flex items-center">
            <Input placeholder="Phone Number" type="tel" />
          </div>
        </div>
      </div>
      {/* plan your trip */}
      <div className="">
        <h2 className="capitalize text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4 border-b w-fit">
          Plan your Trip
        </h2>
        <div className="flex gap-2 items-center md:flex-row flex-col">
          <div>
            <Label label={"Number of Persons"} />
            <select className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
            </select>
          </div>
          <div>
            <Label label={"Additional Pick ups?"} />
            <select className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none">
              <option value={"yes"}>Yes</option>
              <option value={"no"}>No</option>
            </select>
          </div>
          <div>
            <Label label={"Type of Occasion?"} />
            <select className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none">
              <option value={"occupation"}>Occupation</option>
              <option value={"Shopping_Trip"}>Shopping Trip</option>
              <option value={"Event_Transfer"}>Event Transfer</option>
              <option value={"Award_Ceremony"}>Award Ceremony</option>
              <option value={"Airport_Transfer"}>Airport Transfer</option>
              <option value={"Luxurious_Shopping_Trip"}>
                Luxurious Shopping Trip
              </option>
              <option value={"Vip_day_trip"}>Vip day trip</option>
              <option value={"Other"}>Other</option>
            </select>
          </div>
        </div>
      </div>
      {/* plan your route */}
      <div className="w-full">
        <h2 className="capitalize text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4 border-b w-fit">
          Plan your Route
        </h2>
        <div className="flex justify-between w-full gap-2">
          <div>
            <Label label={"Pick up Date"} />
            <Input placeholder="Date" type="date" />
          </div>
          <div>
            <Label label={"Pick up Time"} />
            <div className="flex gap-2 items-center">
              <Input placeholder="HH" type="number" />:
              <Input placeholder="MM" type="number" />
            </div>
          </div>
        </div>
        {/* postal code */}
        <div>
          <Label label={"Starting Location"} />
          <div>
            <Input placeholder="street Address" type="text" />
          </div>
          <div className="mt-2">
            <Input
              placeholder="Postal Code
"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-between w-full gap-2">
          <div>
            <Label label={"Returning Date"} />
            <Input placeholder="Date" type="date" />
          </div>
          <div>
            <Label label={"Pick up Time"} />
            <div className="flex gap-2 items-center">
              <Input placeholder="HH" type="number" />:
              <Input placeholder="MM" type="number" />
            </div>
          </div>
        </div>
        {/* add  */}
        <div className="mt-1">
          <Label label={"Any Additional Comments"} />
          <div className=" text-[10px] dark:text-gray-100 text-gray-900 mb-1">
            Please let us know{" what's"} on your mind. Have a question for us?
            Ask away.
          </div>
          <textarea className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none"></textarea>
        </div>
        <button className="text-center w-full bg-primaryColor text-white px-4 py-3  text-sm rounded-lg font-semibold flex items-center mx-auto hover:bg-primaryColor/80 transition-colors">
          <span className="mx-auto">Submit</span>
        </button>
      </div>
    </div>
  );
};

export default FormSection;

const Star = () => {
  return <span className="text-red-500 ms-1">*</span>;
};

const Label = ({ label }) => {
  return (
    <label className="text-gray-700 my-2 font-[500] inline-block text-base dark:text-gray-200">
      {label}
      <Star />
    </label>
  );
};

export const Input = ({ placeholder, type, value, onclick }) => {
  return (
    <input
      onClick={onclick}
      type={type}
      className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none "
      placeholder={placeholder}
      value={value}
    />
  );
};
