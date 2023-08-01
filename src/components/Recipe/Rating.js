import React, { useState } from 'react';
import Star from './Star';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const totalStars = 5;

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <Star
          key={i}
          selected={i <= rating}
          onClick={() => handleStarClick(i)}
        />
      );
    }

    return stars;
  };

  return (
    <div>
      {renderStars()}
      <p>{rating} out of {totalStars}</p>
    </div>
  );
};

export default Rating;
