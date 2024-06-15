import React, { useState } from 'react'
import FillExample from '../../Components/Tab/tab'
import './services.css'
import { Button } from 'react-bootstrap'
// import Radio from '../../Components/Radio/radio';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import RadioButton from '../../Components/Radio/radio';





function Services() {

  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(Number(event.target.value))
  }




  return (
    <div className='services-main'>
      <div className='head-services'>
        <p>Schedule Your Professional Cleaning Service Today with Cleanly.</p>
        <div className='email-logo'>

          <a href="mailto:cleanlyeg@gmail.com" className='contact'><AiOutlineMail />  cleanlyeg@gmail.com</a>        </div>
        <div className='tel-logo'>
          <a href="tel:+201001044887" className='contact'> <BsFillTelephoneFill />     +20-1001044887</a>        </div>
        <div className='social-logo'>
          <a href='https://www.instagram.com/'>
            <FaInstagram className='insta' />
          </a>
          <a href='https://www.linkedin.com/'>
            <CiLinkedin className='in' />
          </a>
          <a href='https://www.facebook.com/'>
            <AiOutlineFacebook className='fb' />
          </a>
        </div>

      </div>
      <div className='date'>
        <FillExample />
        <div className='input-main'>
          <div className='input-1'>
            <div className='full-namem input'>
              <label for="full-name">Full Name:</label>
              <input id='full-name' placeholder='Enter full-name' type='text' required></input>
            </div>
            <div className='tel input'>
              <label for="tel">Number:</label>
              <input type='tel ' placeholder='+20-' id='tel' required></input>
            </div>
            <div className='email input'>
              <label for="email">E-mail:</label>
              <input id='email' placeholder='Enter e-mail' type='email' required></input>
            </div>
            <div className='address input'>
              <label for="address">Address:</label>
              <input id='address' placeholder='Enter address' type='email' required></input>
            </div>
          </div>
          <div className='input-2'>
            <div className='type input'>
              <RadioButton />
            </div>
            <div className='date-time input'>
              <label for="datetime-local">Book a Date:</label>
              <input type="datetime-local" id="datetime-local" name="datetime-local" />
            </div>
            <div className='area input'>
              <label for='range'>Area:</label>
              <input type='range' id='range' step={5} max={250} min={45} onChange={handleChange}></input>
              <valueDisplay>{value} m2</valueDisplay>
            </div>
          </div>
        </div>
        <Button variant="light" className='btn-input'>Book Now</Button>
      </div>
    </div >
  )
}

export default Services
