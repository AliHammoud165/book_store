import React from 'react';
import './stars'

const StarRating = ({ rating }) => {
  const stars = [];
  // Round the rating to nearest 0.5
  const roundedRating = Math.round(rating * 2) / 2;

  // Fill stars based on roundedRating
  for (let i = 0; i < 5; i++) {
    if (roundedRating >= i + 0.5) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    } else if (roundedRating >= i) {
      stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star"></i>);
    }
  }

  return (
    <div className="star-rating">
      {stars}
</div>
  );
};

export  {StarRating};
