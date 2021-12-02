import React, { useState, useEffect, useCallback } from "react";
import { Carousel } from 'react-bootstrap'
import Image from 'next/image';


const Sliders = ({ sliderData }) => {

  console.log("slide", sliderData);

  return (
    <>
      <Carousel id='carousel'>
        {sliderData.results?.map((each) => (
          <Carousel.Item key={each.id}>
            <Image
              alt="FlutterKart"
              className="d-block w-100"
              layout="responsive"
              width={700}
              height={225}
              src='/img/carousel-3.svg'
            />
            <Carousel.Caption className="carousel-caption">
              <h3>Discover Worlds Best</h3>
              <h2>Flutter Developing Tools</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industrys standard dummy text </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Sliders;


