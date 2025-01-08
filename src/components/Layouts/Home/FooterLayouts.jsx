import { Link } from "react-router-dom";
import { footerContentList1, footerContentList2 } from "../../../utils/data";
import { brandName } from "../../../utils/Constants";

const FooterLayouts = () => {
  const date = new Date();
  return (
    <footer
      className="pt-24 pb-8 bg-white footer dark:bg-gray-900"
      data-aos="fade-in"
    >
      <div className="container grid gap-24 footer__container 2xl:mx-auto 2xl:max-w-5xl">
        <div className="footer__group grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] items-start gap-12 lg:flex lg:justify-between lg:justify-items-center">
          <div className="footer__content">
            <h2 className="footer__content-title font-serif text-[20px] font-semibold text-black dark:text-white">
              <Link to="/" className="footer__content-logo">
                {brandName}
              </Link>
            </h2>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-4 font-serif text-[18px] font-semibold text-black dark:text-white">
              Learn More
            </h3>

            <ul className="flex flex-col gap-2 footer__content-list">
              {footerContentList1.map((v, i) => (
                <li key={i}>
                  <Link
                    to={v.url}
                    className="footer__content-link text-[15px] text-black dark:text-white hover:text-blue-600 hover:underline"
                  >
                    {v.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-4 font-serif text-[18px] font-semibold text-black dark:text-white">
              Ticket & Booking
            </h3>

            <ul className="flex flex-col gap-2 footer__content-list">
              {footerContentList2.map((v, i) => (
                <li key={i}>
                  <Link
                    to={v.url}
                    className="footer__content-link text-[15px] text-black dark:text-white hover:text-blue-600 hover:underline"
                  >
                    {v.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-4 font-serif text-[18px] font-semibold text-black dark:text-white">
              Socials
            </h3>
          </div>
        </div>

        <p className="footer__copy border-t-2 border-black dark:border-white pt-8 text-center text-[15px]text-black dark:text-white">
          Copyrights {date.getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default FooterLayouts;
