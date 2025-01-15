import FormSection from "./form-section";

const Form = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-start justify-between gap-6 flex-col md:flex-row h-full min-h-screen -mt-16">
      <div className="p-4 -mt-16 dark:text-gray-100  flex-1 z-10  rounded-lg bg-white shadow-md dark:bg-darkColor h-full">
        <div className="uppercase">Get in Touch</div>
        <div className="text-2xl font-bold ">
          Feel free to reach out to our team today!
        </div>
        <div className="text-sm">CALL:+447872002283</div>
        {/* <div className="text-sm">EMAIL:</div> */}
      </div>

      <FormSection />
    </div>
  );
};

export default Form;
