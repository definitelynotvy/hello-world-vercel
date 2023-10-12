import React, { useState } from "react";

function ImageSlider() {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image paths here
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div>
      <h2>Image Slider</h2>
      <div className="image-slider">
        <img
          src={process.env.PUBLIC_URL + '/' + images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <button onClick={goToPreviousImage}>Previous</button>
        <button onClick={goToNextImage}>Next</button>
      </div>
    </div>
  );
}

export default ImageSlider;