import React from 'react';

export const MapAndRenderComponent = ({ items, Component }) => {
  return (
    <>
      {items.map((item, index) => (
        <Component key={index} {...item} />
      ))}
    </>
  );
};
