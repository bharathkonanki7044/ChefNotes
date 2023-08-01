import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected, onClick }) => {
  return (
    <FaStar
      color={selected ? 'yellow' : 'grey'}
      onClick={onClick}
    />
  );
};

export default Star;
