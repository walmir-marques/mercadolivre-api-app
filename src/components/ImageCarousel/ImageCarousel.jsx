import "./ImageCarousel.css";
import { useState } from "react";

export const ImageCarousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button">
        ⏮️
      </button>
      <img
        className="carousel-image"
        src={pictures[currentIndex].url.replace(/\w\.jpg/gi, "W.jpg")}
        alt={`Imagem ${currentIndex + 1}`}
      />
      <button onClick={nextSlide} className="carousel-button">
        ⏭️
      </button>
    </div>
  );
};
