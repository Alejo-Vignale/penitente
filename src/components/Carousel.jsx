import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./data/Data.json";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + data.carouselItems.length) % data.carouselItems.length
    );
  };

  // Pass the category of the current thumbnail to the gallery
  const openGallery = (category) => {
    navigate(`/gallery/${category}`); // Navigate to the gallery with the category
  };

  return (
    <section className="carousel">
      <div className="list">
        {data.carouselItems.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? "active" : ""}`}
          >
            <img src={item.image} alt={item.title} />
            <div className="content">
              <div className="text-box">
                <div className="author">Parque</div>
                <div className="title">
                  {data.carouselItems[currentIndex].title}
                </div>
                <div className="topic">
                  {data.carouselItems[currentIndex].topic}
                </div>
                <div className="des">
                  {data.carouselItems[currentIndex].description}
                </div>
                <div className="buttons">
                  <button
                    onClick={() =>
                      openGallery(data.carouselItems[currentIndex].category)
                    }
                  >
                    Ver mas
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {data.carouselItems.map((item, index) => (
          <div
            className={`item ${index === currentIndex ? "selected" : ""}`}
            key={index}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={item.image} alt={item.title} />
            {/* Add the category name overlay */}
            <div className="category-name">{item.category}</div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" aria-label="Previous Slide" onClick={handlePrev}>
          ←
        </button>
        <button id="next" aria-label="Next Slide" onClick={handleNext}>
          →
        </button>
      </div>
    </section>
  );
};

export default Carousel;
