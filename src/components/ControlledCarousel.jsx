import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  console.log(props);
  console.log(props.img1);

  return (
    <div className="w-50 mx-auto my-2">
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-dark" interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
