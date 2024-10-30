import React from 'react';
import styles from './notFound.module.css';
import { Link } from 'react-router-dom';

const {notFoundStyle} = styles;

const NotFound = () => {
  return (
    <div className={notFoundStyle}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to='/'>Back Home</Link>
    </div>
  );
};

export default NotFound;
