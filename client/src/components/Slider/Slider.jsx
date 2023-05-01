import React from 'react'
import "./Slider.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowLeft,
    faArrowRight
  } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "//images.ctfassets.net/q602vtcuu3w3/zSYJ72VVrIBpEbIhIzdhj/5ba73613499c6c00e11cafaa71bc42ba/23_APR_WK1_HP_EM.jpg?w=2160&q=80&fm=jpg&fl=progressive",
      "./img/Slider/image4.jpg",
    "./img/Slider/image1.jpg",
      "./img/video1.mp4"

    ];

    const prevSlide = () => {
        setCurrentSlide( currentSlide === 0 ? 2 : (prev) => prev - 1)
    };
    const nextSlide = () => {
        setCurrentSlide( currentSlide === 2 ? 0 : (prev) => prev + 1)
    };

    return (
        <div className="slider">
          <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
          {/* <img src={data[0]} alt="" /> */}
          <video loop autoPlay muted src={data[3]} alt=""/>
            <img src={data[0]} alt="" />
          <img src={data[2]} alt="" />
          </div>
          <div className="icons">
            <div className="icon" onClick={prevSlide}>
            <FontAwesomeIcon icon={faArrowLeft}/>
            </div>
            <div className="icon" onClick={nextSlide}>
            <FontAwesomeIcon icon={faArrowRight}/>
            </div>
          </div>
        </div>
      );
};
    
export default Slider