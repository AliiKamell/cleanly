import React from "react";
import "./about.css";
import abImg from "../../assets/pexels-karolina-grabowska-4239031.jpg";

function About() {
  return (
    <div className="main-about">
      <div>
        <img src={abImg} className="aboutimg" alt="about-img" />
      </div>
      <div className="about-us">
        <h3 className="about-head">About-Us</h3>
        <p className="about-sub">
          Welcome to Cleanly, your trusted partner in comprehensive cleaning
          solutions! We are a dedicated cleaning service provider operating in
          Egypt, offering our expertise in indoor, outdoor, and office cleaning
          across Cairo, Giza, and Ain Sokhna. Soon, we will be extending our
          exceptional services to Sahel, ensuring that more areas benefit from
          our commitment to cleanliness and hygiene.
        </p>
        <div className="about-us">
          <h3 className="about-head">Our Mission</h3>
          <p className="about-sub">
            At Cleanly, our mission is simple: to create spotless, healthy, and
            inviting spaces for our clients. We understand the importance of a
            clean environment, whether it's your home, office, or outdoor space.
            Cleanliness is not just about aesthetics; it's about promoting
            well-being and productivity. We are here to take the burden of
            cleaning off your shoulders, allowing you to focus on what matters
            most to you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
