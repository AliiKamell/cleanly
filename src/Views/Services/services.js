import FillExample from "../../Components/Tab/tab";
import "./services.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { ContactUs } from "../../Components/Form/form";

function Services() {
  return (
    <div className="services-main">
      <div className="head-services">
        <p>Schedule Your Professional Cleaning Service Today with Cleanly.</p>
        <div className="email-logo">
          <a href="mailto:cleanlyeg@gmail.com" className="contact">
            <AiOutlineMail /> cleanlyeg@gmail.com
          </a>
        </div>
        <div className="tel-logo">
          <a href="tel:+201001044887" className="contact">
            <BsFillTelephoneFill /> +20-1001044887
          </a>
        </div>
        <div className="social-logo">
          <a href="https://www.instagram.com/">
            <FaInstagram className="insta" />
          </a>
          <a href="https://www.linkedin.com/">
            <CiLinkedin className="in" />
          </a>
          <a href="https://www.facebook.com/">
            <AiOutlineFacebook className="fb" />
          </a>
        </div>
      </div>
      <div className="date">
        <FillExample />
        <div className="contact-service">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Services;
