import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";
import { useState } from "react";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4jsi1ik", "template_c9lvsuk", form.current, {
        publicKey: "05wu7OlN8FGGPsBYf",
      })
      .then(
        () => {
          alert("Request sent successfully");
        },
        (error) => {
          alert("Error Sending Request Try Again Later ");
        }
      );
      e.target.reset()
  };

  const [value, setValue] = useState(0);

  const [type, setType] = useState("");

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    tel: "",
    email: "",
    address: "",
    dateTime: "",
    area: 0,
  });

  const handleChange = (event) => {
    setValue(Number(event.target.value));
    setFormData({ ...formData, area: Number(event.target.value) });
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="input-main" name="message">
      <div className="input-1">
        <div className="full-namem input">
          <label htmlFor="full-name">Full Name:</label>
          <input
            id="full-name"
            placeholder="Enter full-name"
            type="text"
            name="from_name"
            required
          ></input>
        </div>
        <div className="tel input">
          <label htmlFor="tel">Number:</label>
          <input
            type="tel "
            placeholder="+20-"
            id="tel"
            name="user-tel"
            required
          ></input>
        </div>
        <div className="email input">
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            placeholder="Enter e-mail"
            type="email"
            name="from_email"
            required
          ></input>
        </div>
        <div className="address input">
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            placeholder="Enter address"
            type="text"
            name="user-address"
            required
          ></input>
        </div>
      </div>
      <div className="input-2">
        <div className="type input">
          <select
            value={type}
            className="type-input"
            onChange={handleChangeType}
          >
            <option name="type" value="indor">
              In Door
            </option>
            <option name="type" value="outdoor">
              Out Door
            </option>
            <option name="type" value="Office">
              Office
            </option>
          </select>
        </div>
        <div className="date-time input">
          <label htmlFor="datetime-local">Book a Date:</label>
          <input
            type="datetime-local"
            id="datetime-local"
            name="datetime-local"
            required
          />
        </div>
        <div className="area input">
          <label htmlFor="range">Area: {value} m2</label>
          <input
            type="range"
            id="range"
            step={5}
            max={300}
            min={45}
            name="area"
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <Button type="submit" variant="light" className="btn-input">
        Book Now
      </Button>
    </form>
  );
};
