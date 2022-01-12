import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides, heading }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider" id="ImageSlider">
      <h1 className="profile-h1">{heading}</h1>
      <br />
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                <div className="portfolio-title">{slide.name}</div>
                <img src={slide.img} alt="Project" className="image" />
                <div className="desc">{slide.desc}</div>
                <button className="button">
                  <a href={slide.href}>{slide.button}</a>
                </button>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
