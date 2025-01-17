/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const FormSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
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
    return_same_day: "Yes",
    return_date: "",
    return_pick_up_time: "",
    additional_comments: "",
  });

  const validateForm = () => {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      starting_location,
      starting_postal_code,
      end_location,
      end_postal_code,
    } = formData;

    if (!first_name.trim()) return "First Name is required.";
    if (!last_name.trim()) return "Last Name is required.";
    if (!email.trim()) return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(email)) return "Enter a valid email address.";
    if (!phone_number.trim()) return "Phone Number is required.";
    if (!/^\d{10,15}$/.test(phone_number.replace(/\s+/g, "")))
      return "Enter a valid phone number.";
    if (!starting_location.trim()) return "Starting Location is required.";
    if (!starting_postal_code.trim())
      return "Starting Postal Code is required.";
    if (!end_location.trim()) return "End Location is required.";
    if (!end_postal_code.trim()) return "End Postal Code is required.";
    return null; // Return null if no errors
  };
  // if(formData.)
  const handleSubmit = async (event) => {
    const toastId = toast.loading("Processing...");
    event.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    // setError(null);

    try {
      const response = await axios.post(
        "https://aceexecutivetransfer.uk/api/trip-plan",
        formData
      );
      console.log("Booking successful:", response.data);
      // alert("Booking submitted successfully!");
      toast.success("We'll get in touch with you shortly!", { id: toastId });
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
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
        return_same_day: "Yes",
        return_date: "",
        return_pick_up_time: "",
        additional_comments: "",
      });
      setError("");
    } catch (err) {
      console.log(err);
      const errorMessage =
        err.response?.data?.message ||
        "Failed to submit booking. Please try again.";
      setError(errorMessage);
      toast.error("Something went wrong!", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Get name and value of the input

    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Update the specific field
    }));
    console.log(formData);
  };
  return (
    <div className="flex-1 rounded-lg bg-white shadow-md dark:bg-darkColor p-4 md:-mt-16 border dark:border-white/10 mb-14">
      <div>
        <Label label={"Name"} />
        <div className="flex items-center gap-2">
          <Input
            name="first_name"
            placeholder="Firstname"
            type="text"
            onChange={handleChange}
            value={formData.first_name}
          />
          <Input
            name="last_name"
            placeholder="Lastname"
            type="text"
            onChange={handleChange}
            value={formData.last_name}
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-full">
          <Label label={"Email"} />
          <div className="flex items-center">
            <Input
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>
        <div className="w-full">
          <Label label={"Phone Number"} />
          <div className="flex items-center">
            <Input
              name="phone_number"
              placeholder="Phone Number"
              type="tel"
              value={formData.phone_number}
              onChange={handleChange}
            />
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
            <Label label={"Total Persons"} />
            <select
              name="number_of_persons"
              value={formData.number_of_persons}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none"
            >
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
            <select
              name="additional_pickups"
              value={formData.additional_pickups}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none"
            >
              <option value={"yes"}>Yes</option>
              <option value={"no"}>No</option>
            </select>
          </div>
          <div>
            <Label label={"Type of Occasion?"} />
            <select
              name="type_of_occasion"
              onChange={handleChange}
              value={formData.type_of_occasion}
              className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none"
            >
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
            <Input
              placeholder="Date"
              type="date"
              name={"pick_up_date"}
              value={formData.pick_up_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label label={"Pick up Time"} />
            <div className="flex gap-2 items-center">
              <Input
                name="pick_up_time"
                placeholder="HH"
                type="number"
                onChange={handleChange}
                value={formData.pick_up_time}
              />
              :{/* <Input placeholder="MM" type="number" /> */}
            </div>
          </div>
        </div>
        {/* postal code */}
        <div>
          <Label label={"Starting Location"} />
          <div>
            <Input
              placeholder="street Address"
              type="text"
              onChange={handleChange}
              value={formData.starting_location}
              name={"starting_location"}
            />
          </div>
          <div className="mt-2">
            <Input
              onChange={handleChange}
              value={formData.starting_postal_code}
              name={"starting_postal_code"}
              placeholder="Postal Code
"
              type="text"
            />
          </div>
        </div>
        <div>
          <Label label={"End Location"} />
          <div>
            <Input
              placeholder="street Address"
              type="text"
              onChange={handleChange}
              value={formData.end_location}
              name={"end_location"}
            />
          </div>
          <div className="mt-2">
            <Input
              onChange={handleChange}
              value={formData.end_postal_code}
              name={"end_postal_code"}
              placeholder="Postal Code"
              type="text"
            />
          </div>
        </div>
        <div className=" flex gap-4 mt-4">
          <Label label={"Return Same Day"} />
          <div>
            <select
              name="return_same_day"
              value={formData.return_same_day}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none"
            >
              <option value={"Yes"}>Yes</option>
              <option value={"No Return"}>No Return</option>
              <option value={"Another Day"}>Another Day</option>
            </select>
          </div>
        </div>
        {formData.return_same_day == "Another Day" && (
          <div className="flex justify-between w-full gap-2">
            <div>
              <Label label={"Returning Date"} />
              <Input
                placeholder="Date"
                type="date"
                name="return_date"
                value={formData.return_date}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label label={"Return Pick up Time"} />
              <div className="flex gap-2 items-center">
                <Input
                  name="return_pick_up_time"
                  placeholder="HH"
                  type="number"
                  value={formData.return_pick_up_time}
                  onChange={handleChange}
                />
                {/* <Input placeholder="MM" type="number" /> */}
              </div>
            </div>
          </div>
        )}

        {/* add  */}
        <div className="mt-1">
          <Label label={"Any Additional Comments"} />
          <div className=" text-[10px] dark:text-gray-100 text-gray-900 mb-1">
            Please let us know{" what's"} on your mind. Have a question for us?
            Ask away.
          </div>
          <textarea
            name="additional_comments"
            value={formData.additional_comments}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none"
          ></textarea>
        </div>
        <button
          disabled={isLoading}
          onClick={handleSubmit}
          className="text-center w-full bg-primaryColor text-white px-4 py-3  text-sm rounded-lg font-semibold flex items-center mx-auto hover:bg-primaryColor/80 transition-colors"
        >
          <span className="mx-auto">{isLoading ? "Loading" : "Submit"}</span>
        </button>
      </div>
      <span className="text-red-500 text-sm my-2">{error}</span>
    </div>
  );
};

export default FormSection;

const Star = () => {
  return <span className="text-red-500 ms-1">*</span>;
};

const Label = ({ label }) => {
  return (
    <label className="text-gray-700 my-2 font-[500] inline-block text-[15px] dark:text-gray-200">
      {label}
      <Star />
    </label>
  );
};

export const Input = ({ placeholder, type, value, onChange, name }) => {
  return (
    <input
      name={name}
      onChange={onChange}
      type={type}
      className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none "
      placeholder={placeholder}
      value={value}
    />
  );
};
