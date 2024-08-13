import React from "react";
import "./footer.css";
import { SiCcleaner } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="header">
        <h2>
          <Link to="/" className="footer-head">
            <SiCcleaner className="brand-icon-footer" />
            LEANLY
          </Link>
        </h2>
        <h5>
          Cleanly Company provides professional house cleaning and office
          cleaning services in and around Cairo, Giza, and AL-Sokhna.
        </h5>
        <Link
          to="https://www.google.com/maps/place/Kolleyet+El+Banat/@30.0840426,31.3264431,17z/data=!3m1!4b1!4m6!3m5!1s0x14583e2256ffcbcf:0xf7d530b12dfcd32e!8m2!3d30.084038!4d31.329018!16s%2Fg%2F11gt9fp__c?entry=ttu"
          className="address-link"
        >
          84 El-Merghany St., Koleyet El-Banat, Heliopolis, Egypt.
        </Link>
      </div>
      <div className="main-footer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.3541324237463!2d31.326443075012026!3d30.084042616694404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e2256ffcbcf%3A0xf7d530b12dfcd32e!2sKolleyet%20El%20Banat!5e0!3m2!1sen!2seg!4v1717794169777!5m2!1sen!2seg"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="google-iframe"
          title="Google Maps Location"
        />
        <div className="footer-links">
          <Link to="/services" className="footer-link">
            Our Services
          </Link>
          <Link to="/faqs" className="footer-link">
            FAQs
          </Link>
          <Link to="/about" className="footer-link">
            About US
          </Link>
          <Link to="/contact-us" className="footer-link">
            Contact Us
          </Link>
        </div>
      </div>
      <hr className="line-br-footer" />
      <p className="bottom-footer">
        Copyright ©Cleanly Co. 2024. Last updated Aug. 2024. Site Index.
      </p>
    </div>
  );
}

export default Footer;
