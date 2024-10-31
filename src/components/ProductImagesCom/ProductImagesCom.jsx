import React, { useState } from 'react';
import styles from './ProductImagesCom.module.css';

const { productImagesContainer, thumbnailContainer, thumbnail, selectedThumbnail, mainImageC } = styles;

const ProductImagesCom = ({ productInfo }) => {
  const [mainImage, setMainImage] = useState(productInfo?.image);

  const images = [
    productInfo?.image,
    "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=1300&q=80",
    "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1358&q=80",
    "https://images.unsplash.com/photo-1642948816628-9b457871592d?w=1300&q=80",
    "https://images.unsplash.com/photo-1642965961298-02f31304044d?w=1300&q=80"
  ];

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className={productImagesContainer}>
      <div className={thumbnailContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`${thumbnail} ${image === mainImage ? selectedThumbnail : ''}`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>

      <img src={mainImage} alt="Product" className={mainImageC} />
    </div>
  );
};

export default ProductImagesCom;
