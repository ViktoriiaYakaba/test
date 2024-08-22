import React from 'react';
import sprite from '../../assets/images/sprite.svg';

const Icon = ({ width, height, icon }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#${icon}`}></use>
    </svg>
  );
};

export default Icon;

