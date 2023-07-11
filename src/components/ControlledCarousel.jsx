import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="w-50 mx-auto my-2">
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-dark" interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/me.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/brain.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/homer.gif"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  );
}
