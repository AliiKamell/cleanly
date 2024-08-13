import { useState } from "react";
import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../../assets/caru-1.jpg";
import Img2 from "../../assets/caru-2.jpg";
import Img3 from "../../assets/caru-3.jpg";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={Img1} className="caro-img" alt="img1" />
        <Carousel.Caption>
          <h3>In Door</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Img2} className="caro-img" alt="img2" />
        <Carousel.Caption>
          <h3>Out Door</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Img3} className="caro-img" alt="img3" />
        <Carousel.Caption>
          <h3>Offices</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
