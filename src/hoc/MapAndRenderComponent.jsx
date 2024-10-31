import React from 'react';

const MapAndRenderComponent = ({ items, Component, isCategory = false }) => {
  return (
    <>
      {items.map((item, index) => (
        isCategory ? <Component key={index} item={item} /> : <Component key={index} {...item} /> 
      ))}
    </>
  );
};

export default MapAndRenderComponent;
