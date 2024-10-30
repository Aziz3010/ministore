import React from 'react';
import styles from './products.module.css';

const { productStyle } = styles;

const Product = () => {
  return (
    <div className={productStyle}>Product</div>
  )
}

export default Product