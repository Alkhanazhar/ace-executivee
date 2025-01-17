import BgImage from "../components/contact/bg-img";
import Form from "../components/contact/form";
import Navbar from "../components/Fragments/Home/Navbar";

const Contact = () => {
  return (
    <div className="dark:bg-gray-900 min-h-screen ">
      <Navbar />
      <BgImage />
      <Form />
    </div>
  );
};

export default Contact;
