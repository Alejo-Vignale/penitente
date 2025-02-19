import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import data from "./data/GalleryData.json";
import "./Gallery.css";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css";

const Gallery = ({ toggleInfoCard }) => {
  const { category } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]); // Ref to store image elements

  // Filter images based on the category
  const filteredImages = data.galleryItems.filter(
    (item) => item.category === category
  );

  // Handle image click to open modal
  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navigate to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
    setSelectedImage(filteredImages[currentIndex].image);
  };

  // Navigate to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(filteredImages[currentIndex].image);
  };

  // Lazy load images using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Load the image
            observer.unobserve(img); // Stop observing once loaded
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the image is visible
      }
    );

    // Observe all image elements
    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [filteredImages]);

  return (
    <div className="gallery">
      {/* Display the category title */}
      <h1 className="gallery-title">{category}</h1>

      {/* Map through the filtered images */}
      {filteredImages.length > 0 ? (
        filteredImages.map((item, index) => (
          <div
            key={index}
            className={`gallery-item ${item.large ? "large" : ""}`}
            onClick={() => handleImageClick(item.image, index)}
          >
            <img
              ref={(el) => (imageRefs.current[index] = el)} // Store ref for lazy loading
              data-src={item.image} // Use data-src for lazy loading
              alt={item.title}
              loading="lazy" // Native lazy loading as a fallback
            />
            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No images found for this category.</p>
      )}

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <button
            className="modal-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            &#10094; {/* Left arrow */}
          </button>
          <img
            src={filteredImages[currentIndex].image}
            alt="Enlarged"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="modal-nav next"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            &#10095; {/* Right arrow */}
          </button>
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
